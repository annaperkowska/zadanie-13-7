var fs = require('fs');
var colors = require('colors');

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
	console.log('Dane przed zapisem!'.blue);
	console.log(data);
	fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!\n', function(err) {
		if (err) throw err;
		console.log('Zapisano!'.blue);
		fs.readFile('./tekst.txt', 'utf-8', function(err,data) {
			console.log('Dane po zapisie'.green)
			console.log(data);
		});
	});
});

fs.readdir('./', function(err, files) {
	console.log(files);
	fs.writeFile('./katalog.txt', files, 'utf-8', function(err) {
		console.log('Zapisano dane do pliku katalog.txt');
	});
});



