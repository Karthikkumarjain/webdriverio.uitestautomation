describe("Validate E2E the Blog Page", () => {
  it("Verify the list of recent posts", async () => {
    await browser.url("/");
    await $("#menu-item-490").click();
    
    const totalBlogRecentOnes = await $$(
      "#recent-posts-3 ul li"
    );
    for (const totalBlogRecentOne of totalBlogRecentOnes) {
      const text = await totalBlogRecentOne.getText();
      await expect(text.length).toBeGreaterThan(10);
    }

    await expect(totalBlogRecentOnes.length).toEqual(5);
  });
});
