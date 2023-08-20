function routes(app, { urlencodedParser }) {
  app.use('/user', urlencodedParser, require('./user'));
  app.use('/auth', urlencodedParser, require('./auth'));
  app.use('/items', urlencodedParser, require('./items'));
}
module.exports = routes;
