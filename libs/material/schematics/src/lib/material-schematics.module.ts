import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleAddressFormComponent } from './ui/example-address-form/example-address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, ReactiveFormsModule],
  declarations: [ExampleAddressFormComponent]
})
export class MaterialSchematicsModule {}
