import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { HttpClientModule } from '@angular/common/http';
import { PagesMembershipFormComponent } from './pages/pages-membership-form/pages-membership-form.component';
import { PagesBlogComponent } from './pages/pages-blog/pages-blog.component';
import { PagesFullBlogComponent } from './pages/pages-full-blog/pages-full-blog.component';
import { PagesRegulatoryComponent } from './pages/pages-regulatory/pages-regulatory.component';


// Import Modules
import { BlogModule } from './blog/blog.module';
import { FullblogComponent } from './blog/fullblog/fullblog.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterAhnmiComponent } from './common/footer-ahnmi/footer-ahnmi.component';
import { PagesPolicyAdovcacyComponent } from './pages/pages-policy-adovcacy/pages-policy-adovcacy.component';
import { PagesRegulatorySupportComponent } from './pages/pages-regulatory-support/pages-regulatory-support.component';
import { PagesSchemesAndSubsidiesComponent } from './pages/pages-schemes-and-subsidies/pages-schemes-and-subsidies.component';
import { PagesOurServicesComponent } from './pages/pages-our-services/pages-our-services.component';
import { TestComponent } from './pages/test/test.component';
import { PagesViewPrivacyPolicyComponent } from './pages/pages-view-privacy-policy/pages-view-privacy-policy.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {  } from '../../node_modules/ng-bootstrap'


// Pdf Viewer
import { PdfViewerModule } from 'ng2-pdf-viewer';

// Comments Module Import
import { CommentsModule } from './comments/comments.module';
import { LoaderComponent } from './layouts/loader/loader.component';
import { ToastComponent } from './layouts/toast/toast.component';
import { MemberpostComponent } from './pages/memberpost/memberpost.component';
import { CheckComponent } from './pages/check/check.component';
import { PolicyAdvocacyComponent } from './pages/policy-advocacy/policy-advocacy.component';
import { StripeComponent } from './pages/stripe/stripe.component';
import { NgxStripeModule } from 'ngx-stripe';

// Ng2-search Module Import
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    AlertsComponent,
    AccordionComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    ListGroupComponent,
    ModalComponent,
    TabsComponent,
    PaginationComponent,
    ProgressComponent,
    SpinnersComponent,
    TooltipsComponent,
    FormsElementsComponent,
    FormsLayoutsComponent,
    FormsEditorsComponent,
    TablesGeneralComponent,
    TablesDataComponent,
    ChartsChartjsComponent,
    ChartsApexchartsComponent,
    IconsBootstrapComponent,
    IconsRemixComponent,
    IconsBoxiconsComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    PagesMembershipFormComponent,
    PagesBlogComponent,
    PagesFullBlogComponent,
    PagesRegulatoryComponent,
    FullblogComponent,
    NavbarComponent,
    FooterAhnmiComponent,
    PagesPolicyAdovcacyComponent,
    PagesRegulatorySupportComponent,
    PagesSchemesAndSubsidiesComponent,
    PagesOurServicesComponent,
    TestComponent,
    PagesViewPrivacyPolicyComponent,
    LoaderComponent,
    ToastComponent,
    MemberpostComponent,
    CheckComponent,
    PolicyAdvocacyComponent,
    StripeComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BlogModule,
    PdfViewerModule,
    FormsModule,
    CommentsModule,
    Ng2SearchPipeModule,
    NgxStripeModule.forRoot('pk_test_51MH3CBSCK3DQ1FtAszfi1dPAaTzfrhgFkNtnrZPsVTRuQOH1RcsTepxZzSKBdus4GDQNNAnvlXRDJivrXIRARpIX00z1Kffuzl')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
