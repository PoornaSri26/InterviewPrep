# A primeira pergunta nunca é Kubernetes

> Padrões observados do outro lado da mesa em entrevistas técnicas. Um recompilado para ajudar as pessoas a se prepararem melhor!

---

## Sobre este material

Nos últimos anos, participei de centenas de entrevistas técnicas para vagas de engenharia de software, cloud e backend em diferentes níveis de senioridade. Em paralelo, fui acumulando anotações sobre padrões que se repetiam: comportamentos que levavam candidatos fortes a serem aprovados, erros que reprovavam gente tecnicamente boa, perguntas que pareciam simples mas revelavam profundidade real, e principalmente a diferença entre profissionais que apenas decoravam tecnologia e profissionais que realmente pensavam como engenheiros.

Em determinado momento, resolvi organizar essas anotações. Cruzei observações acumuladas ao longo do tempo com o roteiro de entrevistas técnicas e desafios de arquitetura que costumo aplicar, além de análises adicionais feitas com apoio de LLMs para identificar padrões recorrentes de comportamento, comunicação e tomada de decisão.

O resultado deste texto **não é um guia absoluto sobre entrevistas**. Não existe fórmula universal. Cada empresa tem sua cultura, cada time tem suas prioridades, e cada entrevistador possui vieses diferentes. O que funciona em uma empresa pode não funcionar em outra.

O objetivo aqui é outro.

Quero mostrar como entrevistas técnicas realmente acontecem em empresas que operam software em escala, longe da caricatura de "decoração de algoritmo" ou da simples repetição de buzzwords. A maior parte das entrevistas boas não tenta descobrir apenas o que você sabe. Ela tenta entender **como você pensa**, como reage quando não sabe, como toma decisões sob ambiguidade, como discute trade-offs e como se comporta colaborativamente em problemas complexos.

Grande parte do que está abaixo decorre de padrões observados repetidamente ao longo dos anos. Alguns candidatos diferentes cometendo exatamente os mesmos erros. Outros, aprovados pelos mesmos motivos, mesmo vindo de contextos completamente distintos.

Este material é a minha visão sobre esse processo. Não a única. Mas certamente uma visão construída do outro lado da mesa, depois de muitas horas entrevistando pessoas, discutindo arquitetura, avaliando senioridade e observando o que realmente diferencia profissionais fortes de profissionais apenas bem treinados para entrevista.

Espero que isso seja útil.

---

## Sumário

