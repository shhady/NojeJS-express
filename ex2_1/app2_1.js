const fs = require("fs");

fs.writeFileSync("notes.txt", "this is my first nodeJS,");

fs.copyFile("notes.txt", "copied_file.txt", (err) => {
  if (err) {
    console.log("Error Occurred:", err);
  } else {
    console.log("File Copied Successfully!");
  }
});
fs.appendFileSync("notes.txt", " hope it will be easy");

//---------------------------------------------------------------- rename
// fs.rename("copied_file.txt", "newFile.txt", (err) => {
//   if (err) throw err;
//   console.log("Rename complete!");
// });

// const Fs = require("fs");
// const Path = require("path");

// const oldPath = Path.join(__dirname, "copied_file.txt");
// const newPath = Path.join(__dirname, "newFile.txt");

// Fs.renameSync(oldPath, newPath);

console.log(__dirname);

fs.readdirSync(__dirname);
const files = fs.readdirSync(__dirname);
console.log(files.find((file) => file === "Ex_2_1-app.js"));
