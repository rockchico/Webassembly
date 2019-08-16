emcc -Os --bind -s STRICT=1 -s ALLOW_MEMORY_GROWTH=1 -s MALLOC=emmalloc -s MODULARIZE=1 -s EXPORT_ES6=1 add.cpp -o add.js



emcc -Os --bind -s STRICT=1 -s ALLOW_MEMORY_GROWTH=1 -s MALLOC=emmalloc -s MODULARIZE=1 -s EXPORT_ES6=1 -s ENVIRONMENT=web process_message.cpp -o process_message.js


emcc -Os -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]' fib.c


emcc fib.c -o fib.js -s EXPORTED_FUNCTIONS="['_fib']" -s EXTRA_EXPORTED_RUNTIME_METHODS="['ccall', 'cwrap']" -s EXPORT_ES6=1 -s MODULARIZE=1
