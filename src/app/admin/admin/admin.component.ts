import {Component, OnInit, ViewChild} from '@angular/core';
import {Instrument} from "../../model/instrument.model";
import {InstrumentService} from "../../service/instrument.service";
import {InstrumentComponent} from "../instrument/instrument.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  instrumentList: Array<Instrument> = [];
  selectedInstrument: Instrument = new Instrument();
  errorMessage: string = "";

  @ViewChild(InstrumentComponent) child: InstrumentComponent | undefined;
  constructor(private instrumentService: InstrumentService) { }

  ngOnInit(): void {
    this.instrumentService.getAllInstruments().subscribe(data => {
      this.instrumentList = data;
    });
  }

  createInstrumentRequest() {
    this.selectedInstrument = new Instrument();
    this.child?.showInstrumentModal();
  }

  editInstrumentRequest(item: Instrument) {
    this.selectedInstrument = Object.assign({}, item);
    this.child?.showInstrumentModal();
  }

  saveInstrumentWatcher(instrument: Instrument) {
    let itemIndex = this.instrumentList.findIndex(item => item.id === instrument.id);
    if (itemIndex !== -1) {
      this.instrumentList[itemIndex] = instrument;
    } else {
      this.instrumentList.push(instrument);
    }
  }

  deleteInstrument(item: Instrument, ind: number) {
    this.instrumentService.deleteInstrument(item).subscribe(data => {
      this.instrumentList.splice(ind, 1);
    }, err => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    })
  }

}