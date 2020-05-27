import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmokeTestComponent } from './ui/smoke-test/smoke-test.component';
import { DefinitionDirective } from './directives/definition.directive';
import { PersonComponent } from './ui/person/person.component';
import { HelloWorldDirective } from './directives/hello-world/hello-world.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SmokeTestComponent, DefinitionDirective, PersonComponent, HelloWorldDirective]
})
export class GothinksterAngularDirectivesModule {}
