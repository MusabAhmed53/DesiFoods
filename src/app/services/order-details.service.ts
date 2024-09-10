import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:200,
      foodImg:"https://www.shutterstock.com/shutterstock/photos/2429667123/display_1500/stock-photo-indian-plain-sandwich-with-vegetable-and-sauce-in-plate-india-close-up-2429667123.jpg"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:369,
      foodImg:"https://www.shutterstock.com/shutterstock/photos/244706695/display_1500/stock-photo-sliced-fresh-baked-thin-crust-supreme-pizza-sitting-on-metal-pan-with-shakers-of-red-pepper-flakes-244706695.jpg"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"panner",
      foodPrice:149,
      foodImg:"https://www.shutterstock.com/shutterstock/photos/2316538871/display_1500/stock-photo-paneer-burger-studio-light-photography-2316538871.jpg"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:140,
      foodImg:"https://www.shutterstock.com/shutterstock/photos/711254983/display_1500/stock-photo-two-fresh-tortilla-wraps-with-vegetable-filling-and-chicken-against-white-background-711254983.jpg"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:105,
      foodImg:"https://www.shutterstock.com/shutterstock/photos/2475514651/display_1500/stock-photo-a-stack-of-chocolate-brownies-on-wooden-background-with-mint-leaf-on-top-homemade-bakery-and-2475514651.jpg"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"https://www.shutterstock.com/shutterstock/photos/2291722815/display_1500/stock-photo-cheesecake-with-chocolate-oreo-cookies-dessert-and-caramel-2291722815.jpg"
    }
  ]
}