// //test to launch chrome

// describe("Launch Chrome", () => {
//   it("should launch chrome", async () => {
//     await browser.url("https://practice.sdetunicorns.com/");
//     await expect(browser).toHaveTitle("Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.");
//     await $('#get-started').click();
//     await expect(browser).toHaveUrlContaining("started");

//   });

//   it("get text and validate",async()=>{

//     await browser.url("https://practice.sdetunicorns.com/");
//    const textValue =await $('.elementor-widget-container h1').getText();

//    await expect(textValue).toEqual("Think different. Make different.");

// })

// });

describe("test to launch and check if the service is uo and running", () => {
  it("Should launch succefully and validate the about page", async () => {
    await browser.url("https://practice.sdetunicorns.com/");
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality."
    );
    await $("#menu-item-491").click();
    await expect(browser).toHaveUrlContaining("about");
  });
});
