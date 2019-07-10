# Coding-Test
Get and Display the data in JSONPLACEHOLDER API using javascript

# Process
  1. GET the data from the API.
  2. Display to the browser.
### How to get the data
  get the data in jsonplaceholder API using the fetch() method
### What is fetch() method?
  - Fetch provides a generic definition of Request and Response objects (and other things involved with network requests).
  - The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
  - after making the request I used then() function to wait for the response and perform my action.
### What is then() function? 
  - The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.
### Display to  browser
  - Since we expect a JSON response, first I need to call the json() method to transform the Response object into an object that we can       interact with. 
  - After transforming it to object I can now call each property and loop using a for loop to display every button click.
  
