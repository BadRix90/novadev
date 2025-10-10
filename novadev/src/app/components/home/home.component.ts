import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ServicesComponent } from '../services/services.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ProcessComponent } from '../process/process.component';
import { PricingComponent } from '../pricing/pricing.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { FaqComponent } from '../faq/faq.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    PortfolioComponent,
    ProcessComponent,
    PricingComponent,
    TechStackComponent,
    FaqComponent,
    ContactComponent,
    AboutComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}