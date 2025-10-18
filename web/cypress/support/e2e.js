/// <reference types='cypress' /> 

import 'cypress-real-events/support';
import './pages/elementos';
import './commands/commands_00_Settings';
import './commands/01_Tela_Login/login_commands';
import './commands/02_Tela_Consultoria/consultoria_commands'

require('cypress-wait-until');

Cypress.SelectorPlayground.defaults({
    selectorPriority: ['data-cy', 'data-test', 'data-testid', 'id', 'class', 'attributes', 'tag', 'nth-child'],
    preferExact: true
})

if (Cypress.config("hideXHRInCommandLog"))
{
    const app = window.top;

    if (app && !app.document.head.querySelector("[data-hide-command-log-request]"))
    {
        const style = app.document.createElement("style");
        style.innerHTML = ".command-name-request, .command-name-xhr { display: none }";
        style.setAttribute("data-hide-command-log-request", "");
        app.document.head.appendChild(style);
    };
};

// cypress/support/e2e.js
beforeEach(() => {
    const BLOCK = [
    '**/google-analytics.com/**',
    '**/fonts.gstatic.com/**',
    '**/fonts.googleapis.com/**'
    ];
    BLOCK.forEach(p => cy.intercept('GET', p, { statusCode: 204, body: '' }));
});