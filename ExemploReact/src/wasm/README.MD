emcc -Os --bind -s STRICT=1 -s ALLOW_MEMORY_GROWTH=1 -s MALLOC=emmalloc -s MODULARIZE=1 -s EXPORT_ES6=1 add.cpp -o add.js



emcc -Os --bind -s STRICT=1 -s ALLOW_MEMORY_GROWTH=1 -s MALLOC=emmalloc -s MODULARIZE=1 -s EXPORT_ES6=1 -s ENVIRONMENT=web process_message.cpp -o process_message.js
