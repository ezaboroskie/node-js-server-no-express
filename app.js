// imports built-in-Node modules(HTTP & URL)
const http = require('http');
const url = require('url');

// assigning port and hostname values ('127.0.0.1' could be written as 'localhost')
const hostname = '127.0.0.1';
const port = 3000; 

const server = http.createServer((req,res) => {

    // deconstructs the url to be an object to allow access to various properties of the url
    const urlObj = url.parse(req.url, true)
    const pathName = urlObj.pathname

    // sets the header types for responses
    res.setHeader('Content-Type', 'text/plain');

    // sets the conditions for various routes including an error handling route (404)
    if(pathName === '/'){
        res.statusCode = 200;
        res.end('Hello Node!');
    }else if(pathName === '/message'){
        res.statusCode = 200;
        res.end('This is a welcome message')
    }else if (pathName === '/top-seller'){
        res.statusCode = 200;
        res.end('This is a list of our top sellers!')
    }else if (pathName === '/lunch'){
        // sets the header to be content type 'text/html' to allow html elements to be displayed
        res.setHeader('Content-Type', 'text/html')
        res.statusCode = 200;
        res.end(`
                <ul>
                <li> milk </li>
                <li> fries </li>
                <li> burger </li>
                <li> vanilla cake </li>
                </ul>
        `)
    }else{
        res.statusCode = 404;
        res.end('404 not found')
    }

});

// tells the server to listen on a specific port and ip address for the server calls 
server.listen(port, hostname, ()=>{
    console.log(`First Node server is running up that hill 
    at: http://${hostname}:${port}/`)
});