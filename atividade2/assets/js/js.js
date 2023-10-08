$(document).ready(() => {
    
    $("#seletor").change(() => {
        const link = "https://servicodados.ibge.gov.br/api/v1/localidades/regioes";
        $.getJSON(link, (regiao) => {
            let norepet = "no";
            
            if (regiao.erro === true) {
                $("#mensagem").css("background-color", "tomato")
                $("#mensagem").html("Estado não encontrado")

            }else {
                $("#mensagem").css("background-color", "#b7d5ac")
                $("#mensagem").html("Os dados solicitados estão disponíveis a seguir.")
             
            if (norepet == "si") {
                alert("oi")
            }else{
                norepet = "si";
                for (let i = 0; i < regiao.length; i++) {
                $("#seletor").append("<option value="+ regiao[i].sigla +">"+regiao[i].sigla+"</option>")
                    
                }
            }
            }

        })


    })
})
