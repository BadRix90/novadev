import type { Routes } from "@angular/router"
import { HomeComponent } from "./components/home/home.component"

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "impressum",
    loadComponent: () => import("./components/legal-notice/legal-notice.component").then((m) => m.LegalNoticeComponent),
    title: "Impressum - SaltCity Web",
  },
  {
    path: "datenschutz",
    loadComponent: () =>
      import("./components/privacy-policy/privacy-policy.component").then((m) => m.PrivacyPolicyComponent),
    title: "Datenschutz - SaltCity Web",
  },
]
