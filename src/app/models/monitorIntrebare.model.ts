export class MonitorIntrebare {
    id: number;
    monitorId: number;
    intrebareId: number;
    raspuns: string;
    data: string;
  
    constructor(input?: any) {
      Object.assign(this, input);
    }
  }
  