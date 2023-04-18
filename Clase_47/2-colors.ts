import * as colors from "https://deno.land/std@0.106.0/fmt/colors.ts";

console.log(colors.bgWhite(colors.black("Hello Deno! 🐉")));
console.log(colors.bgRed(colors.white("Hello Deno! 🐉")));