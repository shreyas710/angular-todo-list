import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = "Hello World";
  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(event: any): void {
    console.log(event);
    this.title = event.target.value;
  }

}
