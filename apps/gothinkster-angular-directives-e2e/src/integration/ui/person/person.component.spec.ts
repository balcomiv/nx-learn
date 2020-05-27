describe('gothinkster-angular-directives', () => {
  beforeEach(() => cy.visit('/iframe.html?id=personcomponent--primary'));

  it('should render the component', () => {
    cy.get('nx-seed-person').should('exist');
  });
});
