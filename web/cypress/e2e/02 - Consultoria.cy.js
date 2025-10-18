/// <reference types="cypress" /> 

let contexto = 1;
let cenario = 1;
let teste = 1;
context(`${contexto} - Tela Consultancy`, () =>
{
	describe(`${cenario} - Validar solicitação de consultoria individual.`, () =>
	{
		let complemento = 1;

		it(`${teste}.${complemento} - Validar acesso a tela de consultoria.`, () => 
		{
			cy.visit('/');

			cy.preencheLogin('papito@webdojo.com', 'katana123');

			cy.waitUntil(() => 
				cy.contains('button', 'Formulários')
					.should('be.visible'));

			cy.contains('button', 'Formulários')
				.should('be.visible')
				.click();

			cy.waitUntil(() => 
				cy.contains('h1', 'Consultoria')
					.should('be.visible'));

			cy.url()
				.should('eq', 'http://localhost:3000/consultancy');
		});

		it(`${teste}.${++complemento} - Validar acesso a tela de consultoria.`, () => 
		{
			cy.visit('/');

			cy.preencheLogin('papito@webdojo.com', 'katana123');

			cy.waitUntil(() => 
				cy.contains('button', 'Formulários')
					.should('be.visible'));

			cy.contains('button', 'Formulários')
				.should('be.visible')
				.click();

			cy.waitUntil(() => 
				cy.contains('h1', 'Consultoria')
					.should('be.visible'));

			cy.contains('h1', 'Consultoria')
				.should('be.visible');
		});
    });

	describe.only(`${++cenario} - Validar solicitação de consultoria individual.`, () =>
	{
		let complemento = 1;

		beforeEach(() =>
		{
			cy.acessaTelas('Formulários', 'Consultoria');
		});

		it(`${++teste}.${complemento} - Validar acesso a tela de consultoria.`, () => 
		{
			
		});
    });
});