import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { Scoala } from 'app/models/scoala.model';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Unitate } from 'app/models/unitate.model';
import { SumValidator3 } from './sum-validator3';

@Component({
  selector: 'app-structura-modal',
  templateUrl: './structura-modal.component.html',
  styleUrls: ['./structura-modal.component.css']
})
export class StructuraModalComponent {


  @ViewChild('structuraModal') modal: ModalDirective;

  editStructuraForm: FormGroup;
  popup5 = true;
  unitateCurenta = new Unitate();
  chillS = false;

  constructor(public fb: FormBuilder, private api: ApiService, private sumValidator3: SumValidator3) { }

  show(id: number): void {
    this.chillS=false;
    this.popup5 = true;
    this.modal.config.keyboard = false;
    this.modal.config.backdrop = "static";
    this.modal.show();
    this.getUnitate(id);
  }

  getUnitate(id: number) {
    this.api.getUnitate(id)
      .subscribe((unit: Unitate) => {
        this.unitateCurenta = unit;
        this.unitateCurenta.id = id;
        this.initializeFrom(this.unitateCurenta);
      },
        (error: Error) => {
          console.log('err', error);

        });
  }

  initializeFrom(unitateCurenta: Unitate) {
    this.editStructuraForm = this.fb.group({
      total: [Number(unitateCurenta.total), Validators.required],
      romi: [Number(unitateCurenta.romi), Validators.required],
      dizabilitati: [Number(unitateCurenta.dizabilitati), Validators.required],
      parinti: [Number(unitateCurenta.parinti), Validators.required],
      burse: [Number(unitateCurenta.burse), Validators.required],
      repetenti: [Number(unitateCurenta.repetenti), Validators.required],
      online: [Number(unitateCurenta.online), Validators.required],
      remediala: [Number(unitateCurenta.remediala), Validators.required],
      nrCladiri: [Number(unitateCurenta.nrCladiri), Validators.required]
    },
    {
      validators: [this.sumValidator3.sumValidator3()],
    }
    );
  }

  editUnitate2() {

    this.chillS = true;

    const editedUnitate = new Unitate(this.unitateCurenta);
    editedUnitate.total = this.editStructuraForm.value.total;
    editedUnitate.romi = this.editStructuraForm.value.romi;
    editedUnitate.dizabilitati = this.editStructuraForm.value.dizabilitati;
    editedUnitate.parinti = this.editStructuraForm.value.parinti;
    editedUnitate.burse = this.editStructuraForm.value.burse;
    editedUnitate.repetenti = this.editStructuraForm.value.repetenti;
    editedUnitate.online = this.editStructuraForm.value.online;
    editedUnitate.remediala = this.editStructuraForm.value.remediala;
    editedUnitate.totalC = this.editStructuraForm.value.total;
    editedUnitate.romiC = this.editStructuraForm.value.romi;
    editedUnitate.dizabilitatiC = this.editStructuraForm.value.dizabilitati;
    editedUnitate.parintiC = this.editStructuraForm.value.parinti;
    editedUnitate.burseC = this.editStructuraForm.value.burse;
    editedUnitate.repetentiC = this.editStructuraForm.value.repetenti;
    editedUnitate.onlineC = this.editStructuraForm.value.online;
    editedUnitate.remedialaC = this.editStructuraForm.value.remediala;
    editedUnitate.nrCladiri = this.editStructuraForm.value.nrCladiri;
    editedUnitate.nrCladiriC = this.editStructuraForm.value.nrCladiri;
    this.api.editUnitate(editedUnitate)
      .subscribe(() => {
        this.modal.hide();
      },
        (error: Error) => {
          console.log('err', error);
        });


  }



}
    

