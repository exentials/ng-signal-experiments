import { Injectable } from '@angular/core';
import { Flight } from '../data/flight';

@Injectable()
export class TicketService {

    readonly tickets: Flight[] = [
        { id: 4711, from: 'Graz', to: 'Düsseldorf', delayed: false, date: new Date().toISOString(), counter: 0},
        { id: 4712, from: 'Graz', to: 'Paderborn', delayed: false, date: new Date().toISOString(), counter: 0}
    ];

    constructor() { 
        console.debug('creating ticket service');
    }

    get(limit: number = -1) {
        if (limit === -1) {
            return this.tickets;
        }
        return this.tickets.slice(0, limit);
    }
}
