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
    $("#seletor").change(() => {
        const link = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/";
        $.getJSON(link, (estado) => {

            if (estado.erro === true) {
                $("#mensagem").css("background-color", "tomato")
                $("#mensagem").html("Erro no servidor")

            }

            else {

                $("#mensagem").css("background-color", "#b7d5ac")
                $("#mensagem").html("Os dados solicitados estão disponíveis a seguir.")

                let text = "";
                for (let i = 0; i < estado.length; i++) {
                    if ($("#seletor").val() == estado[i].regiao.sigla) {
                        text += `
                        <tr>
                            <td>${estado[i].nome}</td>
                            <td>${estado[i].sigla}</td>
                        </tr>`
                    }

                }
                $("#estados").html(text)

            }

        })
    })
})
