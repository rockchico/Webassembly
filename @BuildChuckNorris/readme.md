https://dmerej.info/blog/post/chuck-norris-part-1-cmake-ninja/

# Compile the .cpp file into a .o
$ g++ -c -I include/ src/ChuckNorris.cpp -o libchucknorris.o
# Create an archive containing the .o
$ ar cr libchucknorris.a libchucknorris.o
# Compile main.cpp into main.o
$ g++ -c -I include/ src/main.cpp -o main.o
# Tell g++ to link everything into an executable
$ g++ main.o libchucknorris.a -o cpp_demo
# Run the executable we've just built:
$./cpp_demo
Chuck Norris can slam a revolving door.