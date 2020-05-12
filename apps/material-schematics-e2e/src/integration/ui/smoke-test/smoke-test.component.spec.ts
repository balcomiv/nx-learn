describe('material-schematics', () => {
  beforeEach(() => cy.visit('/iframe.html?id=smoketestcomponent--primary'));

  it('should render the component', () => {
    cy.get('nx-seed-smoke-test').should('exist');
  });
});
