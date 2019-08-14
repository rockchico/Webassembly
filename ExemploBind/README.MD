- documentação
https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/embind.html
https://developers.google.com/web/updates/2018/08/embind?authuser=0


- compilando 
emcc --bind -O3 add.cpp
emcc --bind -O3 process_message.cpp -o process_message.js
emcc --bind -O3 classes.cpp -o classes.js