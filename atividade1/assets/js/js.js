$(document).ready(() => {
    $("#form").submit((e) => {
        e.preventDefault()
        const CEP = $("#texto").val();

        const link = "https://viacep.com.br/ws/" + CEP + "/json/";
        $.getJSON(link, (cep) => {
            $("#texto").val("")
            if (cep.erro === true) {
                $("#mensagem").css("background-color", "tomato")
                $("#mensagem").html("CEP não encontrado")


                $("#informacao #log").html("")
                $("#informacao #comp").html("")
                $("#informacao #bai").html("")
                $("#informacao #loc").html("")
                $("#informacao #uf").html("")

            } else {
                $("#mensagem").css("background-color", "#b7d5ac")
                $("#mensagem").html("Os dados solicitados estão disponíveis a seguir.")

                if (cep.logradouro == "") {
                    $("#informacao #log").html("-")
                }
                else {
                    $("#informacao #log").html(cep.logradouro)
                }
                if (cep.complemento == "") {
                    $("#informacao #comp").html("-")
                } else {
                    $("#informacao #comp").html(cep.complemento)
                }
                if (cep.bairro == "") {
                    $("#informacao #bai").html("-")
                }else{
                    $("#informacao #bai").html(cep.bairro)
                }
                if (cep.localidade == "") {
                    $("#informacao #loc").html("-")
                }else{
                    $("#informacao #loc").html(cep.localidade)
                }
                if (cep.uf == "") {
                    $("#informacao #uf").html("-")
                }else{
                    $("#informacao #uf").html(cep.uf)
                }
                
                }

            })


    })
    $("#btn-clear").click(() => {

        $("#informacao #log").empty()
        $("#informacao #comp").empty()
        $("#informacao #bai").empty()
        $("#informacao #loc").empty()
        $("#informacao #uf").empty()
        $("#mensagem").empty()
        $("#mensagem").css("background-color", "")

    })
})
