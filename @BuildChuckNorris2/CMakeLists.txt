# https://www.reddit.com/r/cmake/comments/8ue8q9/how_do_i_setup_sqlite_with_c/

cmake_minimum_required(VERSION 3.10)
set(CMAKE_CXX_STANDARD 11)

project(ChuckNorris)

find_package(Threads REQUIRED)

add_library(sqlite3 STATIC IMPORTED)
set_target_properties(sqlite3
  PROPERTIES
  IMPORTED_LOCATION /mnt/d/Francisco/xampp/htdocs/Webassembly/@BuildChuckNorris2/3rdpart/sqlite/sqlite-amalgamation-3300100/lib/libsqlite3.a
  INTERFACE_INCLUDE_DIRECTORIES /mnt/d/Francisco/xampp/htdocs/Webassembly/@BuildChuckNorris2/3rdpart/sqlite/sqlite-amalgamation-3300100/include
)

include_directories("${PROJECT_SOURCE_DIR}/")

add_library(chucknorris
    include/ChuckNorris.hpp
    src/ChuckNorris.cpp 
)


target_include_directories(
  chucknorris
  PUBLIC
    "include"
)

add_executable(cpp_demo
  src/main.cpp
)

#target_link_libraries(sqlite3 Threads::Threads)
target_link_libraries(chucknorris Threads::Threads)
target_link_libraries(chucknorris sqlite3)
target_link_libraries(cpp_demo chucknorris)