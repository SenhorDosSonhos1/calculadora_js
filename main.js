
function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));
    if (!operacao || operacao >= 7 || operacao < 1) {
        alert('Erro - Operação inválida')
        calculadora()
    } else {
        let n1 = Number(prompt('Primeiro numero: '));
        let n2 = Number(prompt('Segundo numero: '));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - Parametros inválidos')
            calculadora()
        }
        else {
            function soma(x, y) {
                resultado = x + y
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }
            function subtracao(x, y) {
                resultado = x - y
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }
            function multiplicacao(x, y) {
                resultado = x * y
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divisao_inteira(x, y) {
                resultado = x / y
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divisao_real(x, y) {
                resultado = x % y
                alert(`O resto da divisão entre ${n1} e ${n2} = ${resultado}`)
                novaOperacao();
            }
            function potenciacao(x, y) {
                resultado = x ** y
                alert(`A potencia de ${n1} elevado por ${n2} = ${resultado}`)
                novaOperacao();
            }
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n1 - Sim\n2 - Não')
                if (opcao == 1) {
                    calculadora()
                } else if (opcao == 2) {
                    alert('Até mais!')
                } else {
                    alert('Erro - Opção inválida!')
                }
            }
        }
        switch (operacao) {
            case 1:
                soma(n1, n2);
                break
            case 2:
                subtracao(n1, n2);
                break
            case 3:
                multiplicacao(n1, n2);
                break
            case 4:
                divisao_inteira(n1, n2);
                break
            case 5:
                divisao_real(n1, n2);
                break
            case 6:
                potenciacao(n1, n2);
                break
        }
    }
    
};

calculadora();