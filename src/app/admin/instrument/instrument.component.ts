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

  @Input() 
  instrument: Instrument = new Instrument();
  public selectedFile: any;
  imgURL: any;
  
  @Output() save = new EventEmitter<any>();
  constructor(private instrumentService: InstrumentService) { }

  public onFileChanged(event : any) 
  {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => 
    {
      console.log(reader.result);
      this.imgURL = reader.result;
    };
  }
  
  saveInstrument() 
  {
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;
    console.log(uploadData);
    this.instrumentService.uploadImage(uploadData).subscribe((response) => {
        if (response.status === 200) {
    this.instrumentService.saveInstrument(this.instrument).subscribe(data => {
      this.save.emit(data);
      $('#instrumentModal').modal('hide');
    });
    console.log('Image uploaded successfully');
  } else {
    console.log('Image not uploaded successfully');
  }
  });
}

  showInstrumentModal() {
    $('#instrumentModal').modal('show');
  }
}