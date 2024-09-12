import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MenuComponent} from './pages/menu/menu.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AboutComponent} from './pages/about/about.component';
import {NavbarComponent} from './sharedpage/navbar/navbar.component';
import {FooterComponent} from './sharedpage/footer/footer.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {GooglemapComponent} from './GeneralComponents/googlemap/googlemap.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, MenuComponent, ContactComponent, 
    AboutComponent, NavbarComponent, FooterComponent, GoogleMapsModule
    , GooglemapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DesiFoods';
}
