import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AwaitingRoutingModule } from "./awaiting-routing.module";
import { AwaitingComponent } from "./awaiting.component";
import { AbstractAwaitingService } from "./providers/awaiting/abstract-awaiting.service";
import { AwaitingService } from "./providers/awaiting/impl/awaiting.service";
import { AbstractJoiningService } from "./providers/joining/abstract-joining.service";
import { JoiningService } from "./providers/joining/impl/joining.service";
import { AbstractMatchingService } from "./providers/matching/abstract-matching.service";
import { MatchingService } from "./providers/matching/impl/matching.service";

@NgModule({
    imports: [CommonModule, RouterModule, AwaitingRoutingModule],
    providers: [
        { provide: AbstractJoiningService, useClass: JoiningService },
        { provide: AbstractMatchingService, useClass: MatchingService },
        { provide: AbstractAwaitingService, useClass: AwaitingService },
    ],
    declarations: [AwaitingComponent]
})
export class AwaitingModule {}