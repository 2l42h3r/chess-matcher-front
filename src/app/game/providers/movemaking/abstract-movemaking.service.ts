import { Observable } from "rxjs";

export abstract class AbstractMovemakingService {
    public abstract makeMove(move: string): void;

    public abstract getMoves(): Observable<string>;
}