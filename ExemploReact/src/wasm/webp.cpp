#include <emscripten/bind.h>
#include "libwebp/src/webp/encode.h"

using namespace emscripten;

double add(double a, double b) {
  return a + b;
}

std::string exclaim(std::string message) {
  return message + "!";
}

//extern "C" {
  int version() {
    return WebPGetEncoderVersion();
  }
//}


EMSCRIPTEN_BINDINGS(my_module) {
  function("add", &add);
  function("exclaim", &exclaim);
  function("version", &version);
}
