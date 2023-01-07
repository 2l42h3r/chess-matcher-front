import { AfterViewInit, Component, OnDestroy, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MoveChange, NgxChessBoardView } from "ngx-chess-board";
import { AbstractMovemakingService } from "./providers/movemaking/abstract-movemaking.service";

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html'
})
export class GameComponent implements AfterViewInit, OnDestroy {
    constructor(private readonly router: Router, private readonly movemakingService: AbstractMovemakingService) {}

    private moveSubscription = this.movemakingService.getMoves().subscribe((move) => {
        this.board.setPGN(move);
        this.shouldMove = true;
    });

    ngAfterViewInit(): void {
        if (!window.sessionStorage.getItem('playerId') || !window.sessionStorage.getItem('opponentId') || !window.sessionStorage.getItem('side')) {
            this.router.navigateByUrl('/');
        }
    }

    public side = window.sessionStorage.getItem('side');

    private shouldMove = this.side === 'white';

    @ViewChild('board', { static: false }) board!: NgxChessBoardView;

    public moveChangeHandler(event: MoveChange) {
        if (this.shouldMove) {
            this.movemakingService.makeMove(event.pgn.pgn);
            this.shouldMove = false;
        }
    }

    ngOnDestroy(): void {
        this.moveSubscription.unsubscribe();
    }
}