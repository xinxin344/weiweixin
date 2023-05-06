const ws = require('ws')

const server = new ws.Server( { port: 8000})
console.log(111);

const init = () => {
  bindEvent()
}

function bindEvent () {
  server.on('open', handleOpen);
  server.on('close', handleClose);
  server.on('error', handleError);
  server.on('connection', handleConnection);
}

function handleOpen () {
  console.log('webscoket open');
}

function handleClose () {
  console.log('webscoket close');
}

function handleError (error) {
  console.log('webscoket error', error);
}

function handleMessage (msg) {
  console.log('webscoket message');
  server.clients.forEach((c) => {
    c.send(msg)
  })
}

function handleConnection () {
  console.log('webscoket connection');
  ws.on('message', handleMessage)
}

init()