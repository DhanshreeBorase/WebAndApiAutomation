import { Selector } from "testcafe";

export default class DynamicIDPage {
    constructor() {
      this.pageIdentifier = 'Dynamic ID';
      this.btnIdentifier = 'Button with Dynamic ID';
      this.dynamicLink = Selector('a').withText(this.pageIdentifier)
      this.btnWithDynamicId = Selector('button').withExactText(this.btnIdentifier);
      this.container = Selector('.container').find('h3').withText(this.pageIdentifier);
    }
  }


  