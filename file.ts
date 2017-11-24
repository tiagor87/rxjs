import * as Rx from 'rxjs/Rx';

function save(value: number) {
    return new Promise<number>((resolve, reject) => {
        const time = 10000 * Math.random();
        console.log(time);
        setTimeout(() => resolve(value * 10), time);
    });
}

let numbers$ = Rx.Observable.of([1, 2, 3, 4]);
numbers$
    .switchMap((value: number[]) => Rx.Observable.from(value))
    .mergeMap((value: number) => save(value))
    .subscribe((value: number) => console.log(value));