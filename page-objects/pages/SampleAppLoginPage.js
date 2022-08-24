import { Selector, t } from "testcafe";

export default class SampleAppLoginPage {
    constructor() {
      this.pageIdentifier = 'Sample App';
      this.userNameInput = 'admin';
      this.passwordInput = 'pwd';
      this.successMsgText = 'Welcome, admin!';
      this.logoutMsgText = 'User logged out.'
      this.loginBtn = Selector('#login');
      this.logoutMsg = Selector('#loginstatus').withText(this.logoutMsgText)
      this.successMsg = Selector('#loginstatus').withText(this.successMsgText)
      this.sampleAppPageLink = Selector('a').withText(this.pageIdentifier)
      this.userName = Selector('input[type=text]');
      this.password = Selector('input[type=password]');
      this.ValidationMsgText = 'Invalid username/password';
      this.logoutMsgText = 'User logged out.'
      this.incorrectPasswordInput = '123'
      this.validationsMsg = Selector('#loginstatus').withText(this.ValidationMsgText)
    }
  }