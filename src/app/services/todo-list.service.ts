import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';

@Injectable()
export class TodoListService {
  todoList: TodoItem[];

  constructor(private storageService: StorageService) {
    this.todoList = storageService.getData(todoListStorageKey);
    console.log(this.todoList);

  }

  saveList(): void {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  addItem(item: TodoItem): void {
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item: TodoItem, changes: TodoItem): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }

  deleteItem(item: TodoItem): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

}
