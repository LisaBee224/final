var mongoose = require("mongoose");

module.exports = {
    connect: connect
};

function connect(conn, cb){
    console.log('conn', conn);
    mongoose.connect(conn);
    mongoose.connection.once("open", function(){
        cb();
    });
}
