import { Component, OnInit } from '@angular/core';
import { Preke } from 'src/app/models/preke';

@Component({
  selector: 'app-parduotuve',
  templateUrl: './parduotuve.component.html',
  styleUrls: ['./parduotuve.component.scss']
})
export class ParduotuveComponent implements OnInit {
  public prekes: Preke[] = [];

  constructor() {
    this.prekes.push(new Preke('tabure', 15));
    this.prekes.push(new Preke('stalas', 25));
    this.prekes.push(new Preke('uslanelis', 10));
  }

  ngOnInit(): void {
  }


}