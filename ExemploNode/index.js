// https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/

/**
 * cd /opt
 * git clone https://github.com/emscripten-core/emsdk.git
   cd emsdk/
   ./emsdk install latest
   ./emsdk activate lates
   ./emsdk activate latest
   source ./emsdk_env.sh
 * 
 * 
 * emcc src/fib.c -O3 -s WASM=1 -s SIDE_MODULE=1 -s EXPORTED_FUNCTIONS='["_fib"]' -o src/fib.wasm
 * 
 * 
 * 
 *git init
  git add *.*
  git commit -m "first commit"
  git remote add origin https://github.com/rockchico/TutoNodejs.git
  git push -u origin master
 *  
 * 
 *  */


const express = require('express');
const app = express();
const fs = require('fs');
const util = require('util');







app.use((request, response, next) => {
  console.log(request.headers)
  next()
})

app.use((request, response, next) => {
  
  var source = fs.readFileSync('./src/fib.wasm');
  var typedArray = new Uint8Array(source);

  const env = {
    __memory_base: 0,
    __table_base: 0,
    memory: new WebAssembly.Memory({
      initial: 256
    }),
    table: new WebAssembly.Table({
      initial: 0,
      element: 'anyfunc'
    })
  }
  
  WebAssembly.instantiate(typedArray, {
    env: env
    }).then(result => {
      //console.log(util.inspect(result, true, 0));

      let fib = result.instance.exports._fib(3);
      console.log(fib);

      request.chance = Math.random()
      request.fib = fib

      next()

    }).catch(e => {
    // error caught
    console.log(e);
  });



  
})

app.get('/', (request, response) => {
  response.json({
    chance: request.chance,
    fib: request.fib
  })
})

app.listen(3000)