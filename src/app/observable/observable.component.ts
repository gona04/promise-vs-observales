import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent implements OnInit, OnDestroy {
  data: Number[] = [];
  count = 1;
  dataObservable: any;
  intervalId: any;
  subscription: Subscription | null = null;

  ngOnInit(): void {
    alert('Looking at the console is important to understand the concept');
    // this.constantChanging();
  }

  getData() {
    this.constantChanging();
    alert('Data is ' + this.data);
    console.log(this.data);
  }

  constantChanging() {
    this.intervalId = setInterval(() => {
      this.count++;
      this.data.push(this.count);
    }, 2000);
  }

  constantChangeObservable() {
    this.dataObservable = new Observable(observer => {
      const intervalId = setInterval(() => {
        this.count++;
        observer.next(this.count);
      }, 1500);

      // Cleanup logic when the observable is unsubscribed
      return () => clearInterval(intervalId);
    });
  }

  getDataObservable() {
    this.constantChangeObservable();
    this.subscription = this.dataObservable.subscribe((d: any) => {
      // alert('Data is ' + d);
      console.log(d);
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}