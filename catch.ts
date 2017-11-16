import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

export let simple$: Observable<string> = Rx.Observable.create((o: Rx.Observer<string>) => {
    o.next('Hello');
    o.error(new Error('Teste'));
    o.next('World');
    o.complete();
    o.next('Teste');
});

simple$
    .catch(error => {
        console.log(error);
        return Observable.never();
    })
    .subscribe(value => {
        console.log(value);
    }, error => {
        console.log(`mensagem: ${error.message}`)
    }, () => {
        console.log('terminou');
    });