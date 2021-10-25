import { Component, Input, OnInit } from '@angular/core';
import { Preke } from 'src/app/models/preke';

@Component({
  selector: 'app-krepselis',
  templateUrl: './krepselis.component.html',
  styleUrls: ['./krepselis.component.scss']
})
export class KrepselisComponent implements OnInit {
  @Input()
  public prekes?: Preke[];

  public rodomosPrekes: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public krepselioKiekis(): number {
    let kiekis = 0;
    this.prekes?.forEach((preke) => {
      kiekis += preke.kiekis;
    })
    return kiekis;
  };

  public krepselioTurinys(): Preke[] {
    const krepselioPrekes: Preke[] = [];
    this.prekes?.forEach((preke) => {
      if (preke.kiekis > 0) {
        krepselioPrekes.push(preke);
      }
    });
    return krepselioPrekes;
  };

  public pakeistiRodyma() {
    this.rodomosPrekes = !this.rodomosPrekes
  };

}