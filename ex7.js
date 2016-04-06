var mgCl = require('mongodb').MongoClient;
var dbname = process.argv[2];
var url = 'mongodb://localhost:27017/'+dbname;
var clname = process.argv[3];
var idToRm = process.argv[4];
mgCl.connect(url,function(er,db){
        if(er) throw er;
        db.collection(clname).remove({_id: idToRm},(er)=>{
                db.close()}
        );
});
