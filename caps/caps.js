'use strict';

//parent socket (server)

require('dotenv').config(); // we use .env file 
const { logEvent } = require('./modules/logEvent');

// make a port and require io
const PORT = process.env.PORT || 3001; // make port
const io = require('socket.io')(PORT); // requ socket.io , connect to our port http://localhost:3001
io.on('connection', (socket) => {
    console.log('Welcome to the HUB', socket.id); 
})


const caps = io.of('/caps'); // caps is a namespace
caps.on('connection', (socket) => { // we make a event 
    console.log(`Welcome to Caps NameSpace , ${socket.id}`) // when client connect to namespace this message will print
    //------------------
    // 1
    // join (to connect client to caps parent)
    socket.on('join',(room)=>{
        console.log(`${socket.id} is joining ${room}`)
        socket.join(room);
    })
    //------------------
    // 2
    //pick up (let everyone in the room know that 'pickup' happend)
    socket.on('pickup', (payload) => {
        logEvent('pickup', payload)
        caps.emit('pickup', payload);
    })
    //------------------   
    // 3
    //in-transit (let everyone in the room know that 'in-transit' happend)
    socket.on('in-transit', (payload) => {
        logEvent('in-transit', payload)
        caps.to(payload.orderStore).emit('in-transit',payload)
    })
    //------------------
    // 4
    //deliverd (let everyone in the room know that 'deliverd' happend)
    socket.on('delivered', (payload) => {
        logEvent('delivered',payload)
        caps.emit('delivered',payload)
    })
})
