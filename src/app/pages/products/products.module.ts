import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CommonLayoutComponent } from './ict/master-data/common-layout/common-layout.component';
import { PartsComponent } from './ict/master-data/parts/parts.component';
import { LegalEntityComponent } from './ict/master-data/legal-entity/legal-entity.component';
import { TransferPricingComponent } from './ict/master-data/transfer-pricing/transfer-pricing.component';
import { ButtonModule } from 'primeng/button';
import { AgGridModule } from 'ag-grid-angular';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxFileDropModule } from 'ngx-file-drop';
@NgModule({
  declarations: [
    ProductsComponent,
    CommonLayoutComponent,
    LegalEntityComponent,
    PartsComponent,
    TransferPricingComponent,
    CommonLayoutComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    CardModule,
    DropdownModule,
    ButtonModule,
    AgGridModule,
    DialogModule,
    NgxFileDropModule,
  ],
})
export class ProductsModule {}
