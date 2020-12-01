require('dotenv')
  .config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .catch(e => console.log(e));

mongoose.set('debug', true);

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server started listening on PORT ${PORT}`);
});
