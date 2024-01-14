export class Selectors {
    SignInPopUp =  '//span[text()="Sign in or register"]';
    CloseSignInPopUp = '//button[@aria-label="Dismiss sign-in info."]//span[@class="eedba9e88a"]';
    SignInButton = '//a[@data-testid="header-sign-in-button"]//span[text()="Sign in"]';
    EmailField = '//input[@type="email"]';
    PasswordField = '//div//input[@type="password"]';
    ContinueWithEmaiButton = '//span[text()="Continue with email"]';
    SignInButtonForLogin = '//span[text()="Sign in"]';

    // Test Data //TODO: Implement external data source  JSON to drive your login and booking tests.
    Email = 'xiwiwa3524@regapts.com';
    Password = '-*UYHPVc3kb5S7g{enter}';

}
export const selectors = new Selectors();
