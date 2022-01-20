import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { Scoala } from 'app/models/scoala.model';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SumValidator2 } from './sum-validator2';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})


export class InfoModalComponent {
  @ViewChild('infoModal') modal: ModalDirective;

  editScoalaForm: FormGroup;
  scoalaCurenta = new Scoala();
  popup = true;


  constructor(public fb: FormBuilder, private api: ApiService, private sumValidator2: SumValidator2) { }

  show(id: number): void {
    this.popup = true;
    this.modal.config.keyboard = false;
    this.modal.config.backdrop = "static";
    this.modal.show();
    this.getScoala(id);
  }

  getScoala(id: number) {
    this.api.getScoala(id)
      .subscribe((school: Scoala) => {
        this.scoalaCurenta = school;
        this.scoalaCurenta.id = id;
        this.initializeFrom(this.scoalaCurenta);
      },
        (error: Error) => {
          console.log('err', error);

        });
  }

  initializeFrom(scoalaCurenta: Scoala) {
    this.editScoalaForm = this.fb.group({
      sirues: [scoalaCurenta.sirues, Validators.required],
      director: [scoalaCurenta.director, Validators.required],
      furnizorDate: [scoalaCurenta.furnizorDate, Validators.required],
      nrFurnizor: [scoalaCurenta.nrFurnizor, Validators.required],
      total: [Number(scoalaCurenta.total), Validators.required],
      romi: [Number(scoalaCurenta.romi), Validators.required],
      dizabilitati: [Number(scoalaCurenta.dizabilitati), Validators.required],
      parinti: [Number(scoalaCurenta.parinti), Validators.required],
      burse: [Number(scoalaCurenta.burse), Validators.required],
      repetenti: [Number(scoalaCurenta.repetenti), Validators.required],
      online: [Number(scoalaCurenta.online), Validators.required],
      remediala: [Number(scoalaCurenta.remediala), Validators.required],
    },
      {
        validators: [this.sumValidator2.sumValidator2()],
      }
    );
  }

  editScoala() {
    if (this.editScoalaForm.pristine) {
      this.modal.hide();
      return;
    }
    const editedScoala = new Scoala({
      id: this.scoalaCurenta.id,
      judet: this.scoalaCurenta.judet,
      mediu: this.scoalaCurenta.mediu,
      nume: this.scoalaCurenta.nume,
      sirues: this.editScoalaForm.value.sirues,
      director: this.editScoalaForm.value.director,
      furnizorDate: this.editScoalaForm.value.furnizorDate,
      nrFurnizor: this.editScoalaForm.value.nrFurnizor,
      total: this.editScoalaForm.value.total,
      romi: this.editScoalaForm.value.romi,
      dizabilitati: this.editScoalaForm.value.dizabilitati,
      parinti: this.editScoalaForm.value.parinti,
      burse: this.editScoalaForm.value.burse,
      repetenti: this.editScoalaForm.value.repetenti,
      online: this.editScoalaForm.value.online,
      remediala: this.editScoalaForm.value.remediala,
      semnatura: this.scoalaCurenta.semnatura,
      email: this.scoalaCurenta.email,
      parola: this.scoalaCurenta.parola,
      unitateId: this.scoalaCurenta.unitateId,
      unitateNume: this.scoalaCurenta.unitateNume,
      burseC: this.editScoalaForm.value.burse,
      directorC: this.editScoalaForm.value.director,
      dizabilitatiC: this.editScoalaForm.value.dizabilitati,
      furnizorDateC: this.editScoalaForm.value.furnizorDate,
      nrFurnizorC: this.editScoalaForm.value.nrFurnizor,
      onlineC: this.editScoalaForm.value.online,
      parintiC: this.editScoalaForm.value.parinti,
      remedialaC: this.editScoalaForm.value.remediala,
      repetentiC: this.editScoalaForm.value.repetenti,
      romiC: this.editScoalaForm.value.romi,
      siruesC: this.editScoalaForm.value.sirues,
      totalC: this.editScoalaForm.value.total
    });

    this.api.editScoala(editedScoala)
      .subscribe(() => {
        this.modal.hide();
      },
        (error: Error) => {
          console.log('err', error);
        });
  }



}

