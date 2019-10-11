
set (PROJECT_NAME ${PRJ})

project (${PROJECT_NAME} C CXX) # nome do projeto
cmake_minimum_required(VERSION 3.0)

if(PROJECT_NAME)
  message("Compilando o projeto: ${PROJECT_NAME}")
endif()

if (EMSCRIPTEN)

    
    file(GLOB SOURCE_FILES 
        libwebp/src/dec/*.c
        libwebp/src/dsp/*.c
        libwebp/src/demux/*.c
        libwebp/src/enc/*.c
        libwebp/src/mux/*.c
        libwebp/src/utils/*.c
    )


    include_directories(. ${CMAKE_SOURCE_DIR}/libwebp)
	
    add_executable (${PROJECT_NAME} ${PROJECT_NAME}.cpp ${SOURCE_FILES}) # arquivo executável

    target_include_directories(${PROJECT_NAME} PRIVATE
        ../libwebp
    )

    # flags compilação Emscripten
    SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Os --bind -s STRICT=1 -s ALLOW_MEMORY_GROWTH=1 -s MALLOC=emmalloc ")
    SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -s EXPORT_ES6=1 -s USE_ES6_IMPORT_META=0 -s USE_PTHREADS=0 -s MODULARIZE=1 ")
    SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -s ASSERTIONS=1 -s SINGLE_FILE=1 -s EXPORT_NAME=${PROJECT_NAME} ")

    #SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Os --bind -s STRICT=1 -s ALLOW_MEMORY_GROWTH=1 -s MALLOC=emmalloc ")
    #SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -s USE_PTHREADS=0 -s ")
    #SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -s ASSERTIONS=1 -s EXPORT_NAME=${PROJECT_NAME} ")

    #SET(CMAKE_C_FLAGS "${CMAKE_CXX_FLAGS} -O3 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s EXTRA_EXPORTED_RUNTIME_METHODS=[\"cwrap\"]")

    

	if(DEFINED CMAKE_BUILD_TYPE)
		SET(CMAKE_BUILD_TYPE ${CMAKE_BUILD_TYPE})
	else()
	    SET(CMAKE_BUILD_TYPE Release)
    endif()

endif()