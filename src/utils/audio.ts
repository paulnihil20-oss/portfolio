// Audio utility - no-op for clean, accessible web interactions
class AudioEngine {
  public toggleMute(): boolean {
    return true;
  }

  public getMuted(): boolean {
    return true;
  }

  public playHover() {}
  public playClick() {}
  public playBlip(_freq?: number, _duration?: number) {}
}

export const sound = new AudioEngine();
