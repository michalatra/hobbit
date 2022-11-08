import {Subject} from "rxjs";

const navigateEvent = new Subject<string>();
export const navigateEvent$ = navigateEvent.asObservable();

export const navigate = (path: string) => {
    navigateEvent.next(path);
}