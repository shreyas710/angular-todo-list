import { TodoListService } from './../services/todo-list.service';
import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';


@Component({
  selector: 'app-list-manager',
  template: `
    <div class="todo-app">
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
    <ul>
      <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]="todoItem" (remove)="removeItem($event)" (update)="updateItem($event.item, $event.changes)"></app-todo-item>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];
  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getTodoList();
  }

  ngOnInit(): void {
  }

  addItem(title: string) {
    this.todoListService.addItem({ title });
  }

  removeItem(item: TodoItem): void {
    this.todoListService.deleteItem(item);
  }

  updateItem(item: TodoItem, changes: TodoItem): void {
    this.todoListService.updateItem(item, changes);
  }
}
