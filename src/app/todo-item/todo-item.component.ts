import { TodoItem } from './../interfaces/todo-item';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: `
  <div class="todo-item">
    <input [checked]="item.completed" type="checkbox" class="todo-checkbox" (click)="completeItem()"/>
    <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
      {{ item.title }}
    </span>

    <button class="btn btn-red" (click)="removeItem()">
      remove
    </button>
  </div>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: any = "";
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed }
    });
  }

}
