# NxSeed

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

https://nx.dev/angular/examples/react-and-angular

https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx

## Gothinkster Links

- Sharing best practices and expert advice: https://lookout.dev

## Gothinkster Helpful Commands

- ng g d directives/definition --project=gothinkster-angular-directives --dry-run

## Misc Learning Links

- https://www.samanthaming.com/tidbits/

## Adding Angular Material to NX

- npm install @angular/material @angular/cdk @angular/flex-layout @angular/animations
- import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
- Go explore flex layout docs https://tburleson-layouts-demos.firebaseapp.com/#/docs

- https://material.angular.io/guide/schematicsc

## Helpful Commands

- npx create-nx-workspace@latest
- ng add @nrwl/angular
- ng g lib gothinkster/angular-directives --style=scss

## Generation Commands

- ng g c ui/smoke-test --project=material-schematics --dry-run
- ng g lib material/schematics --style=scss --dry-run

- cd libs/material/schematics/src/lib
- ng g @angular/material:address-form ui/example-address-form --style=scss --dry-run
- cd ../../../../../

## Material Commands

- npm install @angular/material @angular/cdk @angular/flex-layout @angular/animations

## Storybook Commands

- ng add @nrwl/storybook
- ng g @nrwl/angular:storybook-configuration publishable-misc --generate-stories --configure-cypress --generateCypressSpecs
- ng generate @nrwl/angular:stories --name=publishable-misc --generateCypressSpecs

## Misc

- https://github.com/nrwl/nx/issues/2382 (storybook auto-gen app issue)
- http://issuehub.io/?label[]=scope%3A+storybook

## Storybook Builder

- https://github.com/nrwl/nx/pull/1582/files

## Storybook Info

- https://medium.com/storybookjs/declarative-storybook-configuration-49912f77b78
- https://medium.com/tensult/angular-material-custom-theme-implementation-in-angular-6-d424a2a47e4c
- https://stackoverflow.com/questions/53377419/how-to-add-global-style-to-angular-6-7-library

## Storybook Angular Links

- https://killalldefects.com/2020/02/09/test-angular-components-in-storybook/
