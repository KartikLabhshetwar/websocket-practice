import http from 'http'
import WebSocket, {WebSocketServer} from 'ws'




const server = http.createServer(function(request: any, response: any ){
    console.log((new Date()) + 'Recieved request for'+ request.url);
    response.end("hi there")
})

const wss = new WebSocketServer({server})

let userCount = 0;
wss.on('connection', function connections(socket){
    socket.on('error', console.error);

    
    socket.on('message', function message(data, isBinary){
        wss.clients.forEach(function each(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(data, {binary: isBinary})
            }
        })
    })

    console.log("user connnected", ++userCount)
    socket.send("hello! message from server")
})


server.listen(8080, function (){
    console.log((new Date()) + 'Server is listening on port 8080')
})


