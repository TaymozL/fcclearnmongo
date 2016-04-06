var mgCl = require('mongodb').MongoClient;
var dbname = process.argv[2];
var url = 'mongodb://localhost:27017/'+dbname;
mgCl.connect(url,function(er,db){
	if(er){
		console.log(er);
		return null;
	}
	db.collection('users').update({username:'tinatime'},{$set:{age:40}},(er)=>{
		db.close()}
	);
});
