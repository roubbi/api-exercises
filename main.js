

/* -------------- Exercise 1 --------------- */


/* Remember the fetch function from before? There we had the ISBN hard-coded on each call, 
   which is not very useful.
   Instead, add a parameter to the function that accepts an ISBN, and modify your function 
   so that it searches for info about the book with that ISBN.

   For instance, if you call fetch(9780575087057), you should receive data about the best book in the world: 
   Name of the Wind.*/


// const fetch = function (isbnNumber) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnNumber}`, // Template Literals
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }


/* -------------- Exercise 2 --------------- */

/* Now modify your function again so that it receives two parameters: queryType and queryValue

   You should modify your function to search by whatever queryType is (ISBN or title), 
   
   with the value of whatever queryValue is.

   For instance, if you call fetch("title", "The Wise Man's Fears"), you should receive data about the book The Wise Man's Fears.

   You can test your function with the following, as well:

   fetch("isbn", 9789814561778) - From Third World to First: The Singapore Story
   fetch("title", "How to Win Friends and Influence People") - book by Dale Carnegie */


// const fetch = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People")




/* -------------- Exercise 3 --------------- */

/*   You will have noticed that the Google Books API returns its data in an items array 
- usually this array has data on more than one book.
 
Modify your fetch function again so that instead of printing the entire data that is returned 
from the API, you print the title, author, and ISBN forEach of the books in items  */


const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {

            data.items.forEach(d => console.log(`Title: ${d.volumeInfo.title}, Author: ${d.volumeInfo.authors}, ISBN: ${d.volumeInfo.industryIdentifiers[0].identifier}`))
           
        }          
         ,
    error: function (xhr, text, error) {
        console.log(text)
                
            }
        })
        }
