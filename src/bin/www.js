#!/usr/bin/env node

/*
 * All the services start goes here
 */

import app from '../app';
app.set('port', process.env.PORT || 5000)

let server = app.listen(app.get('port'), async function () {
  console.log('Express server listening on port ' + server.address().port)
  
})

