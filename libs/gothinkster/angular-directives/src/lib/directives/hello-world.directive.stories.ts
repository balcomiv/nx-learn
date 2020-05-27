import { HelloWorldDirective } from './hello-world/hello-world.directive';

export default {
  title: 'HelloWorldDirective'
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
    declarations: [HelloWorldDirective]
  },
  template: `
    <div nxSeedHelloWorld></div>
  `,
  props: {}
});
