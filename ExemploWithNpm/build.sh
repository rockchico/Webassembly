#set -e
eval $@

export OPTIMIZE="-Os"
export LDFLAGS="${OPTIMIZE}"
export CFLAGS="${OPTIMIZE}"
export CXXFLAGS="${OPTIMIZE}"

echo "============================================="
echo "Compiling libvpx"
echo "============================================="
test -n "$SKIP_LIBVPX" || (
    rm -rf build-vpx || true
    mkdir build-vpx
    cd build-vpx
    emconfigure ../node_modules/libvpx/configure --target=generic-gnu
    emmake make
)
echo "============================================="
echo "Compiling libvpx done"
echo "============================================="

echo "============================================="
echo "Compiling wasm bindings"
echo "============================================="
(
    # Compile C/C++ code
    emcc ${OPTIMIZE} \
        --bind -s STRICT=1 \
        -s ALLOW_MEMORY_GROWTH=1 \
        -s MALLOC=emmalloc \
        -s MODULARIZE=1 \
        -s EXPORT_ES6=1 \
        src/my-module.cpp \
        -o my-module.js \
        -I ./node_modules/libvpx \
        build-vpx/libvpx.a

    # Create output folder
    #mkdir -p dist
    # Move artifacts
    #mv my-module.* dist
)
echo "============================================="
echo "Compiling wasm bindings done"
echo "============================================="