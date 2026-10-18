# Opção C · Intermediária: plano de fusão

Base técnica: site A (`demos/yallem-cake`). A camada de marca e de conteúdo do site B foi portada para dentro dele.

## Limite das entradas

- **Site B sem código-fonte.** Só vieram 15 prints de iPhone e o texto lido pelo WebFetch. O shell não acessa o Netlify (403). Por isso B foi reconstruído a partir dos prints. Consequências:
  - a fonte dos títulos de B foi identificada a olho: **Young Serif** é a mais próxima entre as livres (OFL). A fonte real de B pode ser outra (ex.: Recoleta, comercial);
  - o link de origem da entrevista à prefeitura de Dracut não veio, então a citação aparece com "fonte a confirmar";
  - das 3 avaliações do Google que B mostra, só existe texto completo e atribuído de uma (Robert, no print). As outras duas ficaram de fora;
  - as cores de B foram amostradas dos prints (pixels), e as do logo, do arquivo `img/logo.webp` de A.

## Tabela de decisões

| Elemento | Origem | Decisão | Motivo |
|---|---|---|---|
| Paleta | B + logo | Rosa `#F9D8D9`, creme `#FFF9F1`, sálvia `#A9C8AC`, verde do anel `#B2BCA7`, marrom `#482719`, framboesa `#C23A5E` | Amostrada do logo e dos blocos de B. É a marca dela; cacau e dourado de A não vêm do logo |
| Verde dos botões | derivado do anel | `#456B4D` (texto branco, contraste 5,9:1) | O verde do anel é claro demais para texto branco |
| Fonte dos títulos | B | Young Serif (local, OFL) | Mais próxima da serifada de B entre as livres. Substitui Cormorant Garamond |
| Fonte do texto | troca | Figtree 400/600 (local, OFL) | Mais próxima do texto de B que a Jost de A, e mais legível em corpo pequeno |
| Great Vibes (script) | A | Descartada | Não aparece em B nem no texto do logo; mais 43 KB de fonte |
| Barra aberto/fechado + "Como chegar" | B | Mantida no topo, calculada pelo `HORARIO` | Responde "está aberto?" antes de qualquer rolagem |
| Faixa sazonal do topo | A | Vira chamada secundária discreta no hero | No celular, duas faixas empurravam o título para baixo da dobra |
| Título do hero | B | "Lindo por fora. Brasileiro por dentro." | Tem a voz da marca; o de A era descritivo |
| Foto do hero | A | Foto real (bolo floral) na primeira tela do iPhone | B abria só com foto de banco; A deixava a foto abaixo da dobra |
| Botão principal | A | "Fazer meu pedido" → cardápio | Uma porta só para pedir |
| Abertura com caixinha 3D e fita dourada | A | Descartadas | Atrasavam a primeira impressão em 2,4 s e usavam dourado. Quem julga olha poucos segundos |
| Faixa de sabores rolando | A | Descartada | Movimento constante; os sabores agora são uma página do livro |
| Vitrine 3D com fallback | A | Mantida, reestilizada (tábua sálvia, pérolas rosa, fitas sálvia/rosa) | É o diferencial de A; troca só a cor |
| Botão de pausa | A | Mudou para os controles da vitrine | Continua pausando o giro automático (WCAG 2.2.2) |
| História "Conheça a Yallem" | B | Mantida com o tom de B; nomes da família e sobrenome atrás de flags | A não contava a história |
| Citação da entrevista | B | Entra com atribuição + "fonte a confirmar" | B não trouxe o link de origem |
| Galeria em bento com filtros | A | Mantida; filtros = ocasiões de B | Junta "Seu bolo, criado com a Yallem" (B) e a galeria (A) num bloco só |
| Fotos de banco e "Foto ilustrativa" | B | Descartadas | Só as 13 fotos reais de A |
| Blocos Encomenda/Delivery/Retirada e 4 cards | B | Descartados | Repetiam as mesmas categorias; viraram os 3 passos do cardápio |
| Formulário de B | B | Descartado; o card "Seu pedido" de A o substitui | O de B vinha preenchido e mandava "(escolha uma data)" |
| Card "Seu pedido" | A | Mantido, sem nenhum campo pré-escolhido | Ocasião e pessoas agora começam vazios; data vazia vira "a combinar" |
| "Como encomendar" | A + B | Vira 3 passos no topo do cardápio, com o texto de B | Tira uma seção inteira sem perder informação |
| Página "Sabores do Brasil" | B | Página do livro com os recheios de A e B e os docinhos | B tinha uma seção inteira; no livro ela ajuda a escolher o recheio |
| Página "Do balcão" | B (novo) | Preços de B marcados "a confirmar" | Dá preço sem misturar com o bolo de encomenda (que é orçamento) |
| Card "Manga com coco" do Robert | B | Descartado | Citava o bolo de um cliente; o sabor ficou na lista de recheios |
| Links de entrega (4 apps) | B | Descartados; `CONFIG.delivery` começa vazio | Não confirmados; com a lista preenchida, aparecem no Visite e no FAQ |
| Avaliações | B | Só a do Robert, com "fonte a confirmar" | Única com texto completo e atribuição |
| FAQ | A | Mantido; antecedência de B ("cerca de uma semana") marcada "a confirmar" | |
| Visite a loja | B + A | Horário de B (a confirmar) + mapa, QR e botões de A | A não mostrava horário |
| Botão flutuante do WhatsApp | A | Nunca escondido: com o card de pedido aberto, sobe para cima dele | A escondia o botão quando havia pedido; B ficava coberto pelo selo do Netlify |
| Cabeçalho | A + B | Logo maior (52 px) à esquerda, PT/EN à direita | O logo é o primeiro sinal de "é a minha marca" |
| JSON-LD | A | Mantido, sem horário | Horário não confirmado não vai para dados estruturados |
| noindex | A | Mantido | Até a Yallem aprovar |

## Ordem das seções (8, pensando na Yallem olhando no celular)

1. **Topo** · logo dela, cores dela, título de B, foto real e "Fazer meu pedido". Responde "parece com a minha marca?" na primeira tela.
2. **Vitrine 3D** · "tem os meus bolos?": as fotos dela girando, logo em seguida.
3. **Conheça a Yallem** · a história dela no tom de B. É o que mais aproxima a dona do site.
4. **Ocasiões (galeria)** · as 13 fotos por ocasião. Fica depois da história para não emendar duas seções de fotos.
5. **Cardápio em livro + Seu pedido** · como o site vende: 3 passos, livro e card.
6. **Avaliações** · prova social (hoje, uma).
7. **Dúvidas** · prazos, sinal, entrega, alergias.
8. **Visite** · endereço, horário, mapa, WhatsApp.

Rodapé fora da contagem.

## Ritmo de cores

Topo rosa · vitrine creme · história rosa · ocasiões creme · cardápio sálvia · avaliações creme · dúvidas rosa-claro · visite creme · rodapé marrom. O festão (borda recortada de A) separa os blocos coloridos.
