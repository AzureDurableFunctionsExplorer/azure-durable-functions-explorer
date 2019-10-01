import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
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

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    AppShellComponent,
    HomeComponent,
    DurableFunctionExplorerComponent,
    AppHeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([UserState]),
    MsalModule.forRoot({
      clientID: environment.aadClientId,
      redirectUri: environment.redirectUri,
      authority: environment.aadAuthority,
      consentScopes: [
        environment.azureResourceManagerScope
      ],
      protectedResourceMap: [[environment.azureResourceManagerApiBase, [environment.azureResourceManagerScope]]]
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
