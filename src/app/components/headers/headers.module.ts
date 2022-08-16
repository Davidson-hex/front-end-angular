import { MenuModule } from './../menu/menu.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers.component';

@NgModule({
  declarations: [HeadersComponent],
  imports: [CommonModule, RouterModule, MenuModule],
  exports: [HeadersComponent],
})
export class HeadersModule {}
