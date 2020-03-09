 // Require modules
 const path = require('path');
 const dragQueen = require('./data/dragQueens')
 	
 // Create the Express app
  const express = require('express');

 	
 // Configure the app (app.set)
 	const app = express();
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'view'));
 	
 // Mount middleware (app.use)
 	
 	
// Mount routes
app.get('/dragQueens', function(req, res) {
    res.render('index', {
    Queen: dragQueen.getQueen()
  });
});
 	
 // Tell the app to listen on port 3000
 app.listen(3000, function() {
   console.log('Listening on port 3000');
 });
