# Yallem Cake Shop: o que falta e o que fica com a cliente

Este site é uma demonstração. Tudo que aparece com fundo amarelo ("a confirmar", "a enviar") depende de informação da Yallem. Nada de preço, prazo, horário ou avaliação foi inventado.

## 0. Opção C · Intermediária (esta pasta)

Junta o site A (vitrine 3D, cardápio em livro, card "Seu pedido") com a marca e o conteúdo do site B (cores do logo, título "Lindo por fora. Brasileiro por dentro.", história, horário, preços de balcão). As decisões estão em `MERGE-PLAN.md`; cada fato, com fonte e status, em `FACTS.md`.

**O que perguntar à Yallem antes de mostrar a C como "pronta":**

- [ ] O horário de B está certo? (seg a sex 10h–18h, sáb 9h–18h, dom fechado). Se sim, `HORARIO_CONFIRMADO = true`.
- [ ] Os 10 preços do balcão (página "Do balcão") estão certos e atuais?
- [ ] "Cerca de uma semana" de antecedência está certo?
- [ ] A história está certa? Pode citar Lowell, novembro de 2023 e a família?
- [ ] Autoriza mostrar os nomes do marido e da mãe? E o sobrenome (qual grafia: Trupel ou Truppel)? E o e-mail?
- [ ] Onde saiu a entrevista à prefeitura de Dracut? Mandar o link.
- [ ] A avaliação do Robert é do Google? Mandar o link, e o texto das outras avaliações que ela quiser mostrar.
- [ ] Está em quais apps de entrega? Mandar o link da loja dela em cada um.

**Onde mexer (só na C):**

| O quê | Arquivo | Onde |
|---|---|---|
| Horário e o selo "a confirmar" | `index.html` | `HORARIO` e `HORARIO_CONFIRMADO` |
| Nomes da família, sobrenome, e-mail | `index.html` | preencher `CONFIG.marido`, `CONFIG.mae`, `CONFIG.sobrenome`, `CONFIG.email` (vazios no código, porque o código é público) e ligar `mostrarFamilia`, `mostrarSobrenome`, `mostrarEmail`. Os valores que o site B usava estão em `FACTS.md` |
| Selos "a confirmar" do FAQ e da história | `index.html` | procurar `faqPf` e `histPf` e apagar o parágrafo depois de confirmar |
| Link da entrevista | `index.html` | `CONFIG.entrevista.link` |
| Avaliações | `index.html` | `CONFIG.depoimentos` (com `fonte` e `link`, o aviso "fonte a confirmar" some) |
| Apps de entrega | `index.html` | `CONFIG.delivery`: `[{nome:'DoorDash', url:'…'}]`. Vazio = não aparece em lugar nenhum |
| Preços do balcão | `cardapio.js` | item `balcao` em `CARDAPIO`; depois de confirmar, apagar `aConfirmar: true` |
| Chamada da estação no topo | `index.html` | `SAZONAIS` |

**Diferenças de comportamento em relação à A:**

- Não há abertura com a caixinha nem a fita: o título e o botão "Fazer meu pedido" aparecem na primeira tela do celular, com uma foto dela.
- O bolo 3D só carrega quando a pessoa chega perto da vitrine. Até lá aparece a foto do bolo.
- No card "Seu pedido" nada vem marcado. O que a pessoa não preencher sai como "a combinar" ou fica fora da mensagem.
- O botão do WhatsApp nunca some: com o pedido aberto no celular, ele sobe para cima do card.
- O pedido fica guardado com outro nome (`yc-c-pedido`), para não misturar com a A se as duas estiverem no mesmo domínio.
- No celular há menu ☰ (como no B). A barra do topo mostra "aberto/fechado" com o selo "a confirmar" até o horário ser confirmado.
- Se o mapa do Google não carregar, aparece o endereço com o link "Como chegar" no lugar de uma caixa vazia.

