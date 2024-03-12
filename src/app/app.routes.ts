import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayItemsComponent } from './display-items/display-items.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
export const routes: Routes = [
    {path: '', component: DisplayItemsComponent},
    {path: 'home', component: DisplayItemsComponent},
    {path: 'angular-tutorial', component: NavbarComponent},
{path: 'contact', component: ContactFormComponent},
];
