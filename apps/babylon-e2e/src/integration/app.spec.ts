import { getGreeting } from '../support/app.po';

describe('babylon', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to babylon!');
  });
});
