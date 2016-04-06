var mdb = require('mongodb').MongoClient;
var thr = parseInt(process.argv[2]);
mdb.connect('mongodb://localhost:27017/learnyoumongo',function(er,db){
        var parrot = db.collection('parrots');
        parrot.count({age:{$gt:thr}},function(er,count){
                console.log(count);
                db.close();
        });
});
