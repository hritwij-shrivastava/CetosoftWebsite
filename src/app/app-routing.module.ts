import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'insights',
    loadChildren: () =>
      import('./modules/insights/insights.module').then(
        (m) => m.InsightsModule
      ),
  },
  {
    path: 'data-analytics',
    loadChildren: () =>
      import('./modules/services/data-analytics/data-analytics.module').then(
        (m) => m.DataAnalyticsModule
      ),
  },
  {
    path: 'storage-cloud',
    loadChildren: () =>
      import('./modules/services/storage-cloud/storage-cloud.module').then(
        (m) => m.StorageCloudModule
      ),
  },
  {
    path: 'intelligent-automation',
    loadChildren: () =>
      import(
        './modules/services/intelligent-automation/intelligent-automation.module'
      ).then((m) => m.IntelligentAutomationModule),
  },
  {
    path: 'artificial-intelligence',
    loadChildren: () =>
      import(
        './modules/services/artificial-intelligence/artificial-intelligence.module'
      ).then((m) => m.ArtificialIntelligenceModule),
  },
  {
    path: 'cyber-security',
    loadChildren: () =>
      import('./modules/services/cyber-security/cyber-security.module').then(
        (m) => m.CyberSecurityModule
      ),
  },
  {
    path: 'about-company',
    loadChildren: () =>
      import('./modules/about-us/about-company/about-company.module').then(
        (m) => m.AboutCompanyModule
      ),
  },
  {
    path: 'why-choose-us',
    loadChildren: () =>
      import('./modules/about-us/why-choose-us/why-choose-us.module').then(
        (m) => m.WhyChooseUsModule
      ),
  },
  {
    path: 'meet-our-team',
    loadChildren: () =>
      import('./modules/about-us/meet-our-team/meet-our-team.module').then(
        (m) => m.MeetOurTeamModule
      ),
  },
  {
    path: 'team-details',
    loadChildren: () =>
      import('./modules/about-us/team-details/team-details.module').then(
        (m) => m.TeamDetailsModule
      ),
  },
  {
    path: 'get-in-touch',
    loadChildren: () =>
      import('./modules/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'press-releases',
    loadChildren: () =>
      import('./modules/news/press-releases/press-releases.module').then(
        (m) => m.PressReleasesModule
      ),
  },
  {
    path: 'corporate-social-responsibility',
    loadChildren: () =>
      import(
        './modules/news/corporate-social-responsibility/corporate-social-responsibility.module'
      ).then((m) => m.CorporateSocialResponsibilityModule),
  },
  {
    path: 'social-media',
    loadChildren: () =>
      import('./modules/news/social-media/social-media.module').then(
        (m) => m.SocialMediaModule
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./modules/news/events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./modules/faq/faq.module').then((m) => m.FaqModule),
  },
  {
    path: 'error-page',
    loadChildren: () =>
      import('./modules/error-page/error-page.module').then(
        (m) => m.ErrorPageModule
      ),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./modules/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'blog-single',
    loadChildren: () =>
      import('./modules/blog-single/blog-single.module').then(
        (m) => m.BlogSingleModule
      ),
  },
  {
    path: 'careers',
    loadChildren: () =>
      import('./modules/careers/careers.module').then((m) => m.CareersModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/error-page/error-page.module').then(
        (m) => m.ErrorPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
