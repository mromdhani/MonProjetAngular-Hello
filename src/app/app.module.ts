import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule, Route} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductCreateGuard } from './guards/product-create.guard';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { LogoutResolver } from './resolvers/logout.service';

const routes: Route[] = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'list', component: ProductsListComponent},
  {path: 'add', component: ProductsAddComponent, canActivate: [ProductCreateGuard]},
  {path: 'detail/:id', component: ProductsDetailsComponent},
  { path: 'login', component: LoginComponent},
    { path: 'logout', component: WelcomeComponent, resolve: [LogoutResolver] },
    {path: '', redirectTo: '/welcome', pathMatch: 'full'},
    {path: '**', 'component': NotFoundComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    FooterComponent,
    WelcomeComponent,
    NotFoundComponent,
    ProductsAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
