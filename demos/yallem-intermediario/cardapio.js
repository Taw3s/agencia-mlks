// Cardápio em livro + card "Seu pedido".
// Tudo que é item e preço está na lista CARDAPIO abaixo: troque aqui a cada estação, o livro e o card se ajustam sozinhos.
// Preço só para o que tem valor fixo. Bolo de encomenda é sempre orçamento.

const PHONE = '19782277733';

const CARDAPIO = [
  { id: 'bolos', tipo: 'tamanhos', foto: 'bolo-flores',
    nome: { pt: 'Bolos de encomenda', en: 'Custom cakes' },
    sub: { pt: 'Orçamento pelo WhatsApp', en: 'Quoted on WhatsApp' },
    nota: { pt: 'Porções de referência para fatias de festa. O valor final depende do recheio, da decoração e do prazo.',
            en: 'Reference servings for party-size slices. The final price depends on filling, decoration and lead time.' },
    itens: [
      { id: 't15', nome: { pt: '15 cm (6″)', en: '6″ (15 cm)' }, serve: [10, 12] },
      { id: 't20', nome: { pt: '20 cm (8″)', en: '8″ (20 cm)' }, serve: [20, 24] },
      { id: 't25', nome: { pt: '25 cm (10″)', en: '10″ (25 cm)' }, serve: [30, 38] },
      { id: 't2a', nome: { pt: '2 andares (15 + 25 cm)', en: '2 tiers (6″ + 10″)' }, serve: [40, 50] },
      { id: 't30', nome: { pt: '30 cm (12″)', en: '12″ (30 cm)' }, serve: [45, 56] },
    ] },
  // "Sabores do Brasil" (site B) virou a página de recheios: os de B primeiro, depois os que só o site A listava.
  { id: 'sabores', tipo: 'recheios', classe: 'pag--sabor',
    nome: { pt: 'Sabores do Brasil', en: 'Flavors of Brazil' },
    sub: { pt: 'Recheios · toque em + para escolher', en: 'Fillings · tap + to pick yours' },
    nota: { pt: 'Docinhos de festa: brigadeiro, beijinho, cajuzinho e ninho com Nutella. Cobertura dos bolos: chantininho.',
            en: 'Party sweets: brigadeiro, beijinho, cajuzinho and Ninho with Nutella. Cake frosting: chantininho.' },
    itens: [
      { id: 'brigadeiro', nome: { pt: 'Brigadeiro', en: 'Brigadeiro' }, d: { pt: 'O doce de chocolate com leite condensado que não falta em festa brasileira.', en: 'The chocolate and condensed milk sweet every Brazilian party has.' } },
      { id: 'beijinho', nome: { pt: 'Beijinho', en: 'Beijinho' }, d: { pt: 'O docinho de coco, primo branquinho do brigadeiro.', en: 'The coconut sweet, brigadeiro’s white cousin.' } },
      { id: 'doce-de-leite', nome: { pt: 'Doce de leite', en: 'Dulce de leche' }, d: { pt: 'Doce de leite cremoso, de comer de colher.', en: 'Creamy dulce de leche, good enough to eat with a spoon.' } },
      { id: 'ninho-nutella', nome: { pt: 'Ninho com Nutella', en: 'Ninho with Nutella' }, d: { pt: 'Creme de leite Ninho com Nutella.', en: 'Ninho milk cream with Nutella.' } },
      { id: 'manga-coco', nome: { pt: 'Manga com coco', en: 'Mango and coconut' }, d: { pt: 'Recheio de manga com coco.', en: 'Mango and coconut filling.' } },
      { id: 'ninho', nome: { pt: 'Ninho', en: 'Ninho' }, d: { pt: 'Creme de leite em pó Ninho, suave.', en: 'A mild, milky cream made with Ninho powdered milk.' } },
      { id: 'morango-ninho', nome: { pt: 'Morango com ninho', en: 'Strawberry with Ninho' }, d: { pt: 'Creme de ninho com morango fresco.', en: 'Ninho cream with fresh strawberries.' } },
      { id: 'maracuja', nome: { pt: 'Maracujá', en: 'Passion fruit' }, d: { pt: 'Creme de maracujá, azedinho e tropical.', en: 'Passion fruit cream, tangy and tropical.' } },
    ] },
  // "Do balcão": preços que o site B mostra. NENHUM foi confirmado pela Yallem: aConfirmar põe o aviso amarelo na página.
  { id: 'balcao', tipo: 'preco', aConfirmar: true, foto: 'brigadeiros',
    nome: { pt: 'Do balcão', en: 'From the counter' },
    sub: { pt: 'Preços da loja', en: 'Shop prices' },
    nota: { pt: 'Nos apps de entrega o preço pode ser diferente do balcão.', en: 'Prices on delivery apps may differ from the shop.' },
    itens: [
      { id: 'b-acetato', preco: 70.90, nome: { pt: 'Bolo acetato', en: 'Acetate cake' } },
      { id: 'b-rocambole', preco: 36.90, nome: { pt: 'Rocambole', en: 'Swiss roll' } },
      { id: 'b-fatia', preco: 11.90, nome: { pt: 'Fatia de bolo', en: 'Cake slice' } },
      { id: 'b-cakepop', preco: 4.90, nome: { pt: 'Cake pop', en: 'Cake pop' } },
      { id: 'b-caixa4', preco: 12.90, nome: { pt: 'Caixa com 4 doces', en: 'Box of 4 sweets' } },
      { id: 'b-copo', preco: 10.90, nome: { pt: 'Sobremesa de copo', en: 'Dessert cup' } },
      { id: 'b-mousse', preco: 8.90, nome: { pt: 'Mousse 3 chocolates', en: '3 chocolate mousse' } },
      { id: 'b-cone', preco: 11.00, nome: { pt: 'Cone grande', en: 'Large cone' } },
      { id: 'b-cheesecake', preco: 9.90, nome: { pt: 'Cheesecake', en: 'Cheesecake' }, d: { pt: 'Red velvet, chocolate, Oreo ou pistache com frutas vermelhas.', en: 'Red velvet, chocolate, Oreo or pistachio with red berries.' } },
      { id: 'b-brownie', preco: 7.90, nome: { pt: 'Brownie (unidade)', en: 'Brownie (each)' } },
    ] },
  { id: 'tacas', tipo: 'preco', preco: 72.90, foto: 'tacas',
    nome: { pt: 'Taças 1,5 L', en: 'Dessert cups 1.5 L' },
    sub: { pt: 'Cardápio de Thanksgiving · para a família', en: 'Thanksgiving menu · family size' },
    itens: [
      { id: 'taca-kinder', nome: { pt: 'Kinder Bueno', en: 'Kinder Bueno' }, d: { pt: 'Creme de ninho com avelã, bolo e Kinder Bueno.', en: 'Ninho and hazelnut cream, cake and Kinder Bueno.' } },
      { id: 'taca-redvelvet', nome: { pt: 'Red velvet com ninho', en: 'Red velvet with Ninho' }, d: { pt: 'Red velvet com creme de ninho cremoso.', en: 'Red velvet with creamy Ninho cream.' } },
      { id: 'taca-maracuja', nome: { pt: 'Mousse de maracujá', en: 'Passion fruit mousse' }, d: { pt: 'O azedinho do maracujá com brigadeiro.', en: 'Tangy passion fruit with brigadeiro.' } },
      { id: 'taca-crocante', nome: { pt: 'Crocante', en: 'Crocante' }, d: { pt: 'Creme belga, doce de leite, amendoim e paçoquinha.', en: 'Belgian cream, dulce de leche, peanuts and paçoquinha.' } },
      { id: 'taca-banoffee', nome: { pt: 'Banoffee', en: 'Banoffee' }, d: { pt: 'Creme belga, banana caramelizada e canela.', en: 'Belgian cream, caramelized banana and cinnamon.' } },
      { id: 'taca-morango', nome: { pt: 'Morango, ninho e brigadeiro', en: 'Strawberry, Ninho and brigadeiro' }, d: { pt: 'Creme belga, morango fresco e chantilly leve.', en: 'Belgian cream, fresh strawberries and light cream.' } },
    ] },
  { id: 'tortas', tipo: 'preco', preco: 62.90, foto: 'banoffee',
    nome: { pt: 'Tortas', en: 'Pies & cheesecakes' },
    sub: { pt: 'Cardápio de Thanksgiving', en: 'Thanksgiving menu' },
    itens: [
      { id: 'torta-maracuja', nome: { pt: 'Cheesecake de maracujá', en: 'Passion fruit cheesecake' }, d: { pt: 'Base crocante, camada de chocolate e cobertura de maracujá.', en: 'Crunchy base, a chocolate layer and passion fruit topping.' } },
      { id: 'torta-pistache', nome: { pt: 'Pistache com frutas vermelhas', en: 'Pistachio with red berries' }, d: { pt: 'Creme de pistache e geleia de frutas vermelhas.', en: 'Pistachio cream and red berry jam.' } },
      { id: 'torta-doce-leite', nome: { pt: 'Cheesecake de doce de leite', en: 'Dulce de leche cheesecake' }, d: { pt: 'Doce de leite cremoso com amendoim crocante.', en: 'Creamy dulce de leche with crunchy peanuts.' } },
    ] },
  { id: 'presentes', tipo: 'consulte', foto: 'panetone',
    nome: { pt: 'Presentes', en: 'Gifts' },
    sub: { pt: 'Fim de ano · valor e sabores pelo WhatsApp', en: 'Holiday season · price and flavors on WhatsApp' },
    itens: [
      { id: 'panetone', nome: { pt: 'Panetone recheado', en: 'Filled panettone' }, d: { pt: 'Recheado com creme de chocolate.', en: 'Filled with chocolate cream.' } },
      { id: 'caixa-brigadeiros', nome: { pt: 'Caixa de brigadeiros', en: 'Brigadeiro box' }, d: { pt: 'Brigadeiros gourmet em caixa de presente.', en: 'Gourmet brigadeiros in a gift box.' } },
      { id: 'biscoitos', nome: { pt: 'Biscoitos amanteigados', en: 'Butter cookies' }, d: { pt: 'Baunilha e chocolate, com confeitos.', en: 'Vanilla and chocolate, with sprinkles.' } },
      { id: 'vale-presente', nome: { pt: 'Vale-presente', en: 'Gift card' }, d: { pt: 'Pergunte se a Yallem faz e como funciona.', en: 'Ask Yallem if she offers one and how it works.' } },
    ] },
];

