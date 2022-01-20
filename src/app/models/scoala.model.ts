export class Scoala {
  id: number;
  judet: string;
  localitate: string;
  mediu: string;
  nume: string;
  sirues: string;
  director: string;
  furnizorDate: string;
  nrFurnizor: string;
  total: string;
  romi: string;
  dizabilitati: string;
  parinti: string;
  burse: string;
  repetenti: string;
  online: string;
  remediala: string;
  explicatie: string;
  checked: string;
  semnatura: string;
  nrInreg: string;
  nrIntr: string;
  dataIntr: string;
  email: string;
  parola: string;
  uProcent: number;
  cProcent: number;
  token?: string;
  unitateId: number[];
  unitateNume: string[];
  burseC: string;
  checkedC: string;
  directorC: string;
  dizabilitatiC: string;
  explicatieC: string;
  furnizorDateC: string;
  nrFurnizorC: string;
  nrInregC: string;
  onlineC: string;
  parintiC: string;
  remedialaC: string;
  repetentiC: string;
  romiC: string;
  semnaturaC: string;
  siruesC: string;
  totalC: string;
  unitateModerator: string[];

  constructor(input?: any) {
    Object.assign(this, input);
  }
}
