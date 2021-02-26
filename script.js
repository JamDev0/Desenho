var JT = window.innerHeight;


var Tela = document.getElementById('Tela');
var TelaCtx = Tela.getContext('2d');
Tela.setAttribute('width', JT + 'px');
Tela.setAttribute('height', JT + 'px');
Tela.style.left = 'calc(50% - ' + Tela.clientWidth/2 + 'px)';


var TelaC = document.getElementById('Circulo');
var TelaCCtx = TelaC.getContext('2d');
TelaCCtx.beginPath();
TelaCCtx.strokeStyle = 'black';
TelaCCtx.lineWidth = 3;
TelaCCtx.arc(TelaC.clientWidth/2, TelaC.clientHeight/2, (TelaC.clientWidth/2)-5, 0, 2*Math.PI);
TelaCCtx.stroke();

var TelaR = document.getElementById('Retangulo');
var TelaRCtx = TelaR.getContext('2d');
TelaRCtx.beginPath();
TelaRCtx.strokeStyle = 'black';
TelaRCtx.lineWidth = 3;
TelaRCtx.rect((TelaR.clientWidth/2) - ((TelaR.clientWidth*0.7)/2), (TelaR.clientHeight/2) - ((TelaR.clientHeight-10)/2), (TelaR.clientWidth*0.7), (TelaR.clientHeight-10));
TelaRCtx.stroke();

var TelaT = document.getElementById('Triangulo');
var TelaTCtx = TelaT.getContext('2d');
TelaTCtx.beginPath();
TelaTCtx.strokeStyle = 'black';
TelaTCtx.lineWidth = 3;
TelaTCtx.moveTo(TelaT.clientWidth/2, 5);
TelaTCtx.lineTo(TelaT.clientWidth-5, TelaT.clientHeight-5);
TelaTCtx.lineTo(5, TelaT.clientHeight-5);
TelaTCtx.lineTo(TelaT.clientWidth/2, 5);
TelaTCtx.stroke();


var TelaLar = Tela.clientWidth;
var TelaAlt = Tela.clientHeight;


var Cor = document.getElementById('Cor');
var CorVal = 'black';
Cor.addEventListener('input', function(){CorVal = Cor.value})

function Desenhar(Forma)
{
    let Es = window.prompt('Qual a espessura dos lados?', '1|2|3...');
    switch(Forma)
    {
        case 'Triangulo':
            let TT = window.prompt('Triangulo isósceles, equilátero ou escaleno?');
            switch(TT)
            {
                case 'is':
                    let Tamanho = window.prompt('Qual o tamanho dos lados iguais?');
                    let LU = window.prompt('Qual o tamanho do lado unico?');
                    TelaCtx.beginPath();
                    TelaCtx.lineWidth = Es;
                    TelaCtx.strokeStyle = CorVal;
                    TelaCtx.moveTo(TelaLar/2, Tamanho);
                    TelaCtx.lineTo((TelaLar/2)+LU/2, Tamanho);
                    TelaCtx.moveTo(TelaLar/2, Tamanho);
                    TelaCtx.lineTo((TelaLar/2)-(LU/2), Tamanho);
                    TelaCtx.lineTo(TelaLar/2, 0);
                    TelaCtx.lineTo((TelaLar/2)+LU/2, Tamanho);
                    TelaCtx.stroke();
                    break;

                case 'eq':
                    let TamanhoE = window.prompt('Qual o tamanho dos lados?');
                    TelaCtx.beginPath();
                    TelaCtx.lineWidth = Es;
                    TelaCtx.strokeStyle = CorVal;
                    TelaCtx.moveTo(TelaLar/2, TamanhoE);
                    TelaCtx.lineTo((TelaLar/2)+TamanhoE/2, TamanhoE);
                    TelaCtx.moveTo(TelaLar/2, TamanhoE);
                    TelaCtx.lineTo((TelaLar/2)-TamanhoE/2, TamanhoE);
                    TelaCtx.lineTo(TelaLar/2, 0);
                    TelaCtx.lineTo((TelaLar/2)+TamanhoE/2, TamanhoE);
                    TelaCtx.stroke();
                    break;

                case 'es':
                    let TamanhoEs1 = parseFloat(window.prompt('Qual o tamanho do 1º lado?'));
                    let TamanhoEs2 = parseFloat(window.prompt('Qual o tamanho do 2º lado?'));
                    TelaCtx.beginPath();
                    TelaCtx.lineWidth = Es;
                    TelaCtx.strokeStyle = CorVal;
                    TelaCtx.moveTo(TelaLar/2, 0);
                    TelaCtx.lineTo(TelaLar/2, TamanhoEs1);
                    TelaCtx.lineTo((TelaLar/2) + (TamanhoEs2), TamanhoEs1);
                    TelaCtx.lineTo(TelaLar/2, 0);
                    TelaCtx.stroke();
                    break;
            }
            break;
        
        case 'Retangulo':
            let RQ = window.prompt('Quadrado ou retangulo?');
            switch(RQ)
            {
                case 'qd':  
                    let RT = parseFloat(window.prompt('Qual o tamanho dos lados?'));
                    TelaCtx.beginPath();
                    TelaCtx.lineWidth = Es;
                    TelaCtx.strokeStyle = CorVal;
                    TelaCtx.rect((TelaLar/2) - (RT/2), (TelaAlt/2) - (RT/2), RT, RT);
                    TelaCtx.stroke();
                    break;

                case 're':
                    let RL = parseFloat(window.prompt('Qual a largura?'));
                    let RA = parseFloat(window.prompt('Qual a altura?'));
                    TelaCtx.beginPath();
                    TelaCtx.lineWidth = Es;
                    TelaCtx.strokeStyle = CorVal;
                    TelaCtx.rect((TelaLar/2) - (RL/2), (TelaAlt/2) - (RA/2), RL, RA);
                    TelaCtx.stroke();
                    break;
            }
            break;
        
        case 'Circulo':
            let CL = parseFloat(window.prompt('Qual a largura do circulo?'));
            TelaCtx.beginPath();
            TelaCtx.lineWidth = Es;
            TelaCtx.strokeStyle = CorVal;
            TelaCtx.arc(TelaLar/2, TelaAlt/2, CL/2, 0, 2 * Math.PI);
            TelaCtx.stroke();
            break;
    }
}