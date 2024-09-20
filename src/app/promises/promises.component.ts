import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.scss'
})
export class PromisesComponent implements OnInit {
  status:String = 'offline';
  firstTime = true;
  getStatus() {
    return new Promise<String>((resolve, reject) => {
      setInterval(() => {
        let status;
        if (this.firstTime) {
          status = 'online';
          this.firstTime = false;
        } else {
          status = Math.random() > 0.5 ? 'online' : 'offline';
        }
        console.log(status);
        resolve(status);
      }, 2000);
    })
  }
  ngOnInit() {
    this.getStatus().then((result:String) => {
      this.status = result;
    });
  }
}
