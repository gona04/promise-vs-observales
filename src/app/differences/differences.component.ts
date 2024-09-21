import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-differences',
  templateUrl: './differences.component.html',
  styleUrl: './differences.component.scss'
})
export class DifferencesComponent {
  customObservable: any;
  customPromise: any;
  customSubscription: any;
  executeDisabled = true;
  cancelDisabled = true;

  create() {
    this.createPromise();
    this.createObservable();
    this.executeDisabled = false;
  }

  execute() {
    this.cancelDisabled = false;  
    this.customPromise.then((result: String) => {
      console.log(result);
    });

    this.customSubscription = this.customObservable.subscribe((result: String) => {
      console.log(result);
    });
  }

  cancel() {
    this.customSubscription.unsubscribe();
  }

  //Promises are always asynchronous
  createPromise() {
    this.customPromise = new Promise((resolve, reject) => {
      console.log('Promise is executed');
      alert('The setTimeout funciton (for 5 seconds) has started its execution for promise.[Promise starts execution when we create it]');
      setTimeout(() => {
        resolve('Promise is resolved');
      }, 5000);
    })
  }

  //Observables can be synchronous or asynchronous
  createObservable() {
    this.customObservable = new Observable((observer) => {
      console.log('Observable is executed');
      alert(`The setTimeout funciton for Observables has started  (for 5 seconds) its execution for observable. [Observable executes only when we subscribe to it]/ If you DO NOT WANT IT TO EXECUTE YOU CAN CLICK ON CANCEL`)
      setTimeout(() => {
        observer.next('Observable is resolved');
      },5000);
    })
  }

  
}
