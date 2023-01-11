import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesMembershipFormComponent } from './pages/pages-membership-form/pages-membership-form.component';
import { PagesBlogComponent } from './pages/pages-blog/pages-blog.component';
import { PagesFullBlogComponent } from './pages/pages-full-blog/pages-full-blog.component';
import { PagesRegulatoryComponent } from './pages/pages-regulatory/pages-regulatory.component';
import { BlogComponent } from './blog/blog/blog.component';
import { FullblogComponent } from './blog/fullblog/fullblog.component';
import { BlogModule } from './blog/blog.module';
import { PagesPolicyAdovcacyComponent } from './pages/pages-policy-adovcacy/pages-policy-adovcacy.component';
import { PagesRegulatorySupportComponent } from './pages/pages-regulatory-support/pages-regulatory-support.component';
import { PagesSchemesAndSubsidiesComponent } from './pages/pages-schemes-and-subsidies/pages-schemes-and-subsidies.component';
import { PagesOurServicesComponent } from './pages/pages-our-services/pages-our-services.component';
import { TestComponent } from './pages/test/test.component';
import { PagesViewPrivacyPolicyComponent } from './pages/pages-view-privacy-policy/pages-view-privacy-policy.component';
import { CommentComponent } from './comments/components/comment/comment.component';
import { CommentsComponent } from './comments/components/comments/comments.component';
import { ToastComponent } from './layouts/toast/toast.component';
import { MemberpostComponent } from './pages/memberpost/memberpost.component';
import { CheckComponent } from './pages/check/check.component';
import { PolicyAdvocacyComponent } from './pages/policy-advocacy/policy-advocacy.component';
import { StripeComponent } from './pages/stripe/stripe.component';



const routes: Routes = [
  { path: '', component: PagesLoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'membership-form', component: PagesMembershipFormComponent },
  { path: 'pages-blog', component: PagesBlogComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'charts-apexcharts', component: ChartsApexchartsComponent },
  { path: 'charts-chartjs', component: ChartsChartjsComponent },
  { path: 'form-editors', component: FormsEditorsComponent },
  { path: 'form-elements', component: FormsElementsComponent },
  { path: 'form-layouts', component: FormsLayoutsComponent },
  { path: 'icons-bootstrap', component: IconsBootstrapComponent },
  { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  { path: 'icons-remix', component: IconsRemixComponent },
  { path: 'list-group', component: ListGroupComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'spinners', component: SpinnersComponent },
  { path: 'tables-data', component: TablesDataComponent },
  { path: 'tables-general', component: TablesGeneralComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'pages-blank', component: PagesBlankComponent },
  { path: 'pages-contact', component: PagesContactComponent },
  { path: 'pages-error404', component: PagesError404Component },
  { path: 'pages-faq', component: PagesFaqComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
  { path: 'pages-full-blog/:id', component: PagesFullBlogComponent },
  { path: 'pages-full-blog', component: PagesFullBlogComponent },
  { path: 'regulatory', component: PagesRegulatoryComponent },
  { path: 'policy-adovcacy2', component: PagesPolicyAdovcacyComponent },
  { path: 'view-policy-adovcacy', component: PagesViewPrivacyPolicyComponent },
  { path: 'view-policy-adovcacy/:id', component: PagesViewPrivacyPolicyComponent },
  { path: 'regulaltory-support', component: PagesRegulatorySupportComponent },
  { path: 'regulaltory-support/:id', component: PagesRegulatorySupportComponent },
  { path: 'schemes-&-subsidies', component: PagesSchemesAndSubsidiesComponent },
  { path: 'schemes-&-subsidies/:id', component: PagesSchemesAndSubsidiesComponent },
  { path: 'schemes-&-subsidies/:id/:sid', component: PagesSchemesAndSubsidiesComponent },
  { path: 'our-services', component: PagesOurServicesComponent },
  { path: 'test', component: TestComponent },

  // Components Routes
  { path: 'components', component: TooltipsComponent},
  { path: 'comments', component: CommentsComponent},
  { path: 'toast', component: ToastComponent},

  // Modules
  { path: 'fullblog', component: FullblogComponent },
  { path: 'mp', component: MemberpostComponent },
  { path: 'check', component: CheckComponent },
  // { path: 'fullblog/:id', component: FullblogComponent }


  // Policy Adovcacy Routes
  { path : 'policy-adovcacy', component : PolicyAdvocacyComponent},
  { path : 'policy-adovcacy/:id', component : PolicyAdvocacyComponent},
  { path : 'policy-adovcacy/:id/:id2', component : PolicyAdvocacyComponent},
  // { path : 'policy-adovcacy/:id/:id2/:document', component : PolicyAdvocacyComponent}

  // Stripe 
  {path : 'stripe', component: StripeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
