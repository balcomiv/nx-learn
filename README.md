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

Gothinkster Links
- Sharing best practices and expert advice: https://lookout.dev

Misc Learning Links
- https://www.samanthaming.com/tidbits/

## Helpful Commands
- npx create-nx-workspace@latest 
- ng add @nrwl/angular
- ng g lib gothinkster/angular-directives --style=scss

- ng g c ui/smoke-test --project=gothinkster-angular-directives --dry-run
- ng g c ui/smoke-test --project=material-schematics --dry-run

## Storybook Commands

- ng add @nrwl/storybook

- ng g @nrwl/angular:storybook-configuration gothinkster-angular-directives --generate-stories --configure-cypress --generateCypressSpecs

- ng g @nrwl/angular:storybook-configuration material-schematics --generate-stories --configure-cypress --generateCypressSpecs

- ng generate @nrwl/angular:stories --name=material-schematics --generateCypressSpecs

- ng g c smoke-test --project=gothinkster/angular-directives --dry-run
- ng g c smoke-test --project=material-schematics --dry-run

- ng g lib material/schematics --style=scss --dry-run