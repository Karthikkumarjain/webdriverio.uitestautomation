import ContactPage from "../pages/contact-page";

describe("Test to verify the contact page", () => {
  it("Verify the form fields", async () => {
    await browser.url("/");
    await ContactPage.contactPageButton.click();
    await ContactPage.createAndSubmitForm();

    const finalConfirmationText = await $(
      "//div[@class='everest-forms']/div"
    ).getText();
    await expect(finalConfirmationText).toEqual(
      "Thanks for contacting us! We will be in touch with you shortly"
    );
  });
});
