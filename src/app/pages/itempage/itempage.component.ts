import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GooglemapComponent } from '../../GeneralComponents/googlemap/googlemap.component';

interface Model{val:number, valid:boolean} 

@Component({
  selector: 'app-itempage',
  standalone: true,
  imports: [CommonModule, RouterLink, GooglemapComponent],
  templateUrl: './itempage.component.html',
  styleUrl: './itempage.component.css'
})
export class ItempageComponent {
  constructor(private param:ActivatedRoute, private service:OrderDetailsService){}
  getItemId:any;
  menuData:any;
  myData:Model| undefined;
  ngOnInit(): void{
    this.getItemId = this.param.snapshot.paramMap.get('id');
    console.log(this.getItemId, 'fetchMenuItem');
    if (this.getItemId){
      this.menuData = this.service.foodDetails.filter((value) => {
        return value.id == this.getItemId
      })
    }
    this.myData?.val
    // console.log(this.menuData, "Menu item loaded");
  }
}
