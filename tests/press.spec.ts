import { Page, expect } from '@playwright/test';
import { test } from "./fixtures/press.js"



const buttonTypes = ["button", "div"] as const;

test.describe("Press events", () => {
    const eventTypes = ["Clicking a", "Pressing Enter on a", "Releasing the spacebar on a"] as const;

    // We're testing presses on <button>s and <div>s
    for (const buttonType of buttonTypes) {
        
        // First, test clicking in detail.
        test(`Clicking must release over the ${buttonType} itself`, async ({ page, press, shared: { getCounter, install, run, locator, resetCounter } }) => {
            await install("Press", "onPress", (e) => { window.increment(); });
            const button = press[buttonType];

            // This is our control test -- click the button normally.
            await button.hover();
            await page.mouse.down();
            expect(getCounter()).toBe(0);
            await page.mouse.up();
            expect(getCounter()).toBe(1);

            // If we start clicking a button but hover off it, press should not fire,
            // even if we hover back onto it.
            await page.mouse.down();
            expect(getCounter()).toBe(1);
            await page.mouse.move(500, 500, { steps: 10 });
            await button.hover();
            await page.mouse.up();
            expect(getCounter()).toBe(1);
        });


        // Test more generally the different methods of pressing: clicking/pointer, space, and enter.
        for (const eventType of eventTypes) {

            test(`${eventType} ${buttonType} fires`, async ({ page, press, shared: { getCounter, resetCounter, install, run, locator } }) => {
                const button = press[buttonType];
                resetCounter();

                await install("Press", "onPress", (e) => { window.increment(); });

                expect(getCounter(), "We haven't clicked the button, so the counter should still be 0").toBe(0);

                switch (eventType) {
                    case "Clicking a":
                        // We click a button and press occurs immediately
                        await button.click({ force: true });
                        expect(getCounter()).toBe(1);
                        break;
                    case "Pressing Enter on a":
                        // We press Enter on a button and press occurs immediately
                        await button.focus();
                        await page.keyboard.down("Enter");
                        expect(getCounter()).toBe(1);
                        await page.keyboard.up("Enter");
                        expect(getCounter()).toBe(1);
                        break;
                    case "Releasing the spacebar on a":
                        // We press the spacebar on a button and press occurs on key up
                        await button.focus();
                        await page.keyboard.down("Space");
                        expect(getCounter()).toBe(0);
                        await page.keyboard.up("Space");
                        expect(getCounter()).toBe(1);
                        break;
                }
            });

        }
    }
});

test.describe("Pressing and long pressing", () => {
    
    for (const buttonType of buttonTypes) {
        test(`A ${buttonType} can be "being pressed"`, async ({ page, press, shared: { getCounter, resetCounter, install, generateText, locator, run } }) => {
            resetCounter();
            await install("Press", "onPress", (e) => { window.increment(); });

            const button = press[buttonType];
            await button.focus();
            await page.keyboard.down("Space");
            expect(getCounter()).toBe(0);
            await expect(button).toHaveAttribute("data-pressing", "true");
            await page.keyboard.up("Space");
            expect(getCounter()).toBe(1);
            await expect(button).not.toHaveAttribute("data-pressing", "true");
        });

        test(`Long pressing a ${buttonType}`, async ({ page, press, shared: { getCounter, install, run, resetCounter, generateText, locator } }) => {
            resetCounter();
            await install("Press", "onPress", (e) => { window.increment(); });

            const button = press[buttonType];
            await button.hover();
            await page.mouse.down();
            expect(getCounter()).toBe(0);
            await expect(button).not.toHaveAttribute("data-long-press", "true");
            await expect(button).toHaveAttribute("data-long-press", "true");
            await page.mouse.up();
            await expect(button).not.toHaveAttribute("data-long-press", "true");
            expect(getCounter()).toBe(1);
        });
    }
});
/*
test.describe("Roles are correct", () => {

    for (const buttonType of buttonTypes) {


        test(`${capitalize(buttonType)}`, async ({ page, button: { buttons }, shared: { getCounter, resetCounter, install, run, locator } }) => {
            //for (const [buttonType, button] of Object.entries(buttons)) {
            const button = buttons[buttonType];
            resetCounter();

            // Note to self: This needs to be inside the loop for...what reason exactly?
            // Are promises cached or something? This is just in testing it seems...but I don't know exactly where...
            await install("Button", "onPress", (e) => { window.increment(); });

            if (buttonType != "button")
                await expect(button).toHaveAttribute("role", "button");
            else
                await expect(button).not.toHaveAttribute("role", "button");
        });
    }
})
*/


