import { CousersService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';


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
    ReactiveFormsComponent 
      ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
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
  providers: [CousersService,AuthService,AuthGuardService,AuthReturnUrlService,usernameValidator],
  bootstrap: [AppComponent]
})
export class AppModule { }