**Defeito encontrado na A (não corrigido lá, corrigido na C):** a página "Recheios" do livro da A corta até 67 px de texto no celular (360 px) e 90 px em 320 px. Na C os recheios estão em duas páginas e nenhuma página corta, em 7 larguras.

## 1. O que pedir para a Yallem (checklist)

- [ ] Horário de funcionamento (cada dia da semana)
- [ ] Antecedência mínima para bolo de encomenda
- [ ] Preço "a partir de" para cada tamanho (15, 20, 25, 30 cm e 2 andares)
- [ ] Confirmação das porções por tamanho (os números do site são referência de mercado)
- [ ] Sinal: valor ou porcentagem, forma de pagamento
- [ ] Política de mudança de data e cancelamento
- [ ] Faz entrega? Onde e quanto custa?
- [ ] Recheios e ingredientes reais de cada bolo da vitrine, e lista de alérgenos
- [ ] Data-limite de pedidos de Thanksgiving e de Natal
- [ ] Instagram (link do perfil)
- [ ] Fotos: a confeiteira trabalhando, a fachada, bolos cortados (fatia), 1 ou 2 vídeos curtos de bastidor (10 a 15 s, celular na vertical)
- [ ] História curta: de onde vêm as receitas, desde quando a loja existe
- [ ] Licença sob a qual opera (ver item 6)
- [ ] Faz vale-presente?
- [ ] Domínio desejado (ex.: yallemcakeshop.com)

## 2. Onde preencher no código

| O quê | Arquivo | Onde |
|---|---|---|
| Horário (liga o selo "aberto agora") | `index.html` | constante `HORARIO` |
| Instagram, avaliações reais, licença | `index.html` | objeto `CONFIG` |
| Faixa do topo por estação (textos e datas) | `index.html` | lista `SAZONAIS` |
| Itens e preços do cardápio (taças, tortas, presentes, tamanhos, recheios) | `cardapio.js` | lista `CARDAPIO` (uma lista só: o livro e o card "Seu pedido" se ajustam sozinhos) |
| Prazos, sinal, entrega, cancelamento | `index.html` | procurar `class="pf"` (PT) e `pf` dentro de `T.en` (EN) |
| Ingredientes reais | `vitrine.js` | lista `CAKES`; depois mudar `INGREDIENTES_DE_EXEMPLO` para `false` |
| Domínio | `index.html` | trocar `[PREENCHER-DOMINIO]` (og, canonical, hreflang, JSON-LD) |
| Publicar no Google | `index.html` | apagar `<meta name="robots" content="noindex">` só no lançamento |

Avaliações só entram se forem reais, com nome, data e link. Depoimento de WhatsApp só com autorização escrita da pessoa, e com a fonte indicada.

## 3. WhatsApp Business (B12)

Saudação automática (PT): "Oi! Aqui é a Yallem Cake Shop. Para orçamento de bolo, me conta a ocasião, a data e quantas pessoas. Encomendas com [X] dias de antecedência."

Saudação (EN): "Hi! This is Yallem Cake Shop. For a cake quote, tell me the occasion, the date and how many guests. Orders need [X] days' notice."

Respostas rápidas sugeridas:
- `/tamanhos`: tabela de tamanhos e porções
- `/sinal`: como funciona o sinal e a forma de pagamento
- `/retirada`: endereço, horário e como chegar
- `/avaliar`: pedido de avaliação no Google (ver item 4)

Catálogo: criar coleções "Aniversário", "Chás", "Taças e tortas", "Datas especiais", com as mesmas fotos do site.

Quem vem pelo site chega com a mensagem começando por "Vim pelo site". Vale contar quantos chegam assim por mês: é o número que mostra se o site está trazendo pedido.

## 4. Avaliações no Google (C2, C7, F7)

