import type { ModuleMeta, StudyContent, Question } from "./types";

export type MathPack = ModuleMeta & { content: StudyContent };

export const mathExtras: MathPack[] = [
  {
    slug: "funcoes-dependencias-variaveis",
    subject: "matematica",
    number: 27,
    title: "Funções: dependências entre variáveis",
    notebook: "Caderno 3",
    kicker: "Módulo 27",
    fresh: true,
    content: {
      intro: "Uma função descreve como uma quantidade depende de outra. Ela associa cada valor de entrada x a exatamente um valor de saída y. Podemos representar essa relação por uma frase, uma tabela, um gráfico ou uma lei matemática.",
      formula: { label: "Lei de formação", expr: "y = f(x)", note: "x é a variável independente; y é a variável dependente, pois seu valor é determinado pela escolha de x." },
      sections: [
        { title: "1. Relações entre variáveis", points: [
          "Variáveis são grandezas que podem assumir diferentes valores. Exemplo: o preço total depende da quantidade de cadernos comprados.",
          "Em uma função, cada entrada do domínio possui uma única saída. Uma mesma saída pode corresponder a várias entradas.",
          "Uma relação em que a mesma entrada aparece ligada a duas saídas diferentes não é função.",
          "A variável independente costuma ser indicada por x; a dependente, por y ou f(x)."
        ]},
        { title: "2. Domínio, contradomínio e imagem", points: [
          "Domínio: conjunto de valores que podem ser usados como entrada.",
          "Contradomínio: conjunto definido como possível conjunto de chegada.",
          "Imagem: valores de saída que a função realmente assume para as entradas do domínio.",
          "Em situações reais, o contexto pode restringir o domínio: quantidade de pessoas, por exemplo, normalmente usa números inteiros não negativos."
        ]},
        { title: "3. Tabelas, gráficos e lei de formação", points: [
          "Uma tabela organiza pares (x, y). Para cada x, deve existir somente um y.",
          "No plano cartesiano, x fica no eixo horizontal e y no vertical. Cada par ordenado é representado por um ponto.",
          "A lei de formação permite calcular a saída. Se f(x) = 2x + 3, então f(4) = 2·4 + 3 = 11.",
          "Para descobrir uma entrada a partir da saída, substitua f(x) pelo valor conhecido e resolva a equação."
        ]},
        { title: "4. Dependência direta e inversa", points: [
          "Em uma proporcionalidade direta, y = kx: se x dobra, y também dobra, mantendo a razão y/x igual a k.",
          "Em uma proporcionalidade inversa, y = k/x (com x diferente de zero): se x dobra, y cai pela metade, mantendo o produto x·y igual a k.",
          "Nem toda função é proporcional. Em y = 2x + 3, por exemplo, a razão y/x não é constante."
        ]},
        { title: "5. Como analisar uma situação", points: [
          "Identifique quais são as grandezas e escolha qual será a entrada.",
          "Verifique quais valores são permitidos para a entrada e se cada entrada determina uma única saída.",
          "Organize alguns pares em uma tabela e procure um padrão.",
          "Escreva a lei de formação, teste-a com um valor e interprete o resultado com a unidade correta."
        ]}
      ],
      glossary: [
        ["Função", "Relação que associa cada entrada do domínio a uma única saída."],
        ["Domínio", "Conjunto dos valores de entrada permitidos."],
        ["Imagem", "Conjunto dos valores de saída efetivamente obtidos."],
        ["Variável independente", "Grandeza escolhida como entrada, geralmente x."],
        ["Variável dependente", "Grandeza cujo valor depende da entrada, geralmente y."],
        ["Lei de formação", "Regra matemática que calcula a saída a partir da entrada."]
      ],
      faq: [
        ["Toda relação entre duas grandezas é uma função?", "Não. Para ser função, cada entrada precisa estar associada a exatamente uma saída."],
        ["Uma função pode ter duas entradas com a mesma saída?", "Sim. Por exemplo, f(x) = x²: f(2) e f(-2) valem 4."],
        ["Como encontro f(3)?", "Substitua x por 3 na lei de formação e faça as operações respeitando a ordem."]
      ],
      videos: [],
      sources: [],
      syllabus: ["Reconhecer relações funcionais", "Identificar domínio, contradomínio e imagem", "Interpretar tabelas e gráficos", "Calcular valores de uma função", "Distinguir proporcionalidade direta e inversa"]
    }
  },
  {
    slug: "resolucao-de-problemas",
    subject: "matematica",
    number: 28,
    title: "Resolução de problemas",
    notebook: "Caderno 3",
    kicker: "Módulo 28",
    fresh: true,
    content: {
      intro: "Resolver um problema matemático exige transformar informações escritas em relações que possam ser calculadas. O segredo é compreender o que se pede, organizar os dados, escolher uma estratégia e conferir se a resposta faz sentido no contexto.",
      sections: [
        { title: "1. Leia, organize e planeje", points: [
          "Leia o enunciado inteiro e destaque a pergunta final. Não comece a calcular antes de entender a situação.",
          "Anote os dados, as unidades e as condições. Diferencie informações necessárias de detalhes que não entram no cálculo.",
          "Represente a incógnita por uma letra, como x, e descreva o que ela significa.",
          "Faça um desenho, esquema, tabela ou diagrama quando isso ajudar a visualizar as relações."
        ]},
        { title: "2. Tradução da linguagem para a álgebra", points: [
          "A soma de um número com 7: x + 7. O dobro de um número: 2x. A metade: x/2.",
          "Três unidades a menos que o triplo de x: 3x - 3. O quadrado de x: x².",
          "A expressão 'é igual a' geralmente indica o sinal de igualdade; 'no mínimo' indica maior ou igual; 'não ultrapassa' indica menor ou igual.",
          "Transforme a frase em uma equação ou sistema e resolva mantendo o significado da incógnita."
        ]},
        { title: "3. Estratégias frequentes", points: [
          "Equação: use quando há uma incógnita e uma condição de igualdade. Exemplo: x + 5 = 17, então x = 12.",
          "Proporção: use quando duas razões representam a mesma relação. Em 3/5 = x/20, a multiplicação cruzada permite encontrar x = 12.",
          "Porcentagem: p% de uma quantidade Q corresponde a (p/100)·Q. Um desconto de 15% deixa 85% do preço original.",
          "Sistema de equações: use quando duas ou mais condições relacionam as mesmas incógnitas."
        ]},
        { title: "4. Exemplo resolvido: compra de ingressos", points: [
          "Dois ingressos iguais custam R$ 54 ao todo. Seja x o preço de um ingresso.",
          "A informação vira 2x = 54. Dividindo os dois lados por 2, obtemos x = 27.",
          "Conferência: 2 · R$ 27 = R$ 54. Portanto, cada ingresso custa R$ 27."
        ]},
        { title: "5. Confira a resposta", points: [
          "Substitua o resultado na equação original para verificar se a igualdade é verdadeira.",
          "Observe se a unidade está correta: metros, reais, pessoas, litros etc.",
          "Avalie se o resultado é possível. Uma quantidade de pessoas não deve ser negativa ou fracionária quando o contexto exige pessoas inteiras.",
          "Responda com uma frase completa, retomando o que o problema perguntou."
        ]}
      ],
      formula: { label: "Porcentagem", expr: "p% de Q = (p/100) · Q", note: "Para aumento de p%, multiplique por 1 + p/100; para desconto, por 1 - p/100." },
      glossary: [
        ["Incógnita", "Valor desconhecido que será representado por uma letra."],
        ["Equação", "Igualdade matemática que contém uma ou mais incógnitas."],
        ["Proporção", "Igualdade entre duas razões."],
        ["Estimativa", "Cálculo aproximado usado para avaliar se o resultado é razoável."],
        ["Sistema", "Conjunto de equações que precisam ser verdadeiras ao mesmo tempo."]
      ],
      faq: [
        ["Como saber qual operação usar?", "Procure a relação descrita no enunciado. Traduza expressões como dobro, diferença, total, repartição e comparação antes de escolher a operação."],
        ["Preciso escrever a conta?", "Sim. Registrar as etapas ajuda a acompanhar o raciocínio e permite localizar possíveis erros."],
        ["E se o resultado não fizer sentido?", "Revise a interpretação, as unidades, a equação montada e as operações. Um resultado impossível costuma indicar que alguma etapa precisa ser corrigida."]
      ],
      videos: [],
      sources: [],
      syllabus: ["Identificar dados e incógnitas", "Traduzir frases em expressões e equações", "Resolver problemas com equações", "Aplicar proporções e porcentagens", "Validar e interpretar a resposta"]
    }
  },
  {
    slug: "volumes-prismas-cilindros",
    subject: "matematica",
    number: 29,
    title: "Volumes de prismas e cilindros",
    notebook: "Caderno 4",
    kicker: "Módulo 29",
    fresh: true,
    content: {
      intro: "Volume mede o espaço ocupado por um sólido. Em prismas e cilindros, o cálculo usa a área da base multiplicada pela altura. Antes de aplicar a fórmula, identifique a forma da base e converta todas as medidas para a mesma unidade.",
      formula: { label: "Fórmulas de volume", expr: "V prisma = A_base · h   |   V cilindro = π · r² · h", note: "A_base é a área da base, h é a altura perpendicular e r é o raio da base circular." },
      sections: [
        { title: "1. O que é um prisma?", points: [
          "Prisma é um sólido com duas bases paralelas e congruentes, ligadas por faces laterais que são paralelogramos.",
          "A altura é a distância perpendicular entre os planos das bases; ela não deve ser confundida com a aresta inclinada.",
          "O volume de qualquer prisma é a área de uma base multiplicada pela altura.",
          "Em um prisma reto, as arestas laterais são perpendiculares às bases. Em um prisma oblíquo, não são."
        ]},
        { title: "2. Área da base e volume do prisma", points: [
          "Prisma de base retangular: A_base = comprimento · largura.",
          "Prisma de base triangular: A_base = (base do triângulo · altura do triângulo)/2.",
          "Exemplo: um prisma tem base retangular de 4 cm por 3 cm e altura de 10 cm. A_base = 12 cm² e V = 12 · 10 = 120 cm³.",
          "A unidade de volume é cúbica: cm³, m³, dm³ etc."
        ]},
        { title: "3. Cilindro", points: [
          "O cilindro possui duas bases circulares congruentes e paralelas, ligadas por uma superfície lateral curva.",
          "A área da base é a área do círculo: A_base = πr².",
          "O volume é V = πr²h. Use π ≈ 3,14 quando o enunciado pedir aproximação.",
          "Exemplo: r = 2 cm e h = 5 cm. V = π · 2² · 5 = 20π cm³, aproximadamente 62,8 cm³."
        ]},
        { title: "4. Conversão de unidades", points: [
          "1 dm³ = 1 litro; 1 cm³ = 1 mililitro; 1 m³ = 1.000 litros.",
          "Ao converter unidades de comprimento, lembre que a conversão de volume é cúbica. Como 1 m = 100 cm, então 1 m³ = 1.000.000 cm³.",
          "Não misture raio em centímetros com altura em metros. Converta tudo para a mesma unidade antes de calcular."
        ]},
        { title: "5. Estratégia para a prova", points: [
          "Identifique se o sólido é um prisma ou um cilindro e localize a base.",
          "Calcule a área da base separadamente e escreva a unidade quadrada.",
          "Multiplique pela altura perpendicular e escreva a unidade cúbica.",
          "Se houver π, mantenha a resposta exata em função de π ou use a aproximação indicada."
        ]}
      ],
      glossary: [
        ["Volume", "Medida do espaço ocupado por um sólido."],
        ["Área da base", "Área da região plana que forma a base do sólido."],
        ["Altura", "Distância perpendicular entre as bases."],
        ["Raio", "Distância do centro do círculo até sua borda."],
        ["Unidade cúbica", "Unidade de volume, como cm³ ou m³."]
      ],
      faq: [
        ["A altura do prisma é sempre uma aresta lateral?", "Apenas no prisma reto. Em um prisma oblíquo, a altura é a distância perpendicular entre as bases."],
        ["Posso usar o diâmetro no lugar do raio?", "Não diretamente. O raio é metade do diâmetro: r = d/2."],
        ["Por que o resultado fica em cm³?", "Porque multiplicamos uma área em cm² por uma altura em cm."]
      ],
      videos: [],
      sources: [],
      syllabus: ["Reconhecer elementos de prismas e cilindros", "Calcular áreas das bases", "Aplicar as fórmulas de volume", "Resolver problemas contextualizados", "Converter unidades de volume e capacidade"]
    }
  },
  {
    slug: "probabilidade",
    subject: "matematica",
    number: 30,
    title: "Probabilidade",
    notebook: "Caderno 4",
    kicker: "Módulo 30",
    fresh: true,
    content: {
      intro: "Probabilidade expressa numericamente a chance de um evento acontecer. Em experimentos com resultados igualmente possíveis, calculamos a razão entre o número de resultados favoráveis e o número total de resultados possíveis.",
      formula: { label: "Probabilidade de um evento", expr: "P(A) = casos favoráveis / casos possíveis", note: "A fórmula clássica vale quando todos os resultados do espaço amostral são igualmente prováveis." },
      sections: [
        { title: "1. Experimento e espaço amostral", points: [
          "Experimento aleatório é uma situação cujo resultado não pode ser previsto com certeza antes de acontecer, como lançar um dado.",
          "Espaço amostral (Ω) é o conjunto de todos os resultados possíveis. Em um dado comum: Ω = {1, 2, 3, 4, 5, 6}.",
          "Evento é um subconjunto do espaço amostral. Tirar um número par é o evento {2, 4, 6}.",
          "Evento certo tem probabilidade 1; evento impossível tem probabilidade 0."
        ]},
        { title: "2. Cálculo em casos equiprováveis", points: [
          "Conte todos os resultados possíveis e depois conte quantos atendem à condição pedida.",
          "Em um dado justo, a chance de sair número par é 3/6 = 1/2 = 50%.",
          "A probabilidade pode ser expressa como fração, número decimal ou porcentagem.",
          "A probabilidade sempre fica entre 0 e 1, inclusive."
        ]},
        { title: "3. Evento complementar", points: [
          "O complementar de A é o evento em que A não acontece.",
          "P(não A) = 1 - P(A). Se a chance de chover é 30%, a chance de não chover, no mesmo modelo, é 70%.",
          "Usar o complementar pode simplificar problemas com muitos resultados."
        ]},
        { title: "4. União e interseção de eventos", points: [
          "A união A ou B reúne resultados que pertencem a A, a B ou aos dois.",
          "A interseção A e B reúne resultados que pertencem simultaneamente aos dois eventos.",
          "Regra geral: P(A ou B) = P(A) + P(B) - P(A e B).",
          "Se A e B são mutuamente exclusivos, não podem ocorrer juntos e P(A e B) = 0."
        ]},
        { title: "5. Experimentos em etapas", points: [
          "Em duas etapas independentes, a probabilidade de ocorrer A e depois B é P(A) · P(B).",
          "Exemplo: lançar uma moeda duas vezes. A chance de sair cara nas duas é 1/2 · 1/2 = 1/4.",
          "Sem reposição, as probabilidades podem mudar após a primeira retirada. Atualize o total de casos possíveis."
        ]}
      ],
      glossary: [
        ["Experimento aleatório", "Procedimento cujo resultado não é conhecido com certeza antes de acontecer."],
        ["Espaço amostral", "Conjunto de todos os resultados possíveis."],
        ["Evento", "Conjunto de resultados que satisfazem uma condição."],
        ["Equiprováveis", "Resultados que possuem a mesma chance de ocorrer."],
        ["Complementar", "Evento formado pelos resultados em que A não ocorre."],
        ["Mutuamente exclusivos", "Eventos que não podem ocorrer ao mesmo tempo."]
      ],
      faq: [
        ["Probabilidade de 50% significa que vai acontecer uma vez a cada duas tentativas?", "Não necessariamente. Significa que, em muitas repetições sob as mesmas condições, a frequência tende a se aproximar de 50%; sequências curtas podem variar."],
        ["Quando posso usar casos favoráveis dividido por casos possíveis?", "Quando todos os resultados elementares são igualmente prováveis."],
        ["O que muda quando não há reposição?", "Depois de retirar um elemento, o total disponível e a composição do conjunto mudam, alterando a próxima probabilidade."]
      ],
      videos: [],
      sources: [],
      syllabus: ["Identificar experimentos aleatórios", "Determinar o espaço amostral", "Calcular probabilidades em casos equiprováveis", "Usar evento complementar", "Resolver problemas com união, interseção e etapas"]
    }
  },
  {
    slug: "equacoes-redutiveis-segundo-grau",
    subject: "matematica",
    number: 31,
    title: "Equações redutíveis a equações de 2º grau",
    notebook: "Caderno 4",
    kicker: "Módulo 31",
    fresh: true,
    content: {
      intro: "Algumas equações parecem ter grau maior ou apresentam expressões diferentes, mas podem ser transformadas em uma equação do segundo grau por uma substituição adequada. Depois de resolver a equação auxiliar, é necessário voltar à variável original e conferir as soluções.",
      formula: { label: "Equação do 2º grau auxiliar", expr: "at² + bt + c = 0  (a ≠ 0)", note: "Resolva a equação em t e depois substitua cada valor na expressão original que definiu t." },
      sections: [
        { title: "1. Equações biquadradas", points: [
          "A forma típica é ax⁴ + bx² + c = 0. Ela não possui termos de grau ímpar.",
          "Faça t = x². Assim, x⁴ = t² e a equação vira at² + bt + c = 0.",
          "Resolva a equação auxiliar e depois retorne a x usando x² = t.",
          "No conjunto dos números reais, t negativo não produz valor real de x; t igual a zero produz x = 0."
        ]},
        { title: "2. Exemplo de equação biquadrada", points: [
          "Considere x⁴ - 5x² + 4 = 0. Faça t = x² e obtenha t² - 5t + 4 = 0.",
          "Fatorando: (t - 1)(t - 4) = 0. Logo, t = 1 ou t = 4.",
          "Voltando: x² = 1 ou x² = 4. Portanto, x = -1, 1, -2 ou 2.",
          "Confira os quatro valores na equação original."
        ]},
        { title: "3. Equações com substituição", points: [
          "Uma expressão repetida pode ser substituída por uma nova variável. Exemplo: se aparece (x² + 1)² e também x² + 1, faça t = x² + 1.",
          "Resolva a equação em t, respeitando as condições que a expressão original impõe.",
          "Se t = x² + 1 nos reais, então t ≥ 1. Uma solução auxiliar que viole essa condição deve ser descartada.",
          "Depois de encontrar t, resolva a equação correspondente em x."
        ]},
        { title: "4. Equações com x + 1/x", points: [
          "Em equações que envolvem x² + 1/x², pode ajudar definir t = x + 1/x, lembrando que x ≠ 0.",
          "Use a identidade (x + 1/x)² = x² + 2 + 1/x² para relacionar as expressões.",
          "Para x real e não nulo, t ≤ -2 ou t ≥ 2. Essa restrição ajuda a verificar se a solução auxiliar é possível.",
          "Substituições desse tipo exigem atenção ao domínio e à volta para a variável original."
        ]},
        { title: "5. Cuidados com as soluções", points: [
          "A substituição simplifica a equação, mas não elimina as condições da expressão original.",
          "Ao extrair raiz quadrada de x² = 9, considere x = 3 e x = -3.",
          "Não aceite automaticamente todas as raízes da equação auxiliar: verifique as restrições da substituição.",
          "Substitua as respostas finais na equação inicial para eliminar soluções inválidas."
        ]}
      ],
      glossary: [
        ["Equação biquadrada", "Equação do tipo ax⁴ + bx² + c = 0."],
        ["Substituição", "Troca temporária de uma expressão por uma nova variável."],
        ["Equação auxiliar", "Equação simplificada resolvida na variável substituta."],
        ["Solução válida", "Valor que respeita o domínio e satisfaz a equação original."]
      ],
      faq: [
        ["Por que usar t = x²?", "Porque x⁴ passa a ser t², transformando a equação em uma quadrática mais simples."],
        ["Se t = 4, quais valores de x resolvem x² = t?", "x = 2 e x = -2. É importante considerar as duas raízes reais."],
        ["Toda raiz da equação auxiliar serve?", "Não. A expressão que define t pode impor restrições. Sempre retorne à variável original e confira."]
      ],
      videos: [],
      sources: [],
      syllabus: ["Reconhecer equações biquadradas", "Aplicar substituição t = x²", "Resolver equações auxiliares", "Trabalhar com substituições de expressões", "Verificar domínio e soluções finais"]
    }
  },
  {
    slug: "fracoes-algebricas-equacoes",
    subject: "matematica",
    number: 32,
    title: "Frações algébricas e equações algébricas",
    notebook: "Caderno 4",
    kicker: "Módulo 32",
    fresh: true,
    content: {
      intro: "Frações algébricas são quocientes de polinômios. Para operar com elas, usamos ideias semelhantes às das frações numéricas, mas precisamos observar os valores que tornam o denominador igual a zero. Nas equações algébricas, essa restrição continua valendo durante toda a resolução.",
      formula: { label: "Condição fundamental", expr: "Denominador ≠ 0", note: "Antes de simplificar ou resolver, determine quais valores da variável são proibidos." },
      sections: [
        { title: "1. O que são frações algébricas?", points: [
          "Uma fração algébrica tem a forma P(x)/Q(x), em que P e Q são polinômios e Q(x) não pode ser zero.",
          "Exemplo: (x + 2)/(x - 3) está definida para x diferente de 3.",
          "O domínio exclui todos os valores que anulam o denominador.",
          "O numerador pode ser zero; a restrição principal é não dividir por zero."
        ]},
        { title: "2. Simplificação por fatoração", points: [
          "Fatore numerador e denominador e procure fatores comuns.",
          "Exemplo: (x² - 9)/(x - 3) = [(x - 3)(x + 3)]/(x - 3) = x + 3, com x diferente de 3.",
          "O fator cancelado não deixa de impor a restrição original. A expressão simplificada continua sem valor em x = 3.",
          "Só é permitido cancelar fatores inteiros, não termos isolados de uma soma."
        ]},
        { title: "3. Operações com frações algébricas", points: [
          "Adição e subtração: encontre um denominador comum, reescreva as frações e some ou subtraia os numeradores.",
          "Multiplicação: multiplique numeradores entre si e denominadores entre si; simplifique por fatores comuns.",
          "Divisão: multiplique pela fração inversa e lembre que a fração divisora também precisa ser diferente de zero.",
          "Sempre registre as restrições dos denominadores antes de simplificar."
        ]},
        { title: "4. Equações algébricas fracionárias", points: [
          "Determine primeiro os valores proibidos, resolvendo denominador = 0 para cada denominador da equação.",
          "Multiplique os dois lados pelo mínimo múltiplo comum dos denominadores para eliminar as frações.",
          "Resolva a equação obtida e descarte qualquer resultado proibido.",
          "Substitua as soluções restantes na equação original para conferir."
        ]},
        { title: "5. Exemplo resolvido", points: [
          "Resolva 1/(x - 1) = 2/(x + 1). Restrições: x ≠ 1 e x ≠ -1.",
          "Multiplicando em cruz: x + 1 = 2(x - 1).",
          "Então x + 1 = 2x - 2, logo x = 3.",
          "Como 3 não é proibido, a solução é válida. A conferência na equação original confirma a igualdade."
        ]}
      ],
      glossary: [
        ["Fração algébrica", "Quociente entre expressões algébricas."],
        ["Denominador", "Parte inferior da fração; não pode ser zero."],
        ["Fator", "Expressão que participa de uma multiplicação."],
        ["Fatoração", "Escrita de uma expressão como produto de fatores."],
        ["MMC", "Menor múltiplo comum dos denominadores, usado para eliminar frações."],
        ["Valor proibido", "Valor da variável que anula algum denominador."]
      ],
      faq: [
        ["Posso cancelar x em (x + 2)/x?", "Não. x + 2 é uma soma, não um produto com fator x. O cancelamento só ocorre entre fatores."],
        ["Se um fator foi cancelado, posso usar o valor que o anulava?", "Não. A restrição vem da expressão original e continua valendo mesmo após a simplificação."],
        ["Por que devo conferir a resposta na equação original?", "A multiplicação pelos denominadores pode produzir candidatos que não pertencem ao domínio. A conferência garante que a resposta é válida."]
      ],
      videos: [],
      sources: [],
      syllabus: ["Identificar domínio e valores proibidos", "Fatorar e simplificar frações algébricas", "Somar, subtrair, multiplicar e dividir frações algébricas", "Resolver equações fracionárias", "Verificar soluções na expressão original"]
    }
  }
];

