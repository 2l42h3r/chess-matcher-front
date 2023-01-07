import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { AbstractMatchingService } from "../abstract-matching.service";

@Injectable({
    providedIn: 'root',
})
export class MatchingService implements AbstractMatchingService {
    constructor(private readonly socket: Socket) {}

    public awaitMatch(): void {
        this.socket.emit('awaitMatch');
    }

    public getOpponentID$() {
        return this.socket.fromEvent<{ opponentId: string; side: string }>('awaitMatch');
    }
}