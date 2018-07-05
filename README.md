# OT-Site-Rebuild

The rebuilt site of SBUthetatau.com

built with `node.js`, templating engine used is `jade`

To run the site, open node.js terminal (download from node.js), cd to project directory and type:
```
npm install
node app.js
```

Open browser direct to `localhost:(port num)`, port is usually 3000.

`nodemon` is recommended, restarts the site without needing to do `rs` everytime. To install, do:
```
npm install nodemon
```

Possible improvements that I never got to do:
1. Dynamic loading portfolio instead of inserting HTML directly 
(same logic with brothers and slides, have a JSON file with portfolio information and load portfolio content when rendering index)
2. Make the footer contact form work 
