const app = require('../app');
const mongoose = require('mongoose');

const { DB_USER, DB_PASSWORD, DB_NAME, PORT = 3000 } = process.env;

const DB_HOST = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.mmbmq.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running. Use our API on port: ${PORT}`),
    );
    console.log('Database connection successful');
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
