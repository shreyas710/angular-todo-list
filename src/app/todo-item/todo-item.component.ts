import { TodoItem } from './../interfaces/todo-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: `
    {{ item.title }}
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: any = "";
  constructor() { }

  ngOnInit(): void {
  }

}
