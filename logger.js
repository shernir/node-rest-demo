var url = "http:/logg.io"
const EventEmitter = require('events')

class Logger extends EventEmitter {

     log(message) {
        console.log(message);
        this.emit('messageLogged', {id:1,dateTime:new Date(),msg:message});
    
    }

}


module.exports = Logger