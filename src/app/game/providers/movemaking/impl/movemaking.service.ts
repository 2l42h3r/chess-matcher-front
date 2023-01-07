import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { map, Observable } from "rxjs";
import { AbstractMovemakingService } from "../abstract-movemaking.service";

@Injectable({
    providedIn: 'root',
})
export class MovemakingService implements AbstractMovemakingService {
    constructor(private readonly socket: Socket) {}

    public makeMove(move: string): void {
        const opponentId = window.sessionStorage.getItem('opponentId') as string;
        this.socket.emit('makeMove', { opponentId, move });
    }

    public getMoves(): Observable<string> {
        return this.socket.fromEvent<string>('makeMove');
    }
}