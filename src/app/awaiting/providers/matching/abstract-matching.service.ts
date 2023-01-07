import { Observable } from "rxjs";

export abstract class AbstractMatchingService {
    public abstract awaitMatch(): void;

    public abstract getOpponentID$(): Observable<{ opponentId: string; side: string }>;
}