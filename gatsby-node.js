// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    // Set layout for about page
    if (page.path.match(/^\/about/)) {
      // It's assumed that `landingPage.js` exists in the `/layouts/` directory
      page.layout = 'about'

      // Update the page.
      createPage(page)
    }

    resolve()
  })
}
