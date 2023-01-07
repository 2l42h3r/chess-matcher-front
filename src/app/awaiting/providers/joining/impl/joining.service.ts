import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { AbstractJoiningService } from "../abstract-joining.service";

@Injectable({
    providedIn: 'root'
})
export class JoiningService implements AbstractJoiningService {
    constructor(private readonly socket: Socket) {}

    join() {
        this.socket.emit('join');
    }

    getID$() {
        return this.socket.fromEvent<string>('join');
    }
}