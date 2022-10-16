import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalEntityComponent } from './ict/master-data/legal-entity/legal-entity.component';
import { PartsComponent } from './ict/master-data/parts/parts.component';
import { TransferPricingComponent } from './ict/master-data/transfer-pricing/transfer-pricing.component';

const routes: Routes = [
  { path: 'ict/master-data/legal-entity', component: LegalEntityComponent },
  { path: 'ict/master-data/parts', component: PartsComponent },
  {
    path: 'ict/master-data/transfer-pricing',
    component: TransferPricingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
