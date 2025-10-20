import { Component, inject, Inject, PLATFORM_ID } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink } from "@angular/router"
import { LucideAngularModule, Rocket, Users, Code2, Target, Calendar, Zap, Shield, Heart } from "lucide-angular"
import { TextService } from "../../data/text.service"

@Component({
  selector: "app-vision-page",
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: "./vision-page.component.html",
  styleUrl: "./vision-page.component.scss",
})
export class VisionPageComponent {
  textService = inject(TextService)

  icons: Record<string, any> = {
    rocket: Rocket,
    users: Users,
    code2: Code2,
    target: Target,
    calendar: Calendar,
    zap: Zap,
    shield: Shield,
    heart: Heart,
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get texts() {
    return this.textService.texts.vision
  }

  // ✅ Live-Check bei jedem Change Detection
  get isDark(): boolean {
    if (typeof document !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') === 'dark';
    }
    return true;
  }

  get logoSrc(): string {
    return this.isDark
      ? 'assets/logo/4x/vision_white@4x.png'
      : 'assets/logo/4x/vision_black@4x.png';
  }
}