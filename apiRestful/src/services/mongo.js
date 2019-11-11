const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/ecommerce-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
