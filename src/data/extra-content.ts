import type { ModuleMeta, StudyContent } from "./types";

export type ExtraPack = ModuleMeta & { content: StudyContent };

export const extras: ExtraPack[] = [
  {
    slug: "regencias",
    subject: "portugues",
    number: 35,
    title: "As regências na escrita e na fala",
    notebook: "Caderno 3",
    kicker: "Módulo 35",
    fresh: true,
    content: {
      intro:
        "Regência é a relação entre um termo regente — verbo ou nome — e o complemento que ele exige. A prova cobra a norma-padrão da escrita e, ao mesmo tempo, pede para reconhecer o que a fala coloquial faz de outro jeito. Não se trata de dizer que a fala está “errada” no dia a dia: trata-se de saber qual forma a escrita formal e o enunciado da prova esperam.",
      sections: [
        {
          title: "1. Termo regente e termo regido",
          points: [
            "O termo regente determina se haverá preposição e qual será. O termo regido completa o sentido.",
            "Na regência verbal, o regente é o verbo: assistir, visar, aspirar, preferir, obedecer, implicar, namorar, chegar, ir.",
            "Na regência nominal, o regente é um nome (substantivo, adjetivo ou advérbio): acessível, favorável, compatível, relativo, ansioso.",
            "Mudou o sentido do verbo, pode mudar a regência. Por isso decorar uma preposição única, sem olhar o contexto, costuma derrubar a questão.",
          ],
        },
        {
          title: "2. Regência verbal que mais cai",
          points: [
            "Assistir, no sentido de ver ou presenciar, é transitivo indireto: assistir ao filme, assistir à aula. No sentido de prestar assistência, é transitivo direto: o médico assistiu o paciente. No sentido de caber um direito: esse direito assiste ao aluno.",
            "Visar, no sentido de ter por objetivo, pede a: a campanha visa à redução do desperdício. No sentido de mirar ou dar visto, não pede preposição: visou o alvo, visou o cheque.",
            "Aspirar, no sentido de almejar, pede a: aspira ao cargo. No sentido de inalar ou sugar, é transitivo direto: aspirou o pó.",
            "Preferir já traz a comparação. A norma-padrão é preferir X a Y. Evite “prefiro mais”, “prefiro do que” e “prefiro X do que Y”.",
            "Obedecer e desobedecer pedem a: obedecer às regras. Por isso aceitam “lhe”: obedecer-lhe.",
            "Implicar, no sentido de acarretar, é transitivo direto: a falta implicou a reprovação. “Implicar em” é comum na fala, mas não é a forma padrão desse sentido. Implicar com alguém significa ter implicância.",
            "Namorar é transitivo direto na norma-padrão: namorar alguém. “Namorar com” é coloquial.",
            "Ir, chegar, voltar e comparecer, quando indicam movimento, pedem a: cheguei à escola, fui ao médico. “Cheguei em casa” e “fui no mercado” são muito frequentes na fala brasileira e devem ser reconhecidos como uso oral, não como a forma cobrada na escrita padrão.",
            "Esquecer e lembrar: sem pronome, transitivos diretos (esqueci o caderno). Com pronome, pedem de (esqueceu-se do caderno). Simpatizar pede com e não admite “se”: simpatizo com ela, não “simpatizo-me”.",
          ],
        },
        {
          title: "3. Regência nominal",
          points: [
            "O nome pede uma preposição fixa na norma-padrão, mesmo quando a fala omite ou troca essa preposição.",
            "Acessível a, favorável a, fiel a, contrário a, inferior a, superior a, relativo a, sensível a, alheio a, apto a.",
            "Compatível com, habituado a ou com, descontente com, junto a ou de, ansioso por ou para, capaz de, incapaz de, medo de, necessidade de.",
            "Afim de significa semelhante ou com a mesma finalidade. Não confunda com a locução a fim de (com a intenção de).",
            "Quando o nome e o verbo compartilham a mesma raiz, a preposição costuma ser a mesma: obediente a / obedecer a; favorável a / favorecer no sentido de ser a favor exige atenção ao enunciado.",
          ],
        },
        {
          title: "4. Norma-padrão e linguagem coloquial oral",
          points: [
            "A linguagem coloquial oral privilegia o ritmo, o contexto e o ouvinte presente. Ela aceita construções que a escrita formal evita.",
            "A norma-padrão é a variedade esperada em provas, textos escolares, documentos e notícias formais. Saber as duas é competência linguística, não um julgamento sobre quem fala.",
            "Na prova, o comando revela a expectativa: “de acordo com a norma-padrão”, “na variedade culta escrita”, “reescreva”. Se o comando não pedir a norma, uma fala coloquial num diálogo pode estar adequada ao gênero.",
            "Crase e regência andam juntas. Se o verbo pede a e o complemento é palavra feminina que aceita artigo, pode haver crase: assisti à peça, cheguei à escola. Sem preposição a, não há crase: assisti o paciente.",
            "Pronome lhe substitui objeto indireto de pessoa (obedeci-lhe). Não use lhe para substituir o filme em “assistir a”: a forma é assisti a ele, não “assisti-lhe” no sentido de ver.",
          ],
        },
        {
          title: "5. Como responder na prova",
          points: [
            "Substitua o verbo por um sinônimo. Se couber “ver”, assistir pede a. Se couber “ajudar”, assistir não pede preposição.",
            "Cuidado com a voz passiva. Verbo transitivo indireto no sentido pedido não vai para a passiva analítica: não se diz “o filme foi assistido” na norma-padrão.",
            "Leia a frase inteira antes de escolher a preposição. O mesmo verbo muda de regência quando muda de sentido.",
            "Marque o que a escrita padrão exige e, se a questão pedir, aponte também qual forma seria típica da fala.",
          ],
        },
      ],
      contrasts: [
        {
          fala: "Assisti o jogo ontem.",
          norma: "Assisti ao jogo ontem.",
          nota: "Ver ou presenciar pede a preposição a.",
        },
        {
          fala: "Prefiro mais água do que suco.",
          norma: "Prefiro água a suco.",
          nota: "Preferir não combina com “mais” nem com “do que”.",
        },
        {
          fala: "Cheguei no colégio atrasada.",
          norma: "Cheguei ao colégio atrasada.",
          nota: "Verbo de movimento: preposição a, não em.",
        },
        {
          fala: "A medida visa o bem-estar dos alunos.",
          norma: "A medida visa ao bem-estar dos alunos.",
          nota: "Visar no sentido de objetivar pede a.",
        },
        {
          fala: "A greve implicou em atrasos.",
          norma: "A greve implicou atrasos.",
          nota: "Implicar no sentido de acarretar é transitivo direto.",
        },
        {
          fala: "Ela namora com o Lucas.",
          norma: "Ela namora o Lucas.",
          nota: "Namorar, na norma-padrão, não pede com.",
        },
      ],
      glossary: [
        ["Regência", "Relação de dependência entre o termo regente e o complemento que ele exige."],
        ["Termo regente", "Verbo ou nome que determina a preposição."],
        ["Transitivo direto", "Verbo cujo complemento não é introduzido por preposição."],
        ["Transitivo indireto", "Verbo cujo complemento é introduzido por preposição."],
        ["Norma-padrão", "Variedade linguística esperada na escrita formal e nas provas."],
        ["Coloquial oral", "Uso típico da conversa cotidiana, mais solto quanto à regência."],
        ["Crase", "Fusão da preposição a com o artigo a. Só existe se a regência pedir a preposição."],
      ],
      faq: [
        [
          "Falar “assisti o filme” está errado?",
          "Na conversa, é uma forma muito comum e compreensível. Na norma-padrão da escrita, o sentido de ver pede “assistir ao filme”. A prova quase sempre cobra esta segunda forma.",
        ],
        [
          "Por que “prefiro café a chá” soa estranho?",
          "Porque a fala brasileira consolidou “do que”. A estranheza não muda a regra: preferir rejeita “do que” e também o reforço “mais”.",
        ],
        [
          "Todo “a” antes de palavra feminina é crase?",
          "Não. Só há crase se existir a preposição a exigida pela regência e, junto dela, o artigo a. Em “o médico assistiu a paciente”, no sentido de ajudar, não há preposição e portanto não há crase.",
        ],
      ],
      videos: [],
      sources: [
        {
          title: "Regência verbal",
          url: "https://brasilescola.uol.com.br/gramatica/regencia-verbal.htm",
          source: "Brasil Escola",
          note: "Verbos que mudam de sentido conforme a preposição.",
        },
        {
          title: "Regência nominal",
          url: "https://brasilescola.uol.com.br/gramatica/regencia-nominal.htm",
          source: "Brasil Escola",
          note: "Preposições exigidas por substantivos e adjetivos.",
        },
        {
          title: "Regência verbal",
          url: "https://mundoeducacao.uol.com.br/gramatica/regencia-verbal.htm",
          source: "Mundo Educação",
          note: "Revisão dos casos mais cobrados em prova.",
        },
      ],
      syllabus: [
        "Regência verbal",
        "Regência nominal",
        "Norma-padrão e linguagem coloquial oral",
        "Verbos assistir, visar, aspirar, preferir, implicar, namorar, chegar e ir",
        "Crase ligada à regência",
      ],
    },
  },
  {
    slug: "conto-policial",
    subject: "portugues",
    number: 37,
    title: "Um conto policial",
    notebook: "Caderno 3",
    kicker: "Módulo 37",
    fresh: true,
    content: {
      intro:
        "O conto policial organiza um enigma e uma investigação. No modelo clássico, um detetive observa indícios que os outros personagens — e o leitor — viram sem compreender. “A aventura do vampiro de Sussex”, de Arthur Conan Doyle, usa um título sobrenatural para entregar uma solução racional: não há vampiro. Há ciúme, um dardo envenenado e uma mãe tentando salvar o filho.",
      sections: [
        {
          title: "1. O que caracteriza a narrativa policial",
          points: [
            "Há um crime ou um mistério, indícios espalhados pelo texto e alguém que investiga.",
            "O leitor é convidado a competir com o detetive, mas em geral só entende a ordem dos fatos na revelação final.",
            "O narrador pode saber menos do que o detetive. Esse desnível sustenta o suspense.",
            "O espaço (casa, rua, consultório) e os objetos (carta, ferimento, arma, animal ferido) funcionam como pistas, não como enfeite.",
          ],
        },
        {
          title: "2. Detetive clássico e detetive moderno",
          points: [
            "No policial clássico, o detetive é brilhante e o mundo volta a fazer sentido quando o enigma se explica. A razão vence o caos aparente. Exemplos de referência: Auguste Dupin, de Edgar Allan Poe, Sherlock Holmes e os investigadores de Agatha Christie.",
            "O companheiro narrador — o doutor Watson, no caso de Holmes — vê os mesmos fatos e não chega à conclusão. Ele representa o leitor.",
            "No policial moderno e no romance noir, o detetive é falho, cansado ou comprometido. A solução nem sempre restaura a justiça. A violência aparece ligada à corrupção, à cidade e à desigualdade, não só a um culpado isolado.",
            "O clássico costuma fechar o caso. O moderno muitas vezes deixa resto: o crime se explica, mas a sociedade que o produziu continua.",
          ],
        },
        {
          title: "3. O conto: publicação e situação inicial",
          points: [
            "“The Adventure of the Sussex Vampire” foi publicado em 1924 na revista The Strand e entrou depois no volume The Case-Book of Sherlock Holmes. Em português circula como “A aventura do vampiro de Sussex”.",
            "Holmes recebe uma consulta sobre vampiros. O cliente é Robert Ferguson, corretor de chá, que vive em Sussex. Ele suspeita da segunda esposa, uma mulher peruana.",
            "Ferguson tem um filho adolescente do primeiro casamento, Jack, que anda, mas não tem o uso pleno das pernas por causa de um acidente na infância. Com a segunda esposa, tem um bebê.",
            "A esposa foi vista com sangue na boca junto ao pescoço ferido do bebê. Também agrediu Jack duas vezes. Desde então se trancou e não se explica. O cão da casa ficara paralisado antes.",
          ],
        },
        {
          title: "4. A solução e o método de Holmes",
          points: [
            "Não há vampiro. Jack, com ciúme do meio-irmão, atirou dardos envenenados no bebê. O veneno — do tipo associado a armas sul-americanas, como o curare — explica também o cão, usado como ensaio.",
            "A madrasta sugava o veneno do ferimento. O sangue na boca era o do bebê, não uma mordida de vampiro. Ela bateu em Jack ao descobrir o que ele fazia e não contou ao marido para não destruí-lo.",
            "Holmes chega à hipótese pela lógica e a confirma observando o reflexo de Jack na janela, enquanto o pai olha o bebê. Os indícios já estavam na história: o cão, as agressões, o silêncio da esposa, a coleção de armas e a origem peruana apenas como pista cultural da arma, não como prova de monstro.",
            "O desfecho não é uma prisão espetacular. Holmes revela a verdade, alivia a esposa e propõe afastar Jack por um tempo no mar. A ordem familiar é protegida mais do que punida em público.",
          ],
        },
        {
          title: "5. Efeitos de sentido para a interpretação",
          points: [
            "O título anuncia o fantástico. O conto gasta esse anúncio para mostrar que a superstição é uma leitura apressada dos fatos.",
            "Há um preconceito em jogo: o “vampiro” é associado à esposa estrangeira. A investigação desloca a ameaça para dentro da casa inglesa, no filho que o pai considerava incapaz de violência.",
            "Watson continua sendo o narrador que admira Holmes sem acompanhar o raciocínio. O leitor, como Watson, guarda as pistas e só as reorganiza no fim.",
            "O conto é clássico no método (observação, dedução, solução racional) e incômodo no tema (ciúme, tentativa de morte de uma criança, violência doméstica disfarçada de lenda).",
          ],
        },
      ],
      table: {
        caption: "Policial clássico e policial moderno",
        headers: ["", "Clássico", "Moderno"],
        rows: [
          ["Detetive", "Brilhante, à distância do crime", "Falho, cansado ou implicado"],
          ["Narrador", "Muitas vezes o companheiro", "Variável; pode ser o próprio detetive"],
          ["Enigma", "Fechado, com solução lógica", "Pode ficar sem justiça plena"],
          ["Crime", "Quebra pontual da ordem", "Ligado à violência social e à corrupção"],
          ["Referências", "Poe, Doyle, Christie", "Hammett, Chandler, noir e policial contemporâneo"],
        ],
      },
      glossary: [
        ["Conto policial", "Narrativa curta centrada num mistério e na sua investigação."],
        ["Indício", "Detalhe concreto que, relido no fim, sustenta a solução."],
        ["Detetive clássico", "Investigador racional cuja inteligência reordena o caos aparente."],
        ["Narrador companheiro", "Personagem que acompanha o detetive e vê menos do que ele. Watson é o modelo."],
        ["Noir", "Vertente moderna, mais sombria, em que a solução não restaura um mundo justo."],
        ["Curare", "Veneno de origem sul-americana que paralisa; no conto, está ligado aos dardos."],
      ],
      faq: [
        [
          "O conto prova que vampiros existem?",
          "Não. Holmes trata o vampirismo como hipótese ruim. A cena que parecia sobrenatural tem causa humana e material: dardos e uma mãe sugando o veneno.",
        ],
        [
          "Por que a esposa não se defende?",
          "Ela protege o marido da descoberta de que Jack tentou matar o bebê. O silêncio faz parte do conflito, e também engana Ferguson.",
        ],
        [
          "O que a prova costuma pedir?",
          "Características do gênero, diferença entre clássico e moderno, e leitura do enredo: quem investiga, quem narra, qual é o falso mistério e qual é a causa real.",
        ],
      ],
      videos: [],
      sources: [
        {
          title: "The Adventure of the Sussex Vampire",
          url: "https://en.wikipedia.org/wiki/The_Adventure_of_the_Sussex_Vampire",
          source: "Wikipédia",
          note: "Ficha do conto: publicação em 1924, enredo e solução.",
        },
        {
          title: "Romance policial",
          url: "https://brasilescola.uol.com.br/literatura/romance-policial.htm",
          source: "Brasil Escola",
          note: "Origem do gênero e traços da narrativa de investigação.",
        },
      ],
      syllabus: [
        "Características da narrativa policial",
        "Detetive clássico e detetive moderno",
        "Enredo de “A aventura do vampiro de Sussex”",
        "Método de Holmes e papel de Watson",
        "Interpretação: superstição, ciúme e preconceito",
      ],
    },
  },
  {
    slug: "efeitos-do-verbo",
    subject: "portugues",
    number: 38,
    title: "Efeitos de sentido do verbo",
    notebook: "Caderno 3",
    kicker: "Módulo 38",
    fresh: true,
    content: {
      intro:
        "O verbo não serve só para “passar a ação”. Modo, tempo e aspecto dizem se o fato é apresentado como real, hipotético ou como ordem; se já acabou, se durava ou se ainda vai ocorrer. A prova pede o efeito de sentido da escolha verbal e a correlação correta entre as orações.",
      sections: [
        {
          title: "1. Modos: indicativo, subjuntivo e imperativo",
          points: [
            "Indicativo apresenta o fato como algo considerado real ou certo: estudo, estudei, estudarei. É o modo da narração e da informação.",
            "Subjuntivo apresenta hipótese, desejo, dúvida ou fato subordinado a outra ideia: tomara que ele venha; se eu pudesse; embora chova. A atitude de quem fala é de não afirmação plena.",
            "Imperativo apresenta ordem, pedido, conselho ou convite: estude o capítulo; não fechem a porta. Há forma afirmativa e negativa. A negativa usa o subjuntivo: não fechem, não estude.",
            "Cuidado com tu e você. “Olha o caderno” e “olhe o caderno” não são a mesma pessoa gramatical. Na escrita escolar, mantenha a pessoa escolhida.",
          ],
        },
        {
          title: "2. Tempos e aspectos",
          points: [
            "O tempo situa o fato: presente, pretérito ou futuro. O aspecto diz como o fato é visto: concluído, em curso, repetido ou anterior a outro.",
            "Pretérito perfeito do indicativo tem aspecto concluído: li o módulo ontem. Pretérito imperfeito tem aspecto durativo ou habitual: eu lia todo fim de semana.",
            "Pretérito mais-que-perfeito marca um fato anterior a outro já passado: quando o professor chegou, eu já lera o texto. Na fala, é mais comum “já tinha lido”.",
            "Futuro do presente projeta certeza ou previsão: amanhã farei a lista. Futuro do pretérito (condicional) marca condição, hipótese ou educação: eu faria, se pudesse; você poderia repetir?",
            "Presente do indicativo pode indicar hábito, fato científico ou até futuro combinado: o ônibus sai às sete. O sentido depende do contexto, não só da terminação.",
          ],
        },
        {
          title: "3. Correlação verbal",
          points: [
            "As orações de um mesmo período precisam combinar os tempos. Essa combinação se chama correlação.",
            "Se + futuro do subjuntivo combina com futuro do presente: se eu estudar, passarei. Também aparece com presente do indicativo de valor futuro.",
            "Se + pretérito imperfeito do subjuntivo combina com futuro do pretérito: se eu estudasse, passaria.",
            "Se + pretérito mais-que-perfeito do subjuntivo combina com futuro do pretérito composto: se eu tivesse estudado, teria passado.",
            "Quando, no sentido de condição futura, pede futuro do subjuntivo: quando você chegar, avisarei. “Quando você chegará” não é a correlação padrão.",
            "Embora, mesmo que e ainda que pedem subjuntivo: embora estivesse cansado, continuou.",
          ],
        },
        {
          title: "4. Formas nominais",
          points: [
            "Infinitivo, gerúndio e particípio não flexionam modo e tempo sozinhos. Podem funcionar perto do nome ou entrar em locuções.",
            "Infinitivo impessoal não flexiona: estudar é preciso. Infinitivo pessoal flexiona quando há um sujeito próprio: para nós estudarmos; é para eles saírem.",
            "Na norma-padrão, diz-se “para eu fazer”, não “para mim fazer”. O sujeito do infinitivo é eu.",
            "Gerúndio mostra a ação em curso ou simultânea: entrou cantando; está lendo. O gerundismo (“vou estar fazendo o envio”) alonga sem necessidade e é evitado na escrita culta. Prefira “vou enviar” ou “envio”.",
            "Particípio entra na voz passiva e nos tempos compostos: o texto foi lido; ela tinha lido. Alguns verbos têm particípio irregular: aceito, entregue, eleito, expulso, impresso, pago, gasto. “Foi eleito”, não “foi elegido”.",
          ],
        },
        {
          title: "5. Efeito de sentido na leitura",
          points: [
            "Trocar o imperfeito pelo perfeito muda a cena. “A criança chorava” alonga e abre a duração. “A criança chorou” fecha o fato.",
            "O subjuntivo enfraquece a certeza. “Sei que ele vem” afirma. “Duvido que ele venha” não afirma a vinda.",
            "O futuro do pretérito pode atenuar um pedido: “você poderia abrir a janela?” é menos impositivo do que o imperativo direto.",
            "Na prova, nomeie o modo ou o tempo e diga o efeito: certeza, hipótese, ordem, hábito, fato concluído, ação em curso ou condição.",
          ],
        },
      ],
      table: {
        caption: "Correlação mais cobrada com “se”",
        headers: ["Hipótese", "Combinação", "Exemplo"],
        rows: [
          ["Possível no futuro", "futuro do subjuntivo + futuro do presente", "Se eu estudar, passarei."],
          ["Improvável no presente", "imperfeito do subjuntivo + futuro do pretérito", "Se eu estudasse, passaria."],
          ["Não realizada no passado", "mais-que-perfeito do subjuntivo + futuro do pretérito composto", "Se eu tivesse estudado, teria passado."],
        ],
      },
      glossary: [
        ["Modo verbal", "Atitude de quem fala: certeza, hipótese ou ordem."],
        ["Aspecto", "O ângulo sobre o fato: concluído, durativo, habitual ou anterior."],
        ["Correlação verbal", "Combinação esperada entre os tempos de orações ligadas."],
        ["Futuro do pretérito", "Tempo do indicativo que marca condição ou hipótese a partir do passado ou do irreal. Também chamado de condicional."],
        ["Infinitivo pessoal", "Infinitivo flexionado quando tem sujeito próprio."],
        ["Gerundismo", "Uso alongado e desnecessário do gerúndio em locuções como “vou estar enviando”."],
        ["Particípio", "Forma nominal usada na passiva e nos tempos compostos."],
      ],
      faq: [
        [
          "“Se eu ver” ou “se eu vir”?",
          "Na correlação com o futuro, o futuro do subjuntivo de ver é vir: se eu vir o aviso, te chamo. “Se eu ver” é frequente na fala e não é a forma padrão.",
        ],
        [
          "Gerúndio está sempre errado?",
          "Não. “Ela saiu correndo” é perfeito. O problema é a locução que não acrescenta duração real, típica de atendimento: “vou estar transferindo a ligação” no lugar de “vou transferir”.",
        ],
        [
          "Qual a diferença entre tempo e aspecto?",
          "Tempo localiza (passado, presente, futuro). Aspecto descreve a estrutura interna: acabado, contínuo, repetido. O imperfeito e o perfeito podem estar ambos no passado e ainda assim dizer coisas diferentes.",
        ],
      ],
      videos: [],
      sources: [
        {
          title: "Modos verbais",
          url: "https://mundoeducacao.uol.com.br/gramatica/modos-verbais.htm",
          source: "Mundo Educação",
          note: "Indicativo, subjuntivo e imperativo.",
        },
        {
          title: "Modo indicativo",
          url: "https://brasilescola.uol.com.br/gramatica/modo-indicativo.htm",
          source: "Brasil Escola",
          note: "Tempos do indicativo e valores de sentido.",
        },
        {
          title: "Formas nominais do verbo",
          url: "https://brasilescola.uol.com.br/gramatica/formas-nominais-verbo.htm",
          source: "Brasil Escola",
          note: "Infinitivo, gerúndio e particípio.",
        },
        {
          title: "Gerúndio",
          url: "https://brasilescola.uol.com.br/gramatica/gerundio.htm",
          source: "Brasil Escola",
          note: "Usos adequados e o gerundismo.",
        },
      ],
      syllabus: [
        "Modo indicativo, subjuntivo e imperativo",
        "Tempos e aspectos verbais",
        "Correlação verbal",
        "Infinitivo, gerúndio e particípio",
        "Efeito de sentido da escolha do verbo",
      ],
    },
  },
  {
    slug: "verbo-de-ligacao",
    subject: "portugues",
    number: 41,
    title: "O verbo de ligação e seus efeitos de sentido",
    notebook: "Caderno 3",
    kicker: "Módulo 41",
    fresh: true,
    content: {
      intro:
        "Verbo de ligação não indica ação. Ele liga o sujeito a uma característica, um estado ou uma mudança de estado. Essa característica é o predicativo do sujeito. A escolha entre ser, estar e ficar muda o efeito: permanente, transitório ou mutação. A vírgula, nesse predicado, também é cobrada.",
      sections: [
        {
          title: "1. Quais são e o que ligam",
          points: [
            "Os mais frequentes são ser, estar, parecer, permanecer, continuar, ficar, andar, tornar-se e virar.",
            "Eles formam o predicado nominal: sujeito + verbo de ligação + predicativo do sujeito.",
            "Em “A prova parece difícil”, o núcleo do predicado não é uma ação. “Difícil” qualifica “a prova”.",
            "O mesmo verbo pode deixar de ser de ligação. “Ela está no pátio” indica lugar (está = encontra-se). “Ela está cansada” é ligação. “Ficou em casa” é lugar; “ficou triste” é ligação.",
          ],
        },
        {
          title: "2. Efeitos: permanente, transitório, mutação",
          points: [
            "Ser costuma apresentar estado permanente, definição ou classificação: ela é paulista; o ferro é metal; sou estudante. Também aparece em verdades gerais.",
            "Estar apresenta estado transitório, momentâneo ou circunstancial: ela está gripada; estamos atrasados; o clima está seco hoje.",
            "Ficar, tornar-se e virar apresentam mudança de estado, a passagem de uma condição a outra: o leite ficou azedo; tornou-se referência; virou rotina.",
            "Parecer indica aparência, sem garantir o fato: a questão parece simples.",
            "Continuar e permanecer indicam duração de um estado que já existia: continuam atentos; permaneceu calado.",
            "Andar, como ligação, equivale a “estar” de um jeito um pouco mais expressivo: anda preocupado com a prova. Não é o verbo de movimento.",
            "A troca altera o sentido. “Ele é doente” soa como característica estável. “Ele está doente” localiza um episódio. “Ele ficou doente” destaca a mudança.",
          ],
        },
        {
          title: "3. Predicativo do sujeito",
          points: [
            "O predicativo do sujeito é o termo que atribui uma qualidade, um estado ou uma classificação ao sujeito por meio do verbo de ligação.",
            "Em geral concorda com o sujeito: as alunas estão atentas; o resultado foi bom.",
            "Pode vir antes: complicada estava a questão. A inversão não muda a função.",
            "Não confunda com adjunto adverbial. “Ela está cansada” — cansada é predicativo. “Ela está aqui” — aqui é adjunto adverbial de lugar.",
          ],
        },
        {
          title: "4. Vírgula no predicado nominal",
          points: [
            "Não se separa o sujeito do predicado por vírgula. “Os alunos, estavam nervosos” está fora da norma.",
            "Também não se isola o predicativo com uma vírgula única entre o verbo e ele: “Ela está, cansada” não se sustenta.",
            "A vírgula cabe no vocativo, nos apostos e nos adjuntos deslocados, que são outra estrutura: “Maria, a prova está longa.” Aqui a vírgula marca o vocativo, não o predicado.",
            "Enumeração e intercalação seguem as regras gerais: “O resultado, segundo a tabela, foi positivo.” A intercalação vai entre duas vírgulas.",
            "Um erro comum é a vírgula antes de “que” integrante ou no meio do predicado por causa da pausa da fala. Pausa oral nem sempre vira vírgula.",
          ],
        },
        {
          title: "5. Formas padrão que acompanham esses verbos",
          points: [
            "Meio, antes de adjetivo, é advérbio e não varia: ela está meio cansada; eles estão meio ansiosos. Meia varia quando é numeral ou adjetivo: meia laranja; são duas e meia.",
            "O predicativo concorda em gênero e número: ela está obrigada; eles permanecem obrigados. “É necessário calma” e “é necessária a calma” dependem da presença do artigo no substantivo.",
            "“É proibido entrada” fica invariável sem artigo. “É proibida a entrada” concorda porque o sujeito está determinado.",
            "“Bastante” antes de adjetivo não varia: estão bastante cansados. Antes de substantivo, pode variar: bastantes razões.",
            "Há forma oral muito comum que a prova recusa: “ela está meia triste”, “os meninos continua animado”. Na escrita padrão, o verbo e o predicativo concordam, e meio não flexiona.",
          ],
        },
      ],
      glossary: [
        ["Verbo de ligação", "Verbo que liga o sujeito ao predicativo, sem indicar ação."],
        ["Predicado nominal", "Predicado cujo núcleo é um nome (o predicativo), não um verbo de ação."],
        ["Predicativo do sujeito", "Termo que atribui estado, qualidade ou classificação ao sujeito."],
        ["Estado permanente", "Efeito típico de ser: definição ou característica estável."],
        ["Estado transitório", "Efeito típico de estar: situação passageira."],
        ["Mutação", "Efeito de ficar, tornar-se e virar: mudança de um estado para outro."],
        ["Vocativo", "Chamamento, isolado por vírgula. Não faz parte do sujeito nem do predicado."],
      ],
      faq: [
        [
          "Ser é sempre permanente e estar é sempre passageiro?",
          "É a tendência cobrada na escola, e ela resolve a maioria das questões. Alguns usos consagrados fogem do esquema: “ele está morto” não é passageiro, e “hoje está quente” usa estar para o clima. Leia o contraste que a questão propõe.",
        ],
        [
          "Por que “meio cansada” e não “meia cansada”?",
          "Porque meio modifica o adjetivo e funciona como advérbio, no sentido de “um pouco”. Advérbio não flexiona. Meia concorda quando acompanha substantivo.",
        ],
        [
          "A pausa na fala justifica a vírgula?",
          "Não automaticamente. “Ana está pronta” pode ser dito com uma pausa e ainda assim não leva vírgula entre o sujeito e o verbo.",
        ],
      ],
      videos: [],
      sources: [
        {
          title: "Predicativo do sujeito",
          url: "https://brasilescola.uol.com.br/gramatica/predicativo-sujeito.htm",
          source: "Brasil Escola",
          note: "Função do predicativo e verbos de ligação.",
        },
        {
          title: "Predicativo do sujeito",
          url: "https://mundoeducacao.uol.com.br/gramatica/predicativo-do-sujeito.htm",
          source: "Mundo Educação",
          note: "Exemplos de predicado nominal.",
        },
        {
          title: "Uso da vírgula",
          url: "https://brasilescola.uol.com.br/gramatica/uso-da-virgula.htm",
          source: "Brasil Escola",
          note: "Onde a vírgula não deve separar sujeito e predicado.",
        },
      ],
      syllabus: [
        "Verbos de ligação",
        "Predicativo do sujeito",
        "Estado permanente, transitório e mutação",
        "Vírgula no predicado nominal",
        "Formas padrão: concordância e meio/meia",
      ],
    },
  },
  {
    slug: "genetica",
    subject: "ciencias",
    number: "A",
    title: "Herança, Punnett e doenças",
    notebook: "Ciências",
    kicker: "Setor A · Biologia",
    fresh: true,
    content: {
      intro:
        "Este setor junta a linguagem da genética mendeliana com exemplos de doenças. O quadro de Punnett organiza os gametas de dois progenitores. Ele resolve bem as doenças monogênicas. Não resolve, sozinho, a síndrome de Down nem as características poligênicas.",
      widget: "punnett",
      wordBank: [
        ["Dominante", "Alelo que se manifesta mesmo em dose simples. No heterozigoto, mascara o recessivo."],
        ["Recessivo", "Alelo que só se manifesta quando está em dose dupla, sem o dominante."],
        ["Portador do gene", "Heterozigoto que carrega um alelo recessivo de doença e, em geral, não adoece."],
        ["Manifestado / afetado", "Pessoa em quem a característica ou a doença aparece de fato."],
        ["Homozigoto", "Dois alelos iguais para aquele gene: FF ou ff."],
        ["Heterozigoto", "Dois alelos diferentes para aquele gene: Ff."],
      ],
      sections: [
        {
          title: "1. Genótipo e fenótipo",
          points: [
            "Genótipo é a constituição genética para a característica observada: os alelos que a pessoa tem. Escrevemos com letras, como FF, Ff ou ff.",
            "Fenótipo é o que se manifesta e pode ser observado: cor, tipo sanguíneo no exemplo clássico, ou o quadro clínico de uma doença. Resulta do genótipo em interação com o ambiente.",
            "Dois genótipos diferentes podem ter o mesmo fenótipo. FF e Ff, numa herança dominante, podem ser ambos saudáveis se o alelo da doença for recessivo.",
            "Letra maiúscula indica o alelo dominante; minúscula, o recessivo. A escolha da letra é uma convenção do exercício. Aqui, F é o alelo “sem fibrose” e f é o alelo da fibrose cística.",
          ],
        },
        {
          title: "2. Quadro de Punnett",
          points: [
            "O quadro combina os gametas de um progenitor (linhas) com os do outro (colunas). Cada célula é um filho possível, com a mesma probabilidade se a segregação for independente.",
            "Um heterozigoto Ff produz gametas F e f, metade de cada. Um homozigoto FF só produz F.",
            "Ff × Ff gera quatro combinações igualmente prováveis: FF, Ff, fF e ff. Como Ff e fF são o mesmo genótipo, o resultado clássico é 1 FF : 2 Ff : 1 ff.",
            "Isso só vale para um gene, com dois alelos, sem ligação especial ao sexo e sem dominância incompleta. Se a questão fugir dessas condições, o quadro simples não basta.",
          ],
        },
        {
          title: "3. Doenças monogênicas dominantes e recessivas",
          points: [
            "Doença monogênica depende principalmente de um único gene.",
            "Na dominante, basta um alelo para manifestar: o heterozigoto Aa é afetado. Exemplos escolares: doença de Huntington e acondroplasia. Um afetado heterozigoto transmite o alelo, em média, a metade dos filhos.",
            "Na recessiva, só manifesta quem tem os dois alelos: aa. Os pais podem ser saudáveis e portadores (Aa). Exemplos: fibrose cística, anemia falciforme e fenilcetonúria.",
            "Por isso “portador” e “afetado” não são sinônimos. Na recessiva, o portador heterozigoto não manifesta a doença. Na dominante típica, quem tem o alelo manifesta: não se fala em portador saudável do mesmo jeito.",
          ],
        },
        {
          title: "4. Fibrose cística",
          points: [
            "É uma doença monogênica autossômica recessiva. O gene envolvido é o CFTR, no cromossomo 7. O alelo alterado atrapalha o transporte de cloreto através da membrana.",
            "O fenótipo inclui muco mais espesso, que prejudica pulmões e pâncreas, infecções respiratórias de repetição e suor mais salgado. O teste do suor é uma pista clássica.",
            "Genótipo afetado: ff, nos nossos símbolos. Portadores Ff em geral não manifestam o quadro. FF não carrega o alelo.",
            "Num casal de portadores (Ff × Ff), cada gestação tem 25% de chance de filho afetado, 50% de portador e 25% de filho sem o alelo. Chance não é garantia: quatro filhos podem, na vida real, sair todos diferentes dessa média.",
          ],
        },
        {
          title: "5. Síndrome de Down: doença cromossômica",
          points: [
            "A síndrome de Down não é monogênica e não se explica com um quadro de Punnett de um gene. É uma alteração cromossômica: na forma mais comum, há um cromossomo 21 a mais. Por isso se chama trissomia do 21.",
            "O cariótipo típico tem 47 cromossomos: 47,XX,+21 ou 47,XY,+21, em vez dos 46.",
            "O fenótipo varia muito de pessoa para pessoa. Traços frequentemente citados na escola: hipotonia quando bebê, prega palmar única, fenda palpebral oblíqua, maior chance de cardiopatia e deficiência intelectual de grau variável.",
            "A idade materna avançada aumenta a probabilidade, mas a síndrome pode ocorrer em gestação de mulher jovem. Não é contagiosa e não é “culpa” de um comportamento.",
            "Existe também uma forma por translocação, menos frequente. Para a prova, o núcleo é: cromossomo extra do par 21, não um alelo dominante ou recessivo.",
          ],
        },
        {
          title: "6. Doenças e características poligênicas",
          points: [
            "Característica poligênica depende de vários genes, em geral somados ao ambiente. Altura, cor da pele, e a predisposição a diabetes tipo 2 e hipertensão entram nesse grupo escolar.",
            "Não há uma proporção simples 3:1 nem um único Punnett. O fenótipo varia de forma contínua: as pessoas não se dividem em só duas caixas.",
            "Um irmão pode herdar uma combinação de alelos diferente da do outro. O ambiente — alimentação, exercício, acesso a cuidado — também pesa no fenótipo.",
            "Não chame de poligênica a fibrose cística nem a trissomia do 21. Uma é monogênica recessiva; a outra é cromossômica.",
          ],
        },
      ],
      glossary: [
        ["Alelo", "Versão de um gene. Para o mesmo gene, uma pessoa tem dois alelos, um de cada progenitor."],
        ["Autossômico", "Gene situado num cromossomo que não é sexual. Homens e mulheres transmitem do mesmo modo."],
        ["CFTR", "Gene cuja alteração causa a fibrose cística. Relaciona-se ao transporte de cloreto."],
        ["Cariótipo", "Conjunto organizado dos cromossomos da célula."],
        ["Trissomia do 21", "Presença de três cromossomos 21. É a base da forma mais comum da síndrome de Down."],
        ["Monogênico", "Determinado principalmente por um único gene."],
        ["Poligênico", "Determinado por vários genes, em geral com influência do ambiente."],
      ],
      faq: [
        [
          "Portador é a mesma coisa que afetado?",
          "Não. Na doença recessiva, o portador tem um alelo alterado e um alelo que funciona, e normalmente não manifesta a doença. Afetado é quem apresenta o fenótipo.",
        ],
        [
          "Dá para montar Punnett da síndrome de Down?",
          "Não do jeito mendeliano de um gene. A alteração está no número de cromossomos, não num par de alelos F e f.",
        ],
        [
          "25% significa que o quarto filho será afetado?",
          "Não. Cada gestação é um evento novo. 25% é a probabilidade daquela gestação, não uma cota que se completa na família.",
        ],
      ],
      videos: [],
      sources: [
        {
          title: "Genótipo e fenótipo",
          url: "https://brasilescola.uol.com.br/biologia/genotipo-fenotipo.htm",
          source: "Brasil Escola",
          note: "Diferença entre constituição genética e característica observável.",
        },
        {
          title: "Primeira lei de Mendel",
          url: "https://brasilescola.uol.com.br/biologia/primeira-lei-mendel.htm",
          source: "Brasil Escola",
          note: "Segregação dos alelos, base do quadro de Punnett.",
        },
        {
          title: "Homozigoto e heterozigoto",
          url: "https://brasilescola.uol.com.br/biologia/homozigoto-heterozigoto.htm",
          source: "Brasil Escola",
          note: "Alelos iguais e alelos diferentes.",
        },
        {
          title: "Síndrome de Down",
          url: "https://brasilescola.uol.com.br/doencas/sindrome-de-down.htm",
          source: "Brasil Escola",
          note: "Trissomia do 21 e características gerais.",
        },
        {
          title: "Fibrose cística",
          url: "https://brasilescola.uol.com.br/doencas/fibrose-cistica.htm",
          source: "Brasil Escola",
          note: "Causa genética e principais manifestações.",
        },
      ],
      syllabus: [
        "Quadro de Punnett",
        "Genótipo e fenótipo",
        "Doenças monogênicas dominantes e recessivas",
        "Banco de palavras: dominante, recessivo, portador, afetado, homozigoto, heterozigoto",
        "Fibrose cística",
        "Síndrome de Down",
        "Doenças poligênicas",
      ],
    },
  },
  {
    slug: "sistema-solar",
    subject: "ciencias",
    number: "B",
    title: "Sistema Solar e a luz do Sol",
    notebook: "Ciências",
    kicker: "Setor B · Física",
    fresh: true,
    content: {
      intro:
        "O setor cruza história da ciência e cálculo. Geocentrismo e heliocentrismo são modelos sobre quem está no centro. O Sistema Solar que estudamos hoje tem o Sol no centro, oito planetas, satélites naturais e o cinturão de asteroides. O tempo que a luz do Sol leva até cada planeta sai de uma divisão: variação de tempo igual à distância dividida pela velocidade da luz.",
      widget: "luz",
      formula: {
        label: "Tempo para a luz percorrer uma distância",
        expr: "Δt = distância ÷ velocidade",
        note: "No caderno a variação de tempo pode aparecer como At. A velocidade da luz usada na prova é 300.000 km/s. A distância precisa estar em quilômetros para a unidade do tempo ser o segundo.",
      },
      sections: [
        {
          title: "1. Geocentrismo e heliocentrismo",
          points: [
            "No geocentrismo, a Terra está no centro e os astros giram ao redor dela. O modelo ficou associado a Aristóteles e, na forma matemática mais influente, a Ptolomeu, que usava deferentes e epiciclos para explicar o movimento aparente dos planetas.",
            "No heliocentrismo, o Sol está no centro. Aristarco, na Antiguidade, já tinha proposto uma ideia nessa direção. O modelo moderno começa com Nicolau Copérnico, no século XVI, ainda com órbitas circulares.",
            "Galileu Galilei trouxe evidências com o telescópio: luas orbitando Júpiter (nem tudo gira em torno da Terra) e as fases de Vênus, difíceis de explicar no esquema ptolomaico simples.",
            "Johannes Kepler trocou o círculo pela elipse e organizou as leis dos movimentos planetários. Isaac Newton mostrou que a gravitação universal explica por que esses movimentos acontecem.",
            "Modelo não é “opinião”. É uma explicação que se sustenta ou cai conforme as observações. O heliocentrismo venceu porque organizava melhor os dados, não porque Copérnico fosse mais famoso.",
          ],
        },
        {
          title: "2. Planetas rochosos e gasosos",
          points: [
            "Os quatro primeiros, mais próximos do Sol, são rochosos (telúricos): Mercúrio, Vênus, Terra e Marte. São menores e têm superfície sólida.",
            "Júpiter e Saturno são gigantes gasosos, feitos sobretudo de hidrogênio e hélio. Urano e Netuno são gigantes gelados, com bastante gelo de água, amônia e metano. Muitas provas ainda chamam os quatro externos, de um modo geral, de planetas gasosos. Vale saber a distinção e também essa forma de agrupar.",
            "Plutão não entra na lista dos oito. Desde 2006 é classificado como planeta anão, na região do cinturão de Kuiper.",
            "A ordem a partir do Sol: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno.",
          ],
        },
        {
          title: "3. Satélites naturais e cinturão de asteroides",
          points: [
            "Satélite natural é um corpo que orbita um planeta. Não confunda com satélite artificial, que é construído por pessoas.",
            "A Terra tem um: a Lua. Marte tem Fobos e Deimos. Os quatro grandes de Júpiter, vistos por Galileu, são Io, Europa, Ganimedes e Calisto. Saturno tem Titã. Netuno tem Tritão. Mercúrio e Vênus não têm satélite natural.",
            "O cinturão de asteroides fica entre Marte e Júpiter. São corpos rochosos que não se reuniram num planeta. A influência gravitacional de Júpiter ajuda a explicar isso. Não é o resto de um planeta que “explodiu”, explicação antiga e incorreta.",
            "Ceres, o maior objeto do cinturão, é classificado como planeta anão.",
          ],
        },
        {
          title: "4. Distância e tempo da luz",
          points: [
            "A luz não atravessa o Sistema Solar num instante. Quanto mais longe o planeta, maior o atraso.",
            "A velocidade usada neste caderno é 300.000 km/s. É um arredondamento de 299.792 km/s, próprio para conta de prova.",
            "A conta: Δt = distância ÷ velocidade. Exemplo da Terra, com distância média aproximada de 150.000.000 km: 150.000.000 ÷ 300.000 = 500 segundos.",
            "500 segundos = 8 minutos e 20 segundos. É o tempo médio para a luz do Sol chegar à Terra. Quando olhamos o Sol, vemos a luz que saiu cerca de oito minutos antes.",
            "As distâncias do caderno são médias e arredondadas. Planetas em órbita elíptica ficam um pouco mais perto ou mais longe ao longo do ano. A prova espera a divisão com os números dados no enunciado, não uma tabela de memória escondida.",
            "Confira a unidade. Se a distância vier em quilômetros e a velocidade em km/s, o resultado sai em segundos. Depois converta: 60 segundos fazem 1 minuto; 3.600 segundos fazem 1 hora.",
          ],
        },
      ],
      table: {
        caption: "Distâncias médias arredondadas e tempo da luz (v = 300.000 km/s)",
        headers: ["Corpo", "Tipo", "Distância aproximada", "Δt"],
        rows: [
          ["Mercúrio", "rochoso", "58 milhões km", "3 min 13 s"],
          ["Vênus", "rochoso", "108 milhões km", "6 min"],
          ["Terra", "rochoso", "150 milhões km", "8 min 20 s"],
          ["Marte", "rochoso", "228 milhões km", "12 min 40 s"],
          ["Júpiter", "gasoso", "778 milhões km", "43 min 13 s"],
          ["Saturno", "gasoso", "1,4 bilhão km", "1 h 18 min"],
          ["Urano", "gigante gelado", "2,9 bilhões km", "2 h 41 min"],
          ["Netuno", "gigante gelado", "4,5 bilhões km", "4 h 10 min"],
        ],
      },
      glossary: [
        ["Geocentrismo", "Modelo com a Terra no centro do universo conhecido."],
        ["Heliocentrismo", "Modelo com o Sol no centro do Sistema Solar."],
        ["Epiciclo", "Círculo menor usado por Ptolomeu para ajustar o movimento aparente dos planetas."],
        ["Satélite natural", "Corpo que orbita um planeta, como a Lua."],
        ["Cinturão de asteroides", "Faixa de corpos rochosos entre as órbitas de Marte e Júpiter."],
        ["Velocidade da luz", "No caderno, 300.000 km/s."],
        ["Δt", "Variação de tempo. No caderno pode ser escrita como At."],
      ],
      faq: [
        [
          "Por que a conta da Terra dá 8 minutos e 20 segundos?",
          "Porque 150.000.000 dividido por 300.000 é 500, e 500 segundos são 8 minutos inteiros (480 segundos) mais 20 segundos.",
        ],
        [
          "Urano e Netuno são gasosos ou não?",
          "São gigantes gelados. Júpiter e Saturno são os gigantes gasosos. Se a prova separar só “rochosos” e “gasosos”, os quatro externos caem no segundo grupo. Leia o enunciado.",
        ],
        [
          "O cinturão de asteroides é perigoso como nos filmes?",
          "Não desse jeito. Os objetos estão muito separados. A região marca a fronteira entre os planetas rochosos e os gigantes.",
        ],
      ],
      videos: [],
      sources: [
        {
          title: "Heliocentrismo",
          url: "https://mundoeducacao.uol.com.br/fisica/heliocentrismo.htm",
          source: "Mundo Educação",
          note: "Modelo de Copérnico e o contraste com o geocentrismo.",
        },
        {
          title: "Sistema Solar",
          url: "https://brasilescola.uol.com.br/geografia/sistema-solar.htm",
          source: "Brasil Escola",
          note: "Planetas, Sol e organização geral.",
        },
        {
          title: "Sistema Solar",
          url: "https://mundoeducacao.uol.com.br/geografia/sistema-solar.htm",
          source: "Mundo Educação",
          note: "Corpos do Sistema Solar e classificação dos planetas.",
        },
      ],
      syllabus: [
        "Heliocentrismo e geocentrismo, com os cientistas envolvidos",
        "Planetas rochosos e gasosos",
        "Satélites naturais",
        "Cinturão de asteroides",
        "Distância dos planetas e tempo da luz do Sol",
        "Fórmula Δt = distância / velocidade, com 300.000 km/s",
      ],
    },
  },
  {
    slug: "funcoes-inorganicas",
    subject: "ciencias",
    number: "C",
    title: "Funções inorgânicas, chuva ácida e ciclo dos materiais",
    notebook: "Ciências",
    kicker: "Setor C · Química",
    fresh: true,
    content: {
      intro:
        "Ácidos, bases, sais e óxidos são as quatro funções inorgânicas deste caderno. A reação entre ácido e base é a neutralização e produz sal e água. O mesmo vocabulário explica a chuva ácida, o pH e a razão de não descartar esses produtos de qualquer jeito. No fim, a economia circular entra como o modelo que tenta manter materiais em uso em vez de extrair, usar e jogar fora.",
      widget: "ph",
      sections: [
        {
          title: "1. Como diferenciar as quatro funções",
          points: [
            "Ácido, na definição escolar de Arrhenius, libera íon H+ em água. O pH da solução aquosa fica menor que 7. Exemplos: HCl, H2SO4, HNO3, H2CO3 e o ácido acético do vinagre.",
            "Base libera íon OH− em água (ou, no caso da amônia, produz esse íon ao reagir com a água). O pH fica maior que 7. Exemplos: NaOH, KOH, Ca(OH)2 e NH4OH.",
            "Sal é um composto iônico formado, na situação típica da prova, por um cátion que não seja H+ e um ânion que não seja OH−. O exemplo âncora é o NaCl. Sai da neutralização.",
            "Óxido é um composto binário de oxigênio com outro elemento. Óxidos ácidos, como CO2, SO2 e SO3, reagem com água e formam ácidos. Óxidos básicos, como CaO e Na2O, formam bases. Há ainda óxidos neutros (CO, NO, N2O) e anfóteros (Al2O3, ZnO).",
            "Um jeito rápido de triagem, que não substitui a leitura da fórmula: ácido costuma começar com H; base costuma terminar com OH; óxido tem dois elementos e um deles é O; sal fica com o que resta, como NaCl ou CaSO4.",
          ],
        },
        {
          title: "2. Neutralização",
          points: [
            "Ácido mais base produz sal e água. É a reação de neutralização.",
            "Modelo: HCl + NaOH → NaCl + H2O. O H+ do ácido e o OH− da base formam água. O que sobra, Na+ e Cl−, forma o sal.",
            "H2SO4 + 2 NaOH → Na2SO4 + 2 H2O. O balanceamento importa: o ácido sulfúrico tem dois hidrogênios ionizáveis.",
            "Neutralizar não faz o resíduo desaparecer. Na indústria, o alvo é aproximar o pH de um valor seguro antes do descarte. Esse valor nem sempre é exatamente 7.",
          ],
        },
        {
          title: "3. Nomenclatura de ácidos, bases e sais",
          points: [
            "Hidroácidos, sem oxigênio: ácido + nome do elemento + ídrico. HCl é ácido clorídrico; HBr é ácido bromídrico; H2S é ácido sulfídrico.",
            "Oxiácidos: a terminação acompanha o número de oxigênios. Para a mesma família, oso indica menos oxigênio e ico indica mais. H2SO3 é ácido sulfuroso; H2SO4 é ácido sulfúrico. HNO2 é ácido nitroso; HNO3 é ácido nítrico.",
            "Bases: hidróxido de + nome do cátion. NaOH é hidróxido de sódio; Ca(OH)2 é hidróxido de cálcio. Se o metal tem mais de uma carga, indique-a: Fe(OH)2 é hidróxido de ferro II; Fe(OH)3 é hidróxido de ferro III.",
            "Sais: nome do ânion + de + nome do cátion. NaCl é cloreto de sódio; KNO3 é nitrato de potássio; CaSO4 é sulfato de cálcio; Na2SO3 é sulfito de sódio.",
            "A terminação ajuda a ligar ácido e sal: ácido clorídrico gera cloreto; sulfúrico gera sulfato; sulfuroso gera sulfito; nítrico gera nitrato.",
          ],
        },
        {
          title: "4. Aplicações dos ácidos",
          points: [
            "O ácido clorídrico aparece na limpeza de superfícies e metais e é o ácido do suco gástrico, em concentração controlada pelo organismo.",
            "O ácido sulfúrico é o ácido industrial por excelência: baterias de automóvel, fertilizantes e inúmeros processos. Por isso se diz que o consumo de sulfúrico acompanha a atividade industrial de um país.",
            "O ácido nítrico entra na produção de fertilizantes. O ácido acético está no vinagre. O ácido cítrico está em frutas e em alimentos industrializados. O ácido carbônico aparece quando o CO2 se dissolve na água, como nos refrigerantes.",
            "Aplicação não significa manuseio livre. Ácidos concentrados queimam tecido e corroem material. Na escola, a discussão é de reconhecimento e de cuidado, não de receita.",
          ],
        },
        {
          title: "5. Chuva ácida e pH",
          points: [
            "pH mede o quanto uma solução é ácida ou básica, numa escala que na prática escolar vai de 0 a 14. Abaixo de 7, ácido. 7, neutro. Acima de 7, básico.",
            "A chuva já nasce um pouco ácida, perto de pH 5,6, porque o CO2 do ar forma ácido carbônico. Isso não é “chuva ácida” no sentido do problema ambiental.",
            "Chuva ácida é a chuva com pH claramente abaixo desse valor, muitas vezes inferior a 5. Os responsáveis principais são óxidos lançados na queima de combustíveis fósseis: SO2 e SO3, que levam ao ácido sulfúrico, e NOx, que levam ao ácido nítrico.",
            "Efeitos cobrados: acidificação de lagos e solos, dano à vegetação, corrosão de mármore e calcário (CaCO3) em monumentos e liberação de metais que estavam presos no solo.",
            "Não confunda com a destruição da camada de ozônio. Essa envolve outros gases, como os CFCs, e outro problema. A questão gosta dessa armadilha.",
          ],
        },
        {
          title: "6. Sustentabilidade e economia circular",
          points: [
            "A economia linear segue extrair, produzir, usar e descartar. O resíduo sai do ciclo e o recurso não volta.",
            "A economia circular desenha produtos e processos para manter materiais em uso o maior tempo possível: reduzir, reutilizar, reparar, reciclar e, antes disso, redesenhar. O objetivo inclui regenerar sistemas naturais, não só separar o lixo de casa.",
            "Ácidos, bases e óxidos industriais entram nessa conversa porque o descarte sem tratamento contamina água e solo. A neutralização controlada é uma ferramenta de tratamento, não uma licença para lançar qualquer sal no rio.",
            "A chuva ácida mostra o custo de uma energia fóssil linear: o enxofre e o nitrogênio queimados não desaparecem, mudam de lugar e de fórmula.",
            "No cotidiano do estudante, circularidade começa em escolhas menores e concretas: usar o material até o fim, recusar o descartável sem necessidade, separar recicláveis limpos e preferir conserto quando existe conserto. Isso não substitui a responsabilidade da indústria, mas é a parte que a prova também pede.",
          ],
        },
      ],
      table: {
        caption: "Função, pista na fórmula e nome",
        headers: ["Função", "Exemplo", "Nome", "Pista"],
        rows: [
          ["Ácido", "HCl", "ácido clorídrico", "H no início, sem oxigênio: ídrico"],
          ["Ácido", "H2SO4", "ácido sulfúrico", "oxiácido com mais oxigênio: ico"],
          ["Ácido", "H2SO3", "ácido sulfuroso", "menos oxigênio na família: oso"],
          ["Base", "NaOH", "hidróxido de sódio", "termina em OH"],
          ["Base", "Fe(OH)3", "hidróxido de ferro III", "metal com carga variável"],
          ["Sal", "NaCl", "cloreto de sódio", "ânion cloreto, do HCl"],
          ["Sal", "CaSO4", "sulfato de cálcio", "ânion sulfato, do H2SO4"],
          ["Óxido", "CO2", "dióxido de carbono", "óxido ácido: com água, forma ácido"],
          ["Óxido", "CaO", "óxido de cálcio", "óxido básico: com água, forma base"],
        ],
      },
      glossary: [
        ["Ácido", "Substância que, em água, aumenta a concentração de H+. pH menor que 7."],
        ["Base", "Substância que, em água, aumenta a concentração de OH−. pH maior que 7."],
        ["Sal", "Composto iônico típico da neutralização, como o cloreto de sódio."],
        ["Óxido", "Composto binário formado por oxigênio e outro elemento."],
        ["Neutralização", "Reação entre ácido e base que produz sal e água."],
        ["pH", "Escala de acidez. 7 é neutro; abaixo é ácido; acima é básico."],
        ["Chuva ácida", "Precipitação com acidez acima da natural, ligada a SO2 e NOx."],
        ["Economia circular", "Modelo que mantém materiais em uso e reduz o descarte definitivo."],
      ],
      faq: [
        [
          "Todo composto com hidrogênio é ácido?",
          "Não. A pista do H no início ajuda nos ácidos comuns da prova (HCl, H2SO4), mas a água tem hidrogênio e não é classificada como ácido nessa lista. Olhe a função que o enunciado atribui e o comportamento em água.",
        ],
        [
          "Chuva de pH 5,6 já é chuva ácida?",
          "Esse valor é o da chuva comum, por causa do CO2. O problema chamado chuva ácida aparece quando óxidos de enxofre e nitrogênio derrubam o pH abaixo disso.",
        ],
        [
          "Reciclar é a mesma coisa que economia circular?",
          "Reciclar é uma das estratégias. A economia circular começa antes, no desenho do produto e na redução do que se extrai. Reciclar um material que não precisava existir não é o ponto de chegada.",
        ],
      ],
      videos: [],
      sources: [
        {
          title: "Ácidos",
          url: "https://brasilescola.uol.com.br/quimica/acidos.htm",
          source: "Brasil Escola",
          note: "Definição, exemplos e propriedades.",
        },
        {
          title: "Bases",
          url: "https://brasilescola.uol.com.br/quimica/bases.htm",
          source: "Brasil Escola",
          note: "Hidróxidos e nomenclatura inicial.",
        },
        {
          title: "Sais",
          url: "https://brasilescola.uol.com.br/quimica/sais.htm",
          source: "Brasil Escola",
          note: "Formação e exemplos de sais.",
        },
        {
          title: "Óxidos",
          url: "https://brasilescola.uol.com.br/quimica/oxidos.htm",
          source: "Brasil Escola",
          note: "Classificação em ácidos, básicos e outros.",
        },
        {
          title: "Nomenclatura dos ácidos",
          url: "https://brasilescola.uol.com.br/quimica/nomenclatura-dos-acidos.htm",
          source: "Brasil Escola",
          note: "Hidroácidos e oxiácidos.",
        },
        {
          title: "Nomenclatura das bases",
          url: "https://brasilescola.uol.com.br/quimica/nomenclatura-das-bases.htm",
          source: "Brasil Escola",
          note: "Hidróxido e número de oxidação.",
        },
        {
          title: "Nomenclatura dos sais",
          url: "https://brasilescola.uol.com.br/quimica/nomenclatura-dos-sais.htm",
          source: "Brasil Escola",
          note: "Ânion mais cátion.",
        },
        {
          title: "Reação de neutralização",
          url: "https://brasilescola.uol.com.br/quimica/reacao-neutralizacao.htm",
          source: "Brasil Escola",
          note: "Ácido e base produzindo sal e água.",
        },
        {
          title: "Chuva ácida",
          url: "https://mundoeducacao.uol.com.br/quimica/chuva-acida.htm",
          source: "Mundo Educação",
          note: "Gases responsáveis e consequências.",
        },
        {
          title: "O que é a economia circular?",
          url: "https://www.ellenmacarthurfoundation.org/pt/temas/economia-circular-introducao/visao-geral",
          source: "Fundação Ellen MacArthur",
          note: "Definição de referência do modelo circular.",
        },
      ],
      syllabus: [
        "Diferenciar ácidos, bases, sais e óxidos",
        "Reações de neutralização",
        "Nomenclatura de sais, ácidos e bases",
        "Aplicações dos ácidos",
        "Chuva ácida e pH",
        "Sustentabilidade e economia circular",
      ],
    },
  },
];
