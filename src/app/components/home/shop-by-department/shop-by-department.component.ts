import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service';

@Component({
  selector: 'app-shop-by-department',
  templateUrl: './shop-by-department.component.html',
  styleUrls: ['./shop-by-department.component.scss']
})
export class ShopByDepartmentComponent implements OnInit{
  data:any=[]
  constructor(private DataService:DataService){}
  ngOnInit() {
    this.data=this.DataService.getAllData("productdata")
    console.log(this.data)
  }

}
