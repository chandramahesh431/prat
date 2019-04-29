import { CousersService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import {testComponent} from './test.component';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SummaryPipe } from './summary.pipe';
import { InputOutputComponent } from './input-output/input-output.component';
import { NgContextFComponent } from './ng-context-f/ng-context-f.component';
import { TweetsComponent } from './tweets/tweets.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { NotAccessComponent } from './not-access/not-access.component';
import { HomeComponent } from './home/home.component';
import { logWarnings } from 'protractor/built/driverProviders';
import { AuthService } from './common/auth.service';
import { AuthGuardService } from './common/auth-guard.service';
import { AuthReturnUrlService } from './common/auth-returnUrl';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { usernameValidator } from './reactive-forms/username.validator';
import { ChandraComponent } from './chandra/chandra.component';
import { ChandraService } from './chandra.service';
import { FarvoriteComponent } from './farvorite/farvorite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelBootstrapComponent } from './panel-bootstrap/panel-bootstrap.component';
import { LikesCountComponent } from './likes-count/likes-count.component';
import { DirectiveExamplesComponent } from './directive-examples/directive-examples.component';
import { FormatInputDirective } from './format-input.directive';
import { TemplateFormComponent } from './template-form/template-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './services/posts.service';
import { myhandleErrorGlobally } from './common/appErrorGlobally';
import { NavbarComponent } from './navbar/navbar.component';
import { FollwersComponent } from './follwers/follwers.component';
import { Home123Component } from './home123/home123.component';
import { FollowComponent } from './follow/follow.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfComponent } from './prof/prof.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import { TemplateFormNewComponent } from './template-form-new/template-form-new.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    InputOutputComponent,
    NgContextFComponent,
    TweetsComponent,
    InputFormatDirective,
    ZippyComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent,
    NotAccessComponent,
    HomeComponent,
    ReactiveFormsComponent,
    testComponent,
    ChandraComponent,
    FarvoriteComponent,
    TitleCaseComponent,
    TitleCasePipe,
    PanelBootstrapComponent,
    LikesCountComponent,
    DirectiveExamplesComponent,
    FormatInputDirective,
    TemplateFormComponent,
    PostsComponent,
    NavbarComponent,
    Home123Component,
    FollowComponent,
    ProfComponent,
    NotFoundPageComponent,
    SignFormComponent,
    TemplateFormNewComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {path:'',component:Home123Component},
          {path:'followers/:id',component:ProfComponent},
          {path:'followers',component:FollowComponent},
          {path:'posts',component:PostsComponent},
          {path:'**',component:NotFoundPageComponent}
    ]
    )
    // RouterModule.forRoot(
    //   [
    //     {path:'',component:HomeComponent},
    //     {path:'login',component:LoginComponent},
    //     {path:'logout',component:LogoutComponent},  
    //     {path:'admin',component:AdminComponent,canActivate:[AuthGuardService,AuthReturnUrlService]},
    //     {path:'**',component:NotAccessComponent}

    //   ]
    // )
  ],
  providers: [CousersService,AuthService,AuthGuardService,AuthReturnUrlService,usernameValidator,ChandraService,PostsService,{provide:ErrorHandler,useClass:myhandleErrorGlobally}],
  bootstrap: [AppComponent]
})
export class AppModule { }
