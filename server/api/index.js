function routes(app, { urlencodedParser }) {
  app.use('/user', urlencodedParser, require('./user'));
  app.use('/auth', urlencodedParser, require('./auth'));
  app.use('/items', urlencodedParser, require('./items'));
  app.use('/card', urlencodedParser, require('./card'));
}
module.exports = routes;
