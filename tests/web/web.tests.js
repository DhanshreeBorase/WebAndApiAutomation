import DynamicIDPage from '../../page-objects/pages/DynamicIdPage';
import LoadDelayPage from '../../page-objects/pages/LoadDelayPage';
import HiddenBtnPage from '../../page-objects/pages/HiddenBtnPage';
import SampleAppLoginPage from '../../page-objects/pages/SampleAppLoginPage';
import { ClientFunction } from 'testcafe';

const dynamicIdPage = new DynamicIDPage();
const loadDelayPage = new LoadDelayPage();
const hiddenBtnPage = new HiddenBtnPage();
const sampleAppLoginPage = new SampleAppLoginPage();

fixture('web tests')
  .beforeEach(async t => {
    await t.navigateTo('http://www.uitestingplayground.com/')
    await t.maximizeWindow();
  })

test('should be able to click button with dynamic id', async t => {
  await t.click(dynamicIdPage.dynamicLink);
  await t.expect(dynamicIdPage.container.exists)
    .ok('dynamic id page not loaded');

  await t.expect(dynamicIdPage.btnWithDynamicId.exists).ok('button with dynamic id not visible');
  await t.click(dynamicIdPage.btnWithDynamicId);
})

test('should page with load delay', async t => {

  await t.click(loadDelayPage.loadDelayPageLink);
  await t.expect(loadDelayPage.container.exists)
    .ok('load delay page not loaded');
  await t.expect(loadDelayPage.button.exists).ok('button on delay page not visible');
  await t.click(loadDelayPage.button);
})

test('buttons should not be visible on page when hidden', async t => {
  await t.click(hiddenBtnPage.visibilityPageLink);

  await t.expect(hiddenBtnPage.removedBtn.exists)
    .ok('Removed button is not visible')
  await t.expect(hiddenBtnPage.zeroWidthBtn.visible)
    .ok('Zero width button is not visible')
  await t.expect(hiddenBtnPage.opacityBtn.exists)
    .ok('Opacity button is not visible');
  await t.expect(hiddenBtnPage.visibilityBtn.visible)
    .ok('Visibility button is not visible')
  await t.expect(hiddenBtnPage.displayBtn.exists)
    .ok('Display button is not visible');
  await t.expect(hiddenBtnPage.offscreenBtn.exists)
    .ok('Offscreen button is not visible');

  await t.expect(hiddenBtnPage.hideBtn.exists)
    .ok('Hide button is not visible')
  await t.click(hiddenBtnPage.hideBtn);

  await t.expect(hiddenBtnPage.hideBtn.exists)
    .ok('Hide button is not visible')
  await t.expect(hiddenBtnPage.removedBtn.exists)
    .notOk('Removed button is visible')
  await t.expect(hiddenBtnPage.zeroWidthBtn.visible)
    .notOk('Zero width button is visible')
  await t.expect(hiddenBtnPage.opacityBtnVisible && hiddenBtnPage.opacityBtnOpacity > 0)
    .notOk('Opacity button should not be visible');
  await t.expect(hiddenBtnPage.visibilityBtn.visible)
    .notOk('Visibility button should not be visible')
  await t.expect(hiddenBtnPage.displayBtn.visible)
    .notOk('Display button should not be visible');

  const isElementInViewport = ClientFunction((elementId) => {
    const getBoundValues = document.getElementById(elementId).getBoundingClientRect();

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    return getBoundValues.bottom > 0
      && getBoundValues.right > 0
      && getBoundValues.left < (windowWidth || document.documentElement.clientWidth)
      && getBoundValues.top < (windowHeight || document.documentElement.clientHeight);
  })

  await t.expect(isElementInViewport(hiddenBtnPage.offscreenBtnId))
    .eql(false, 'Offscreen button is visible');
})

test('user should be able to login', async t => {
  await t.click(sampleAppLoginPage.sampleAppPageLink)
  await t.expect(sampleAppLoginPage.logoutMsg.exists).ok('User logged out msg not available')
  await t.typeText(sampleAppLoginPage.userName, sampleAppLoginPage.userNameInput)
  await t.typeText(sampleAppLoginPage.password, sampleAppLoginPage.passwordInput)
  await t.click(sampleAppLoginPage.loginBtn)
  await t.expect(sampleAppLoginPage.successMsg.exists).ok('Login is not successful.');
})

test('user should not be able to login', async t => {
  await t.click(sampleAppLoginPage.sampleAppPageLink)
  await t.expect(sampleAppLoginPage.logoutMsg.exists).ok('User logged out msg not available')
  await t.typeText(sampleAppLoginPage.userName, sampleAppLoginPage.userNameInput)
  await t.typeText(sampleAppLoginPage.password, sampleAppLoginPage.incorrectPasswordInput)
  await t.click(sampleAppLoginPage.loginBtn)
  await t.expect(sampleAppLoginPage.validationsMsg.exists).ok('Login is successful.');
})