function showLog(message: any) {
    console.log(message);
}

showLog('Olá, mundo!');
showLog(21);
/*
* String
* Number
* Boolean 
* Arrays
* Classes pessoais
*/

let test: Array<string> = ['Hello', 'Testes', 'Ops'];
let isEnabled : boolean = true;

/*
* O sourceMappingURL é usado para debugar uma aplicação que tem um arquivo minificado. Ele informa em qual linha e 
* qual arquivo original está o erro. 
* Supondo que tenhamos 10 arquivos juntos em 1. Ele dirá qual o arquivo defeituoso.
*/
