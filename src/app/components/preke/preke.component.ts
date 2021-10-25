import { Component, Input, OnInit } from '@angular/core';
import { Preke } from 'src/app/models/preke';

@Component({
  selector: 'app-preke',
  templateUrl: './preke.component.html',
  styleUrls: ['./preke.component.scss']
})
export class PrekeComponent implements OnInit {

  @Input()
  public produktas?: Preke;
  constructor() { }

  ngOnInit(): void {
  }

}