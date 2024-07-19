import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { FaqComponent } from './modules/faq/faq.component';
import { ErrorPageComponent } from './modules/error-page/error-page.component';
import { BlogComponent } from './modules/blog/blog.component';
import { BlogSingleComponent } from './modules/blog-single/blog-single.component';
import { InsightsComponent } from './modules/insights/insights.component';
import { ServicesComponent } from './modules/services/services.component';
import { DataAnalyticsComponent } from './modules/services/data-analytics/data-analytics.component';
import { CloudComputingComponent } from './modules/services/cloud-computing/cloud-computing.component';
import { IntelligentAutomationComponent } from './modules/services/intelligent-automation/intelligent-automation.component';
import { ArtificialIntelligenceComponent } from './modules/services/artificial-intelligence/artificial-intelligence.component';
import { CyberSecurityComponent } from './modules/services/cyber-security/cyber-security.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
// import { AboutCompanyComponent } from './modules/about-us/about-company/about-company.component';
// import { WhyChooseUsComponent } from './modules/about-us/why-choose-us/why-choose-us.component';
// import { MeetOurTeamComponent } from './modules/about-us/meet-our-team/meet-our-team.component';
// import { TeamDetailsComponent } from './modules/about-us/team-details/team-details.component';
import { NewsComponent } from './modules/news/news.component';
import { PressReleasesComponent } from './modules/news/press-releases/press-releases.component';
import { CorporateSocialResponsibilityComponent } from './modules/news/corporate-social-responsibility/corporate-social-responsibility.component';
import { SocialMediaComponent } from './modules/news/social-media/social-media.component';
import { EventsComponent } from './modules/news/events/events.component';
import { CareersComponent } from './modules/careers/careers.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ExploreComponent } from './modules/news/explore/explore.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FaqComponent,
    ErrorPageComponent,
    BlogComponent,
    BlogSingleComponent,
    InsightsComponent,
    ServicesComponent,
    DataAnalyticsComponent,
    CloudComputingComponent,
    IntelligentAutomationComponent,
    ArtificialIntelligenceComponent,
    CyberSecurityComponent,
    AboutUsComponent,
    // AboutCompanyComponent,
    // WhyChooseUsComponent,
    // MeetOurTeamComponent,
    // TeamDetailsComponent,
    NewsComponent,
    PressReleasesComponent,
    CorporateSocialResponsibilityComponent,
    SocialMediaComponent,
    EventsComponent,
    CareersComponent,
    ContactComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, 
    MatMenuModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
