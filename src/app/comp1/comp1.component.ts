import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.sass']
})
export class Comp1Component implements OnInit {

  serverId: number = 10;
  serverStatus: string = "offline";

  allowServer: boolean = false;

  constructor() { 
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverStatus = "online";
    console.log("Create Server");
  }

  onUpdateStatus(val) {
    this.serverStatus = val;
  }

  ngOnInit() {
  }

}
