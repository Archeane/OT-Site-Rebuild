/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  	res.render('index', {
    title: 'Home', 'css': ['index.css'], 'js': ['index.js']
  });
};
