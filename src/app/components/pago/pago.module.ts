import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoComponent } from './pago/pago.component';
import { EnvioComponent } from './envio/envio.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagoComponent,
    EnvioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    PagoComponent,
    EnvioComponent
  ]
})
export class PagoModule { }
