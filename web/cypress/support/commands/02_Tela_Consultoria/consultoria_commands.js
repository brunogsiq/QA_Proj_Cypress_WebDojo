/// <reference types="cypress" /> 

import 'cypress-wait-until';

import { nomeTela } from '../../pages/elementos';

Cypress.Commands.add('acessaTelaConsultoria', () =>
{
    cy.visit('/');

    cy.preencheLogin('papito@webdojo.com', 'katana123');

    cy.contains('button', 'Formulários')
        .click();

    cy.contains('h1', 'Consultoria')
        .should('be.visible');
});