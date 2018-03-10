import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  logMessage(message : string): void {

    console.log(message);

  }

}
