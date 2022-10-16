import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FileUploadComponent } from './modules/file-upload/file-upload.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const GLOBAL_COMPONENTS = [FileUploadComponent];

@NgModule({
  declarations: [...GLOBAL_COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    NgxFileDropModule,
    ProgressBarModule,
    TooltipModule,
    ProgressSpinnerModule,
  ],
  exports: [...GLOBAL_COMPONENTS],
})
export class SharedModule {}
