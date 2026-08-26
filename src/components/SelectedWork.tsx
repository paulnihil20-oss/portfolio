import React, { useState } from 'react';
import { HorizontalProjects } from './scroll/HorizontalProjects';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <HorizontalProjects onOpenProject={setSelectedProject} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};
