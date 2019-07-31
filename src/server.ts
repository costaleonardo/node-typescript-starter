import errorHandler from 'errorhandler';

import app from './app';

app.use(errorHandler());

const server = app.listen(app.get('port'), () => {
  console.log(`App is running at http://localhost:${app.get('port')}`);
});