const fs = require('fs')

const copyFile = (fromPath, toPath) => {


  getCurrentFilenames()
  if (fs.existsSync(fromPath) === false) {
    console.log("The file you are trying to copy doesn't exist or cannot be opened")
    return
  }
  if (fs.existsSync(toPath) === false) {
    console.log("The path you are trying to copy cannot be accessed")
    return
  }
  console.log("\nFile Contents of example_file:",
    fs.readFileSync(fromPath, "utf8"))

  fs.copyFile(fromPath, toPath, (err) => {
    if (err) {
      console.log("Error Found:", err)
    }
    else {

      getCurrentFilenames()
      console.log("\nFile Contentsof copied_file:",
        fs.readFileSync(toPath, "utf8"))
    }
  })

  function getCurrentFilenames () {
    console.log("\nCurrent filenames:")
    fs.readdirSync(__dirname).forEach(file => {
      console.log(file)
    })
  }

}

copyFile("./test_file.txt", "./test1.txt")
copyFile("./test_file.txt", "./test_folder/test1.txt")
copyFile("./test_file.txt", "./null_folder/test1.txt")
copyFile("./null_file.txt", "./null_folder/test1.txt")