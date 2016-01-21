# buscaBR.js
[![NPM](https://nodei.co/npm/sqlite-sync.png?downloads=true&downloadRank=true)](https://nodei.co/npm/sqlite-sync/)
<br/>
Pacote para facilitar buscas fonéticas usando o algoritmo buscaBR para JavaScript

## Instalação
A instalação é simples. Se usando node.js instale com NPM.
```
npm install busca-br
```

Se você for usar no browser salve este arquivo: <a href="https://raw.githubusercontent.com/JayrAlencar/buscaBR.js/master/browser/buscaBR.js">AQUI</a> na pasta de sua aplicação.
<br/>
Ou inclua:
```
<script src="//clubedosgeeke.com.br/buscabr/js/buscaBR.js"></script>
```

## Usando
Em node.js:
```js
var buscaBR = require('busca-br');

buscaBR.search('feijaum',['arroz','feijão','feijoada'],function(res){
	console.log(res);
});

```
A resposta é um array de objetos JSON informando o termo encontrado e o index que ele está no array passado
<hr/>
Direto no Browser:

```html
  <script src="//clubedosgeeke.com.br/buscabr/js/buscaBR.js"></script>
  <script>
    var buscabr = new buscaBR();
    buscaBR.search('feijaum',['arroz','feijão','feijoada'],function(res){
    	alert(res[0].termo);
    });
  </script>
```
## searchSync(str, array)
Esta função faz a pesquisa de forma sincrona e retorna um array de objetos JSON com os resultados encontrados. Veja:
```js
  var buscabr = new buscaBR();
  var resultado = buscabr.searchSync('feijaum',['arroz','feijão','feijoada']);
  console.log(resultado);
```

## encode()
Se você deseja somente codificar o texto, para salvar no banco de dados por exemplo, use o método encode();
```js
  var buscabr = new buscaBR();
  console.log(console.log(buscaBR.encode('paralelepipedo')));
  //Vai retornar 
```  
## Exemplos de respostas
<table>
  <tr>
    <td>Paralalepipedo</td>
    <td>PRPD</td>
  </tr>
  <tr>
    <td>Jayr Alencar</td>
    <td>J RMK</td>
  </tr>
  <tr>
    <td>Alexandre</td>
    <td>RSMR</td>
  </tr>
   <tr>
    <td><a href="//clubedosgeeks.com.br">Clube dos Geeks</a></td>
    <td>CRB D JK</td>
  </tr>
</table>
```
