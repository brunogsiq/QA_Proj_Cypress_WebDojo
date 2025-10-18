/// <reference types="cypress" /> 

import 'cypress-wait-until';

import { nomeTela } from '../../pages/elementos';

Cypress.Commands.add('elementosLayout', () =>
{
    cy.get('.w-64')
        .should('be.visible');;

    cy.get('.flex > .relative')
        .should('be.visible');

    cy.get('.h-16')
        .should('be.visible');

    cy.get('.text-2xl')
        .should('be.visible');

    cy.get(':nth-child(1) > .block')
        .should('be.visible');

    cy.get('#email')
        .should('be.visible');

    cy.get(':nth-child(2) > .block')
        .should('be.visible');

    cy.get('#password')
        .should('be.visible');
    cy.get('.justify-end > .text-sm')
        .should('be.visible');

    cy.get('[type="submit"]')
        .should('be.visible');

    cy.get('.px-2')
        .should('be.visible');

    cy.contains('button', 'Entrar')
        .should('be.visible');

    cy.get('.inline-flex > .mr-2')
        .should('be.visible');

    cy.get('.inline-flex > .font-bold')
        .should('be.visible');

    cy.get('.rcb-toggle-button')
        .should('be.exist');
});

Cypress.Commands.add("preencheLogin", (email, senha) => 
{
    cy.get('#email')
        .type(email);

    cy.get('#password')
        .type(senha);

    cy.contains('button', 'Entrar')
        .click();
});