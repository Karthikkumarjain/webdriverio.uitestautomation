import allureReporter from "@wdio/allure-reporter";
describe("Test to verify the about page", () => {
  it("Verify the headings H3 content", async () => {
    allureReporter.addSeverity("Critical");
    allureReporter.addFeature("About Page");
    const expectedHeadings = [
      "Our Story",
      "Our Mission",
      "Meet Our Team",
      "Have Any Questions?",
    ];
    const actualTextHeadings = [];
    await browser.url("/");
    await $("#menu-item-491").click();
    await expect(browser).toHaveUrlContaining("about");
    const h3Headers = await $$(".elementor-widget-container h3");
    for (const heading of h3Headers) {
      actualTextHeadings.push(await heading.getText());
    }
    console.log(actualTextHeadings);

    //    await browser.pause(5000);
    //    await browser.debug();
    await expect(expectedHeadings).toEqual(actualTextHeadings);
  });
});
