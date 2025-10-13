import type { Routes } from "@angular/router"

export const routes: Routes = [
  // Hauptseiten (Multi-Page)
  {
    path: "",
    loadComponent: () => import("./pages/home/home.component").then((m) => m.HomeComponent),
    title: "SaltCity Web - Angular Webentwicklung für KMU",
  },
  {
    path: "leistungen",
    loadComponent: () => import("./pages/services-page/services-page.component").then((m) => m.ServicesPageComponent),
    title: "Leistungen - SaltCity Web",
  },
  {
    path: "ueber-uns",
    loadComponent: () => import("./pages/about-page/about-page.component").then((m) => m.AboutPageComponent),
    title: "Über uns - SaltCity Web",
  },
  {
    path: "projekte",
    loadComponent: () => import("./pages/portfolio-page/portfolio-page.component").then((m) => m.PortfolioPageComponent),
    title: "Projekte - SaltCity Web",
  },
  {
    path: "kontakt",
    loadComponent: () => import("./pages/contact-page/contact-page.component").then((m) => m.ContactPageComponent),
    title: "Kontakt - SaltCity Web",
  },

  // Legal Pages (behalten wir)
  {
    path: "impressum",
    loadComponent: () => import("./components/legal-notice/legal-notice.component").then((m) => m.LegalNoticeComponent),
    title: "Impressum - SaltCity Web",
  },
  {
    path: "datenschutz",
    loadComponent: () => import("./components/privacy-policy/privacy-policy.component").then((m) => m.PrivacyPolicyComponent),
    title: "Datenschutz - SaltCity Web",
  },

  // 404 Redirect (alle ungültigen Routen)
  {
    path: "**",
    redirectTo: "",
  },
]