function capitalize(buttonType: string) {
    return buttonType.substring(0, 1).toUpperCase() + buttonType.substring(1);
}
// test('Disabled during an async press', async ({ page, button: { getCounter, button }, shared: { install, run, locator } }) => {

//     // When clicking a button with a sync handler, it should not become disabled in any way.
//     await install("Button", "onPress", (e) => { console.log(e); if (!e) return new Promise(resolve => setTimeout(resolve, 3000)) });
//     await button.click();
//     await new Promise(resolve => setTimeout(resolve, 250));
//     await expect(button).not.toBeDisabled();

//     // When clicking a button with an async handler, it should become disabled in the way specified by the user.
//     await run("Button", "setDisabledType", "hard");
//     await install("Button", "onPress", (e) => { console.log(e); if (e) return new Promise(resolve => setTimeout(resolve, 3000)) });
//     await button.click();
//     await new Promise(resolve => setTimeout(resolve, 250));
//     await expect(button).toHaveAttribute("disabled", /.*/);
//     await expect(button).not.toHaveAttribute("aria-disabled", /.*/);

//     await expect(button).not.toHaveAttribute("disabled", /.*/);
//     await expect(button).not.toHaveAttribute("aria-disabled", /.*/);

//     await run("Button", "setDisabledType", "soft");
//     await install("Button", "onPress", (e) => { if (e) return new Promise(resolve => setTimeout(resolve, 3000)) });
//     await button.click();
//     await new Promise(resolve => setTimeout(resolve, 250));
//     await expect(button).toHaveAttribute("aria-disabled", /.*/);
//     await expect(button).not.toHaveAttribute("disabled", /.*/);

//     await expect(button).not.toHaveAttribute("aria-disabled", /.*/);
//     await expect(button).not.toHaveAttribute("disabled", /.*/);
// });



// test('While disabled cannot be pressed', async ({ page, button: { getCounter, button }, shared: { install, locator, run } }) => {

//     const types = ["hard", "soft"] as const;

//     for (const type of types) {
//         await run("Button", "setDisabled", true);
//         await run("Button", "setDisabledType", type);
//         await expect(getCounter()).toBe(0);
//         await install("Button", "onPress", (e) => { window.increment(); });
//         await button.dispatchEvent('click');
//         await new Promise(resolve => setTimeout(resolve, 50));
//         await expect(button).toBeDisabled();
//         await expect(getCounter()).toBe(0);
//     }
// });

// test('All press event types work', async ({ page, button: { getCounter, button }, shared: { run, install, locator } }) => {
//     await install("Button", "onPress", () => { window.increment(); });

//     let c = 0;

//     await expect(getCounter()).toBe(c);     // Sanity check
//     await button.click();
//     await expect(getCounter()).toBe(++c);   // Clicked -- counter should change immediately

//     // The button should be focused now, so we can use keyboard controls.
//     await expect(button).toBeFocused();
//     await page.keyboard.down("Enter");
//     await expect(getCounter()).toBe(++c);   // Counter should change on keydown for Enter
//     await page.keyboard.up("Enter");
//     await expect(getCounter()).toBe(c);
//     await page.keyboard.down("Space");
//     await expect(getCounter()).toBe(c);     // Counter should change on keyup for Space
//     await page.keyboard.up("Space");
//     await expect(getCounter()).toBe(++c);
// });