const OCASIOES = [
  { pt: 'aniversário', en: 'birthday' }, { pt: 'casamento', en: 'wedding' }, { pt: 'chá de bebê', en: 'baby shower' },
  { pt: 'chá revelação', en: 'gender reveal' }, { pt: 'batizado', en: 'baptism' }, { pt: 'outra ocasião', en: 'other occasion' },
];

const UI = {
  pt: { capa: 'Cardápio', toque: 'Toque para abrir', sumario: 'Sumário', irPara: 'toque para ir', serve: (a, b) => `${a} a ${b} fatias`,
    aPartir: 'a partir de', aConfirmar: 'a confirmar', consulte: 'consulte', cada: 'cada', addBolo: n => `Pedir orçamento de bolo ${n}`,
    add: n => `Adicionar ${n} ao pedido`, escolher: n => `Escolher recheio ${n}`, fimT: 'Pronto para pedir?', fimP: 'Tudo o que você marcou está no card “Seu pedido”. Ele vira uma mensagem só no WhatsApp da Yallem.',
    verPedido: 'Ver meu pedido', ant: 'Página anterior', prox: 'Próxima página', paginas: 'Páginas do cardápio', livro: 'Cardápio em formato de livro',
    lista: 'Ver cardápio em lista', esconder: 'Esconder lista', fim: 'Fim', p: 'p.',
    pedido: 'Seu pedido', vazio: 'Seu pedido está vazio. Toque em + no cardápio ou escolha um bolo na vitrine.', comecar: 'Pedir um bolo de encomenda',
    boloT: 'Bolo de encomenda', orcamento: 'orçamento', inspiracao: 'Inspiração', remover: 'Remover', removerBolo: 'Remover o bolo',
    lOcc: 'Ocasião', lPpl: 'Pessoas', lDate: 'Data', lTam: 'Tamanho', lRec: 'Recheio', occVazio: 'Escolha', depois: 'A definir', aConf: 'a confirmar',
    sugestao: (n, t) => t ? `Para ${n} pessoas: ${t}` : `Para ${n} pessoas, a Yallem monta um bolo de andares.`,
    menos: n => `Tirar um ${n}`, mais: n => `Mais um ${n}`, subtotal: 'Subtotal de referência', subNota: 'A Yallem confirma o total e a disponibilidade na resposta.',
    lEnt: 'Retirada ou entrega', ret: 'Retirar na loja', ent: 'Entrega, se houver', lNotas: 'Cores, tema ou ideia (opcional)', phNotas: 'Ex.: tons de rosa, nome da aniversariante…',
    enviar: 'Enviar pedido pelo WhatsApp', aviso: 'Isso abre o WhatsApp com a mensagem pronta. O pedido só fica confirmado depois da resposta da Yallem e do sinal.',
    barra: n => n === 1 ? 'Seu pedido · 1 item' : `Seu pedido · ${n} itens`, abrir: 'Ver', fechar: 'Fechar',
    adicionado: n => `${n} no seu pedido`, toastVer: 'Ver pedido',
    msgOi: 'Oi, Yallem! Vim pelo site e quero fazer um pedido.', msgBolo: 'Bolo de encomenda (orçamento):', msgItens: 'Do cardápio:', msgConsultar: 'consultar valor',
    msgSub: 'Subtotal de referência', msgEnt: 'Retirada ou entrega', msgIdeia: 'Ideia', msgFoto: 'Posso mandar uma foto de referência aqui.', aCombinar: 'a combinar' },
  en: { capa: 'Menu', toque: 'Tap to open', sumario: 'Contents', irPara: 'tap to go', serve: (a, b) => `${a} to ${b} slices`,
    aPartir: 'starting at', aConfirmar: 'to be confirmed', consulte: 'ask', cada: 'each', addBolo: n => `Request a quote for a ${n} cake`,
    add: n => `Add ${n} to your order`, escolher: n => `Choose ${n} filling`, fimT: 'Ready to order?', fimP: 'Everything you picked is in the “Your order” card. It becomes a single message on Yallem’s WhatsApp.',
    verPedido: 'See my order', ant: 'Previous page', prox: 'Next page', paginas: 'Menu pages', livro: 'Menu as a book',
    lista: 'See the menu as a list', esconder: 'Hide list', fim: 'End', p: 'p.',
    pedido: 'Your order', vazio: 'Your order is empty. Tap + in the menu or pick a cake from the showcase.', comecar: 'Order a custom cake',
    boloT: 'Custom cake', orcamento: 'quote', inspiracao: 'Inspiration', remover: 'Remove', removerBolo: 'Remove the cake',
    lOcc: 'Occasion', lPpl: 'Guests', lDate: 'Date', lTam: 'Size', lRec: 'Filling', occVazio: 'Choose', depois: 'Not yet', aConf: 'to be confirmed',
    sugestao: (n, t) => t ? `For ${n} guests: ${t}` : `For ${n} guests, Yallem builds a tiered cake.`,
    menos: n => `One less ${n}`, mais: n => `One more ${n}`, subtotal: 'Reference subtotal', subNota: 'Yallem confirms the total and availability in her reply.',
    lEnt: 'Pickup or delivery', ret: 'Pick up at the shop', ent: 'Delivery, if available', lNotas: 'Colors, theme or idea (optional)', phNotas: 'E.g.: pink tones, the birthday girl’s name…',
    enviar: 'Send order on WhatsApp', aviso: 'This opens WhatsApp with the message ready. Your order is only confirmed after Yallem replies and the deposit is paid.',
    barra: n => n === 1 ? 'Your order · 1 item' : `Your order · ${n} items`, abrir: 'View', fechar: 'Close',
    adicionado: n => `${n} added to your order`, toastVer: 'See order',
    msgOi: 'Hi Yallem! I found you on the website and I’d like to place an order.', msgBolo: 'Custom cake (quote):', msgItens: 'From the menu:', msgConsultar: 'price to be confirmed',
    msgSub: 'Reference subtotal', msgEnt: 'Pickup or delivery', msgIdeia: 'Idea', msgFoto: 'I can send a reference photo here.', aCombinar: 'to be agreed' },
};

