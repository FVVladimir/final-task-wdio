describe('tests form', () => {
    beforeEach( async () => {
        await browser.url( 'https://www.saucedemo.com/')
    })

    it('chack page title', async () => {
        const title = await browser.getTitle();
        console.log(title)
    })
})