import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  constructor() { }

  checkin(ticketNumber: string): void {
    console.log('checking in', ticketNumber);
  }

}
