import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxChessBoardModule } from "ngx-chess-board";
import { GameRoutingModule } from "./game-routing.module";
import { GameComponent } from "./game.component";
import { AbstractMovemakingService } from "./providers/movemaking/abstract-movemaking.service";
import { MovemakingService } from "./providers/movemaking/impl/movemaking.service";

@NgModule({
    imports: [CommonModule, RouterModule, NgxChessBoardModule, GameRoutingModule],
    providers: [
        { provide: AbstractMovemakingService, useClass: MovemakingService }
    ],
    declarations: [GameComponent],
})
export class GameModule {}