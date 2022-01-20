export class Monitor {
  id: number;
  email: string;
  parola: string;

  constructor(input?: any) {
    Object.assign(this, input);
  }
}