// ---------- utilidades ----------
const $ = s => document.querySelector(s);
const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
let lang = document.documentElement.lang.startsWith('en') ? 'en' : 'pt';
const t = () => UI[lang];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const dinheiro = v => '$' + v.toFixed(2);
const ITEM = {}; CARDAPIO.forEach(c => c.itens.forEach(i => { ITEM[i.id] = { ...i, cat: c }; }));
const TAMANHOS = CARDAPIO.find(c => c.tipo === 'tamanhos').itens, RECHEIOS = CARDAPIO.find(c => c.tipo === 'recheios').itens;
const precoDe = it => it.preco != null ? it.preco : it.cat.preco; // preço do item, ou o da página (taças, tortas)
const sugerir = n => TAMANHOS.find(x => x.serve[1] >= n) || null;

// ---------- estado do pedido (guardado só nesta aba) ----------
let pedido = { itens: {}, bolo: null, ent: 'retirada', notas: '' };
try { const s = JSON.parse(sessionStorage.getItem('yc-c-pedido') || 'null'); if (s && s.itens) pedido = s; } catch (e) {}
const salvar = () => { try { sessionStorage.setItem('yc-c-pedido', JSON.stringify(pedido)); } catch (e) {} };
// nada vem pré-escolhido: o que a pessoa não marcar sai como "a combinar" ou fica de fora da mensagem
const novoBolo = () => ({ ref: null, occ: '', ppl: '', date: '', tam: '', rec: '' });
const contar = () => Object.values(pedido.itens).reduce((a, b) => a + b, 0) + (pedido.bolo ? 1 : 0);

