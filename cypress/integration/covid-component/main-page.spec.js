describe('Covid Ui', () => {
  it('Should return the application title', () => {
    cy.visit('/');
    cy.contains('Covid-19 Brasil').should('to.have.length', 1);
  });
  it('Should display the information Country Brazil', () => {
    cy.get('.sc-gKsewC.hyuxfC').contains('Brasil');
    cy.get('.sc-fubCfw.ddZyYg')
      .contains('Confirmados')
      .should('to.have.length', 1);

    cy.get('.sc-fubCfw.ddZyYg').contains('Ativos').should('to.have.length', 1);

    cy.get('.sc-fubCfw.ddZyYg')
      .contains('Recuperados')
      .should('to.have.length', 1);

    cy.get('.sc-fubCfw.ddZyYg').contains('Mortos').should('to.have.length', 1);

    cy.get('.sc-fubCfw.ddZyYg')
      .contains('Atualizado em')
      .should('to.have.length', 1);
  });
  it('Should have 27 state + 1 country in List', () => {
    cy.visit('/');
    cy.get('.sc-bqyKva.hFbVhV').should('to.have.length', 28);
  });
  it('Should search UF', () => {
    cy.visit('/');

    cy.get('.sc-bkzZxe.jzVNJi').type('Ama');
    cy.get('.sc-bqyKva.hFbVhV').should('to.have.length', 2);
    cy.get('.sc-bqyKva.hFbVhV').contains('Amapá');
    cy.get('.sc-bqyKva.hFbVhV').contains('Amazonas');
  });

  it('Should display information UF', () => {
    cy.visit('/');
    cy.get('.sc-bqyKva.hFbVhV').contains('Pernambuco').click();
    cy.get('.sc-iqHYGH.chWaMa').contains('Pernambuco');

    cy.get('.sc-dQppl.hFqyJy').contains('Casos').should('to.have.length', 1);
    cy.get('.sc-dQppl.hFqyJy')
      .contains('Suspeitos')
      .should('to.have.length', 1);
    cy.get('.sc-dQppl.hFqyJy').contains('Mortos').should('to.have.length', 1);
    cy.get('.sc-dQppl.hFqyJy')
      .contains('Atualizado em')
      .should('to.have.length', 1);
  });
});
