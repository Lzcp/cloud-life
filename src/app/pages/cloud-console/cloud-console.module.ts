import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CloudConsoleComponent } from './cloud-console.component';
const routes:Routes = [
  {
    path: '',
    component: CloudConsoleComponent
  }
];


@NgModule({
  declarations: [CloudConsoleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CloudConsoleModule { }
