import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageNotFoundComponent, LoginComponent } from 'src/app/components';
import { AuthenticationService } from 'src/app/services';
import { AuthenticationGuard } from 'src/app/guards';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
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
