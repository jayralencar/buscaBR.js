var buscaBR = require('../buscaBR');

buscaBR.search('feijaum',['arroz','feijão','feijoada'],function(res){
	console.log(res);
});

console.log(buscaBR.encode('paralelepipedo'));
