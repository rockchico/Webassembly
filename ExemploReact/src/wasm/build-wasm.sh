#!/usr/bin/env bash
PROJECT_LOWER=webp

#HTML=$PROJECT_LOWER-react/src/${PROJECT_LOWER}.html
JS=${PROJECT_LOWER}.js
WASM=${PROJECT_LOWER}.wasm
#WASM_PUBLIC="./build/static/js/${PROJECT_LOWER}.wasm"
WASM_PUBLIC="./build/${PROJECT_LOWER}.wasm"
WASM_FILENAME=${PROJECT_LOWER}.wasm
WASM_LOOKUP='wasmBinaryFile = locateFile'

echo "============================================="
echo "Compiling Wasm"
echo "============================================="
source /home/francisco/WasmUtils/emsdk/emsdk_env.sh

DIRETORIO="$(pwd)"
echo ${DIRETORIO}

cd ./src/wasm/

cmake . -GNinja \
        -DCMAKE_TOOLCHAIN_FILE=/home/francisco/WasmUtils/emsdk/fastcomp/emscripten/cmake/Modules/Platform/Emscripten.cmake \
        -DEMSCRIPTEN=1 \
        -DEMSCRIPTEN_FORCE_COMPILERS=1 \
        -DPRJ=${PROJECT_LOWER}

ninja


# adciciona o /* eslint-disable */ na primeira linha do .js



OUTPUT="$(sed -n '/eslint/p;q' ./${JS})"
#echo "${OUTPUT}"

if [ -z "$OUTPUT" ]
then
      echo "insere eslint"
      sed -i.old '1s;^;\/* eslint-disable *\/;' ./${JS}
else
      echo "remove linha e insere eslint"
      sed -i '1d' ./${JS} # remove 1° linha
      sed -i '1s/^/\n /' ./${JS} # insere \n na primeira linha
      sed -i.old '1s;^;\/* eslint-disable *\/;' ./${JS} # inere eslin na primeira linha
fi



echo "============================================="
echo "Compiling Wasm done."
echo "============================================="