import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageNotFoundComponent, LoginComponent, AppShellComponent } from 'src/app/components';
import { AuthenticationService } from 'src/app/services';
import { AuthenticationGuard } from 'src/app/guards';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DurableFunctionExplorerComponent } from './components/durable-function-explorer/durable-function-explorer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    AppShellComponent,
    HomeComponent,
    DurableFunctionExplorerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgxsModule.forRoot([]),
    MsalModule.forRoot({
      clientID: environment.aadClientId
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MsalInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
