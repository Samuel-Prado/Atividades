$(document).ready(() => {

    carregarEst();

    function carregarEst() {
        const link = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
        $.getJSON(link, (estado) => {
            if (estado.erro === true) {
                $("#mensagem").css("background-color", "tomato")
                $("#mensagem").html("Erro no servidor")
            } else {

                let text = "";
                for (let i = 0; i < estado.length; i++) {
                    text += `<option value="${estado[i].sigla}">${estado[i].sigla}</option>`;
                }
                $("#seletor").append(text);
            }
        })
    }
    $("#seletor").change(() => {
        const estado = $("#seletor").val();
        const link = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`;
        $.getJSON(link, (cidade) => {

            if (cidade.erro === true) {
                $("#mensagem").css("background-color", "tomato")
                $("#mensagem").html("Erro no servidor")

            }

            else {

                $("#mensagem").css("background-color", "#b7d5ac")
                $("#mensagem").html("Os dados solicitados estão disponíveis a seguir.")

                let text = "";
                for (let i = 0; i < cidade.length; i++) {                
                        text += `
                        <tr>
                            <td>${cidade[i].nome}</td>
                        </tr>`

                }
                $("#cidades").html(text)

            }

        })
    })
})
