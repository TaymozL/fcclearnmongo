var mgCl = require('mongodb').MongoClient;
var fN = process.argv[2];
var lN = process.argv[3];
var url = 'mongodb://localhost:27017/learnyoumongo';
mgCl.connect(url,function(er,db){
	if(er) throw er;
	var docs = db.collection('docs');
	docs.insert({firstName:fN,lastName:lN},function(er,data){
		if(er) throw er;
		console.log(JSON.stringify({firstName:fN,lastName:lN}));
		db.close();
	});
});
