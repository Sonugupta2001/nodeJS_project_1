/* const http = require('http');


/* http.createServer( (req, res)=> {
    if (req.url === '/') {
        res.end('This is the home route');
    } else if (req.url === '/user') {
        res.end('This is the user route');
    } else {
        res.end('Not found');
    }
   )};
*/


/* const server = http.createServer((req, res) => {
  //res.writeHead(200, { 'Content-Type': 'text/html' });
  if(req.url=='/user'){
    console.log(req);
    console.log(res);
    res.end('<html><body><h1>Hello, World!</h1></body></html>');
  }
  else if(req.url=='/admin'){
    res.end('<html><body><h1>This is admin page!</h1></body></html>');
  };

  res.end('<html><body><h1>Hello, World!</h1><h2>Hello, World!</h2></body></html>');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); */



const http = require('http');




const server = http.createServer((req, res) => {

  // Parse the URL and remove any query parameters
  const urlParts = req.url.split('?')[0];
  


  // Define a routing mechanism based on the HTTP method and URL
  if (req.method === 'GET') {

    if (urlParts === '/') {
      // Handle GET requests for the root route
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('This is the root route.');
    }
    
    else if (urlParts === '/about') {
      // Handle GET requests for the /about route
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('This is the about route.');
    }
    
    else {
      // Handle other GET requests (e.g., 404 Not Found)
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  }
  
  
  
  else if (req.method === 'POST') {
    if (urlParts === '/submit') {
      // Handle POST requests for the /submit route
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Data submitted successfully.');
    }
    
    else {
      // Handle other POST requests (e.g., 404 Not Found)
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  }
  
  
  
  else {
    // Handle other HTTP methods (e.g., 405 Method Not Allowed)
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }

});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

