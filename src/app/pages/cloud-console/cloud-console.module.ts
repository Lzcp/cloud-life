import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GlobalService } from '../../service/commonService';
import { CloudConsoleComponent } from './cloud-console.component';
import { CardComponent } from '../../components/card/card.component';
const routes:Routes = [
  {
    path: '',
    component: CloudConsoleComponent
  }
];


@NgModule({
  declarations: [CloudConsoleComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [GlobalService]
})
export class CloudConsoleModule { }
