(function() {
  "use strict";

  var buscaBR = {};

  // Exporta o objeto do buscaBR para o **Node.js**
  // com a compatibilidade para o browser definindo
  // buscaBR como um objeto global
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = buscaBR;
    }
    exports.buscaBR = buscaBR;
  } else {
    window.buscaBR = buscaBR;
  }

  var CODES =  [
    [/BL|BR/, 'B'],
    ['PH', 'F'],
    [/GL|GR|MG|NG|RG/, 'G'],
    ['Y', 'I'],
    [/GE|GI|RJ|MJ/, 'J'],
    [/CA|CO|CU|CK|Q/, 'K'],
    ['N', 'M'],
    [/AO|AUM|GM|MD|OM|ON/, 'M'],
    ['PR', 'P'],
    ['L', 'R'],
    [/CE|CI|CH|CS|RS|TS|X|Z/, 'S'],
    [/TR|TL/, 'T'],
    [/CT|RT|ST|PT/, 'T'],
    [/\b[UW]/, 'V'],
    ['RM', 'SM'],
    [/[MRS]+\b/, ''],
    [/[AEIOUH]/, '']
  ];


  buscaBR.searchSync = function(str, array){
    var results = [];
    for(var i = 0 ; i < array.length; i++){
      if(this.encode(str) == this.encode(array[i])){
        results.push({termo:array[i], index: i})
      }
    }
    return (results.length>0) ? results : {erro:"Não há registros"};
  };


  buscaBR.search = function(str, array, callback){
    callback(this.searchSync(str, array));
  };


  buscaBR.encode = function (str) {
    str = removeAcento(str.toUpperCase());
    for(var i = 0; i < CODES.length; i++){
      // str = str.replace(this.CODES[i][0],this.CODES[i][1]);
      str = str.split(CODES[i][0]).join(CODES[i][1])
    }

    str = squeeze(str);

    return str;
  };


  function squeeze(str){
    var cont = 0;
    var newString='';
    for(var i =  0 ; i < str.length; i++){
      if(str[i] != str[i+1]){
        newString +=str[i];
      }
    }
    return newString;
  }


  function removeAcento(strToReplace) {
    var str_acento = "ÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
    var str_sem_acento = "AAAAAEEEEIIIIOOOOOUUUUC";
    var nova = "";
    for (var i = 0; i < strToReplace.length; i++) {
      if (str_acento.indexOf(strToReplace.charAt(i)) != -1) {
        nova += str_sem_acento.substr(str_acento.search(strToReplace.substr(i, 1)), 1);
      } else {
        nova += strToReplace.substr(i, 1);
      }
    }
    var nova = nova.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    return nova;
  }

}());
