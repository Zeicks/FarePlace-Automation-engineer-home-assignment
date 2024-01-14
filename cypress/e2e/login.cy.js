import 'cypress-wait-until';
import { selectors } from './common/selectors';

describe('Login Tests', () => {
    it('Successfully login with valid credentials', () => {
        cy.visit('https://www.booking.com');
        cy.clearCookies();
        
        //TODO: Implements logic: if pop up does not appear go to authorization steps
        cy.waitUntil(() =>
            cy.xpath(selectors.SignInPopUp).should('be.visible'),
            {
                errorMsg: 'Element not visible within the specified time',
                timeout: 10000, 
                interval: 300 
            }
       );
      
         cy.xpath(selectors.CloseSignInPopUp).click();    
         cy.xpath(selectors.SignInButton).click(); 
         cy.xpath(selectors.EmailField).type(selectors.Email); 
         cy.xpath(selectors.ContinueWithEmaiButton).click().wait(1000);
         cy.xpath(selectors.PasswordField).type(selectors.Password,{ force: true }); 
         cy.xpath(selectors.SignInButtonForLogin).click(); 
         cy.url().should('include', '/id=304142'); 
     });

});
