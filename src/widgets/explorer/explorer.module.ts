import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExplorerComponent} from './explorer.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NzTableModule} from 'ng-zorro-antd/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    NzTableModule,
    FormsModule
  ],
  exports: [
    ExplorerComponent
  ],
  declarations: [
    ExplorerComponent
  ]
})
export class ExplorerModule {}
