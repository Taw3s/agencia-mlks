# Fatos usados no site (Opção C)

Regra: nada inventado. Só entra o que veio do site A, do site B ou do briefing do Davi. Tudo que a Yallem ainda não confirmou está marcado "a confirmar" no código e, na tela, com fundo amarelo.

Status:
- **confirmado (briefing)**: dado de contato público passado pelo Davi e presente em A e/ou B.
- **a confirmar**: veio de A ou de B, mas a Yallem não confirmou.

| Fato | Onde aparece | Fonte | Status |
|---|---|---|---|
| Nome "Yallem Cake Shop" e logo "Yallem Cake Design" | cabeçalho, topo, capa do livro, rodapé | A, B | confirmado (briefing) |
| Endereço 197 Merrimack Ave, Dracut, MA 01826 | barra do topo (Como chegar), Visite, rodapé, JSON-LD | A, B, briefing | confirmado (briefing) |
| Telefone e WhatsApp (978) 227-7733 | todos os botões de WhatsApp, passos, Visite, rodapé | A, B, briefing | confirmado (briefing) |
| Instagram @yallemcake | Ocasiões ("Ver mais no Instagram"), rodapé | briefing, B | confirmado (briefing) |
| Facebook yallemcake | rodapé | briefing, B | confirmado (briefing) |
| Horário: seg a sex 10h–18h, sáb 9h–18h, dom fechado | barra "aberto/fechado", Visite (`HORARIO`) | B | **a confirmar** (`HORARIO_CONFIRMADO = false`) |
| Antecedência de "cerca de uma semana" | passos do cardápio, FAQ | B | **a confirmar** |
| Sinal (valor e forma de pagamento) | passo 2, FAQ | A | **a confirmar** (não há valor) |
| Política de mudança e cancelamento | FAQ | A | **a confirmar** (não há texto) |
| Entrega na festa ("pergunte") | passo 3, FAQ | B | **a confirmar** |
| Apps de entrega (DoorDash, Uber Eats, Grubhub, Seamless) | não aparece (`CONFIG.delivery` vazio) | B | **a confirmar** (B só tinha links de busca) |
| "Nos apps o preço pode ser diferente do balcão" | nota da página "Do balcão" | B | **a confirmar** |
| Já fazia bolos havia alguns anos quando uma amiga pediu um | história | B | **a confirmar** |
| Citação "Eles gostaram, mas era um bolo feio…" | história | B, atribuída a "Yallem, em entrevista à prefeitura de Dracut" | **a confirmar fonte** (B não trouxe link; `CONFIG.entrevista.link = null`) |
| Começou em casa, em Lowell | história | B | **a confirmar** |
| Abriu a loja em novembro de 2023, na Merrimack Avenue | história | B | **a confirmar** |
| A família ajudou na reforma e faz parte da equipe | história (versão sem nomes) | B (marido fez a reforma; mãe na equipe) | **a confirmar** |
| Nomes do marido (Cristiano) e da mãe (Mariscela) | escondidos (`CONFIG.mostrarFamilia = false`) | B | **a confirmar** + autorização |
| Sobrenome "Trupel" | escondido (`CONFIG.mostrarSobrenome = false`) | B | **a confirmar**: B escreve "Trupel" na história e "truppel" no e-mail |
| E-mail yallemtruppel@gmail.com | escondido (`CONFIG.mostrarEmail = false`) | B | **a confirmar** + autorização |
| "Bem-vindos ao meu mundo doce!" | fecho da história | B | **a confirmar** |
| "Feitos pela Yallem e família em Dracut, MA" | subtítulo do topo | B | **a confirmar** |
| "Tudo feito na cozinha da loja em Dracut" | texto da vitrine | B | **a confirmar** |
| Avaliação do Robert (bolo dos 40 anos da esposa, texto em inglês) | Avaliações | B | **a confirmar fonte** (B não diz se é do Google; sem link) |
| Outras 2 avaliações do Google que B mostra | não aparecem | B | sem texto completo nem atribuição: ficaram de fora |
| Preços do balcão: bolo acetato 70.90, rocambole 36.90, fatia 11.90, cake pop 4.90, caixa com 4 doces 12.90, sobremesa de copo 10.90, mousse 3 chocolates 8.90, cone grande 11.00, cheesecake 9.90, brownie 7.90 (USD) | página "Do balcão" do livro, card "Seu pedido", mensagem | B | **a confirmar** (aviso amarelo na página) |
| Sabores de cheesecake: red velvet, chocolate, Oreo, pistache com frutas vermelhas | página "Do balcão" | B | **a confirmar** |
| Recheios brigadeiro, doce de leite, manga com coco, ninho com Nutella | página "Sabores do Brasil", card | B | **a confirmar** |
| Recheios beijinho, ninho, morango com ninho, maracujá | página "Sabores do Brasil", card | A | **a confirmar** |
| Docinhos: brigadeiro, beijinho, cajuzinho, ninho com Nutella | nota de "Sabores do Brasil" | B | **a confirmar** |
| Cobertura chantininho | nota de "Sabores do Brasil" | A | **a confirmar** |
| Tamanhos (15, 20, 25, 30 cm, 2 andares) e porções | página "Bolos de encomenda", sugestão no card | A (referência de mercado, segundo o PARA-A-CLIENTE de A) | **a confirmar** |
| Preço "a partir de" dos bolos | página "Bolos de encomenda" | A | **a confirmar** (sem valor) |
| Taças 1,5 L a $72.90, 6 sabores | página "Taças 1,5 L" | A (cardápio de Thanksgiving dela) | **a confirmar** se ainda vale |
| Tortas a $62.90, 3 sabores | página "Tortas" | A (cardápio de Thanksgiving dela) | **a confirmar** se ainda vale |
| Presentes: panetone, caixa de brigadeiros, biscoitos, vale-presente | página "Presentes" | A | "consulte" (sem preço) |
| Ingredientes dos 8 bolos da vitrine | vitrine (painel da fatia) | A | **exemplo** (aviso amarelo na tela; `INGREDIENTES_DE_EXEMPLO = true`) |
| Ocasião de cada foto (chá revelação, aniversário…) | vitrine, Ocasiões | A | **a confirmar** |
| Ocasiões atendidas: casamento, evento da empresa, datas festivas, presente, só porque sim | Ocasiões ("Também para") | B | **a confirmar** |
| Ingredientes com alergênicos (leite, ovos, trigo, amendoim, castanhas) | FAQ | A | **a confirmar** (lista completa pendente) |
| Faixa de Thanksgiving (até 27/11/2026) e Natal (até 25/12/2026) | chamada secundária do topo (`SAZONAIS`) | A | datas **a confirmar** |
| 13 fotos | topo, vitrine, história, Ocasiões, livro | A (fotos dela) | confirmado por A |
| Licença sanitária | não aparece (`CONFIG.licenca = null`) | A | **a confirmar** |

## O que B tinha e ficou de fora por não ser verificável

- Fotos de banco de imagens (Unsplash) com a etiqueta "Foto ilustrativa".
- Links de busca para 4 apps de entrega.
- Texto do card "Manga com coco" que citava o bolo de um cliente.
- Duas das três avaliações do Google (sem texto completo).
