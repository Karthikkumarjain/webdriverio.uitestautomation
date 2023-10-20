import HomePage from "../pages/home-page";

describe("Launch Chrome", () => {
  it("should launch chrome", async () => {
    await HomePage.open();
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality."
    );
    // await $("#get-started").click();
    HomePage.btnGetStarted.click();
    await expect(browser).toHaveUrlContaining("started");
  });

  it.only("get text and validate", async () => {
    await HomePage.open();
    const textValue = await HomePage.elementWidget.getText();

    await expect(textValue).toEqual("Think different. Make different.");
  });
});

describe("test to launch and check if the service is uo and running", () => {
  it("Should launch succefully and validate the about page", async () => {
    await HomePage.open();
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality."
    );
    await $("#menu-item-491").click();
    await expect(browser).toHaveUrlContaining("about");
  });
});
