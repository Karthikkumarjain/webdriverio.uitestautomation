const path = require("path");

describe("Verify upload functionality", () => {
  it("should upload a file", async () => {
    await browser.url("https://the-internet.herokuapp.com/upload");
    const localFilePath = path.join(__dirname, "../data/sample.txt");

    const remoteFilePath = await browser.uploadFile(localFilePath);
    await $("#file-upload").setValue(remoteFilePath);
    await $("#file-submit").click();

    await expect($("h3")).toHaveText("File Uploaded!");
  });
});
