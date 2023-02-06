const EMAIL = 'user@domain.com' // Could use process.env.EMAIL for env var
const PASSWORD = 'xxx' // Could use process.env.PASSWORD for env var

/*
 * @param {import('puppeteer').Browser} browser
 * @param { {url: string, options: LHCI.CollectCommand.Options} } context
 */
module.exports = async (browser, { url }) => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 600 });
  await page.goto(url);

  // This login script is run for every URL so check if the user is already authenticated and if so then
  // return early without doing anything.
  const userDropdownElement = await page.$('#userDropdown');

  if (userDropdownElement !== null) {
    await page.close();
    return;
  }

  // Enter the username and password and login
  const emailInput = await page.$('#email');
  await emailInput.type(EMAIL);

  const passwordInput = await page.$('#current-password');
  await passwordInput.type(PASSWORD);

  const loginButton = await page.$('button[value=login]');
  await loginButton.click();

  await page.waitForNavigation({ waitUntil: 'networkidle2' }) // No more then 2 network requests for half a second
  await page.close();
};