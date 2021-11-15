'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3001; //3001
const HOST = process.env.HOST; // http://localhost

const io = require('socket.io-client');
const socket = io.connect(`http://localhost:3001/caps`) //http://localhost:3001

var faker = require('faker'); // fake data json

// emit a 'join' event with the room (the store) when the room is joined
socket.emit('join',process.env.STORE_NAME) 

setInterval( createOrder , 10000)

function createOrder(){
    let orderStore=process.env.STORE_NAME;
    let orderId = faker.random.uuid();
    let orderCustomer = faker.name.findName();
    let orderAddress = `${faker.address.streetAddress(true)} , ${faker.address.city()} , ${faker.address.stateAbbr()}`;
    let customerOrder = {orderStore,orderId,orderCustomer,orderAddress};
    socket.emit('pickup',customerOrder) // driver will listen for this
    return customerOrder; // used by testing
}
 socket.on('delivered',(payload)=>{
     sayThanks(payload); 
 })
 function sayThanks(payload){
     console.log(`VENDOR : Thank You For Delivering ${payload.orderId}`)
  }
module.exports ={createOrder,sayThanks}