- Pedir para todos os clientes, com a mesma mensagem, depois da retirada. Sem brinde ou desconto em troca, e sem escolher só quem gostou (regras do Google e da FTC).
- Mensagem padrão: "Obrigada pela encomenda! Se puder, conta como foi no Google, ajuda muito a gente: [link]".
- Responder a todas as avaliações, inclusive as negativas, com calma e com a solução.
- O link "Avaliar no Google" do site hoje abre a busca no Maps. Quando o perfil estiver verificado, trocar pelo link direto de avaliação do perfil.

## 5. Perfil da empresa no Google e domínio (D1, D5)

- Categoria principal: Bakery (ou Cake shop). Horário real. Telefone igual ao do site.
- Fotos: fachada, balcão, bolos, a confeiteira.
- Descrição em português e inglês.
- Produtos com "a partir de", se ela quiser mostrar preço.
- Nome, endereço e telefone escritos exatamente igual no site, no Google, no Instagram e no Facebook.

## 6. Licença e alérgenos (F6, C4, C5)

Confirmar com a Board of Health de Dracut sob qual licença a Yallem opera. A regra de "cottage food" de Massachusetts tem limites para recheios de creme e cheesecake, e a pesquisa não conseguiu confirmar isso em fonte oficial. Só mostrar a licença no site (campo `licenca` em `CONFIG`) depois de confirmar. Na seção de alergias, usar a lista real de ingredientes e nunca prometer "livre de" algum alérgeno.

## 7. Só alegações verdadeiras (F8)

"Feito à mão", "ingredientes frescos", "a melhor de Lowell", prêmios: só se for verdade e ela confirmar. Todas as fotos do site são dela.

## 8. QR code impresso (B11)

`img/qr-whatsapp.svg` abre o WhatsApp da Yallem. Serve para balcão, caixa de bolo, sacola e cartão. É vetor, então pode imprimir em qualquer tamanho.

## 9. Teste no celular antes de apresentar (E10)

- Abrir o link pelo Instagram (bio e story), pelo Facebook e pelo WhatsApp, num Android intermediário e num iPhone.
- Na vitrine, escolher 3 bolos seguidos. Se travar ou esquentar, anotar o modelo do celular.
- Ligar o modo de economia de bateria e repetir.
- Ligar "reduzir movimento" e ver se a abertura some e nada se mexe sozinho.
- Rodar o PageSpeed Insights (pagespeed.web.dev) com o link da Vercel, aba Celular.

Se o celular não aguentar o 3D ou derrubar o WebGL, o site mostra fotos do mesmo bolo (inteiro e cortado) e continua funcionando.

## 10. O que não foi feito e por quê

- **Vídeos de bastidor (C9, E7):** não há vídeo da Yallem. O espaço fica para quando ela mandar.
- **Vídeo do corte no lugar do 3D (E3):** E3 era alternativa ao E2. Ficou o E2 (3D com proteção). Quando o 3D não roda, aparecem fotos do bolo inteiro e cortado.
- **Duas páginas separadas por idioma (D4):** isso depende do domínio. Por enquanto o inglês tem endereço próprio (`?lang=en`) e as tags hreflang já estão no código.
- **Calculadora de preço (B15):** a pesquisa sugeria descartar, porque preço de bolo decorado é caso a caso. O card "Seu pedido" só sugere o tamanho pelo número de pessoas, e só soma o que tem preço fixo (taças e tortas), como "valor de referência".
- **AVIF:** as fotos já estão em WebP com tamanhos menores. AVIF exigiria duplicar todas as imagens, com pouco ganho.

## 11. Cardápio em livro e card "Seu pedido"

- Uma porta só para pedir: o livro do cardápio com o card ao lado (no celular, uma barra no rodapé). A vitrine 3D ("Quero um assim") e o botão "Fazer meu pedido" do topo levam para o mesmo card.
- O pedido inteiro (bolo de encomenda + itens do cardápio) vira uma mensagem só no WhatsApp.
- Os preços das taças e tortas são do cardápio de Thanksgiving. Quando a estação mudar, troque em `CARDAPIO` (`cardapio.js`) e a faixa em `SAZONAIS` (`index.html`). Preço desatualizado no site vira discussão no balcão.
