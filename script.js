function calcular(){

    let nome = window.document.getElementById("nome").value
    let idade = window.document.getElementById("idade").value
    let peso = window.document.getElementById("peso").value
    let altura = window.document.getElementById("altura").value
    let resultado = window.document.getElementById("resultado")
    
    if (nome !== "" && idade !== "" && altura !== "" && peso !== ""){ 
        
    resultado.innerHTML = `<p>Olá senhor(a) ${nome}, verificamos seus dados, e vimos que você tem ${idade} anos de idade, pesa o equivalente de ${peso}KG, e tem "${altura}" metros de altura.`
    
    let valorIMC = (peso / (altura * altura)).toFixed(2) //cáuculo para fazer o IMC 
    let classificacao = "" // classificação de pesos para o IMC, dividindo entre peso ideal, sobrepeso, abaixo do peso e obesidade



    if (valorIMC < 10){
        window.alert(`Verifique os dados de peso ou altura, provavelmente algum deles deve estar incorreto!`)
    }else if (valorIMC < 18.5){
        classificacao = `<span class="cor1">ABAIXO DO PESO</span>. Procure se alimentar melhor`

    }else if (valorIMC < 25){
        classificacao = `<span class="cor2">PESO IDEAL</span> na média. Parabéns procure se manter na média para ter uma boa saúde!`
    }else if (valorIMC < 30){
        classificacao = `<span class="cor1">SOBREPESO</span>, você está levemente acima do peso, procure se exercitar`
    }else if (valorIMC < 35){
        classificacao = `<span class="cor3">OBESIDADE nível I</span>, procure cuidar de sua saúde, melhorando sua alimentação e se exercitando `
    }else if (valorIMC < 40 ){
        classificacao = `<span class="cor3">OBESIDADE II</span>, se cuide, assim que possível, procure um médico para avaliação do seu caso`
    }else {
        classificacao = `<span class="cor3">ATENÇÃO!!!</span> Você está em um grave nível de <span class="cor3">Obesidade III</span>, se cuide, assim que possível, procure um médico para avaliação do seu caso`
    }

    //Os spans colocados entre as palavras de classificação são para que possa selecionar as palavras para mudança de cor através do CSS

    resultado.innerHTML += `<br><p>Calculamos seu IMC, e ele é no valor de "${valorIMC}", seu IMC se encaixo na classificação: <br><br>${classificacao}.</p>`

    }else{
        window.alert("Verifique se os dados estão preenchidos corretamente. Você precisa antes preencher todos os dados para prosseguir!")
    } 


}

