- Referência
https://developers.google.com/web/updates/2018/03/emscripting-a-c-library?authuser=0

- BIBLIOTECA webp
git clone https://github.com/webmproject/libwebp

- compilando

# emcc -O3 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]' -I libwebp webp.c libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c

- adicionar mime type wasm no apache

    AddType application/wasm .wasm