// =====================================================================
// LIVRO
// =====================================================================
const secao = $('#cardapio'), livroWrap = $('#livroWrap'), folhasEl = $('#folhas'), livroEl = $('#livro'), chipsEl = $('#chips');
let paginas = [], folhas = [], cur = 0, modoDuplo = true, pw = 380, ph = 520;

function foto(c) { return c.foto ? `<img class="pg-foto" src="img/${c.foto}-400.webp" width="400" height="533" alt="" loading="lazy" decoding="async">` : ''; }
function rodape(n) { return `<div class="rodape-pag"><span>Yallem Cake Shop</span><span>${t().p} ${n}</span></div>`; }
function linhaItem(c, it) {
  const n = esc(it.nome[lang]);
  if (c.tipo === 'tamanhos') {
    return `<li class="item"><div class="linha"><span class="nome">${n}</span><span class="pontos"></span><span class="serve">${t().serve(it.serve[0], it.serve[1])}</span>
      <button type="button" class="mais" data-bolo-tam="${it.id}" aria-label="${esc(t().addBolo(it.nome[lang]))}"><span aria-hidden="true">+</span></button></div>
      <div class="desc">${t().aPartir} <span class="pf">${t().aConfirmar}</span></div></li>`;
  }
  if (c.tipo === 'recheios') {
    return `<li class="item"><div class="linha"><span class="nome">${n}</span><span class="pontos"></span>
      <button type="button" class="mais" data-rec="${it.id}" aria-pressed="false" aria-label="${esc(t().escolher(it.nome[lang]))}"><span aria-hidden="true">+</span></button></div>
      <div class="desc">${esc(it.d[lang])}</div></li>`;
  }
  const p = it.preco != null ? it.preco : c.preco;
  const preco = c.tipo === 'preco' ? `<span class="preco">${dinheiro(p)}</span>` : `<span class="preco preco--c">${t().consulte}</span>`;
  return `<li class="item"><div class="linha"><span class="nome">${n}</span><span class="pontos"></span>${preco}
    <span class="qtd" data-qtd="${it.id}" hidden></span>
    <button type="button" class="mais" data-add="${it.id}" aria-label="${esc(t().add(it.nome[lang]))}"><span aria-hidden="true">+</span></button></div>
    ${it.d ? `<div class="desc">${esc(it.d[lang])}</div>` : ''}</li>`;
}
function subDe(c) { return esc(c.sub[lang]) + (c.aConfirmar ? ` · <span class="pf">${t().aConf}</span>` : ''); }
function pagCategoria(c, n) {
  return `<header class="pg-topo">${foto(c)}<div><h3>${esc(c.nome[lang])}</h3><p class="sub">${subDe(c)}</p></div></header>
    <ul class="itens">${c.itens.map(it => linhaItem(c, it)).join('')}</ul>
    ${c.nota ? `<p class="nota">${esc(c.nota[lang])}</p>` : ''}${rodape(n)}`;
}
function montarPaginas() {
  const u = t();
  paginas = [];
  paginas.push({ classe: 'pag--capa', rotulo: u.capa, html: `<div class="capa-moldura"><img src="img/logo.webp" width="200" height="200" alt="" class="capa-logo"><p class="capa-nome">Yallem</p><p class="capa-sub">Cake Shop · Dracut, MA</p><p class="capa-script">${u.capa.toLowerCase()}</p><p class="capa-toque">${u.toque}</p></div>` });
  paginas.push({ classe: '', rotulo: u.sumario, html: `<header class="pg-topo"><div><h3>${u.sumario}</h3><p class="sub">${u.irPara}</p></div></header><ul class="sumario">${CARDAPIO.map((c, i) => `<li><button type="button" data-ir="${i + 2}"><span>${esc(c.nome[lang])}</span><span class="pontos"></span><span class="n">${u.p} ${i + 3}</span></button></li>`).join('')}</ul>${rodape(2)}` });
  CARDAPIO.forEach((c, i) => paginas.push({ classe: c.classe || '', rotulo: c.nome[lang], cat: c.id, html: pagCategoria(c, i + 3) }));
  paginas.push({ classe: 'pag--fim', rotulo: u.fim, html: `<div class="fim-in"><h3>${u.fimT}</h3><p>${u.fimP}</p><button type="button" class="btn-fim" data-ver-pedido>${u.verPedido}</button><p class="fim-end">197 Merrimack Ave · Dracut, MA<br>(978) 227-7733</p></div>` });
}
function medir() {
  const W = livroWrap.clientWidth;
  modoDuplo = W >= 620;
  const maxH = Math.max(420, Math.min(window.innerHeight - 190, 660));
  pw = Math.floor(Math.min(420, modoDuplo ? W / 2 : W, maxH / 1.38));
  ph = Math.round(pw * 1.38);
}
function montar() {
  montarPaginas(); medir();
  const por = modoDuplo ? 2 : 1, total = Math.ceil(paginas.length / por);
  folhasEl.innerHTML = ''; folhas = [];
  livroEl.classList.toggle('unica', !modoDuplo);
  folhasEl.style.width = (modoDuplo ? pw * 2 : pw) + 'px';
  folhasEl.style.height = ph + 'px';
  folhasEl.style.setProperty('--fs', (pw / 400 * 15).toFixed(2) + 'px');
  for (let f = 0; f < total; f++) {
    const fr = paginas[f * por], vs = modoDuplo ? paginas[f * 2 + 1] : null;
    const el = document.createElement('div');
    el.className = 'folha';
    Object.assign(el.style, { width: pw + 'px', height: ph + 'px', left: (modoDuplo ? pw : 0) + 'px' });
    el.innerHTML = `<div class="pag pag--frente ${fr.classe}" data-p="${f * por}">${fr.html}</div><div class="pag pag--verso ${vs ? vs.classe : 'pag--branca'}" data-p="${vs ? f * 2 + 1 : -1}">${vs ? vs.html : ''}</div>`;
    folhasEl.appendChild(el); folhas.push(el);
  }
  cur = Math.min(cur, maxCur());
  aplicar(true); marcarLivro();
  montarChips(); montarLista();
}
const maxCur = () => modoDuplo ? folhas.length : folhas.length - 1;
function dx() { if (!modoDuplo) return 0; if (cur === 0) return -pw / 2; if (cur === folhas.length) return pw / 2; return 0; }
function aplicar(semAnim) {
  folhas.forEach((el, i) => {
    if (semAnim) el.style.transition = 'none';
    el.classList.toggle('virada', i < cur);
    el.style.zIndex = i < cur ? i + 1 : folhas.length - i + 1;
    if (semAnim) { void el.offsetWidth; el.style.transition = ''; }
  });
  folhasEl.style.transform = `translateX(${dx()}px)`;
  atualizarUI();
}
function visiveis() {
  if (!modoDuplo) return [Math.min(cur, paginas.length - 1)];
  const v = []; if (cur > 0) v.push(2 * cur - 1); if (cur < folhas.length) v.push(2 * cur);
  return v.filter(p => p < paginas.length);
}
function virar(dir) {
  const novo = cur + dir; if (novo < 0 || novo > maxCur()) return;
  const i = dir > 0 ? cur : cur - 1;
  folhas[i].style.zIndex = 200; cur = novo;
  folhas[i].classList.toggle('virada', dir > 0);
  folhasEl.style.transform = `translateX(${dx()}px)`;
  setTimeout(() => folhas.forEach((el, k) => { el.style.zIndex = k < cur ? k + 1 : folhas.length - k + 1; }), reduz ? 0 : 900);
  atualizarUI();
}
let fila = null;
function irPara(p) {
  const alvo = modoDuplo ? (p % 2 === 0 ? p / 2 : (p + 1) / 2) : p;
  clearInterval(fila);
  if (reduz) { cur = alvo; aplicar(true); return; }
  fila = setInterval(() => { if (cur === alvo) { clearInterval(fila); return; } virar(alvo > cur ? 1 : -1); }, 120);
}
function montarChips() {
  chipsEl.innerHTML = CARDAPIO.map((c, i) => `<button type="button" data-p="${i + 2}">${esc(c.nome[lang])}</button>`).join('');
  chipsEl.setAttribute('aria-label', t().paginas);
  atualizarUI();
}
function atualizarUI() {
  const vis = visiveis();
  chipsEl.querySelectorAll('button').forEach(b => b.setAttribute('aria-current', String(vis.includes(+b.dataset.p))));
  const atual = chipsEl.querySelector('[aria-current="true"]');
  if (atual && chipsEl.scrollWidth > chipsEl.clientWidth) chipsEl.scrollTo({ left: atual.offsetLeft - chipsEl.offsetLeft - 20, behavior: reduz ? 'auto' : 'smooth' });
  $('#lAnt').disabled = cur === 0; $('#lProx').disabled = cur === maxCur();
  $('#lAnt').setAttribute('aria-label', t().ant); $('#lProx').setAttribute('aria-label', t().prox);
  $('#lCont').textContent = vis.map(p => paginas[p].rotulo).join(' · ');
  livroEl.setAttribute('aria-label', t().livro);
  // só as páginas à vista recebem foco e leitor de tela
  folhasEl.querySelectorAll('.pag').forEach(pg => { const p = +pg.dataset.p; pg.inert = !vis.includes(p); });
  secao.classList.toggle('livro-aberto', cur > 0);
}
// botões dos itens (no livro e na lista)
function cliqueItem(e) {
  const add = e.target.closest('[data-add]'); if (add) { mudarQtd(add.dataset.add, 1, true); return true; }
  const tam = e.target.closest('[data-bolo-tam]'); if (tam) { garantirBolo().tam = tam.dataset.boloTam; atualizarPedido(); avisar(t().boloT + ' ' + ITEM[tam.dataset.boloTam].nome[lang]); return true; }
  const rec = e.target.closest('[data-rec]'); if (rec) { const b = garantirBolo(); b.rec = b.rec === rec.dataset.rec ? '' : rec.dataset.rec; atualizarPedido(); if (b.rec) avisar(t().lRec + ': ' + ITEM[b.rec].nome[lang]); return true; }
  return false;
}
folhasEl.addEventListener('click', e => {
  const ir = e.target.closest('[data-ir]'); if (ir) { irPara(+ir.dataset.ir); return; }
  if (cliqueItem(e)) return;
  if (e.target.closest('[data-ver-pedido]')) { mostrarPedido(); return; }
  if (e.target.closest('a,button,input,select,textarea')) return;
  if (cur === 0) { virar(1); return; }
  // tocar na margem de fora vira a página
  const r = folhasEl.getBoundingClientRect(), x = e.clientX - r.left;
  if (x > r.width * 0.86) virar(1); else if (x < r.width * 0.14) virar(-1);
});
let x0 = null, y0 = null;
folhasEl.addEventListener('pointerdown', e => { x0 = e.clientX; y0 = e.clientY; });
folhasEl.addEventListener('pointerup', e => {
  if (x0 === null) return; const d = e.clientX - x0, dy = e.clientY - y0; x0 = null;
  if (Math.abs(d) > 45 && Math.abs(d) > Math.abs(dy) * 1.4) { clearInterval(fila); virar(d < 0 ? 1 : -1); folhasEl.dataset.arrastou = '1'; setTimeout(() => delete folhasEl.dataset.arrastou, 60); }
});
folhasEl.addEventListener('click', e => { if (folhasEl.dataset.arrastou) e.stopImmediatePropagation(); }, true);
chipsEl.addEventListener('click', e => { const b = e.target.closest('button'); if (b) irPara(+b.dataset.p); });
$('#lAnt').addEventListener('click', () => { clearInterval(fila); virar(-1); });
$('#lProx').addEventListener('click', () => { clearInterval(fila); virar(1); });
livroWrap.addEventListener('keydown', e => {
  if (e.target.matches('input,select,textarea')) return;
  if (e.key === 'ArrowRight') { clearInterval(fila); virar(1); e.preventDefault(); }
  if (e.key === 'ArrowLeft') { clearInterval(fila); virar(-1); e.preventDefault(); }
});
let largura = livroWrap.clientWidth, tmR;
addEventListener('resize', () => {
  if (livroWrap.clientWidth === largura) return; largura = livroWrap.clientWidth;
  clearTimeout(tmR); tmR = setTimeout(() => { const p = visiveis()[0] || 0; montar(); cur = modoDuplo ? Math.ceil(p / 2) : p; aplicar(true); }, 150);
});
// links de fora que abrem o livro numa página (faixa sazonal, menu)
document.addEventListener('click', e => {
  const a = e.target.closest('[data-pagina]'); if (!a) return;
  const i = CARDAPIO.findIndex(c => c.id === a.dataset.pagina); if (i < 0) return;
  setTimeout(() => irPara(i + 2), reduz ? 0 : 500);
});

