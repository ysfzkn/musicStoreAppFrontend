import {Component, Output, EventEmitter, Input} from '@angular/core';
import {Instrument} from "../../model/instrument.model";
import {InstrumentService} from "../../service/instrument.service";

declare var $: any;

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent {

  errorMessage: string = "";

  @Input() instrument: Instrument = new Instrument();
  @Output() save = new EventEmitter<any>();
  constructor(private instrumentService: InstrumentService) { }

  saveInstrument() {
    this.instrumentService.saveInstrument(this.instrument).subscribe(data => {
      this.save.emit(data);
      $('#instrumentModal').modal('hide');
    }, err => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    })
  }

  showInstrumentModal() {
    $('#instrumentModal').modal('show');
  }
}