// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    // Set layout for about page
    if (page.path.match(/^\/about/) || page.path.match(/^\/menu/)) {
      // Ensure 'black.js' exists in the layouts dir
      page.layout = 'black'
      createPage(page)
    }
    resolve()
  })
}
