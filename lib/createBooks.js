const fs = require('fs');
const path = require('path');
const parse = require('./parse');
const pathName = path.join(process.cwd(), '/books/');


function createBooks(inputFile, outputPath) {
    const clippings = parse(inputFile)
    const books = {};

    for(let i = 0; i < clippings.length; i++) {

        // split each clipping in clippings into component parts whenever there's a new line
        let clipping = clippings[i].split('\r\n');
        clipping = clipping.filter(e => e.length);

        // in case the entry is blank (seems like the last entry is always blank based on the txt file format)
        if (clipping.length === 0) {
          continue; // a way to skip a single iteration of a loop;
        }
        // extract and assign title (and author) to title
        // TODO: separate title and author
        let title = clipping[0];

        // extract and assign the highlight
        let highlight = clipping[2];

        /* TODO: get other meta details, eg location of highlight and date, and whether it is a highlight or a note.
           - these are in clipping[1], need to extract the relevant parts
        */
        if (!highlight) {
          continue;
        };

        if (books[title]) {
          books[title].push(highlight);
        }
        else {
          books[title] = [highlight];
        }
    }

    // Loop through each book and write its contents to output file

    fs.mkdir(pathName, { recursive: true }, (error) => {
        if(error) {
            throw error;
        }
        else {
            console.log(`successfully created the dir: ${pathName}`);
        }
    });

    Object.keys(books).forEach((title) => {
      const highlights = books[title];
      const txtFilePath = pathName + title + '.md';
      fs.writeFile(txtFilePath, 'hello', (err) => {
        if (err) console.log(err);
      })

      for (let i = 0; i < highlights.length; i++) {
        // conditional write function since we shouldn't append to the same files again and again when we run the script multiple times    
        
        function write(text) {
          if (i === 0) {
            fs.writeFile(txtFilePath, text + "\n\n", (err) => {
              if (err) throw err;
            })
          } else {
            fs.appendFile(txtFilePath, text + "\n\n", (err) => {
              if (err) throw err;
            })
          }
        }
        
        write(highlights[i]);
      }
    });
}

module.exports = createBooks;