'use strict';

require('dotenv').config();
//get PORT from .env
const PORT = process.env.PORT;
const HOST = process.env.HOST;

const io = require('socket.io-client');
const socket = io.connect(`http://localhost:3001/caps`) //http://localhost:3001

//listen for a pickup
socket.on('pickup',(payload)=>{ // on action i doing
    setTimeout(() => {doPickup(payload);},1500)
    setTimeout(() => {doDelivery(payload)},3000)
})
function doPickup(payload){
    console.log(`picking Up ${payload.orderId}`)
    socket.emit('in-transit',payload); // alert to vendor
}
function doDelivery(payload){
    console.log(`Delivering up ${payload.orderId}`)
    socket.emit('delivered',payload) // alert to vendor
}
module.exports = { doPickup, doDelivery};