- [A primeira pergunta nunca é Kubernetes](#a-primeira-pergunta-nunca-é-kubernetes)
- [O processo é mais previsível do que parece](#o-processo-é-mais-previsível-do-que-parece)
- [Fase 1: O bate-papo inicial não é "perda de tempo"](#fase-1-o-bate-papo-inicial-não-é-perda-de-tempo)
- [Fase 2: A entrevista técnica é uma sequência de perguntas encadeadas](#fase-2-a-entrevista-técnica-é-uma-sequência-de-perguntas-encadeadas)
- [Fase 3: O quadro branco é uma conversa, não uma prova](#fase-3-o-quadro-branco-é-uma-conversa-não-uma-prova)
  - [A primeira coisa não é desenhar](#a-primeira-coisa-não-é-desenhar)
  - [Desenhar explicando, não em silêncio](#desenhar-explicando-não-em-silêncio)
  - [As pegadinhas suaves que aparecem durante o desenho](#as-pegadinhas-suaves-que-aparecem-durante-o-desenho)
  - [Aceitar sugestões sem defender o ego](#aceitar-sugestões-sem-defender-o-ego)
  - [As perguntas de stress que aparecem no fim](#as-perguntas-de-stress-que-aparecem-no-fim)
- [Fase 4: As armadilhas comportamentais que reprovam técnico bom](#fase-4-as-armadilhas-comportamentais-que-reprovam-técnico-bom)
- [Como se preparar de verdade](#como-se-preparar-de-verdade)
- [O sinal de que a entrevista foi boa](#o-sinal-de-que-a-entrevista-foi-boa)

---

## A primeira pergunta nunca é Kubernetes

O candidato escreve "Kubernetes, Kafka, gRPC, observabilidade, service mesh" no LinkedIn. Entra na entrevista preparado para defender Istio, contornos do scheduler, replicação multi-região e o último paper de consenso distribuído que leu de relance. A primeira pergunta é **"o que é EC2?"**. Trinta segundos depois: **"Qual a diferença entre paralelismo e concorrência?"**. O Kubernetes só vai aparecer meia hora mais tarde, quando a conversa entrar em disponibilidade multi-região e ele precisar explicar como funcionam node groups distribuídos entre availability zones.

Antes disso, o entrevistador quer saber se há um sênior na cadeira ou um pleno bem treinado em palavras-chave.

A maior parte dos conteúdos sobre entrevista técnica trata o assunto como se fosse um teatro de palco. Decoreba de algoritmos, repetição de buzzwords e frases ensaiadas para responder a "qual é o seu maior defeito". A entrevista de verdade, em empresas que entregam software em escala, parece outra coisa. É uma conversa em que o entrevistador procura duas coisas simultâneas: **domínio real do que você cita**, e **como você pensa quando não sabe a resposta**. Essas duas coisas são correlacionadas, mas não são a mesma coisa, e quem as confunde se prepara errado.

O que segue abaixo é o que entendi ao observar muitos processos seletivos em empresas de tecnologia, com candidatos sendo aprovados e reprovados segundo padrões que se repetem. O foco é em vaga de back-end com cloud, em nível pleno-sênior ou sênior. As mesmas ideias se aplicam a outras stacks e níveis de senioridade, com pequenas adaptações.

---

## O processo é mais previsível do que parece

Antes de qualquer dica de conteúdo, vale o mapa. Em empresas de tecnologia de grande porte, o processo seletivo tem um formato razoavelmente estável:

1. Um bate-papo para conhecer a pessoa e verificar fit cultural
2. Uma entrevista técnica em que as perguntas saem do histórico do candidato
3. Um desafio em quadro branco com discussão colaborativa de arquitetura
4. Um fechamento com perguntas comportamentais e a famosa "qual a última coisa que você estudou"

Variações existem. Algumas empresas mandam HackerRank antes da primeira conversa, outras dividem system design e behavioral em rounds separados, outras incluem take-home com prazo. Mas o núcleo é esse, e quem entende o formato chega menos ansioso e mais focado. **Cada fase tem uma armadilha própria, e cada fase reprova mais gente do que o currículo sugere.**

Vou descer fase por fase, com exemplos concretos de perguntas que aparecem, e o que separa quem passa de quem trava.

---

## Fase 1: O bate-papo inicial não é "perda de tempo"

A primeira parte da entrevista costuma ser tratada como um protocolo. É um erro. Quem entrevista aproveita esse momento para avaliar duas coisas que não cabem em uma pergunta direta: **a cultura geral e a capacidade de conduzir uma conversa**.

Não estou falando de saber tudo de filosofia política ou de física teórica. Estou falando de ter três ou quatro hobbies, interesses ou temas sobre os quais você consegue falar com profundidade média por cinco minutos, sem soar ensaiado. Já participei de processos em que o candidato e o entrevistador passaram quinze minutos falando sobre aquarismo, outros em que vinte minutos foram dedicados à filosofia estoica, outros sobre culinária regional. Em todos esses casos, o candidato passou para a próxima etapa.

Não porque o entrevistador esteja contratando um polímata. Porque **ninguém quer trabalhar oito horas por dia, todos os dias, com alguém com quem não consegue tomar um café**. E porque um candidato que só fala de tecnologia, que responde "trabalho e estudo" à pergunta sobre tempo livre, transmite uma mensagem implícita sobre como vai ser a convivência. Ninguém vai dizer isso na hora. Mas pesa.

Existe também o lado inverso, que poucos candidatos exercitam de verdade. **Você está avaliando a empresa tanto quanto a empresa está avaliando você.** Se a primeira entrevista é fria, opaca quanto ao processo, ou se o entrevistador não consegue responder honestamente qual é o ponto fraco do time, isso já é um sinal do que será o trabalho. Pergunte. *"Qual o maior atrito do time hoje?"* é uma pergunta que separa candidatos sênior de candidatos júnior travestido. Sênior cobra honestidade em ambos os sentidos. É bom pesquisar a empresa antes da entrevista: não só o LinkedIn dos entrevistadores, mas também o produto, a stack, os blogs de engenharia, se houver, e os reviews no Glassdoor.

> **Dica prática:** prepare a mesma história sobre seu histórico em três níveis de profundidade. Trinta segundos para a pergunta "Me conta um pouco sobre você". Dois minutos quando o entrevistador pedir para aprofundar. Dez minutos quando ele quiser explorar uma decisão específica. Saber identificar, pela reação dele, qual nível ele quer é parte da habilidade.

---

## Fase 2: A entrevista técnica é uma sequência de perguntas encadeadas

Aqui começa o filtro técnico. E aqui está o primeiro mal-entendido recorrente: **as perguntas técnicas não vêm de uma lista pronta. Elas saem do que você cita.** Claro, existem péssimos entrevistadores que simplesmente seguem um roteiro. Lembre-se de que aqui estamos falando de empresas e profissionais decentes :).

Se você fala "trabalhei com Go", o próximo bloco será sobre goroutines, channels, como você lidaria com uma race condition específica, e qual a diferença entre `WaitGroup` e contexto. Se você citar PHP, virão o lifecycle de requisições, gerenciamento de memória entre requisições, frameworks usados e por quê. Citou Kubernetes? Pods, scheduler, network plugins, prefix delegation no ENI, problemas reais de IP exhaustion que você resolveu. Citou microsserviços? Transações distribuídas, idempotência, observabilidade.

Isso significa que **o currículo e o LinkedIn são contratos**. Tudo o que está lá pode virar uma pergunta de dez minutos. Se você não consegue defender uma tecnologia por dez minutos, tire-a do perfil. É melhor um currículo mais curto e defensável do que um currículo inflado e furado. O entrevistador vai descobrir o blefe na segunda pergunta da subárvore, e a partir daí a entrevista vira teste de coerência, não avaliação de senioridade.

Algumas perguntas dessa fase que aparecem com frequência, e que separam quem domina de quem decorou:

### "Qual a diferença entre paralelismo e concorrência?"

É uma pergunta clássica e, ainda assim, ouço respostas confusas com frequência. A resposta limpa:

- **Paralelismo** é quando duas ou mais tarefas são executadas de forma genuína ao mesmo tempo, exigindo múltiplos núcleos ou múltiplas máquinas.
- **Concorrência** é quando múltiplas tarefas competem por recursos compartilhados, pode ser execução intercalada num único core, pode ser execução paralela em vários.

Concorrência é um problema de design (como você coordena o acesso a estado compartilhado), paralelismo é uma propriedade de execução (quantos cores estão fazendo trabalho útil ao mesmo tempo). Você pode ter concorrência sem paralelismo, por exemplo, no event loop do Node.js. E pode ter paralelismo sem concorrência genuína, quando duas tarefas independentes rodam ao mesmo tempo sem compartilhar nada.

### "Como você garante a qualidade do que vai para a produção?"

A resposta comum é "pipeline de testes". A resposta completa cobre o pipeline em camadas:

- Análise estática (linters, code smells, complexidade ciclomática) bloqueando o PR
- Testes unitários com cobertura mínima também bloqueando
- Testes de integração rodando em ambiente próximo do real
- Build da imagem
- Deploy em ambiente de staging com smoke tests
- Canary release em produção
- Monitoramento de erro pós-deploy com rollback automático em caso de regressão

O entrevistador não espera que você tenha tudo isso na empresa atual. Espera que você saiba o que existe, o que vale o custo, e o que falta no seu pipeline atual e por quê.

### "Cite os serviços de cloud com os quais trabalhou."

A resposta ruim é uma sopa de letrinhas: "EC2, RDS, S3, ELB, ECS, EKS, Lambda, SQS, SNS, DynamoDB, ElastiCache, CloudFront, Route 53, IAM". A resposta boa cita poucos serviços, mas para cada um explica caso de uso real, decisão de configuração que você tomou, e problema que precisou contornar.

> "Usei ElastiCache com Redis para cache de leitura de produtos. A primeira versão expirava a chave com o tempo, mas tivemos um problema de cache stampede em produtos populares, migramos para o padrão refresh-ahead com TTL mais agressivo."

Essa segunda resposta vale dez vezes mais do que a primeira.

### "Conte uma decisão técnica que você tomou recentemente e por quê?"

A pergunta mais reveladora dessa fase é outra. Aqui não tem como blefar. Quem só executa decisões alheias, sem entendê-las, trava. Quem tem opinião própria sobre arquitetura abre a história, expõe o trade-off, cita a alternativa que descartou, explica o que funcionou e o que não funcionou. É a diferença entre um engenheiro que decide e outro que digita. Claro que aqui tem muito a ver com a senioridade do entrevistado. Não se espera de um júnior uma resposta muito complexa.

Vou dar um exemplo concreto de uma boa resposta. Um candidato que entrevistei descreveu o seguinte:

> "Trabalhei num orquestrador de provisionamento que rodava em VMs com Auto Scaling Group. A empresa começou a migrar para Kubernetes, e o time queria duplicar a lógica de provisionamento para que parte rodasse em VMs e parte em pods. Argumentei contra. Escrevi um RFC propondo centralizar a lógica num único componente que recebia o request e decidia qual seria o target. Reduziu pontos de alteração, simplificou o teste, e quando dois meses depois precisamos adicionar sidecar para observabilidade, a mudança foi feita em um lugar só. Trade-off: o componente central virou um ponto crítico de disponibilidade, então tivemos que adicionar replicação e um circuit breaker."

Essa resposta tem tudo: **contexto, decisão, alternativa descartada, justificativa, resultado, trade-off**. É a estrutura esperada de um candidato sênior. Se você não tem uma história assim engatilhada, prepare uma antes da entrevista. Não se atenha aqui à sua opinião sobre a solução técnica do meu exemplo, dentro do contexto, fazia muito sentido. Fora do contexto, podemos discutir.

### Sobre buzzwords

A regra é simples: **cada palavra que você adiciona ao seu vocabulário na entrevista é um cheque que você precisa estar pronto para descontar.**

- Cita Kubernetes? Vai ter que falar de pods, services, deployments, scheduler, controller manager, network plugins.
- Cita gRPC? Streaming bidirecional, geração de stubs, comparação com REST.
- Cita CQRS? Eventual consistency, projection rebuild, complexidade operacional.

Quem cita sem dominar, perde mais do que ganha.

---

## Fase 3: O quadro branco é uma conversa, não uma prova

Aqui está a fase mais importante do processo e a mais mal-entendida. O desafio de arquitetura no quadro branco é, na maioria dos processos, o momento decisivo para a vaga. **Quem a trata como uma prova escrita, fracassa. Quem trata como conversa colaborativa normalmente passa**, mesmo quando a solução técnica não é ótima.

Neste documento, vou tratar o quadro como um desafio para um engenheiro back-end, que sempre foi o que busquei. Com adaptações tecnológicas, a essência do quadro branco se mantém; então, mesmo que você não seja um back-end, aproveite a dinâmica.

O desafio típico em vagas de back-end costuma ser algo como:

> **Desafio:** desenhar a arquitetura de back-end de um marketplace. O usuário pode fazer upload de uma imagem e cadastrar um produto com descrição e preço. Para cada produto criado, o site gera uma URL de acesso única. A URL não deve ser previsível e deve ser curta. Os produtos ficam à venda por dois meses, depois disso, saem do ar. O serviço deve ser altamente performático e escalável (de zero a um milhão de usuários no próximo segundo). Deve ser altamente disponível e confiável: se alguém puxar o cabo do banco da tomada, ao religá-lo, tudo tem que estar lá. A razão de escrita para leitura é de 1 para 5.000. Foco em backend, autenticação está fora do escopo. O produto criado é imutável: não pode ser alterado nem excluído.

O candidato tem entre quarenta minutos e uma hora para desenhar e defender a solução. E quase ninguém usa o tempo certo.

### A primeira coisa não é desenhar

A primeira coisa a fazer não é puxar a caneta no whiteboard. É reler os requisitos em voz alta e fazer perguntas:

- "Quando você fala em alta disponibilidade, em qual SLA estamos mirando? 99.9%? 99.99%?"
- "A URL precisa ser não previsível como medida de segurança ou só como característica estética?"
- "O TTL de dois meses é hard delete ou soft delete? Precisamos manter histórico para auditoria?"
- "A imagem tem limite de tamanho? Vocês esperam que sejam todas comprimidas no cliente?"

Essas perguntas mostram que você pensa em trade-offs antes de considerar os componentes. Mostram que você entende que a arquitetura é a resposta a requisitos específicos, não uma receita de bolo aplicada a qualquer caso. E compram tempo enquanto seu cérebro organiza a solução.

Quem pula essa parte e sai desenhando direto perde duas coisas: o entendimento real do problema, e a chance de demonstrar maturidade arquitetural, que é o que está sendo avaliado.

### Desenhar explicando, não em silêncio

A segunda regra é desenhar enquanto explica. Não monte tudo em silêncio para revelar no final. O entrevistador quer ver seu raciocínio em tempo real, com as alternativas que você considera e descarta ao longo do caminho.

> "Vou começar pela API que recebe o upload. Vou usar uma API de write separada da API de read porque a razão é 1 para 5.000 e isso me permite escalar as duas independentemente."

Esse tipo de narração é exatamente o que se espera.

Conforme você desenha, vá nomeando trade-offs explicitamente. Escolheu um banco NoSQL para metadados? Justifique pelo teorema CAP. *"Aceito consistência eventual porque o caso permite, e ganho em disponibilidade e performance. Se fosse um banco transacional bancário, escolheria diferente."* Escolheu CloudFront na frente do bucket de imagens? Explique que isso economiza I/O do micro-serviço e operação de GET no S3, que à escala de leitura discutida (cinco mil GETs por escrita) seria proibitivo em custo.

**Componentes que costumam aparecer numa solução razoável para esse desafio**, sem ordem de importância:

- Um API Gateway na entrada, com regras de roteamento por método HTTP e rate limiting básico para mitigar denial of service
- APIs separadas de read e write, escaláveis horizontalmente atrás de um load balancer
- Um banco para metadados, geralmente NoSQL com TTL nativo para o requisito de expiração automática (MongoDB tem essa feature, DynamoDB também)
- Um bucket de object storage para as imagens em si, com lifecycle policy configurada para deletar objetos após dois meses
- Um cache distribuído para os metadados mais acessados, geralmente Redis com TTL configurável
- Um CDN na borda para servir imagens estáticas, com origem direta no bucket para economizar operações de GET
- Compute escalável, Kubernetes gerenciado (EKS ou GKE) ou VMs com Auto Scaling group conforme a complexidade do time

### As pegadinhas suaves que aparecem durante o desenho

Conforme você desenha, o entrevistador vai testando a profundidade com perguntas que parecem inofensivas. São pegadinhas suaves, não no sentido de truque, mas no de que separam quem entendeu de quem decorou. Algumas das mais reveladoras:

#### "Por que esse banco e não outro?"

Se você responde "porque é mais rápido", perdeu. A resposta certa envolve o teorema CAP de forma explícita ou implícita.

- Bancos relacionais gerenciados como RDS oferecem alta consistência e durabilidade, com desempenho suficiente para casos transacionais
- Bancos NoSQL gerenciados como DynamoDB ou MongoDB Atlas dão alta disponibilidade e performance, com consistência eventual configurável
- NewSQL, como YugabyteDB ou CockroachDB, tenta oferecer os três, mas com alto custo operacional

A pergunta "por que esse banco?" é sempre uma pergunta sobre trade-off, não sobre o nome do produto.

#### "Por que o cliente bate na API de leitura para depois servir um arquivo do S3?"

Essa é a pegadinha clássica. A maioria dos candidatos desenha a API de read fazendo download do S3 e devolvendo o arquivo para o usuário. Parece OK até você fazer a conta: a cinco mil reads por escrita, cada GET puxa o arquivo de um mega para a memória do pod, devolve para o usuário, e libera. Multiplique por escala alta e você tem operações de GET no bucket explodindo o custo, memória dos pods explodindo, e disponibilidade caindo.

A resposta correta é uma das duas: ou você gera uma URL pré-assinada e o cliente baixa diretamente do S3, ou você configura o CDN para originar diretamente do bucket (com origin access control) e o cliente nem chega na sua API para imagens. **A API só serve metadados.** Quem entende isso na hora demonstra que pensou em throughput e custo, não só em "funciona".

#### "Como você calcula 99,9% de disponibilidade?"

Pergunta que reprova até gente sênior. A resposta com handwaving ("ah, é o uptime") não vale. A resposta concreta envolve definir o SLI, o período de medição, e a fórmula.

| Termo | Significado |
|-------|-------------|
| **SLI** (Service Level Indicator) | Métrica concreta. Ex.: proporção de respostas HTTP não-5xx em janela móvel, ou latência abaixo de threshold |
| **SLO** (Service Level Objective) | Alvo que você quer bater. Ex.: 99,9% de respostas saudáveis num mês corrido |
| **SLA** (Service Level Agreement) | Compromisso contratual, geralmente mais frouxo do que o SLO, pois inclui cláusulas de exceção |

Apdex do New Relic é uma referência prática para SLI. Quem confunde os três termos não trabalha em um sistema com SRE de verdade.

#### "Escalabilidade vertical ou horizontal?"

A resposta padrão é "horizontal, sempre". A resposta correta é **"depende"**.

- A escalabilidade vertical (mais CPU ou RAM na mesma máquina) é mais simples e adequada para componentes stateful, como banco de dados primário ou cache central, até certo limite
- A escalabilidade horizontal (mais réplicas) é necessária para APIs sem estado e para sistemas que precisam crescer para além de uma única máquina

A pergunta complementar é "Qual métrica você usa para decidir quando escalar?". A resposta comum é CPU. A resposta completa depende do workload: pode ser CPU em APIs CPU-bound, memória em APIs com cache local, IOPS em sistemas de arquivos, latência percentil em sistemas latency-sensitive, profundidade de fila em workers, ou conexões abertas em proxies.

#### "Diferença entre região e zona de disponibilidade?"

Pergunta básica que filtra muitos candidatos.

- **Zonas de disponibilidade (AZs)** são datacenters separados fisicamente dentro de uma mesma região geográfica, conectados por uma rede de baixa latência. Resolver tolerância a falhas multi-AZ é relativamente barato e quase mandatório em produção.
- **Regiões** são clusters geograficamente separados (us-east-1 na Virgínia, sa-east-1 em São Paulo), e tolerância multi-região é caro porque exige replicação de banco com decisão sobre consistência global e transferência de dados entre regiões (que é cobrada e tem latência alta).

Multi-AZ resolve falha de datacenter. Multi-região resolve falhas regionais inteiras ou requisitos de latência por proximidade geográfica do usuário. **Confundir os dois conceitos é red flag.**

#### "Como funciona o encurtamento de URL não previsível?"

Pergunta aparentemente simples. A resposta elegante envolve gerar um ID sequencial no banco e converter para uma base alta (base62, base36, ou hexadecimal). Você ganha:

- Uma URL **curta** (oito caracteres em base62 cobrem 218 trilhões de combinações)
- **Única** (porque o ID sequencial é único)
- **Não previsível** para humanos casuais (porque a sequência fica embaralhada após a conversão de base)

⚠️ **Atenção:** não é criptograficamente segura — alguém pode iterar URLs sequenciais decodificando a base. Se a não-previsibilidade for requisito de segurança, você precisa de UUID com geração aleatória ou de hash com salt, não de conversão de base.

#### "Como você indexa o banco?"

Pergunta de dez segundos que filtra senioridade de verdade. Índices aceleram queries que filtram pela coluna indexada, mas têm custo de escrita (cada insert ou update precisa atualizar o índice) e custo de espaço.

Você indexa as colunas que aparecem em cláusulas `WHERE`, `JOIN` e `ORDER BY` com frequência. Indexa também a chave primária implicitamente. Indexa colunas de busca por igualdade com índice B-tree padrão. Indexa colunas de busca por substring com índice GIN ou trigram em Postgres. No caso do marketplace, você indexa pela URL encurtada (que vira o lookup principal) e pela data de criação (para o batch job que faz o TTL, se você implementar TTL no aplicativo em vez de no banco).

Quem não consegue explicar índices em quinze segundos não é sênior em backend, e não adianta dourar a pílula.

### Aceitar sugestões sem defender o ego

A terceira regra do whiteboard é aceitar sugestões sem defender o ego.

Num processo que observei, o candidato propôs uma lógica para identificar "os produtos mais acessados" e mantê-los em cache, com contador de acessos no Redis, score de popularidade calculado periodicamente, e atualização ativa do cache. Solução tecnicamente correta, mas com complexidade desnecessária. O entrevistador sugeriu uma alternativa: reduzir o TTL do cache e deixar o cache-aside fazer o trabalho. Os itens populares são acessados com frequência; naturalmente, ficam quentes no cache. Os itens frios expiram. Sem precisar de contador, sem precisar de batch de recomputação, sem precisar de lógica de promoção.

O candidato aceitou na hora, ajustou o desenho, agradeceu a ideia. Esse momento valeu tanto para a avaliação quanto teria valido se ele tivesse acertado de primeira. **Talvez mais.** Porque mostrou que a pessoa ouve, raciocina sobre a sugestão em vez de defender a proposta original, e ajusta sem reclamar.

A entrevista de arquitetura não é um teste de quem tem a melhor solução isolada. É um teste de como você pensa em colaboração. Times de arquitetura passam horas em RFCs, em sessões de design review, em discussões no chat, justamente trocando ideias e ajustando. Quem não consegue fazer isso em uma hora de entrevista, provavelmente não vai conseguir fazer no dia a dia.

### As perguntas de stress que aparecem no fim

Quando o desenho básico está pronto, vem a fase de stress. O entrevistador puxa o tapete em pontos específicos para ver como você reage.

**"Sua escrita está absurda, milhões de queries por minuto. Não vê gargalo no banco?"**
A resposta é: cluster com nó primário recebendo escritas e réplicas servindo leituras, ou sharding por chave de partição, se o volume de dados justificar. Para escrita pesada, sharding é caminho. Para leitura pesada (como no caso do marketplace), réplicas de leitura resolvem.

**"E se acontecer um incidente regional na AWS?"**
Aqui, você precisa explicar que a multi-região é cara e exige replicação consistente. Se o SLO for de 99.99%, a multi-região é obrigatória. Se é 99,9%, Multi-AZ resolve. A escolha é de negócio, não técnica.

**"Como você sabe que o serviço está saudável?"**
Aqui entra observabilidade:
- APM (New Relic, Datadog, ou Grafana Cloud) para métricas de saúde da aplicação, número de requests, throughput, taxa de erro
- Logs centralizados (ELK, Loki, ou Splunk) para investigação de incidente
- Métricas custom para SLI específico
- Alertas configurados em desvio de SLO
- Distributed tracing (OpenTelemetry) para entender latência por componente em fluxos complexos

**"Como você expira os dados depois de dois meses?"**
Aqui você pode usar TTL nativo do banco (MongoDB, DynamoDB, Redis todos suportam), lifecycle policy do S3 para imagens, e ponto. Não precisa de um cron job custom se você escolheu as ferramentas certas.

Cada uma dessas perguntas é uma oportunidade de demonstrar profundidade. Quem responde rápido e completo passa. Quem trava, ou tenta inventar, perde pontos rapidamente.

---

## Fase 4: As armadilhas comportamentais que reprovam técnico bom

Depois do quadro branco, a entrevista volta ao tema comportamental. E é aqui que muitos candidatos técnicos bons fracassam. Não por falta de conhecimento. **Por excesso de teatro.**

### O medo de dizer "não sei"

A primeira armadilha é o medo de admitir que não sabe. Quem entrevista percebe quando você está blefando. Percebe quando você recita um conceito sem entendê-lo. Percebe quando você tenta empurrar uma resposta vaga, esperando que a próxima pergunta venha rápido o suficiente para abafar a anterior.

O contrário também é problema. Dizer "não sei" e parar ali, sem reconstruir o conceito, sem tentar conectar com algo que você já sabe, é igualmente eliminatório. O caminho correto é a admissão honesta seguida da tentativa de raciocínio:

> "Não sei o nome desse padrão. Mas se eu tivesse que resolver esse problema do zero, pensaria em X por causa de Y. Acho que existe um termo técnico para isso, mas não consigo recuperar agora."

Exemplo concreto: você pode escolher um banco de dados pensando em disponibilidade, desempenho e consistência, sem saber que isso se chama teorema CAP. Explicar o raciocínio vale mais do que recitar o nome. Você pode entender o padrão de fallback com cache stampede sem saber que se chama thundering herd. **O conceito vale mais que o vocabulário.** Mas o entrevistador precisa ver que você ENTENDE, não que decorou.

A regra prática:
- Se você não sabe o nome de algo, descreva o conceito
- Se você não sabe nem o conceito, admita e diga o que faria mesmo assim
- Se você não tem ideia, diga claramente, sem inventar

### A pergunta "qual a última coisa que você estudou"

Pergunta-chavão de fechamento, e reprova muita gente. Por quê? Porque o candidato responde "Algo que o Uber Inventou" ou "DDD" e termina a frase. Ponto.

Quem se vende bem nesse momento prepara antes três pontos:

1. **O que você estudou**, com nome específico (não "machine learning", mas "transformer attention mechanism e como o KV cache funciona em inferência")
2. **O que mais gostou**, com algum detalhe técnico que prove que você estudou de verdade
3. **O que peca** ou onde o tema é mais fraco do que parece à primeira vista

Esse terceiro ponto é o que separa o candidato sênior do júnior travestido. Reconhecer os limites do que você estudou aumenta a credibilidade. Vender o estudo como se fosse uma autoridade absoluta diminui. Já entrevistei candidatos com nível de arquitetura que saíram falando sobre Lunar Toolkit (uma tecnologia obscura) na entrevista, e o entrevistador percebeu na hora que era uma citação de um blog, não um estudo real, porque o candidato não conseguia descrever um único trade-off do toolkit. Reprovou.

Outro exemplo real, agora positivo. Um candidato respondeu que tinha estudado VPC Peering. O ponto positivo: é tranquilo de configurar. O ponto negativo: o exame de certificação que cobre o tema não reflete a complexidade real de produção (CIDRs sobrepostos, latência inter-região, custo de transferência). Em quinze segundos, o candidato mostrou que estudou DE VERDADE, e ainda mostrou que tem visão crítica sobre certificações em geral. Passou.

### Tentar parecer infalível

A terceira armadilha é tentar parecer infalível. **Humildade não é fraqueza. É o que distingue um sênior de um pleno bem-comunicado.** Quem precisa parecer infalível na entrevista provavelmente também precisa parecer infalível no trabalho, e isso é um custo enorme para qualquer time. Significa que essa pessoa vai esconder erros em vez de admiti-los, vai resistir ao code review em vez de aproveitá-lo, vai virar um gargalo de decisão por não confiar nos pares.

Time bom não é time de pessoas perfeitas. É time onde as pessoas conseguem ser imperfeitas em público, ajustar a rota, e seguir. A entrevista é o primeiro lugar onde isso é testado. Quem chega com armadura, transmite que vai trabalhar de armadura.

### Buzzwords sem propriedade

Já mencionei isso antes, mas vale repetir aqui porque é onde mais gente cai. **Cada palavra que você cita é cheque que você precisa estar pronto para descontar.** Se você cita Kafka como solução para um problema no whiteboard, prepare-se para falar sobre partitioning, consumer groups, offset management, idempotência, e como você lidaria com message replay após um incidente. Se cita event sourcing, prepare-se para falar sobre projection rebuild, snapshot, e o trade-off de complexidade operacional versus auditabilidade.

Não cite o que você não consegue defender em três níveis de profundidade. Em vez disso, cite o que você domina, mesmo que seja menos exótico. Um candidato que defende uma solução simples com cinco trade-offs claros impressiona mais que um candidato que cita cinco tecnologias sem profundidade em nenhuma.

---

## Como se preparar de verdade

Vou cobrir a preparação em três horizontes distintos, sem virar uma lista simétrica de "cinco dicas" ou "sete passos". Cada horizonte cobre coisas diferentes.

### No mês anterior à entrevista

Releia o currículo e o LinkedIn com um olhar crítico. Para cada tecnologia listada, escreva mentalmente três frases de profundidade. Se você não conseguir, considere remover ou suavizar a redação ("conhecimento básico em X" em vez de "experiência com X"). Liste três a cinco projetos da sua carreira em que você tomou decisões técnicas claras, com trade-offs explícitos, alternativas consideradas, e resultado. Esses projetos vão ser os blocos de construção das suas respostas a perguntas comportamentais e à pergunta "conte uma decisão técnica recente".

Estude o básico que cai em quase todas as entrevistas de back-end (caso seja o foco, senão, adapte para sua realidade):

- Paralelismo versus concorrência (e como sua linguagem favorita lida com isso)
- Teorema CAP e por que ele importa na escolha de banco
- Cache patterns: cache-aside, write-through, write-behind, refresh-ahead, com TTL e estratégia de invalidação
- HTTP status codes e o que cada classe significa (especialmente as diferenças entre 4xx e 5xx para SLI)
- Headers de cache: `Cache-Control`, `ETag`, `Last-Modified`
- Índices de banco de dados: B-tree, hash, GIN, composto, com seus respectivos casos de uso
- Estratégias de scaling: horizontal vs vertical, e como decidir

### Na semana anterior

Pratique desenhar arquitetura de sistemas conhecidos em quinze minutos cada:

- Marketplace
- Encurtador de URL
- Feed de rede social
- Sistema de upload
- Sistema de pagamento

Use papel ou tablet, não computador. O músculo de desenhar à mão é diferente do músculo de digitar. Resolva system designs em ordem crescente de dificuldade. Cada vez que terminar um, anote três decisões que você tomou e por quê, e duas alternativas que descartou.

Prepare três respostas para "qual a última coisa que você estudou", cada uma com ponto positivo, ponto negativo, e uma descoberta específica. Tenha pelo menos três perguntas para fazer ao entrevistador, sendo pelo menos uma sobre o ponto fraco do time ou da empresa. Releia conceitos de SLI/SLO/SLA e treine calcular 99.9% e 99.99% mentalmente.

### Na manhã da entrevista

Não revise nada novo. Aumenta a ansiedade, não diminui. Releia rapidamente seus três projetos preparados. Coma alguma coisa. Tome água. Cinco minutos antes, respire fundo.

### Durante a entrevista

Três técnicas valem ouro:

1. **Repita a pergunta com suas palavras antes de responder.** "Você quer entender como eu garantiria disponibilidade nesse cenário, certo?". Compra tempo, evita responder a pergunta errada, e mostra que você ouviu.
2. **Quando não souber, fale.** Tente reconstruir pelo conceito. Se não conseguir, peça para passar e voltar depois.
3. **Faça perguntas.** A entrevista é diálogo, não interrogatório. Se algo no requisito não está claro, pergunte. Se a sugestão do entrevistador não bateu com o que você imaginou, pergunte por que ele sugeriu, e ajuste se fizer sentido.

---

## O sinal de que a entrevista foi boa

Uma boa entrevista termina com as duas partes querendo continuar conversando. Esse é o teste. Não importa se você acertou todas as perguntas, se acertou o desenho de arquitetura, se citou as palavras certas. **Importa se, no fim da hora, o entrevistador imagina como seria trabalhar com você nos próximos anos, e se você imagina como seria trabalhar nessa empresa.**

Quem entende isso prepara-se diferente:
- Domínio dos fundamentos para chegar com base sólida
- Repertório para conversar sem virar conversa fiada
- Humildade para admitir limites sem se diminuir
- Postura de quem está avaliando a empresa tanto quanto sendo avaliado por ela
- Honestidade sobre o que sabe e o que não sabe
- Disposição para aceitar sugestão sem perder a linha de raciocínio

Se a entrevista te tratar mal, te apressar, te humilhar, ou for opaca quanto ao processo, o sinal já está dado antes da decisão final. Cobre respeito nos dois sentidos. Empresas decentes entendem que o processo seletivo é o primeiro contato real com a cultura da casa. Se a primeira impressão é ruim, é honesto considerar que o resto também talvez seja.

Vagas boas existem. Times bons existem. Empresas que entrevistam por curiosidade genuína sobre quem você é, e não por inquisição, existem. Quando você entra numa entrevista assim, você sente. E quando você entra numa entrevista que não é assim, também sente.

**A primeira pergunta nunca é Kubernetes. Quando você entende por quê, está pronto para a segunda.**

---

## Contribuições

Este material reflete uma visão pessoal construída do outro lado da mesa. Discordâncias, contrapontos e experiências distintas são bem-vindos via issues ou pull requests.

## Licença

Sinta-se livre para compartilhar, citar e adaptar. Atribuição é apreciada.
