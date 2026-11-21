function getById(id) {
  return document.getElementById(id);
}

//    Questão 1

getById("btnEntrada").addEventListener("click", function () {
  let textoIdade = getById("campoIdade").value
  let ingresso = getById("campoIngresso").value
  let convite = getById("campoConvite").value
  let bloqueada = getById("campoBloqueada").value
  let saida = getById("saidaEntrada");

  saida.innerText = "";

  if (textoIdade == "" || ingresso == "" || convite == "" || bloqueada == "") {
    saida.innerText = "Preencha todos os campos.";
    return;
  }

  let idade = Number(textoIdade);

  if (!Number.isInteger(idade) || idade < 0) {
    saida.innerText = "A idade deve ser um número inteiro não negativo.";
    return;
  }

  if (
    (ingresso != "sim" && ingresso != "nao") ||
    (convite != "sim" && convite != "nao") ||
    (bloqueada != "sim" && bloqueada != "nao")
  ) {
    saida.innerText =
      "Nos campos de ingresso, convite e bloqueio, digite apenas sim ou nao.";
    return;
  }

  let temIngresso = ingresso == "sim";
  let temConvite = convite == "sim";
  let estaBloqueada = bloqueada == "sim";

  if (idade >= 16 && (temIngresso || temConvite) && !estaBloqueada) {
    saida.innerText = "Entrada permitida.";
  } else {
    saida.innerText = "Entrada não permitida.";
  }
});

//    Questão 2

getById("btnCalcular").addEventListener("click", function () {
  let texto1 = getById("campoNum1").value
  let texto2 = getById("campoNum2").value
  let operacao = getById("campoOperacao").value
  let saida = getById("saidaCalculo");

  saida.innerText = "";

  if (texto1 == "" || texto2 == "") {
    saida.innerText = "Preencha os dois números.";
    return;
  }

  let num1 = Number(texto1);
  let num2 = Number(texto2);

  if (isNaN(num1) || isNaN(num2)) {
    saida.innerText = "Digite valores numéricos válidos.";
    return;
  }

  let resultado;

  switch (operacao) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 == 0) {
        saida.innerText = "Não é possível dividir por zero.";
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      saida.innerText = "Operação desconhecida. Use +, -, * ou /.";
      return;
  }

  saida.innerText = num1 + " " + operacao + " " + num2 + " = " + resultado;
});

//    Questão 3

getById("btnPares").addEventListener("click", function () {
  let texto = getById("campoLimite").value
  let saida = getById("saidaPares");

  saida.innerText = "";

  if (texto == "") {
    saida.innerText = "Informe o número N.";
    return;
  }

  let n = Number(texto);

  if (!Number.isInteger(n) || n < 1 || n > 100) {
    saida.innerText = "Digite um número inteiro de 1 a 100.";
    return;
  }

  let pares = "";
  let quantidade = 0;
  let soma = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      if (quantidade > 0) {
        pares += ", ";
      }
      pares += i;
      quantidade++;
      soma += i;
    }
  }

  if (quantidade == 0) {
    saida.innerText =
      "Não há números pares no intervalo.\n" + "Quantidade: 0\n" + "Soma: 0";
  } else {
    saida.innerText =
      "Números pares: " +
      pares +
      "\n" +
      "Quantidade: " +
      quantidade +
      "\n" +
      "Soma: " +
      soma;
  }
});

//    Questão 4

getById("btnEconomia").addEventListener("click", function () {
  let textoMeta = getById("campoMeta").value
  let textoDeposito = getById("campoDeposito").value
  let saida = getById("saidaEconomia");

  saida.innerText = "";

  if (textoMeta == "" || textoDeposito == "") {
    saida.innerText = "Preencha a meta e o depósito mensal.";
    return;
  }

  let meta = Number(textoMeta);
  let deposito = Number(textoDeposito);

  if (
    !Number.isInteger(meta) ||
    !Number.isInteger(deposito) ||
    meta < 1 ||
    meta > 10000 ||
    deposito < 1 ||
    deposito > 10000
  ) {
    saida.innerText = "Digite valores inteiros de 1 a 10000 nos dois campos.";
    return;
  }

  let saldo = 0;
  let quantidade = 0;
  let texto = "";

  while (saldo < meta) {
    saldo += deposito;
    quantidade++;
    texto += "Depósito " + quantidade + ": R$ " + saldo + "\n";
  }

  texto += "Depósitos necessários: " + quantidade + "\n";
  texto += "Saldo final: R$ " + saldo;

  saida.innerText = texto;
});
