const elements = require('/Users/haniapn/Documents/mobile-automation/test/pageobjects/page.js');

describe('Open App',() => {

    it('failled new user because blank height when filling out the form', async() => {
        driver.launchApp();
        await elements.openApp.click();
        await elements.nameInput.setValue('Gagal');
        await elements.weightInput.setValue("50");
        await elements.selectGender.click();
        await elements.btnNext.click();
        await expect(await elements.expectErrorInput).toBeExisting();
        driver.closeApp();
    }),

    it('success add new user', async() => {
        await elements.openApp.click();
        await elements.nameInput.setValue('hania');
        await elements.weightInput.setValue('50');
        await elements.heightInput.setValue('160');
        await elements.selectGender.click();
        await elements.btnNext.click();
        await elements.selectActivity.click();
        await elements.btnSelesai.click();
        await expect(await elements.expectToHome).toHaveText('Hi,');
        driver.closeApp();
    })
})
