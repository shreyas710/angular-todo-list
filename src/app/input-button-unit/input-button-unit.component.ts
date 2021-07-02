import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    {{title}}
    <input #inputElementRef [value]="title" (keyup.enter)="changeTitle($any($event.target).value)">

    <button (click)="changeTitle(inputElementRef.value)">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = "Hello World";
  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }

}
