import { Component, OnInit } from '@angular/core';

// Import with Alias
import { Class1 as El} from './Class1';
import { Class2 } from './Class1';

// import that requires default export

// import Class1 from './Class1';
// import Class2 from './Class1';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.sass']
})
export class Comp2Component implements OnInit {

  // Create Class Instance
  a : number = 5;
  c1 : El = new El();
  c2 : Class2 = new Class2();
  ar : number[] = [11, 22, 33];

  constructor() {
    this.c1.name = "qwe";
    console.log(this.c1.name);

    // For in / of Loops
    for (let i of this.ar) {
      console.log("Of Loop : " + i);   // 11, 22, 33
    }

    for (let i in this.ar) {
      console.log("In Loop : " + i);   // 0, 1, 2
    }

  }

  ngOnInit() {
  }

}
