describe('material-schematics', () => {
  beforeEach(() => cy.visit('/iframe.html?id=rootcomponent--primary'));

  it('should render the component', () => {
    cy.get('nx-seed-root').should('exist');
  });
});
