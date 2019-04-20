// start js, not es6
require("babel-register")({
    presets: [
        ["env", {
            "targets": {
                "node": true
            }
        }]
    ]
});

// Import the rest of our application.
module.exports = require('./a.js');
