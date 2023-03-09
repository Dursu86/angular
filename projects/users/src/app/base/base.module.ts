import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
  ],
  exports: [LayoutComponent],
  imports: [CommonModule, RouterModule],
})
export class BaseModule {}
