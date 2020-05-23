import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CloudLoginComponent } from './cloud-login.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
const routes:Routes = [
  {
    path: 'login',
    component: CloudLoginComponent
  }
]


@NgModule({
  declarations: [CloudLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzInputModule,
    NzButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CloudLoginModule { }
