import type { Routes } from "@angular/router"

export const routes: Routes = [
  // Hauptseiten
  {
    path: "",
    loadComponent: () => import("./pages/home/home.component").then((m) => m.HomeComponent),
    title: "NovaDev Edge - Compliance-Automation für KMU | E-Rechnung, NIS2, SAP",
  },
  {
    path: "loesungen",
    loadComponent: () => import("./pages/services-page/services-page.component").then((m) => m.ServicesPageComponent),
    title: "Lösungen - NovaDev Edge",
  },
  {
    path: "ueber-uns",
    loadComponent: () => import("./pages/about-page/about-page.component").then((m) => m.AboutPageComponent),
    title: "Über mich - NovaDev Edge",
  },
  {
    path: "kontakt",
    loadComponent: () => import("./pages/contact-page/contact-page.component").then((m) => m.ContactPageComponent),
    title: "Kontakt - NovaDev Edge",
  },
  {
    path: "impressum",
    loadComponent: () => import("./pages/legal-notice/legal-notice.component").then((m) => m.LegalNoticeComponent),
    title: "Impressum - NovaDev Edge",
  },
  {
    path: "datenschutz",
    loadComponent: () =>
      import("./pages/privacy-policy/privacy-policy.component").then((m) => m.PrivacyPolicyComponent),
    title: "Datenschutz - NovaDev Edge",
  },

  // 404 Redirect
  {
    path: "**",
    redirectTo: "",
  },
]
