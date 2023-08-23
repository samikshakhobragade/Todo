import { outputAst } from '@angular/compiler';
import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

@Input() todo:any=Todo;
@Input() i:any[number];
@Output() todoDelete= new EventEmitter<Todo>();
@Output() todoCheckbox= new EventEmitter<Todo>();

 onClick(todo: Todo){
  this.todoDelete.emit(todo);
  console.log("onClick has been triggered");
 }
 onCheckboxClick(todo:any){
 this.todoCheckbox.emit(todo)
 }
}
