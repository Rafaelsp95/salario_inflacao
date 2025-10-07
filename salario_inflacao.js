import dados from 'readline-sync';

const salarioMinimo = [ // array de salários
    {salario: 510.00,   ano: 2010},
    {salario: 545.00,   ano: 2011},    
    {salario: 622.00,   ano: 2012},
    {salario: 678.00,   ano: 2013},
    {salario: 724.00,   ano: 2014},
    {salario: 788.00,   ano: 2015},
    {salario: 880.00,   ano: 2016},
    {salario: 937.00,   ano: 2017},
    {salario: 954.00,   ano: 2018},
    {salario: 998.00,   ano: 2019},
    {salario: 1045.00,  ano: 2020},
];

const inflacao_ipca = [  // array de inflação
    {ipca: 5.91,    ano: 2010},
    {ipca: 6.50,    ano: 2011},
    {ipca: 5.84,    ano: 2012},
    {ipca: 5.91,    ano: 2013},
    {ipca: 6.41,    ano: 2014},
    {ipca: 10.67,   ano: 2015},
    {ipca: 6.29,    ano: 2016},
    {ipca: 2.95,    ano: 2017},
    {ipca: 3.75,    ano: 2018},
    {ipca: 4.31,    ano: 2019},
    {ipca: 4.52,    ano: 2020}
];

/*
Variável que será exclusivamente utilizada para escolher a opção do usuário.
Valor inicial -1 diferente de 0 pra entrar no loop!
*/ 
let escolha = -1;

while (escolha !== 0) {

    console.log('\nEscolha as opções abaixo:\n');

    console.log('1 - Listar o histórico salarial de 2010 à 2020');
    console.log('2 - Listar o índice IPCA de 2010 à 2020');
    console.log('3 - Comparação entre o percentual de aumento salarial e o IPCA');
    console.log('0 - Sair\n');
    

    escolha = dados.questionInt('\nDigite uma das opções: ');

    switch (escolha) {
    
        case 1:
            console.log('\nHistórico salarial de 2010 à 2020\n');
    
            // utilizando o for/of para percorrer o array 'salarioMinimo'
            for (let salarios of salarioMinimo){
                let salarioMin = salarios.salario;
                let ano = salarios.ano;
    
                /* variáveis usadas para a formatação/organização dos dados na saída do console */
                let label_salarioMin = 'Salário:'
                let label_ano = 'Ano:';
    
                // saída de dados formatadas
                console.log(label_salarioMin.padEnd(20, '_')+' R$ '+salarioMin+',00');
                console.log(label_ano.padEnd(20, '_')+' '+ano+'\n');
            }
    
        break;
    
        case 2: 
            console.log('\nÍndice IPCA de 2010 à 2020\n');
    
            // utilizando o for/of para percorrer o array 'inflacao_ipca'
            for (let inflacao of inflacao_ipca) {
                let indice_ipca = inflacao.ipca;
                let ano = inflacao.ano;
    
                /* variáveis usadas para a formatação/organização dos dados na saída do console */
                let label_indice_ipca = 'IPCA:'
                let label_ano = 'Ano:';
    
                // saída de dados formatadas
                console.log(label_indice_ipca.padEnd(20, '_')+' '+indice_ipca+' %');
                console.log(label_ano.padEnd(20, '_')+' '+ano+'\n');
            }
    
        break
            
        case 3: 
            console.log('\nComparação entre o percentual de aumento salarial e o IPCA\n');
            
            /* acessando as duas coleções de objetos pelos seus índices através da estrutura de repetição for */
            for (let i = 0; i < salarioMinimo.length-1; i++) {
                let salarioMin = salarioMinimo[i].salario;
                let ano = salarioMinimo[i].ano;
                let inflacao = inflacao_ipca[i].ipca;
    
                // cálculo do crescimento salarial
                let salarioAnterior = salarioMinimo[0].salario; // salário de 2010
                let diferenca = salarioMin - salarioAnterior;
                let crescimento = (diferenca / salarioAnterior) * 100;
    
                let label_salarioMin = 'Salário:';
                let label_ano = 'Ano:';
                let label_inflacao_ipca = 'Inflação IPCA:';
                let label_crescimento = 'Crescimento salarial:';
                
                // saída de dados formatadas
                console.log(label_salarioMin.padEnd(30, '_')+' R$ '+salarioMin+',00');
                console.log(label_ano.padEnd(30, '_')+' '+ano);
                console.log(label_inflacao_ipca.padEnd(30, '_')+' '+inflacao+'%');
                console.log(label_crescimento.padEnd(30, '_')+' '+crescimento.toFixed(1)+'%','\n');
            }
    
        break;
            
        case 0:
            console.log('\nEncerrando o programa...\n');

        break;    

        default:
            console.log('Opção inválida! Tente novamente.\n');

        break;
    }
}

   
