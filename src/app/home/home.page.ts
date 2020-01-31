import { Component } from '@angular/core';
import {ProductService} from '../api/product.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ProductDetails:any=[];
  formCreate : FormGroup;
  dataFromService:any="";
  constructor(public productService:ProductService,
    private formBuilder : FormBuilder) {
    this.formCreate = formBuilder.group({
      productName : ['',Validators.required],
      productPrice : ['',Validators.required]
    })
  }

  GetProductDetails(){
    this.productService.GetProducts().subscribe((data) => {
      var anyData = <any>data;
      console.log('ini',anyData);
      this.ProductDetails = anyData.response; 
      console.log('tes',this.ProductDetails);
    })
  }

  create(){
    let name = this.formCreate.controls['productName'].value;
    let price = this.formCreate.controls['productPrice'].value;
    var dataToSend = {product_name:name,product_price: price};
    this.productService.SaveData(dataToSend).subscribe((dataReturnFromService)=>{
      this.dataFromService = JSON.stringify(dataReturnFromService);
    })
  }
}
