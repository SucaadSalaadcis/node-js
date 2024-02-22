const http = require("http");
const server = http.createServer((request , response)=> {
    if(request.url === '/'){
        response.end("This is first page")
    }else if (request.url === '/home'){
        response.end("Home Page")

    }else if (request.url === '/about'){
        response.end("about Page")

    }else if (request.url === '/contact'){
        response.end("contact Page")

    }else if (request.url === '/blog'){
        response.end("blog Page")

    }else if (request.url === '/news'){
        response.end("news Page")
        
    }else{
        response.end("not found")

    }
})
server.listen(1000, () => console.log("Server is Running on port 1000"))

