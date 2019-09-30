import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent, PageNotFoundComponent, HomeComponent, DurableFunctionExplorerComponent } from 'src/app/components';
import { AuthenticationGuard } from 'src/app/guards';
import { MsalGuard } from "@azure/msal-angular";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: ''},
  { path: 'explore', component: DurableFunctionExplorerComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
