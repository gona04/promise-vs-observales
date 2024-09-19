import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.scss'
})
export class PromisesComponent implements OnInit {
  status:String = 'offline';

  getStatus() {
    return new Promise<String>((resolve, reject) => {
      setTimeout(() => {
        resolve('online');
      },2000);
    })
  }
  ngOnInit() {
    this.getStatus().then((result:String) => {
      this.status = result;
    });
  }
}
