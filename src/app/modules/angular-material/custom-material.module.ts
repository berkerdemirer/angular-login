import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatIconModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatIconModule],
})
export class CustomMaterialModule {
}
