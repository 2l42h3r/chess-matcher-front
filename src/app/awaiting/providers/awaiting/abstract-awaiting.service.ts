import { Observable } from "rxjs";

export abstract class AbstractAwaitingService {
    public abstract joinGame(): void;

    public abstract getState$(): Observable<'idle' | 'joining' | 'matching'>;
}