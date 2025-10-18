/// <reference types="cypress" /> 

let contexto = 1;
let cenario = 1;
let teste = 1;

context(`${contexto} - Tela Login - Fixtures`, () =>
{
	beforeEach(() =>
	{
		cy.visit('/');
	});

	describe(`${cenario} - Validações Visuais.`, () =>
	{
		let complemento = 1;

		it(`${teste}.${complemento} - Validar apresentação dos elementos do layout.`, () => 
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
	});

	describe(`${++cenario} - Validações Comportamentais.`, () =>
	{
		let complemento = 1;

		it(`${++teste}.${complemento} - Login inválido - Email vazio.`, () =>
		{
			cy.fixture('usuarios.json').then((data) =>
			{
				cy.get('#email')
					.type('digita')
					.clear();

				cy.get('#password')
					.type(data.User_Aluno_Correto.password);
			});

			cy.contains('button', 'Entrar')
				.click();

			cy.get(':nth-child(1) > .mt-2')
				.should('be.visible')
				.and('have.text', 'Ei, não esqueça de digitar seu email!');
		});

		it(`${teste}.${++complemento} - Login inválido - Email inválido.`, () =>
		{
			cy.fixture('usuarios.json').then((data) =>
			{
				cy.get('#email')
					.type(data.User_Aluno_EmailInvalido.username);

				cy.get('#password')
					.type(data.User_Aluno_Correto.password);
			});

			cy.contains('button', 'Entrar')
				.click();

			cy.get(':nth-child(1) > .mt-2')
				.should('be.visible')
				.and('have.text', 'Hmm... esse email parece estar errado 🤔');
		});

		it(`${teste}.${++complemento} - Login inválido - Senha vazia.`, () =>
		{
			cy.fixture('usuarios.json').then((data) =>
			{
				cy.get('#email')
					.type(data.User_Aluno_Correto.username);

				cy.get('#password')
					.type('digita')
					.clear();
			});

			cy.contains('button', 'Entrar')
				.click();

			cy.get('.space-y-4 > :nth-child(2) > .mt-2')
				.should('be.visible')
				.and('have.text', 'Você precisa de uma senha para entrar! 🔒');
		});

		it(`${teste}.${++complemento} - Login inválido - Senha inválida.`, () =>
		{
			cy.fixture('usuarios.json').then((data) =>
			{
				cy.get('#email')
					.type(data.User_Aluno_Correto.username);

				cy.get('#password')
					.type('123');
			});

			cy.contains('button', 'Entrar')
				.click();

			cy.get('.title')
				.should('be.visible')
				.and('have.text', 'Acesso negado! Tente novamente.');
		});

		it(`${teste}.${++complemento} - Login inválido - Email vazio & Senha vazia.`, () =>
		{
			cy.contains('button', 'Entrar')
				.click();

			cy.get(':nth-child(1) > .mt-2')
				.should('be.visible')
				.and('have.text', 'Ei, não esqueça de digitar seu email!');

			cy.get('.space-y-4 > :nth-child(2) > .mt-2')
				.should('be.visible')
				.and('have.text', 'Você precisa de uma senha para entrar! 🔒');

		});

		it(`${teste}.${++complemento} - Login inválido - Email vazio & Senha vazia.`, () =>
		{
			cy.fixture('usuarios.json').then((data) =>
			{
				cy.get('#email')
					.type('digita')
					.clear();

				cy.get('#password')
					.type('123')
					.clear();
			});

			cy.contains('button', 'Entrar')
				.click();

			cy.get(':nth-child(1) > .mt-2')
				.should('be.visible')
				.and('have.text', 'Ei, não esqueça de digitar seu email!');

			cy.get('.space-y-4 > :nth-child(2) > .mt-2')
				.should('be.visible')
				.and('have.text', 'Você precisa de uma senha para entrar! 🔒');
		});

		it(`${teste}.${++complemento} - Login válido - Email & Senha corretas.`, () =>
		{
			cy.fixture('usuarios.json').then((data) =>
			{						
				cy.get('#email')
					.type(data.User_Aluno_Correto.username);

				cy.get('#password')
					.type(data.User_Aluno_Correto.password);
			});

			cy.contains('button', 'Entrar')
				.click();

			cy.waitUntil(()=>
				cy.get('[data-cy="logged-user"]')
					.should('be.visible'));

			cy.get('[data-cy="logged-user"]')
				.should('be.visible');
		});
	});
});

contexto = 2;
cenario = 1;
teste = 1;

context(`${contexto} - Tela Login - Custom Commands`, () =>
{
	

	beforeEach(() =>
	{
		cy.visit('/');
	});

	describe(`${cenario} - Validações Visuais.`, () =>
	{
		let complemento = 1;

		it(`${teste}.${complemento} - Validar apresentação dos elementos do layout.`, () => 
		{
			cy.elementosLayout();
		});
	});

	describe(`${++cenario} - Validações Comportamentais.`, () =>
	{
		let complemento = 1;

		it(`${++teste}.${complemento} - Login inválido - Email com espaço.`, () =>
		{
			cy.preencheLogin(' ','katana123')

			cy.contains('button', 'Entrar')
				.click();

			cy.get(':nth-child(1) > .mt-2')
				.should('be.visible')
				.and('have.text', 'Hmm... esse email parece estar errado 🤔');
		});

		it(`${teste}.${++complemento} - Login inválido - Email inválido.`, () =>
		{
			cy.preencheLogin('teste@','katana123')

			cy.contains('button', 'Entrar')
				.click();

			cy.get(':nth-child(1) > .mt-2')
				.should('be.visible')
				.and('have.text', 'Hmm... esse email parece estar errado 🤔');
		});

		it(`${teste}.${++complemento} - Login inválido - Senha com espaço.`, () =>
		{
			cy.preencheLogin('papito@webdojo.com',' ')

			cy.contains('button', 'Entrar')
				.click();

			cy.get('.title')
				.should('be.visible')
				.and('have.text', 'Acesso negado! Tente novamente.');
		});

		it(`${teste}.${++complemento} - Login inválido - Senha inválida.`, () =>
		{
			cy.preencheLogin('papito@webdojo.com', 'katana')

			cy.contains('button', 'Entrar')
				.click();

			cy.get('.title')
				.should('be.visible')
				.and('have.text', 'Acesso negado! Tente novamente.');
		});

		it(`${teste}.${++complemento} - Login inválido - Email vazio & Senha vazia.`, () =>
		{
			cy.contains('button', 'Entrar')
				.click();

			cy.get(':nth-child(1) > .mt-2')
				.should('be.visible')
				.and('have.text', 'Ei, não esqueça de digitar seu email!');

			cy.get('.space-y-4 > :nth-child(2) > .mt-2')
				.should('be.visible')
				.and('have.text', 'Você precisa de uma senha para entrar! 🔒');
		});

		it(`${teste}.${++complemento} - Login inválido - Email vazio & Senha vazia.`, () =>
		{
			cy.get('#email')
				.type('digita')
				.clear();

			cy.get('#password')
				.type('123')
				.clear();

			cy.contains('button', 'Entrar')
				.click();

			cy.get(':nth-child(1) > .mt-2')
				.should('be.visible')
				.and('have.text', 'Ei, não esqueça de digitar seu email!');

			cy.get('.space-y-4 > :nth-child(2) > .mt-2')
				.should('be.visible')
				.and('have.text', 'Você precisa de uma senha para entrar! 🔒');
		});

		it(`${teste}.${++complemento} - Login válido - Email & Senha corretas.`, () =>
		{
			cy.preencheLogin('papito@webdojo.com','katana123')

			cy.contains('button', 'Entrar')
				.click();

			cy.waitUntil(()=>
				cy.get('[data-cy="logged-user"]')
					.should('be.visible'));

			cy.get('[data-cy="logged-user"]')
				.should('be.visible');
		});
	});
});