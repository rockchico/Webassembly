# Para fazer o make com o ninja, rodar o seguinte após configurar o CMakeLists.txt
# cmake . -GNinja -DCMAKE_TOOLCHAIN_FILE=/home/francisco/emsdk/emscripten/1.38.30/cmake/Modules/Platform/Emscripten.cmake
# cmake . -GNinja -DCMAKE_TOOLCHAIN_FILE=/home/francisco/WasmUtils/emsdk/fastcomp/emscripten/cmake/Modules/Platform/Emscripten.cmake -DEMSCRIPTEN=1 -DEMSCRIPTEN_FORCE_COMPILERS=1

project (AppWasm C CXX) # nome do projeto
cmake_minimum_required(VERSION 3.0)

if (EMSCRIPTEN)
	
    add_executable (app_wasm processmessage.cpp) # arquivo executável

    # após a compilação, copia o arquivo app_tcc_wasm.js para a pasta do projeto web
    add_custom_command(TARGET app_wasm POST_BUILD
                      COMMAND ${CMAKE_COMMAND} -E copy_if_different
                      ${CMAKE_CURRENT_BINARY_DIR}/app_wasm.js
                      /mnt/d/Francisco/xampp/htdocs/Webassembly/ExemploReact/src/wasm/app_wasm.js)
                      
    # após a compilação, copia o arquivo app_tcc_wasm.js para a pasta do projeto web
    # add_custom_command(TARGET app_wasm POST_BUILD
    #                  COMMAND ${CMAKE_COMMAND} -E copy_if_different
    #                  ${CMAKE_CURRENT_BINARY_DIR}/app_wasm.wasm
    #                  /var/www/html/LinuxDev/Teste-wasm-webworkers/www/app_wasm.wasm)

endif()

if(UNIX)
    
    # flags compilação Emscripten
    SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Os --bind -s STRICT=1 -s ALLOW_MEMORY_GROWTH=1 -s MALLOC=emmalloc ")
    SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -s EXPORT_ES6=1 -s USE_ES6_IMPORT_META=0 -s USE_PTHREADS=0 -s MODULARIZE=1 ")
    SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -s SINGLE_FILE=1 -s EXPORT_NAME=app_wasm")

    


	if(DEFINED CMAKE_BUILD_TYPE)
		SET(CMAKE_BUILD_TYPE ${CMAKE_BUILD_TYPE})
	else()
	    SET(CMAKE_BUILD_TYPE Release)
    endif()

endif()



