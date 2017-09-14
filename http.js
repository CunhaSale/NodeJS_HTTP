var router = require('./router');
var app = router(3412);

var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "celular", preco: 3},
	//{nome: "GVT", codigo: 25, categoria: "fixo", preco: 3},
	//{nome: "Embratel", codigo: 21, categoria: "fixo", preco: 2}
];

var contatos = [
	{id: 1, nome: "Bruno", telefone: "9999-8888", data: new Date(), operadora: operadoras[0]},
	{id: 2, nome: "Sandra", telefone: "9999-8877", data: new Date(), operadora: operadoras[1]},
	{id: 3, nome: "Mariana", telefone: "9999-8866", data: new Date(), operadora: operadoras[2]}
];

app.get('/operadoras', function(req, res){
	res.write(JSON.stringify(operadoras));
	res.end();
});

app.get('/contatos', function(req, res){
	res.write(JSON.stringify(contatos));
	res.end();
});