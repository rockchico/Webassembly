# Para fazer o make com o ninja, rodar o seguinte após configurar o CMakeLists.txt
# cmake . -GNinja -DCMAKE_TOOLCHAIN_FILE=/home/francisco/emsdk/emscripten/1.38.30/cmake/Modules/Platform/Emscripten.cmake
#cmake . -GNinja \
#        -DCMAKE_TOOLCHAIN_FILE=/home/francisco/WasmUtils/emsdk/fastcomp/emscripten/cmake/Modules/Platform/Emscripten.cmake \
#        -DEMSCRIPTEN=1 \
#        -DEMSCRIPTEN_FORCE_COMPILERS=1 \
#        -DPRJ=NomeDoProjeto

# https://learnxinyminutes.com/docs/cmake/


set (PROJECT_NAME ${PRJ})

project (${PROJECT_NAME} C CXX) # nome do projeto
cmake_minimum_required(VERSION 3.0)

if(PROJECT_NAME)
  message("Compilando o projeto: ${PROJECT_NAME}")
endif()

if (EMSCRIPTEN)
	
    add_executable (${PROJECT_NAME} ${PROJECT_NAME}.cpp) # arquivo executável

    # após a compilação, copia o arquivo app_tcc_wasm.js para a pasta do projeto web
    #add_custom_command(TARGET ${PROJECT_NAME} POST_BUILD
    #                  COMMAND ${CMAKE_COMMAND} -E copy_if_different
    #                  ${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}.js
    #                  /mnt/d/Francisco/xampp/htdocs/Webassembly/ExemploReact/build/${PROJECT_NAME}.js)
                      
    # após a compilação, copia o arquivo app_tcc_wasm.js para a pasta do projeto web 
    # add_custom_command(TARGET ${PROJECT_NAME} POST_BUILD
    #                  COMMAND ${CMAKE_COMMAND} -E copy_if_different
    #                  ${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}.wasm
    #                  /var/www/html/LinuxDev/Teste-wasm-webworkers/www/${PROJECT_NAME}.wasm)

    # disable eslint on the generated javascript
    # sed -i.old '1s;^;\/* eslint-disable *\/;' ./src/wasm/${JS}
    #add_custom_command(TARGET ${PROJECT_NAME} POST_BUILD
    #                    COMMENT "sed Post Build"
    #                    COMMAND /bin/sed -e '-i.old "1s;^;/* eslint-disable */;" ${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}.js')

endif()

if(UNIX)

    #emcc ./src/wasm/${PROJECT_LOWER}.cpp \
    #    -o ./src/wasm/${PROJECT_LOWER}.js \
    #    -Os --bind -s STRICT=1 -s ALLOW_MEMORY_GROWTH=1 -s MALLOC=emmalloc \
    #    -s EXPORT_ES6=1 \
    #    -s USE_ES6_IMPORT_META=0 \
    #    -s USE_PTHREADS=0 \
    #    -s MODULARIZE=1 \
    #    -s ASSERTIONS=1 \
    #    -s SINGLE_FILE=1 \
    #    -s EXPORT_NAME=${PROJECT_PASCAL}
    
    # flags compilação Emscripten
    SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Os --bind -s STRICT=1 -s ALLOW_MEMORY_GROWTH=1 -s MALLOC=emmalloc ")
    SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -s EXPORT_ES6=1 -s USE_ES6_IMPORT_META=0 -s USE_PTHREADS=0 -s MODULARIZE=1 ")
    SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -s ASSERTIONS=1 -s SINGLE_FILE=1 -s EXPORT_NAME=${PROJECT_NAME}")

    


	if(DEFINED CMAKE_BUILD_TYPE)
		SET(CMAKE_BUILD_TYPE ${CMAKE_BUILD_TYPE})
	else()
	    SET(CMAKE_BUILD_TYPE Release)
    endif()

endif()



