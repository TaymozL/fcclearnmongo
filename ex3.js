var mdb = require('mongodb').MongoClient;
var assert = require('assert');
var thr = parseInt(process.argv[2]);
mdb.connect('mongodb://localhost:27017/learnyoumongo',function(er,db){
	if(er)
		console.log(er);
	
	var parrot = db.collection('parrots');
	parrot.find({age:{$gt:thr}}).toArray(function(er,documents){
		assert.equal(null,er);
		console.log(documents);
		db.close();
	});
});

