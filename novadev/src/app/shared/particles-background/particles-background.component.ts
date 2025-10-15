import { Component, type OnInit, type OnDestroy, PLATFORM_ID, inject, effect } from "@angular/core"
import { isPlatformBrowser } from "@angular/common"
import { ThemeService } from "../../services/theme.service"

declare global {
  interface Window {
    particlesJS: any
  }
}

@Component({
  selector: "app-particles-background",
  standalone: true,
  templateUrl: "./particles-background.component.html",
  styleUrl: "./particles-background.component.scss",
})
export class ParticlesBackgroundComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID)
  private isBrowser = isPlatformBrowser(this.platformId)
  private themeService = inject(ThemeService)
  private particlesLoaded = false

  constructor() {
    if (this.isBrowser) {
      effect(() => {
        const theme = this.themeService.currentTheme()
        if (this.particlesLoaded) {
          this.updateParticlesTheme(theme)
        }
      })
    }
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.loadParticlesJS()
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser && window.particlesJS) {
      const canvas = document.querySelector("#particles-js canvas")
      if (canvas) {
        canvas.remove()
      }
    }
  }

  private loadParticlesJS(): void {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
    script.onload = () => {
      this.initParticles()
      this.particlesLoaded = true
    }
    document.body.appendChild(script)
  }

  private initParticles(): void {
    const theme = this.themeService.currentTheme()
    const config = this.getParticlesConfig(theme)

    if (window.particlesJS) {
      window.particlesJS("particles-js", config)
    }
  }

  private updateParticlesTheme(theme: "light" | "dark"): void {
    const container = document.getElementById("particles-js")
    if (container) {
      container.innerHTML = ""
      this.initParticles()
    }
  }

  private getParticlesConfig(theme: "light" | "dark"): any {
    const computedStyle = getComputedStyle(document.documentElement)
    const accentColor = computedStyle.getPropertyValue("--color-accent").trim()
    const accentLightColor = computedStyle.getPropertyValue("--color-accent-light").trim()

    return {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: accentColor,
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: accentLightColor,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    }
  }
}