export const mathQuiz: Question[] = [
  { id: "mat-func-1", subject: "matematica", module: "funcoes-dependencias-variaveis", difficulty: "basica", type: "multipla", prompt: "Uma relação associa x = 2 a y = 5 e também a y = 8. Essa relação é uma função de x em y?", options: ["Sim, pois há duas saídas possíveis", "Não, pois uma entrada não pode ter duas saídas", "Sim, pois toda relação é função", "Não, pois uma função não pode repetir entradas"], answer: 1, explanation: "Em uma função, cada entrada do domínio precisa estar associada a exatamente uma saída." },
  { id: "mat-func-2", subject: "matematica", module: "funcoes-dependencias-variaveis", difficulty: "basica", type: "multipla", prompt: "Se f(x) = 3x - 2, quanto vale f(4)?", options: ["8", "10", "12", "14"], answer: 1, explanation: "Substituindo x por 4: f(4) = 3 · 4 - 2 = 10." },
  { id: "mat-func-3", subject: "matematica", module: "funcoes-dependencias-variaveis", difficulty: "intermediaria", type: "multipla", prompt: "Na função y = 5x, qual é a variável dependente?", options: ["x", "5", "y", "Nenhuma"], answer: 2, explanation: "y depende do valor escolhido para x; por isso é a variável dependente." },
  { id: "mat-func-4", subject: "matematica", module: "funcoes-dependencias-variaveis", difficulty: "intermediaria", type: "multipla", prompt: "Se y = 24/x, com x positivo, o que acontece com y quando x dobra?", options: ["y dobra", "y fica igual", "y cai pela metade", "y quadruplica"], answer: 2, explanation: "É uma proporcionalidade inversa: dobrar x divide y por 2." },
  { id: "mat-prob-1", subject: "matematica", module: "resolucao-de-problemas", difficulty: "basica", type: "multipla", prompt: "O dobro de um número somado a 7 é 19. Qual equação representa a frase?", options: ["2x - 7 = 19", "2(x + 7) = 19", "2x + 7 = 19", "x/2 + 7 = 19"], answer: 2, explanation: "O dobro é 2x; somado a 7 resulta em 19: 2x + 7 = 19." },
  { id: "mat-prob-2", subject: "matematica", module: "resolucao-de-problemas", difficulty: "basica", type: "multipla", prompt: "Um produto de R$ 80 recebe desconto de 25%. Qual é o preço final?", options: ["R$ 20", "R$ 55", "R$ 60", "R$ 75"], answer: 2, explanation: "25% de 80 é 20. Preço final: 80 - 20 = R$ 60." },
  { id: "mat-prob-3", subject: "matematica", module: "resolucao-de-problemas", difficulty: "intermediaria", type: "multipla", prompt: "Três caixas iguais contêm 45 livros ao todo. Quantos livros há em cada caixa?", options: ["12", "15", "18", "21"], answer: 1, explanation: "Se x é a quantidade por caixa, 3x = 45; portanto x = 15." },
  { id: "mat-prob-4", subject: "matematica", module: "resolucao-de-problemas", difficulty: "intermediaria", type: "multipla", prompt: "Se 4 cadernos custam R$ 28, mantendo o mesmo preço por unidade, quanto custam 7 cadernos?", options: ["R$ 42", "R$ 45", "R$ 49", "R$ 56"], answer: 2, explanation: "Cada caderno custa 28/4 = R$ 7. Então 7 cadernos custam R$ 49." },
  { id: "mat-vol-1", subject: "matematica", module: "volumes-prismas-cilindros", difficulty: "basica", type: "multipla", prompt: "Um prisma tem área da base igual a 12 cm² e altura de 5 cm. Qual é seu volume?", options: ["17 cm³", "30 cm³", "60 cm³", "120 cm³"], answer: 2, explanation: "V = A_base · h = 12 · 5 = 60 cm³." },
  { id: "mat-vol-2", subject: "matematica", module: "volumes-prismas-cilindros", difficulty: "basica", type: "multipla", prompt: "Qual é a fórmula do volume de um cilindro de raio r e altura h?", options: ["πrh", "2πr + h", "πr²h", "πr² + h"], answer: 2, explanation: "A área da base circular é πr². Multiplicando pela altura: V = πr²h." },
  { id: "mat-vol-3", subject: "matematica", module: "volumes-prismas-cilindros", difficulty: "intermediaria", type: "multipla", prompt: "Um cilindro tem raio 3 cm e altura 4 cm. Qual é o volume exato?", options: ["12π cm³", "24π cm³", "36π cm³", "48π cm³"], answer: 2, explanation: "V = π · 3² · 4 = 36π cm³." },
  { id: "mat-vol-4", subject: "matematica", module: "volumes-prismas-cilindros", difficulty: "intermediaria", type: "multipla", prompt: "Quantos litros correspondem a 2 dm³?", options: ["0,2 L", "2 L", "20 L", "200 L"], answer: 1, explanation: "A equivalência é 1 dm³ = 1 litro; portanto 2 dm³ = 2 litros." },
  { id: "mat-prob-30-1", subject: "matematica", module: "probabilidade", difficulty: "basica", type: "multipla", prompt: "Ao lançar um dado justo, qual é a probabilidade de sair um número par?", options: ["1/6", "1/3", "1/2", "2/3"], answer: 2, explanation: "Há três resultados pares (2, 4, 6) entre seis possíveis: 3/6 = 1/2." },
  { id: "mat-prob-30-2", subject: "matematica", module: "probabilidade", difficulty: "basica", type: "multipla", prompt: "Qual é a probabilidade de um evento impossível?", options: ["0", "1/4", "1/2", "1"], answer: 0, explanation: "Um evento impossível não possui casos favoráveis, então sua probabilidade é zero." },
  { id: "mat-prob-30-3", subject: "matematica", module: "probabilidade", difficulty: "intermediaria", type: "multipla", prompt: "Se P(A) = 0,35, qual é a probabilidade do complementar de A?", options: ["0,35", "0,50", "0,65", "1,35"], answer: 2, explanation: "P(não A) = 1 - P(A) = 1 - 0,35 = 0,65." },
  { id: "mat-prob-30-4", subject: "matematica", module: "probabilidade", difficulty: "intermediaria", type: "multipla", prompt: "Uma moeda justa é lançada duas vezes. Qual é a probabilidade de sair cara nas duas?", options: ["1/2", "1/3", "1/4", "3/4"], answer: 2, explanation: "Os lançamentos são independentes: 1/2 · 1/2 = 1/4." },
  { id: "mat-eq-1", subject: "matematica", module: "equacoes-redutiveis-segundo-grau", difficulty: "basica", type: "multipla", prompt: "Na equação x⁴ - 5x² + 4 = 0, qual substituição transforma a expressão em uma equação do 2º grau?", options: ["t = x", "t = x²", "t = x⁴", "t = 1/x"], answer: 1, explanation: "Com t = x², temos x⁴ = t² e a equação se torna t² - 5t + 4 = 0." },
  { id: "mat-eq-2", subject: "matematica", module: "equacoes-redutiveis-segundo-grau", difficulty: "intermediaria", type: "multipla", prompt: "Se t = x² e a equação auxiliar fornece t = 9, quais são os valores reais de x?", options: ["Apenas 3", "Apenas -3", "3 e -3", "9 e -9"], answer: 2, explanation: "x² = 9 possui duas soluções reais: x = 3 e x = -3." },
  { id: "mat-eq-3", subject: "matematica", module: "equacoes-redutiveis-segundo-grau", difficulty: "intermediaria", type: "multipla", prompt: "Qual condição deve ser lembrada ao usar t = x² nos números reais?", options: ["t pode ser negativo", "t deve ser maior ou igual a zero", "t deve ser sempre 1", "x deve ser positivo"], answer: 1, explanation: "O quadrado de um número real nunca é negativo; logo t = x² ≥ 0." },
  { id: "mat-eq-4", subject: "matematica", module: "equacoes-redutiveis-segundo-grau", difficulty: "avancada", type: "multipla", prompt: "A equação x⁴ - 5x² + 4 = 0 possui quais soluções reais?", options: ["-2 e 2", "-1 e 1", "-2, -1, 1 e 2", "0, 1 e 4"], answer: 2, explanation: "Com t = x²: t² - 5t + 4 = 0, então t = 1 ou 4. Assim x = ±1 ou x = ±2." },
  { id: "mat-frac-1", subject: "matematica", module: "fracoes-algebricas-equacoes", difficulty: "basica", type: "multipla", prompt: "Para quais valores de x a fração 1/(x - 4) está definida?", options: ["Todos os reais", "Apenas x = 4", "Todos os reais, exceto x = 4", "Apenas x maior que 4"], answer: 2, explanation: "O denominador não pode ser zero: x - 4 ≠ 0, portanto x ≠ 4." },
  { id: "mat-frac-2", subject: "matematica", module: "fracoes-algebricas-equacoes", difficulty: "basica", type: "multipla", prompt: "Qual é a fatoração de x² - 9?", options: ["(x - 9)(x + 1)", "(x - 3)(x + 3)", "(x - 3)²", "(x + 9)(x - 1)"], answer: 1, explanation: "É uma diferença de quadrados: a² - b² = (a - b)(a + b)." },
  { id: "mat-frac-3", subject: "matematica", module: "fracoes-algebricas-equacoes", difficulty: "intermediaria", type: "multipla", prompt: "Simplificando (x² - 9)/(x - 3), com a restrição original, obtemos:", options: ["x - 3, x ≠ 3", "x + 3, x ≠ 3", "x + 3, para todo real", "x² + 3"], answer: 1, explanation: "Fatorando, (x - 3)(x + 3)/(x - 3) = x + 3, mas x = 3 continua proibido." },
  { id: "mat-frac-4", subject: "matematica", module: "fracoes-algebricas-equacoes", difficulty: "intermediaria", type: "multipla", prompt: "Na equação 1/(x - 1) = 2/(x + 1), qual é a solução válida?", options: ["x = -1", "x = 1", "x = 2", "x = 3"], answer: 3, explanation: "As restrições são x ≠ 1 e x ≠ -1. Multiplicando em cruz: x + 1 = 2x - 2, então x = 3, que é válido." }
];
