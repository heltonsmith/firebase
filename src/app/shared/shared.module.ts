import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterLink } from '@angular/router';
import { Icon } from 'ionicons/dist/types/components/icon/icon';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RouterLink,
    IonicModule
  ],
  exports: [FooterComponent]
})
export class SharedModule { }