// versão em lista (mesmo conteúdo, para quem prefere ler rápido ou usa leitor de tela)
const listaEl = $('#cdLista'), listaBtn = $('#cdListaBtn');
function montarLista() {
  listaEl.innerHTML = CARDAPIO.map(c => `<section><h3>${esc(c.nome[lang])}</h3><p class="sub">${subDe(c)}</p><ul class="itens">${c.itens.map(it => linhaItem(c, it)).join('')}</ul>${c.nota ? `<p class="nota">${esc(c.nota[lang])}</p>` : ''}</section>`).join('');
  listaBtn.textContent = listaEl.hidden ? t().lista : t().esconder;
  marcarLivro();
}
listaBtn.addEventListener('click', () => { listaEl.hidden = !listaEl.hidden; listaBtn.setAttribute('aria-expanded', String(!listaEl.hidden)); listaBtn.textContent = listaEl.hidden ? t().lista : t().esconder; });
listaEl.addEventListener('click', cliqueItem);

// =====================================================================
// CARD "SEU PEDIDO"
// =====================================================================
const card = $('#pedidoCard'), corpo = $('#pcCorpo'), barra = $('#pcBarra'), toast = $('#cdToast');
function garantirBolo() { if (!pedido.bolo) pedido.bolo = novoBolo(); return pedido.bolo; }
function mudarQtd(id, d, avisarAdd) {
  const q = Math.max(0, (pedido.itens[id] || 0) + d);
  if (q) pedido.itens[id] = q; else delete pedido.itens[id];
  atualizarPedido();
  if (avisarAdd && d > 0) avisar(ITEM[id].nome[lang]);
}
function opcoes(lista, sel, vazio) {
  return (vazio != null ? `<option value="">${esc(vazio)}</option>` : '') + lista.map(o => `<option value="${o.v}"${String(o.v) === String(sel) ? ' selected' : ''}>${esc(o.t)}</option>`).join('');
}
function renderPedido() {
  const u = t(), n = contar(), b = pedido.bolo;
  let h = '';
  if (!n) {
    h += `<p class="pc-vazio">${u.vazio}</p><button type="button" class="btn btn-contorno pc-comecar" data-comecar>${u.comecar}</button>`;
  }
  if (b) {
    const n = +b.ppl > 0 ? +b.ppl : 0, sug = n ? sugerir(n) : null;
    h += `<div class="pc-bolo"><div class="pc-bolo-top"><b>${u.boloT}</b><span class="pc-tag">${u.orcamento}</span>
        <button type="button" class="pc-x" data-tirar-bolo aria-label="${u.removerBolo}">×</button></div>
      ${b.ref ? `<p class="pc-ref">${u.inspiracao}: <i>${esc(b.ref[lang] || b.ref.pt)}</i> <button type="button" class="pc-link" data-tirar-ref>${u.remover}</button></p>` : ''}
      <div class="pc-campos">
        <label>${u.lOcc}<select data-campo="occ">${opcoes(OCASIOES.map((o, i) => ({ v: i, t: o[lang] })), b.occ, u.occVazio)}</select></label>
        <label>${u.lPpl}<input data-campo="ppl" type="number" inputmode="numeric" min="1" max="500" value="${esc(b.ppl)}"></label>
        <label>${u.lDate}<input data-campo="date" type="date" value="${esc(b.date)}" min="${minData()}"></label>
        <label>${u.lTam}<select data-campo="tam">${opcoes(TAMANHOS.map(x => ({ v: x.id, t: x.nome[lang] })), b.tam, u.depois)}</select></label>
        <label class="pc-largo">${u.lRec}<select data-campo="rec">${opcoes(RECHEIOS.map(x => ({ v: x.id, t: x.nome[lang] })), b.rec, u.depois)}</select></label>
      </div>
      <p class="pc-sug" aria-live="polite">${n ? u.sugestao(n, sug ? sug.nome[lang] : '') : ''}</p></div>`;
  }
  const ids = Object.keys(pedido.itens);
  if (ids.length) {
    let sub = 0;
    h += `<ul class="pc-itens">${ids.map(id => {
      const it = ITEM[id], q = pedido.itens[id], c = it.cat, nome = esc(it.nome[lang]);
      if (c.tipo === 'preco') sub += precoDe(it) * q;
      return `<li><div><b>${nome}</b><small>${esc(c.nome[lang])} · ${c.tipo === 'preco' ? dinheiro(precoDe(it)) + ' ' + u.cada : u.consulte}</small></div>
        <div class="pc-qtd"><button type="button" data-q="${id}" data-d="-1" aria-label="${esc(u.menos(it.nome[lang]))}">−</button><span aria-hidden="true">${q}</span><span class="sr">${q}</span><button type="button" data-q="${id}" data-d="1" aria-label="${esc(u.mais(it.nome[lang]))}">+</button></div></li>`;
    }).join('')}</ul>`;
    if (sub) h += `<p class="pc-sub"><span>${u.subtotal}</span><b>${dinheiro(sub)}</b></p><p class="pc-subnota">${u.subNota}</p>`;
  }
  if (n) {
    h += `<label class="pc-campo">${u.lEnt}<select data-geral="ent">${opcoes([{ v: 'retirada', t: u.ret }, { v: 'entrega', t: u.ent }], pedido.ent)}</select></label>
      <label class="pc-campo">${u.lNotas}<textarea data-geral="notas" rows="2" placeholder="${esc(u.phNotas)}">${esc(pedido.notas)}</textarea></label>
      <button type="button" class="btn btn-wa pc-enviar" data-enviar><svg aria-hidden="true"><use href="#i-wa"/></svg><span>${u.enviar}</span></button>
      <p class="pc-aviso">${u.aviso}</p>`;
  }
  // preserva o foco ao redesenhar
  const ativo = document.activeElement, chave = ativo && corpo.contains(ativo) ? [...corpo.querySelectorAll('button,input,select,textarea')].indexOf(ativo) : -1;
  corpo.innerHTML = h;
  if (chave >= 0) { const alvo = corpo.querySelectorAll('button,input,select,textarea')[chave]; if (alvo) alvo.focus({ preventScroll: true }); }
  $('#pcTit').textContent = u.pedido;
  $('#pcCont').textContent = n ? `(${n})` : '';
  barra.querySelector('.pb-txt').textContent = u.barra(n);
  barra.querySelector('.pb-acao').textContent = card.classList.contains('aberto') ? u.fechar : u.abrir;
  document.documentElement.classList.toggle('tem-pedido', n > 0);
  if (!n) fecharPedido(false);
  posFab();
}
// O botão flutuante do WhatsApp nunca fica coberto: no celular, com o card na tela, ele sobe para cima do card.
function posFab() {
  let b = 16;
  if (telaPequena.matches && document.documentElement.classList.contains('tem-pedido')) b = Math.ceil(card.getBoundingClientRect().height) + 10 + 12;
  document.documentElement.style.setProperty('--fab-b', b + 'px');
}
function marcarLivro() {
  document.querySelectorAll('[data-qtd]').forEach(s => { const q = pedido.itens[s.dataset.qtd] || 0; s.hidden = !q; s.textContent = q ? '×' + q : ''; });
  document.querySelectorAll('[data-rec]').forEach(b => b.setAttribute('aria-pressed', String(!!pedido.bolo && pedido.bolo.rec === b.dataset.rec)));
  document.querySelectorAll('[data-bolo-tam]').forEach(b => b.classList.toggle('on', !!pedido.bolo && pedido.bolo.tam === b.dataset.boloTam));
}
function atualizarPedido() { salvar(); renderPedido(); marcarLivro(); }
function minData() { const d = new Date(); d.setDate(d.getDate() + 2); return d.toISOString().slice(0, 10); }
corpo.addEventListener('click', e => {
  const q = e.target.closest('[data-q]'); if (q) { mudarQtd(q.dataset.q, +q.dataset.d); return; }
  if (e.target.closest('[data-comecar]')) { garantirBolo(); atualizarPedido(); corpo.querySelector('[data-campo="occ"]')?.focus(); return; }
  if (e.target.closest('[data-tirar-bolo]')) { pedido.bolo = null; atualizarPedido(); $('#pcTit').focus({ preventScroll: true }); return; }
  if (e.target.closest('[data-tirar-ref]')) { pedido.bolo.ref = null; atualizarPedido(); return; }
  if (e.target.closest('[data-enviar]')) { window.open('https://wa.me/' + PHONE + '?text=' + encodeURIComponent(mensagem()), '_blank', 'noopener'); }
});
corpo.addEventListener('change', e => {
  const c = e.target.dataset.campo, g = e.target.dataset.geral;
  if (c && pedido.bolo) { pedido.bolo[c] = c === 'occ' && e.target.value !== '' ? +e.target.value : e.target.value; atualizarPedido(); }
  if (g) { pedido[g] = e.target.value; salvar(); }
});
corpo.addEventListener('input', e => {
  if (e.target.dataset.campo === 'ppl' && pedido.bolo) { pedido.bolo.ppl = e.target.value; salvar(); const n = +e.target.value > 0 ? +e.target.value : 0, s = n ? sugerir(n) : null; corpo.querySelector('.pc-sug').textContent = n ? t().sugestao(n, s ? s.nome[lang] : '') : ''; }
  if (e.target.dataset.geral === 'notas') { pedido.notas = e.target.value; salvar(); }
});
function mensagem() {
  const u = t(), L = [u.msgOi], b = pedido.bolo;
  if (b) {
    L.push('', u.msgBolo);
    const add = (k, v) => { if (v) L.push('• ' + k + ': ' + v); };
    add(u.inspiracao, b.ref && (b.ref[lang] || b.ref.pt));
    add(u.lOcc, b.occ !== '' && OCASIOES[b.occ] ? OCASIOES[b.occ][lang] : '');
    add(u.lPpl, +b.ppl > 0 ? String(+b.ppl) : '');
    let d = b.date; if (d) { const [y, m, dd] = d.split('-'); d = lang === 'en' ? `${m}/${dd}/${y}` : `${dd}/${m}/${y}`; } add(u.lDate, d || u.aCombinar);
    add(u.lTam, b.tam ? ITEM[b.tam].nome[lang] : u.aCombinar);
    add(u.lRec, b.rec ? ITEM[b.rec].nome[lang] : u.aCombinar);
  }
  const ids = Object.keys(pedido.itens);
  if (ids.length) {
    let sub = 0;
    L.push('', u.msgItens);
    ids.forEach(id => { const it = ITEM[id], q = pedido.itens[id], c = it.cat; if (c.tipo === 'preco') sub += precoDe(it) * q;
      L.push(`• ${q}× ${it.nome[lang]} (${c.nome[lang]}) · ${c.tipo === 'preco' ? dinheiro(precoDe(it)) + ' ' + u.cada : u.msgConsultar}`); });
    if (sub) L.push(`${u.msgSub}: ${dinheiro(sub)}`);
  }
  L.push('', `${u.msgEnt}: ${pedido.ent === 'entrega' ? u.ent : u.ret}`);
  if (pedido.notas.trim()) L.push(`${u.msgIdeia}: ${pedido.notas.trim()}`);
  if (b) L.push(u.msgFoto);
  return L.join('\n');
}

