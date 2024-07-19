import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { ExploreComponent } from './modules/news/explore/explore.component';
import { CareersComponent } from './modules/careers/careers.component';
import { ContactComponent } from './modules/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'data-analytics', component: DataAnalyticsComponent },
  { path: 'cloud', component: CloudComputingComponent },
  { path: 'intelligent-automation', component: IntelligentAutomationComponent },
  { path: 'artificial-intelligence', component: ArtificialIntelligenceComponent },
  { path: 'cyber-security', component: CyberSecurityComponent },
  { path: 'about-us', component: AboutUsComponent },
  // { path: 'about-company', component: AboutCompanyComponent },
  // { path: 'why-choose-us', component: WhyChooseUsComponent },
  // { path: 'meet-our-team', component: MeetOurTeamComponent },
  // { path: 'team-details', component: TeamDetailsComponent },
  { path: 'get-in-touch', component: ContactComponent},
  { path: 'press-releases', component: PressReleasesComponent },
  { path: 'corporate-social-responsibility', component: CorporateSocialResponsibilityComponent },
  { path: 'social-media', component: SocialMediaComponent },
  { path: 'events', component: EventsComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'error-page', component: ErrorPageComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-single', component: BlogSingleComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
