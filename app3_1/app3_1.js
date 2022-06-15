//differece
//require() can be called from anywhere inside the program whereas
// import() cannot be called conditionally, it always runs at the
//  beginning of the file.
//--------------------------------------------------------
//to enable using import//
// add to the package.json . "type":"module"
//--------------------------------------------------------
//not available

//1. __dirname
//2.filename
//--------------------------------------------------------
import { myFunc1, myFunc2, myFunc3 } from "./myFuncs.js";
myFunc1();
myFunc2();
myFunc3();
