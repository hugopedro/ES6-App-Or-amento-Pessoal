class Despesa {
    constructor(ano,mes,dia,tipo,descricao,valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo =tipo
        this.descricao = descricao
        this.valor = valor
    }
}

function CadastrarDespesa() {
    //captura os dados inseridos nos campos
    // criando variáveis para fazer referência a essas seleções
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(

        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    gravar(despesa)

    //para gravar dentro do local storage faz-se o seguinte:
    //JSON converte o objeto literal para um legível.
    // se nao gravar atualiza a pagina com ctrl + f5
    // é no navegador em Application -> local storage -> file:// que aparece
    // se for usar o setItem ao inserir novos dados ele irá sobrescrever o anterior, portanto deve-se implementar uma lógica de 
    // identificador unico para poder ir adicionando novos registros
    function gravar(d) {
        localStorage.setItem('despesa', JSON.stringify(d))
    }

}