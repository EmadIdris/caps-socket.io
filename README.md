# caps-socket.io

### Author: Emad Idris ✌✌

### Start
```
npm start
```

#### Tests

To run tests:

cd ```driver/driver.js``` OR cd ```vendor/vendor.js``` OR cd  ```caps/caps.js```

`npm test`

### Sample Output

```
node caps.js
```

```
Welcome to Caps NameSpace , JnsnU6dQyb2cgHY8AAAB
Welcome to Caps NameSpace , EJ0upiqSmCTYkYFkAAAD
EJ0upiqSmCTYkYFkAAAD is joining null
EVENT {
  event: 'pickup',
  timestamp: 'Mon Nov 15 2021 16:51:53 GMT+0200 (Eastern European Standard Time)',
  payload: {
    orderId: 'ba9560b6-702e-458e-a85b-558264db8252',
    orderCustomer: 'Cecilia Legros',
    orderAddress: '6560 Kohler Loaf Suite 903 , Manteca , OR'
  }
}
EVENT {
  event: 'in-transit',
  timestamp: 'Mon Nov 15 2021 16:51:54 GMT+0200 (Eastern European Standard Time)',
  payload: {
    orderId: 'ba9560b6-702e-458e-a85b-558264db8252',
    orderCustomer: 'Cecilia Legros',
    orderAddress: '6560 Kohler Loaf Suite 903 , Manteca , OR'
  }
}
EVENT {
  event: 'delivered',
  timestamp: 'Mon Nov 15 2021 16:51:56 GMT+0200 (Eastern European Standard Time)',
  payload: {
    orderId: 'ba9560b6-702e-458e-a85b-558264db8252',
    orderCustomer: 'Cecilia Legros',
    orderAddress: '6560 Kohler Loaf Suite 903 , Manteca , OR'
  }
}
```

```
node vendor.js
```

```
Deprecation Warning: faker.random.uuid is now located in faker.datatype.uuid
VENDOR : Thank You For Delivering ba9560b6-702e-458e-a85b-558264db8252
```

```
node driver.js
```

```
picking Up ba9560b6-702e-458e-a85b-558264db8252
Delivering up ba9560b6-702e-458e-a85b-558264db8252
```
***

# UML
![](./lab11.png)

***

# ``` .env ```

```PORT``` 

```HOST``` 

```STORE_NAME```