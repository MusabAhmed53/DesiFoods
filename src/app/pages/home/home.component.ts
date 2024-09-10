import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private service:OrderDetailsService){}
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}
