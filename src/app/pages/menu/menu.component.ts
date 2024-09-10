import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {provideNativeDateAdapter} from '@angular/material/core';
import { OrderDetailsService } from '../../services/order-details.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSlideToggleModule,
    CommonModule, RouterLink
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private service:OrderDetailsService){}
  foodData:any;
  ngOnInit(): void{
    this.foodData = this.service.foodDetails;
  }
}
