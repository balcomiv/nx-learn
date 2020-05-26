describe('material-schematics', () => {
  beforeEach(() => cy.visit('/iframe.html?id=exampleaddressformcomponent--primary'));

  it('should render the component', () => {
    cy.get('nx-seed-example-address-form').should('exist');
  });
});
