import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.scss'
})
export class PromisesComponent implements OnInit, OnDestroy {
  status: String = 'offline';
  firstTime = true;
  intervalId: any;

  getStatus() {
    return new Promise<String>((resolve, reject) => {
      this.intervalId = setInterval(() => {
        let status;
        if (this.firstTime) {
          status = 'online';
          this.firstTime = false;
        } else {
          status = Math.random() > 0.5 ? 'online' : 'offline';
        }
        console.log('actual changed status', status);
        resolve(status);
      }, 2000);
    });
  }

  ngOnInit() {
    alert('Looking at the console is important to understand the concept');
    this.getStatus().then((result: String) => {
      this.status = result;
      console.log('status printed in promise', this.status);
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}