// celular: o card vira uma barra no rodapé que abre de baixo para cima
const telaPequena = matchMedia('(max-width: 959px)');
function abrirPedido() {
  card.classList.add('aberto'); barra.setAttribute('aria-expanded', 'true');
  barra.querySelector('.pb-acao').textContent = t().fechar; posFab();
  setTimeout(() => (corpo.querySelector('select,input') || corpo.querySelector('button') || barra).focus({ preventScroll: true }), 50);
}
function fecharPedido(focar) {
  if (!card.classList.contains('aberto')) return;
  card.classList.remove('aberto'); barra.setAttribute('aria-expanded', 'false');
  barra.querySelector('.pb-acao').textContent = t().abrir; posFab();
  if (focar) barra.focus({ preventScroll: true });
}
barra.addEventListener('click', () => card.classList.contains('aberto') ? fecharPedido(true) : abrirPedido());
document.addEventListener('keydown', e => { if (e.key === 'Escape' && card.classList.contains('aberto')) fecharPedido(true); });
function mostrarPedido() {
  if (telaPequena.matches) { if (contar()) abrirPedido(); else { secao.scrollIntoView({ behavior: reduz ? 'auto' : 'smooth' }); } return; }
  card.scrollIntoView({ behavior: reduz ? 'auto' : 'smooth', block: 'nearest' });
  setTimeout(() => $('#pcTit').focus({ preventScroll: true }), 400);
}

