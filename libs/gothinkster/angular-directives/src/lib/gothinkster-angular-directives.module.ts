import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmokeTestComponent } from './ui/smoke-test/smoke-test.component';
import { DefinitionDirective } from './directives/definition.directive';
import { PersonComponent } from './ui/person/person.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SmokeTestComponent, DefinitionDirective, PersonComponent]
})
export class GothinksterAngularDirectivesModule {}
