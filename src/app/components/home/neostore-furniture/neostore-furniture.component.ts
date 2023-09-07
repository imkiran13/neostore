import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-neostore-furniture',
  templateUrl: './neostore-furniture.component.html',
  styleUrls: ['./neostore-furniture.component.scss']
})
export class NeostoreFurnitureComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplaySpeed:500,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
}
