var mdb = require('mongodb').MongoClient;
var assert = require('assert');
var thr = parseInt(process.argv[2]);
mdb.connect('mongodb://localhost:27017/learnyoumongo',function(er,db){
	assert.equal(null,er);
        var parrot = db.collection('parrots');
        parrot.find({age:{$gt:thr}},{
      name: 1
    , age: 1
    , _id: 0
    }).toArray(function(er,documents){
                assert.equal(null,er);
                console.log(documents);
                db.close();
        });
});
