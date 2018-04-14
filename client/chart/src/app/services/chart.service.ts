import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
@Injectable()

export class ChartService {
    private socket: any;
    constructor() {
        this.socket = io("http://localhost:3001");
    }

    getStockRecord() {
        var observable = new Observable(observer => {
            this.socket.on('latest', function (data) {
                observer.next(data)
            })
        })
        return observable;
    }

}