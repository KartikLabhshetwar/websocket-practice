"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
function App() {
    const [socket, setSocket] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const newSocket = new WebSocket('ws://localhost:8080');
        newSocket.onopen = () => {
            console.log('Connection established');
            newSocket.send('Hello Server!');
        };
        newSocket.onmessage = (message) => {
            console.log('Message received:', message.data);
        };
        setSocket(newSocket);
        return () => newSocket.close();
    }, []);
    return (<>
      hi there
    </>);
}
exports.default = App;
