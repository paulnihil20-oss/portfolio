import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroSculpture: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ─── Scene Setup ─────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ─── Group ───────────────────────────────────────────────────────
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);
    groupRef.current = mainGroup;

    // ─── Core Polyhedron ─────────────────────────────────────────────
    const coreGeo = new THREE.IcosahedronGeometry(1.5, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x18181c, roughness: 0.12, metalness: 0.88,
      clearcoat: 1.0, clearcoatRoughness: 0.08,
      reflectivity: 0.95, transmission: 0.25, ior: 1.55,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // ─── Wireframe Lattice ───────────────────────────────────────────
    const wireGeo = new THREE.IcosahedronGeometry(1.52, 0);
    const wireMat = new THREE.MeshBasicMaterial({ color: 0xb8b8b3, wireframe: true, transparent: true, opacity: 0.65 });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    mainGroup.add(wireMesh);

    // ─── Inner Crystal ───────────────────────────────────────────────
    const innerGeo = new THREE.OctahedronGeometry(0.85, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x2457ff, metalness: 0.9, roughness: 0.2,
      emissive: 0x102870, emissiveIntensity: 0.5,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // ─── Gyroscope Rings ─────────────────────────────────────────────
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x888884, wireframe: true, transparent: true, opacity: 0.4 });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.007, 16, 100), ringMat);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.35, 0.007, 16, 100), ringMat.clone());
    ring2.rotation.x = Math.PI / 2.5;
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring1, ring2);

    // ─── Floating Points ─────────────────────────────────────────────
    const ptGeo = new THREE.BufferGeometry();
    const pts = new Float32Array(50 * 3);
    for (let i = 0; i < 50; i++) {
      const r = 2.0 + Math.random() * 0.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pts[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pts[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pts[i * 3 + 2] = r * Math.cos(phi);
    }
    ptGeo.setAttribute('position', new THREE.BufferAttribute(pts, 3));
    const ptMesh = new THREE.Points(ptGeo, new THREE.PointsMaterial({ color: 0x2457ff, size: 0.045, transparent: true, opacity: 0.75 }));
    mainGroup.add(ptMesh);

    // ─── Lights ──────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 1.0));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0x2457ff, 2.0);
    rimLight.position.set(-5, -3, -3);
    scene.add(rimLight);
    const fillLight = new THREE.PointLight(0xffffff, 1.4, 20);
    fillLight.position.set(0, -4, 4);
    scene.add(fillLight);

    // ─── Mouse parallax ──────────────────────────────────────────────
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      mouse.tx = ((e.clientX - r.left) / r.width - 0.5) * 1.8;
      mouse.ty = -((e.clientY - r.top) / r.height - 0.5) * 1.8;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    // ─── GSAP ScrollTrigger — hero exit ──────────────────────────────
    const heroExit = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    heroExit
      .to(mainGroup.position, { x: 2.8, y: -0.6, ease: 'power2.inOut' }, 0)
      .to(mainGroup.rotation, { y: Math.PI * 1.5, x: 0.4, ease: 'power2.inOut' }, 0)
      .to(mainGroup.scale, { x: 0.55, y: 0.55, z: 0.55, ease: 'power2.inOut' }, 0)
      .to(wireMat, { opacity: 0, ease: 'power2.out' }, 0)
      .to(innerMat, { emissiveIntensity: 2.0, ease: 'power2.in' }, 0);

    // ─── Animation Loop ───────────────────────────────────────────────
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      // Idle ambient rotation
      mainGroup.rotation.y += 0.003;
      mainGroup.rotation.x = Math.sin(t * 0.18) * 0.1 + mouse.y * 0.3;
      mainGroup.rotation.z = Math.sin(t * 0.1) * 0.04;

      // Inner crystal counter-spin
      innerMesh.rotation.y -= 0.006;
      innerMesh.rotation.z += 0.004;

      // Rings
      ring1.rotation.z += 0.003;
      ring2.rotation.x += 0.004;

      ptMesh.rotation.y += 0.001;

      renderer.render(scene, camera);
    };
    animate();

    // ─── Resize ──────────────────────────────────────────────────────
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      heroExit.kill();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[380px] lg:min-h-[520px] pointer-events-auto select-none relative"
      data-cursor="ORBIT 3D"
      aria-hidden="true"
    />
  );
};
