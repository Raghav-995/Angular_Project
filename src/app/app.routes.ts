import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayItemsComponent } from './display-items/display-items.component';

export const routes: Routes = [
    {path: 'home', component: DisplayItemsComponent},
    {path: 'angular-tutorial', component: NavbarComponent},
{path: 'footer', component: FooterComponent},
];
