import * as Rx from 'rxjs/Rx';

const files = [
    { name: 'File 1' },
    { name: 'File 2' },
    { name: 'File 3' }
];

const allFinishedSubject$ = new Rx.Subject();
const allFinished$ = allFinishedSubject$.asObservable();
const eventSubject$ = new Rx.Subject();
const event$ = eventSubject$.asObservable().share();

const file$ = event$.switchMap((files: Array<any>) => Rx.Observable.from(files));
const upload$ = file$.mergeMap(file => {
    return Rx.Observable.create(o => {
        setTimeout(() => o.next({ file: file, event: 'progress' }), 100);
        setTimeout(() => o.next({ file: file, event: 'progress' }), 200);
        setTimeout(() => o.next({ file: file, event: 'progress' }), 300);
        setTimeout(() => o.next({ file: file, event: 'progress' }), 400);
        setTimeout(() => o.next({ file: file, event: 'response' }), 500);
        setTimeout(() => o.complete(), 600);
    });
});
const progress$ = upload$.filter((ev: any) => ev.event === 'progress')
    .subscribe(ev => console.log(ev));
const complete$ = upload$.filter((ev: any) => ev.event === 'response');
complete$.subscribe(ev => console.log(ev));

complete$.zip().combineLatest(Rx.Observable.empty()).subscribe(null, null, () => allFinishedSubject$.next());

allFinishedSubject$.subscribe(() => console.log('finished'));

eventSubject$.next(files);
eventSubject$.next(files);