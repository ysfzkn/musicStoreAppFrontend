import { Component, OnInit } from '@angular/core';
import {Instrument} from "../../model/instrument.model";
import {faGuitar} from "@fortawesome/free-solid-svg-icons";
import {AuthService} from "../../service/auth.service";
import {InstrumentService} from "../../service/instrument.service";
import {PurchaseService} from "../../service/purchase.service";
import {Purchase} from "../../model/purchase.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  instrumentList: Array<Instrument> = [];
  faGuitar = faGuitar;
  errorMessage: string = "";
  infoMessage: string = "";

  constructor(private authService: AuthService,
              private instrumentService: InstrumentService,
              private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.instrumentService.getAllInstruments().subscribe(data => {
      this.instrumentList = data;
    })
  }

  purchase(item: Instrument) {
    if (!this.authService.currentUserValue?.id) {
      this.errorMessage = 'You should log in to buy a instrument';
      return;
    }

    const purchase = new Purchase(this.authService.currentUserValue.id, item.id, item.price);

    this.purchaseService.savePurchase(purchase).subscribe(data => {
      this.infoMessage = 'Mission is completed';
    }, err => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    });
  }

}