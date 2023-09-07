import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  alldata: any
  constructor(private httpClient: HttpClient) {
    this.loadData()
  }
  getJsonData(): Observable<any> {
    return this.httpClient.get("../../assets/json/productdata.json")
  }
  loadData() {

    this.getJsonData().subscribe((data) => {
      this.alldata = data;
    })
  }
  getAllData(key: string): any {
    return this.alldata[key];

  }
}
