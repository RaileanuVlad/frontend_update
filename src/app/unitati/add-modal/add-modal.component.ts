import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Unitate } from 'app/models/unitate.model';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent{
  @ViewChild('addModal') modal: ModalDirective;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  chillAdd = false;
  addUnitateForm: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder) { }

  show(id: number): void {

    this.chillAdd = false;
    this.modal.config.keyboard = false;
    this.modal.config.backdrop = "static";
    this.initializeFrom(id);
    this.modal.show();
    
    
  }

  initializeFrom(id: number) {
    this.addUnitateForm = this.fb.group({
      localitate: [null, Validators.required],
      nume: [null, Validators.required],
      statut: ["AR"],
      nivel: ["Școală primară"],
      strada: [null],
      nrStrada: [null],
      codPostal: [null],
      telefon: [null],
      fax: [null],
      nrCladiri: [0],
      scoalaId: [id],
      moderator: "0"
    });
  }


  async addUnitate(){
    this.chillAdd=true;
    await this.api.addUnitate(this.addUnitateForm.value).toPromise().then(()=>{
      this.change.emit();
    });
    this.modal.hide();
  }



}
