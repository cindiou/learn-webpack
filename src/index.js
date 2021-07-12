import { formatDate, formatNumber } from "./js/format.js";
const { add, mul } = require("./js/math.js");

formatDate();
formatNumber();
console.log("add(10,20):", add(10, 20));
console.log("mul(10,20):", mul(10, 20));