// aviso curto depois de adicionar
let tmT;
function avisar(nome) {
  toast.querySelector('span').textContent = t().adicionado(nome);
  toast.querySelector('button').textContent = t().toastVer;
  toast.hidden = false; requestAnimationFrame(() => toast.classList.add('on'));
  clearTimeout(tmT); tmT = setTimeout(() => { toast.classList.remove('on'); setTimeout(() => { toast.hidden = true; }, 300); }, 3800);
}
toast.querySelector('button').addEventListener('click', () => { toast.classList.remove('on'); toast.hidden = true; mostrarPedido(); });

// "Quero um assim" da vitrine 3D
document.addEventListener('yc-pedido-bolo', e => {
  const b = garantirBolo(); b.ref = { pt: e.detail.pt, en: e.detail.en };
  atualizarPedido(); avisar(t().boloT + ': ' + (lang === 'en' ? e.detail.en : e.detail.pt));
});

// idioma
document.addEventListener('yc-lang', e => {
  lang = e.detail === 'en' ? 'en' : 'pt';
  const p = visiveis()[0] || 0; montar(); cur = modoDuplo ? Math.ceil(p / 2) : p; aplicar(true);
  renderPedido(); marcarLivro();
});

if ('ResizeObserver' in window) new ResizeObserver(posFab).observe(card);
telaPequena.addEventListener('change', posFab);
montar();
renderPedido();
