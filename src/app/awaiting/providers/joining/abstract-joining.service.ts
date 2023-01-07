import { Observable } from "rxjs";

export abstract class AbstractJoiningService {
    public abstract join(): void;

    public abstract getID$(): Observable<string>;
}