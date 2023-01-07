import { Injectable, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { AbstractJoiningService } from "../../joining/abstract-joining.service";
import { AbstractMatchingService } from "../../matching/abstract-matching.service";
import { AbstractAwaitingService } from "../abstract-awaiting.service";

@Injectable()
export class AwaitingService implements AbstractAwaitingService, OnDestroy {
    constructor(private readonly matchingService: AbstractMatchingService, private readonly joiningService: AbstractJoiningService, private readonly router: Router) {}

    private stateSubject$ = new BehaviorSubject<'idle' | 'joining' | 'matching'>('idle');

    private joiningSubscription = this.joiningService.getID$().subscribe((playerId) => {
        window.sessionStorage.setItem('playerId', playerId);
        this.stateSubject$.next('matching');
        this.matchingService.awaitMatch();
    });

    private matchingSubscription = this.matchingService.getOpponentID$().subscribe(({ opponentId, side }) => {
        window.sessionStorage.setItem('opponentId', opponentId);
        window.sessionStorage.setItem('side', side);
        void this.router.navigateByUrl('/game');
    });

    ngOnDestroy(): void {
        this.stateSubject$.complete();
        this.joiningSubscription.unsubscribe();
        this.matchingSubscription.unsubscribe();
    }

    public joinGame(): void {
        this.stateSubject$.subscribe((state) => {
            if (state !== 'idle') {
                return;
            }

            this.stateSubject$.next('joining');

            this.joiningService.join();
        });
    }

    public getState$(): Observable<"idle" | "joining" | "matching"> {
        return this.stateSubject$.asObservable();
    }
}