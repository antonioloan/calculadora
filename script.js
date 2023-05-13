// função para inserir numero insert / onclick insert
function inserir(num)
{
     var numero = document.getElementById('resultado').innerHTML;
     document.getElementById('resultado').innerHTML = numero + num;
}
// função para limpar todos os numeros de uma vez / onclik clean
function limpar()
{
    document.getElementById('resultado').innerHTML = "";
}
// função para limpar os numeros um de cada vez back/ onclik back
function retornar()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
// função para calcular automatico eval
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "";
    }

}