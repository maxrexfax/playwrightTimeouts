import { test, expect } from '@playwright/test';

test.describe('Group of access tests', () => {
test('Test - try to find appended div on local site', async ({ page }) => {
  await page.goto('http://tests.loc/');
  test.slow();

  // Click the get started link.
  const mainDiv = await page.getByTestId('div-id-main');
  console.log("await mainDiv.count():" + await mainDiv.count());
  expect (await mainDiv.count() > 0).toBeTruthy();


  const firstDiv = await mainDiv.getByTestId('div-id-first');
  console.log("await firstDiv.count():" + await firstDiv.count());
  expect (await firstDiv.count() > 0).toBeTruthy();


  const secondDiv = await mainDiv.getByTestId('div-id-second');
  console.log("await secondDiv.count():" + await secondDiv.count());
  expect (await secondDiv.count() > 0).toBeTruthy();

  // await page.waitForSelector('data-testid="div-id-third"', {timeout: 10000});// так не работает
  //await page.waitForTimeout(5000);//так работает
  const thirdDiv = await mainDiv.getByTestId('div-id-third');
  console.log("await thirdDiv.count():" + await thirdDiv.count());
  expect (await thirdDiv.count() > 0).toBeTruthy();
  await page.waitForTimeout(3000);
});

//вторая идея для видео - попытка кликнуть на кнопке, которая появляется
// третья идея - попытка кликнуть по кнопке, которая disabled, enabled по таймауту.
// это для проверки ждет ли кликер состояние кликабельности или нет


test('Test - try to click buttons after append on local site', async ({ page }) => {
  await page.goto('http://tests.loc/buttons1.html');
  test.slow();

  // Click the get started link.
  const mainDiv = await page.getByTestId('div-id-main');
  console.log("await mainDiv.count():" + await mainDiv.count());
  expect (await mainDiv.count() > 0).toBeTruthy();

  const firstButton = await mainDiv.getByTestId('button-id-first');
  console.log("await firstButton.count():" + await firstButton.count());
  expect (await firstButton.count() > 0).toBeTruthy();
  await firstButton.click({timeout: 5000});

  const secondButton = await mainDiv.getByTestId('button-id-second');
  console.log("await secondButton.count():" + await secondButton.count());
  expect (await secondButton.count() > 0).toBeTruthy();
  await secondButton.click({timeout: 5000});

  // await page.waitForTimeout(3000);
   // await page.waitForSelector('data-testid="button-id-third"', {timeout: 10000});
  const thirdButton = await mainDiv.getByTestId('button-id-third');
  console.log("await thirdButton.count():" + await thirdButton.count());
  expect (await thirdButton.count() > 0).toBeTruthy();
  await thirdButton.click({timeout: 5000});
  await page.waitForTimeout(3000);
});


test('Test - try to click buttons after unhiding on local site', async ({ page }) => {
  await page.goto('http://tests.loc/buttons2.html');
  test.slow();

  // Click the get started link.
  const mainDiv = await page.getByTestId('div-id-main');
  console.log("await mainDiv.count():" + await mainDiv.count());
  expect (await mainDiv.count() > 0).toBeTruthy();

  const firstButton = await mainDiv.getByTestId('button-id-first');
  console.log("await firstButton.count():" + await firstButton.count());
  expect (await firstButton.count() > 0).toBeTruthy();
  await firstButton.click({timeout: 5000});

  const secondButton = await mainDiv.getByTestId('button-id-second');
  console.log("await secondButton.count():" + await secondButton.count());
  expect (await secondButton.count() > 0).toBeTruthy();
  await secondButton.click({timeout: 5000});

  const thirdButton = await mainDiv.getByTestId('button-id-third');
  console.log("await thirdButton.count():" + await thirdButton.count());
  expect (await thirdButton.count() > 0).toBeTruthy();
  await thirdButton.click({timeout: 5000});
  await page.waitForTimeout(3000);
});
});

