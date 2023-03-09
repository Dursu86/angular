import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { AddComponent } from './add/add.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [TasksComponent, AddComponent, CardComponent, ListComponent],
  imports: [CommonModule, TasksRoutingModule, ReactiveFormsModule],
})
export class TasksModule {}
