const cardCountry = {
  TITLE_CARD: '.sc-gKsewC.hyuxfC',
  CARD_BODY: '.sc-fubCfw.ddZyYg',
};
const cardUf = {
  TITLE_CARD: '.sc-iqHYGH.chWaMa',
  CARD_BODY: '.sc-dQppl.hFqyJy',
};
const LIST_CONTAINER = '.sc-bqyKva.fHoqsS';
const SEARCH = '.sc-bkzZxe.cLKYPF';

// const TITLE_CARD = '.sc-gKsewC.hyuxfC';
describe('Covid Ui', () => {
  it('Should return the application title', () => {
    cy.visit('/');
    cy.contains('Covid-19 Brasil').should('to.have.length', 1);
  });
  it('Should display the information Country Brazil', () => {
    cy.get(cardCountry.TITLE_CARD).contains('Brasil');
    cy.get(cardCountry.CARD_BODY)
      .contains('Confirmados')
      .should('to.have.length', 1);

    cy.get(cardCountry.CARD_BODY)
      .contains('Ativos')
      .should('to.have.length', 1);

    cy.get(cardCountry.CARD_BODY)
      .contains('Recuperados')
      .should('to.have.length', 1);

    cy.get(cardCountry.CARD_BODY)
      .contains('Mortos')
      .should('to.have.length', 1);

    cy.get(cardCountry.CARD_BODY)
      .contains('Atualizado em')
      .should('to.have.length', 1);
  });
  it('Should have 27 state + 1 country in List', () => {
    cy.visit('/');
    cy.get(LIST_CONTAINER).should('to.have.length', 28);
  });
  it('Should search UF', () => {
    cy.visit('/');

    cy.get(SEARCH).type('Ama');
    cy.get(LIST_CONTAINER).should('to.have.length', 2);
    cy.get(LIST_CONTAINER).contains('Amapá');
    cy.get(LIST_CONTAINER).contains('Amazonas');
  });

  it('Should display information UF', () => {
    cy.visit('/');
    cy.get(LIST_CONTAINER).contains('Pernambuco').click();
    cy.get(cardUf.TITLE_CARD).contains('Pernambuco');

    cy.get(cardUf.CARD_BODY).contains('Casos').should('to.have.length', 1);
    cy.get(cardUf.CARD_BODY).contains('Suspeitos').should('to.have.length', 1);
    cy.get(cardUf.CARD_BODY).contains('Mortos').should('to.have.length', 1);
    cy.get(cardUf.CARD_BODY)
      .contains('Atualizado em')
      .should('to.have.length', 1);
  });
});
