import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  GetProducts(){
    return this.http.get("http://localhost:3000/api/products/");
  }

  SaveData(dataToSend){
    var url ="http://localhost:3000/api/products/";
    return this.http.post(url,dataToSend,
      {headers:new HttpHeaders({"Content-Type":"application/json"})});
  }

}
