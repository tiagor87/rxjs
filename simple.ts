import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

export let simple$: Observable<string> = Rx.Observable.create((o: Rx.Observer<string>) => {
    o.next('Hello');
    o.next('World');
    //    o.error(new Error('error'));
    o.complete();
    o.next('Teste');
});

// simple$
//     .subscribe(value => {
//         console.log('sub1', value);
//     }, error => {
//         console.log('sub1', `mensagem: ${error.message}`)
//     }, () => {
//         console.log('sub1', 'terminou');
//     });

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
interface IEvent {
    data?: any;
}
class InsertEvent implements IEvent {
    data = {
        id: 1
    }
};
class UpdateEvent implements IEvent {
    data: null;
}
export let event$: Observable<IEvent> = Rx.Observable.create((o: Rx.Observer<IEvent>) => {
    o.next(new InsertEvent());
    o.next(new UpdateEvent());
    o.complete();
});

event$.subscribe(event => console.log('all', event));
event$.filter(event => event instanceof UpdateEvent).subscribe(event => console.log('update', event));
event$.filter(event => event instanceof InsertEvent).subscribe(event => console.log('insert', event));

