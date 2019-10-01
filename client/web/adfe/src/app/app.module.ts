import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent, LoginComponent, AppShellComponent } from 'src/app/components';
import { AuthenticationGuard } from 'src/app/guards';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DurableFunctionExplorerComponent } from './components/durable-function-explorer/durable-function-explorer.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { UserState } from './store/states/user.state';
import { FunctionAppsListComponent } from './components/function-apps-list/function-apps-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    AppShellComponent,
    HomeComponent,
    DurableFunctionExplorerComponent,
    AppHeaderComponent,
    FunctionAppsListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([UserState]),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    MsalModule.forRoot({
      clientID: environment.aadClientId,
      redirectUri: environment.redirectUri,
      authority: environment.aadAuthority,
      consentScopes: [
        'user_impersonation',
        'api://e38a7710-aab9-48bb-8198-8566ed058cf2/user_impersonation',
        'https://management.azure.com//.default',
        'https://management.azure.com/',
        'https://management.azure.com//',
        'https://management.core.windows.net//user_impersonation',
        'https://management.azure.com/.default',
        'https://management.azure.com//.default',
        'https://management.azure.com/user_impersonation',
        'https://management.azure.com//user_impersonation'],
      protectedResourceMap: [
        ['http://localhost:4200', ['api://e38a7710-aab9-48bb-8198-8566ed058cf2/user_impersonation']],
        ['https://management.azure.com/', ['api://e38a7710-aab9-48bb-8198-8566ed058cf2/user_impersonation']],
        ['https://management.core.windows.net/', ['api://e38a7710-aab9-48bb-8198-8566ed058cf2/user_impersonation']]]
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MsalInterceptor,
    multi: true
  },
    AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
