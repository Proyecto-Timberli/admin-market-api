const server = require('./src/app.js');
const { conn} = require('./src/db.js');
const mokeo = require('./Mokeo.js');


const config = { force: true }

conn.sync(config).then(() => {
  server.listen(process.env.PORT, () => {
    console.log('%s listening at '+process.env.PORT);
  })
}).then(()=>{
  mokeo()
});


