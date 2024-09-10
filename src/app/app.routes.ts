import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MenuComponent} from './pages/menu/menu.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AboutComponent} from './pages/about/about.component';
import { ItempageComponent } from './pages/itempage/itempage.component';


export const routes: Routes = [
    {path: '', component:HomeComponent, title: 'Home'},
    {path: 'menu', component:MenuComponent, title:'Menu'},
    {path: 'menu/:id', component:ItempageComponent, title: 'OrderIn'},
    {path: 'about', component:AboutComponent, title:'About'},
    {path: 'contact', component:ContactComponent, title:'Contact'}
];