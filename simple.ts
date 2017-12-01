import * as Rx from 'rxjs/Rx';

// let number = 0;
// export let simple$ = Rx.Observable.create((o: Rx.Observer<string>) => {
//     number++;
//     o.next('Hello');
//     o.next('World');
//     // if (number < 5) {
//     //     o.error(new Error('error'));
//     // }
//     o.complete();
//     //o.next('Teste');
// });
// simple$
//     //.catch(error => Rx.Observable.never())
//     .finally(() => console.log('finally'))
//     .subscribe(value => {
//         console.log('sub1', value);
//     }, error => {
//         console.log('sub1', `mensagem: ${error.message}`)
//     }, () => {
//         console.log('sub1', 'terminou');
//     });

// setTimeout(function () {
//     simple$.subscribe(console.log);
// }, 5000);

let interval$ = Rx.Observable.interval(5000);

interval$.publish().connect();
interval$.subscribe(v => console.log('obs 1', v));
setTimeout(() => {
    interval$.subscribe(v => console.log('obs 2', v));
}, 11000);

// simple$
//     .do(value => console.log('sub2', value.toUpperCase()))
//     .subscribe(value => {
//         console.log('sub2', value);
//     }, error => {
//         console.log('sub2', `mensagem: ${error.message}`)
//     }, () => {
//         console.log('sub2', 'terminou');
//     });

// simple$.startWith('Teste')
//     .subscribe(value => {
//         console.log('sub3', value);
//     }, error => {
//         console.log('sub3', `mensagem: ${error.message}`)
//     }, () => {
//         console.log('sub3', 'terminou');
//     });

// simple$
//     .finally(() => console.log('Terminou'))
//     .subscribe(value => console.log(value), error => console.log(error), () => console.log('complete'));

// simple$.filter(value => value === 'Hello').subscribe(value => console.log(value));
// export let event$: Observable<number> = Rx.Observable.interval(1000);

// event$.subscribe(event => console.log('all', event));
// event$.filter(value => value % 2 === 0).subscribe(value => console.log('par:', value));
// event$.filter(value => value % 2 !== 0).subscribe(value => console.log('impar', value));


