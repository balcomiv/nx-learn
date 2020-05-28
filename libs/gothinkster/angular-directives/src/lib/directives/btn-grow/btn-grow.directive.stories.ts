import { BtnGrowDirective } from './btn-grow.directive';

export default {
  title: 'BtnGrowDirective'
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
    declarations: [BtnGrowDirective] //  Note: Attribute Directives will not error if they don't exits
  },
  template: `
    <div nxSeedBtnGrow></div>
  `,
  props: {}
});
