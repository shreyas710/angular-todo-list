import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(key: string): Array<TodoItem> {
    let objItem = JSON.parse(localStorage.getItem(key) || '{}');
    let res: TodoItem[] = new Array<TodoItem>();
    for (var i in objItem) {
      res.push(objItem[i]);
    }
    return res;
  }

  setData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
    console.log(localStorage.getItem(key));
  }
}
