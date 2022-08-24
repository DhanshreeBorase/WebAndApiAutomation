import { Selector, t } from "testcafe";

export default class HiddenBtnPage {
    constructor() {
      this.pageIdentifier = 'Load Delay';
      this.btnIdentifier = 'Button Appearing After Delay';
      this.loadDelayPageLink = Selector('a').withText(this.pageIdentifier);
      this.button = Selector('button').withExactText(this.btnIdentifier);
      this.verifydelaypagelink = Selector('.container').find('h3').withText(this.pageIdentifier)

      this.pageIdentifier = 'Visibility';
      this.hideBtn = Selector('#hideButton')
      this.removedBtn = Selector('#removedButton')
      this.zeroWidthBtn = Selector('#zeroWidthButton')
      this.overlappedBtn = Selector('#overlappedButton')
      this.opacityBtn = Selector('#transparentButton')
      this.visibilityBtn = Selector('#invisibleButton')
      this.displayBtn = Selector('#notdisplayedButton')
      this.offscreenBtnId = 'offscreenButton'
      this.offscreenBtn = Selector('#offscreenButton')
      this.visibilityPageLink = Selector('a').withText(this.pageIdentifier)
      this.opacityBtnVisible = this.opacityBtn.visible
      this.opacityBtnOpacity = this.opacityBtn.getStyleProperty('opacity');
    }
  }