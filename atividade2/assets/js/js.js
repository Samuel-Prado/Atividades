$(document).ready(() => {

    carregarReg();

    function carregarReg() {
        const link = "https://servicodados.ibge.gov.br/api/v1/localidades/regioes";
        $.getJSON(link, (regiao) => {
            if (regiao.erro === true) {
                $("#mensagem").css("background-color", "tomato")
                $("#mensagem").html("Erro no servidor")
            } else {
                let text = "";
                for (let i = 0; i < regiao.length; i++) {
                    text += `<option value="${regiao[i].sigla}">${regiao[i].sigla}</option>`;
                }
                $("#seletor").append(text);
            }
        })
    }

})
