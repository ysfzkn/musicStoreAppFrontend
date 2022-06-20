import { Component, OnInit } from '@angular/core';
import {Instrument} from "../../model/instrument.model";
import {faGuitar , faPlus, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {AuthService} from "../../service/auth.service";
import {InstrumentService} from "../../service/instrument.service";
import {Purchase} from "../../model/purchase.model";
import {PurchaseService} from "../../service/purchase.service";
import { PurchaseItem } from 'src/app/model/purchase-item.model';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  instrumentList: Array<Instrument> = [];
  faGuitar = faGuitar;
  faPlus= faPlus;
  faShop= faShoppingCart;
  errorMessage: string = "";
  infoMessage: string = "";
  purchaseItemList: Array<PurchaseItem> = [];

  constructor(private authService: AuthService,
              private instrumentService: InstrumentService,
              private purchaseService: PurchaseService,
              private appComp : AppComponent) { }

  ngOnInit(): void {
    
    this.instrumentService.getAllInstruments().subscribe(data => {
      this.instrumentList = data;
    })
    this.purchaseService.getAllPurchaseItems().subscribe(data => {
      this.purchaseItemList = data;
    });
  }

  purchase(item: Instrument) {
    if (!this.authService.currentUserValue?.id) {
      this.errorMessage = 'You should log in to buy a instrument';
      return;
    }

    const purchase = new Purchase(this.authService.currentUserValue.id, item.id, item.price);

    this.purchaseService.savePurchase(purchase).subscribe(data => 
    {
      this.purchaseService.getAllPurchaseItems().subscribe(res => {
        this.purchaseItemList = res;
        this.appComp.currentCount = res.length;
      });
      this.infoMessage = 'An Instrument added to card successfully';
    }, err => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    });
  }

}