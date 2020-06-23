const logica = require('logica.js')
function botonEnviar() {
    var textcontent = document.getElementById("text-content").value;
    var textarea = document.getElementById('textarea');

    

/* Expreciones Regulares */
var reGex1 = /( VE ........ ........ ..:.. \/#\/ |>>..*|>>....... \(OP\)|>>.......|\/#\/ ....... \[X\]|\d{7}|\d{5}|.*png..|.*.....KB ,.*...x....*,|.*jpg..)/gi;


var textoTerminado
    
    textoTerminado = (textcontent.replace(reGex1, ""));
    console.log(textcontent);
    textoTerminado = textoTerminado.trim();
    textarea.innerHTML = textoTerminado;

}
function botonEnviar2() {
    
    var textcontent = document.getElementById("text-content").value;
    var textarea = document.getElementById('textarea');

/* Expreciones Regulares */
var reGex2 = /(Anónimo...*|>>...*|\(..*,{1}x{1}..*|Archivo...*)/gi;
/*/(Anónimo...*|>>...*|\(..*,{1}x{1}..*|Archivo...*|... KB|.....^MB)/gi;*/ 


var textoTerminado

    textoTerminado = (textcontent.replace(reGex2, ""));
    console.log(textcontent);
    textoTerminado = textoTerminado.trim();
    textarea.innerHTML = textoTerminado;

}




function copy_to_clipboard(textarea)
{
    document.getElementById(textarea).select();
    document.execCommand('copy');
}
function nekoVoz(){
 
    var textarea = document.getElementById('textarea').value;
    responsiveVoice.speak(textarea, "Spanish Male", {rate: 1.1});


}
function nekoVozCacelar() {
    responsiveVoice.cancel();

}
function nekoVozPausa() {
    responsiveVoice.pause();

}

function nekoVozSeguir() {
    responsiveVoice.resume();

}

