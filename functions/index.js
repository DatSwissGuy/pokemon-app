const functions = require('firebase-functions');

const expressApp = require(`${process.cwd()}/dist/server/main`).app();

exports.ssr = functions
  .region('us-central1')
  .runWith({'timeoutSeconds': 60, 'memory': '1GB'})
  .https
  .onRequest(expressApp);

