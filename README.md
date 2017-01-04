401 JS --  Lab 03 file system
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  
## Learning Objectives  
* Students will be able to implement file system input and output
* Students will be able to work with binary data
* Students will be able work with asyncronous callbacks
* Students will be able to tests asyncronous callbacks

## Resources  
* [fs module docs](https://nodejs.org/api/fs.html)

## Requirements  
#### Configuration  
<!-- list of files, configurations, tools, ect that are required -->
Your lab directory must include  
* **README.md** -- with a documention about your lab
* **.gitignore** -- with a robust gitignore
* **.eslintrc** -- with the class .eslintrc file
* **.eslintignore** -- with the class .eslintignore
* **.package.json** -- with all dependencies and dev-dependencies 
* **lib/** -- directory for holding your programs helper modules
* **test/** -- directory for holding your programs unit and integration tests
* **assets** -- direcotry for holding text files used by the program
 * there should be three files in this directory
* **index.js** -- the main program file
 
#### Feature Tasks  
* create a module **lib/read-files.js** that returns a single function
* `readFiles` should have two inputs
 1. an array of file paths
 2. a callback that uses the `(err, data) => {}` callback pattern
* `readFiles` should read all three files into memory and create an new array of the text from each file
 * if any error occurs the callback should be invoked with the error and the function should exit
 * if the new array is successfully created the callback should be invoked with (null, result)
 * **the text in the array of text data should at the same index as the path in the original paths array**

* create a module **index.js** that invokes the readfile module with three command line arguments
 * if the user does not input **exactly** three files the program should log a usage error

#### Testing  
* Write tests to ensure that `readFile` passes an error into the callback if any of the three file paths are to file that do not exist
* Write tests to ensure that `readFile` passes back an array of text data that maps to the order of the file paths array

####  Documentation  
* In your **README.md** write documentaion about using `done` in mocha callbacks

## BONUS 1pt
* create a second module `readManyFiles` that can read an array of any length of file paths and return an array of coresponding text data
 * rewrite index.js to use `readManyFiles`
 
## Rubric  
* 2ps Configuration
* 3pts Feature Tasks
* 3pts Tests
* 2pts Documentation
