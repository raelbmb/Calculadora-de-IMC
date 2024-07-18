function calcular() {
    let nome = window.document.getElementById("nome").value;
    let idade = window.document.getElementById("idade").value;
    let peso = window.document.getElementById("peso").value;
    let alturaInput = window.document.getElementById("altura");
    let alturaTexto = alturaInput.value.replace(",", ".");
    let resultado = window.document.getElementById("resultado");

    // Verifica se altura está no formato correto
    if (alturaTexto.indexOf(".") === -1) {
        window.alert("Por favor, coloque sua altura em metros. Por exemplo, '1.85' para 1 metro e 85 centímetros.");
        return;
    }

    let altura = parseFloat(alturaTexto);

    if (nome !== "" && idade !== "" && alturaTexto !== "" && peso !== "") {
        resultado.innerHTML = `<p>Olá senhor(a) ${nome}, verificamos seus dados e vimos que você tem ${idade} anos de idade, pesa ${peso}KG, e tem ${alturaTexto} metros de altura.</p>`;

        let valorIMC = (peso / (altura * altura)).toFixed(2);
        let classificacao = "";

        if (valorIMC < 10) {
            window.alert("Verifique os dados de peso ou altura. Provavelmente algum deles deve estar incorreto!");
        } else if (valorIMC < 18.5) {
            classificacao = `<span class="cor1">ABAIXO DO PESO</span>. Procure se alimentar melhor.`;
        } else if (valorIMC < 25) {
            classificacao = `<span class="cor2">PESO IDEAL</span> na média. Parabéns, procure se manter na média para ter uma boa saúde!`;
        } else if (valorIMC < 30) {
            classificacao = `<span class="cor1">SOBREPESO</span>, você está levemente acima do peso, procure se exercitar.`;
        } else if (valorIMC < 35) {
            classificacao = `<span class="cor3">OBESIDADE nível I</span>, procure cuidar de sua saúde, melhorando sua alimentação e se exercitando.`;
        } else if (valorIMC < 40) {
            classificacao = `<span class="cor3">OBESIDADE II</span>, se cuide, assim que possível, procure um médico para avaliação do seu caso.`;
        } else {
            classificacao = `<span class="cor3">ATENÇÃO!!!</span> Você está em um grave nível de <span class="cor3">Obesidade III</span>, se cuide, assim que possível, procure um médico para avaliação do seu caso.`;
        }

        resultado.innerHTML += `<br><p>Calculamos seu IMC, e ele é ${valorIMC}. Seu IMC se enquadra na classificação: <br><br>${classificacao}</p>`;

    } else {
        window.alert("Verifique se todos os dados estão preenchidos corretamente. Você precisa preencher todos os dados para prosseguir!");
    }
}