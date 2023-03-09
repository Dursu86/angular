import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'projects/users/src/models/task.model';

@Component({
  selector: 'sdi-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('item') task!: Task;
  @Output() onDelete: EventEmitter<number>;
  @Output() onChange: EventEmitter<Task>;
  constructor() {
    this.onDelete = new EventEmitter();
    this.onChange = new EventEmitter();
  }

  handleDelete() {
    console.log('Borrando', this.task.id);
    this.onDelete.next(this.task.id);
  }
  handleChange() {
    this.task.isCompleted = !this.task.isCompleted;
    this.onChange.next(this.task);
  }
}
