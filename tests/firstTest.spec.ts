import {test} from '@playwright/test'

test.describe('test suite1 ', () => {

    test('the first test', async ({page}) => {
        console.log('Test #1 Started')
        await page.goto('https://www.netflix.com/')
        await page.click('text=Sign In')
        console.log('Test #1 Completed')
    })    
    
    test('the second test', () => {
        console.log('Test #2 Started')
        console.log('Test #2 Completed')
    })
})



