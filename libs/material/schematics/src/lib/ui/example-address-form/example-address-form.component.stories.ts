import { ExampleAddressFormComponent } from './example-address-form.component';
import { MaterialSchematicsModule } from '../../material-schematics.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'ExampleAddressFormComponent'
};

export const primary = () => ({
  moduleMetadata: {
    imports: [BrowserAnimationsModule, MaterialSchematicsModule]
  },
  component: ExampleAddressFormComponent,
  props: {}
});

export const NotWrapped = () => ({
  moduleMetadata: {
    imports: [BrowserAnimationsModule, MaterialSchematicsModule]
  },
  template: `
    <nx-seed-example-address-form></nx-seed-example-address-form>
  `
});

export const wrapped = () => ({
  moduleMetadata: {
    imports: [BrowserAnimationsModule, MaterialSchematicsModule]
  },
  template: `
    <div class="test-div">Test Div</div>
    <nx-seed-root>
      <nx-seed-example-address-form></nx-seed-example-address-form>
    </nx-seed-root>
  `
});
