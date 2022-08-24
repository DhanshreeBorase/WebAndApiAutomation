import { Selector, t } from "testcafe";

export default class LoadDelayPage {
    constructor() {
      this.pageIdentifier = 'Load Delay';
      this.btnIdentifier = 'Button Appearing After Delay';
      this.loadDelayPageLink = Selector('a').withText(this.pageIdentifier);
      this.button = Selector('button').withExactText(this.btnIdentifier);
      this.container = Selector('.container').find('h3').withText(this.pageIdentifier);
    }
  }
