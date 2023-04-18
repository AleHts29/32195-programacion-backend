import * as mod from "https://deno.land/std@0.171.0/datetime/mod.ts";

// recuperar fechas actual
const currentTime = new Date();

console.log('currentTime', currentTime);
console.log(mod.format(currentTime, 'yyyy-MM-dd HH:mm'));

