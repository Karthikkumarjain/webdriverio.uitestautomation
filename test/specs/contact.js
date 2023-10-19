describe("Test to verify the contact page", () => {
  it("Verify the form fields", async () => {
    await browser.url("/");
    await $("#menu-item-493").click();
    await $("#evf-277-field_ys0GeZISRs-1").setValue("SDET");
    await $("#evf-277-field_LbH5NxasXM-2").addValue("sde@gmail.com");
    await $("#evf-277-field_66FR384cge-3").setValue("1234567890");
    await $("#evf-277-field_yhGx3FOwr2-4").addValue("This is a test message");

    await expect($("#evf-submit-277")).toBeClickable();
    await $("#evf-submit-277").click();

    const finalConfirmationText = await $(
      "//div[@class='everest-forms']/div"
    ).getText();
    await expect(finalConfirmationText).toEqual(
      "Thanks for contacting us! We will be in touch with you shortly"
    );
  });
});
