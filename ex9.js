var mgCl = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
mgCl.connect(url,function(er,db){
	if(er) throw er;
	db.collection('prices').aggregate([
		{$match:{size:process.argv[2]}},
		{$group:{_id:'averagePrice',avgPrc:{$avg:'$price'}}}
	]).toArray(function(er,array){
				if(er) throw er;
				console.log(Number(array[0].avgPrc).toFixed(2));
				db.close();
	})
})
