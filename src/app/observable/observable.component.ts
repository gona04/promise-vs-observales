import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent implements OnInit {
data:Number[] = [];
count = 1;
dataObservable:any;
ngOnInit(): void {
  // this.constantChanging();
}

  getData() {
    this.constantChanging();
    alert('Data is ' + this.data);
   console.log(this.data);
  }

  constantChanging() {
    setInterval(() => {
      this.count++;
      this.data.push(this.count);
    }, 2000);
  }

  constantChangeObservable() {
    this.dataObservable = new Observable(observer => {
      setInterval(() => {
        this.count++;
        observer.next(this.count);
      }, 1500);
    });
  }

  getDataObservable() {
    this.constantChangeObservable();
    this.dataObservable.subscribe((d:any) => {
      alert('Data is ' + d);
      console.log(d);
    });
  }
}
