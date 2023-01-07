import { Component } from "@angular/core";
import { AbstractAwaitingService } from "./providers/awaiting/abstract-awaiting.service";

@Component({
    selector: 'app-awaiting',
    templateUrl: './awaiting.component.html',
})
export class AwaitingComponent {
    constructor(private readonly awaitingService: AbstractAwaitingService) {}

    public state$ = this.awaitingService.getState$();

    public joinGame() {
        this.awaitingService.joinGame();
    }
}