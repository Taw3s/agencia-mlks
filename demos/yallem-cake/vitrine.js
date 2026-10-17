// Vitrine: anel de fotos (CSS 3D) em volta de um bolo 3D (Three.js) que é cortado ao escolher uma foto.
// O bolo tem uma fatia para cada foto do anel; a fatia escolhida sai com o recheio daquele bolo.

const PHONE = '19782277733';
// Ingredientes ABAIXO SÃO DE EXEMPLO. Quando a Yallem mandar os reais, troque e mude para false.
const INGREDIENTES_DE_EXEMPLO = true;

const BAUNILHA = '#F1DDB2', CHOCOLATE = '#5B3526', LIMAO = '#F3E2A2', ESPECIARIAS = '#B9773F';
const CAKES = [
  { img: 'bolo-livros', sponge: BAUNILHA, fills: ['#F6EEDC', '#E58A9B'],
    pt: { n: 'Livros e folha de ouro', o: 'Chá de bebê', d: 'Lombadas de livros com os nomes em dourado, rosas e folha de ouro.', i: ['Massa branca de baunilha', 'Recheio de ninho com morango', 'Cobertura de chantininho', 'Folha de ouro comestível', 'Rosas decorativas'] },
    en: { n: 'Books and gold leaf', o: 'Baby shower', d: 'Book spines with names in gold, roses and gold leaf.', i: ['Vanilla sponge', 'Ninho cream with strawberry', 'Whipped Ninho frosting', 'Edible gold leaf', 'Decorative roses'] } },
  { img: 'xadrez', w: 526, h: 701, sponge: CHOCOLATE, fills: ['#3B2018', '#F6EEDC'],
    pt: { n: 'Tabuleiro de xadrez', o: 'Bolo temático', d: 'Xadrez em preto e branco, peças no topo e rosas de chantilly.', i: ['Massa de chocolate', 'Recheio de brigadeiro e ninho', 'Cobertura de chantininho', 'Peças de chocolate branco e ao leite', 'Rosas de buttercream'] },
    en: { n: 'Chessboard', o: 'Themed cake', d: 'Black and white checkers, chess pieces on top and piped roses.', i: ['Chocolate sponge', 'Brigadeiro and Ninho filling', 'Whipped Ninho frosting', 'White and milk chocolate pieces', 'Buttercream roses'] } },
  { img: 'maracuja', sponge: BAUNILHA, fills: ['#F2C230', '#3B2018'],
    pt: { n: 'Maracujá com chocolate', o: 'Aniversário', d: 'Creme de maracujá com ganache escorrendo e brigadeiros.', i: ['Massa branca', 'Mousse de maracujá', 'Ganache meio amargo', 'Brigadeiros', 'Raspas de chocolate'] },
    en: { n: 'Passion fruit and chocolate', o: 'Birthday', d: 'Passion fruit cream with a chocolate drip and brigadeiros.', i: ['Vanilla sponge', 'Passion fruit mousse', 'Semisweet ganache', 'Brigadeiros', 'Chocolate shavings'] } },
  { img: 'doce-de-leite', sponge: BAUNILHA, fills: ['#C88A45', '#FFF6E6'],
    pt: { n: 'Doce de leite e coco', o: 'Aniversário', d: 'Calda de doce de leite escorrendo e docinhos de coco no topo.', i: ['Massa branca', 'Recheio de doce de leite', 'Creme de coco', 'Beijinhos', 'Lascas de coco'] },
    en: { n: 'Dulce de leche and coconut', o: 'Birthday', d: 'Dulce de leche drip with coconut sweets on top.', i: ['Vanilla sponge', 'Dulce de leche filling', 'Coconut cream', 'Beijinhos (coconut truffles)', 'Coconut flakes'] } },
  { img: 'bolo-flores', sponge: BAUNILHA, fills: ['#F6EEDC', '#C9445E'],
    pt: { n: 'Floral delicado', o: 'Aniversário', d: 'Chantilly com brilho, flores rosa e mosquitinho.', i: ['Massa de baunilha', 'Creme de ninho com frutas vermelhas', 'Cobertura de chantininho com brilho', 'Flores decorativas'] },
    en: { n: 'Delicate florals', o: 'Birthday', d: 'Shimmering whipped frosting, pink flowers and baby’s breath.', i: ['Vanilla sponge', 'Ninho cream with red berries', 'Shimmer whipped frosting', 'Decorative flowers'] } },
  { img: 'frutas-vermelhas', sponge: BAUNILHA, fills: ['#F6EEDC', '#B8324E'],
    pt: { n: 'Jardim de frutas vermelhas', o: 'Chá revelação', d: 'Coroa de morangos, mirtilos, amoras e cerejas, com frase em dourado.', i: ['Massa branca', 'Creme de ninho com frutas vermelhas', 'Morangos, mirtilos, framboesas e amoras', 'Cerejas', 'Escrita em dourado'] },
    en: { n: 'Red berry garden', o: 'Gender reveal', d: 'A crown of strawberries, blueberries, blackberries and cherries, with a gold message.', i: ['Vanilla sponge', 'Ninho cream with red berries', 'Strawberries, blueberries, raspberries, blackberries', 'Cherries', 'Gold lettering'] } },
  { img: 'mommy-to-bee', sponge: LIMAO, fills: ['#F7F0C8', '#F6EEDC'],
    pt: { n: 'Mommy to Bee', o: 'Chá de bebê', d: 'Abelhinhas, flores azuis e o caminho do voo desenhado no chantilly.', i: ['Massa de limão siciliano', 'Creme de ninho com limão', 'Cobertura de chantininho com brilho', 'Abelhinhas de açúcar', 'Flores de açúcar'] },
    en: { n: 'Mommy to Bee', o: 'Baby shower', d: 'Little bees, blue flowers and their flight path piped on the frosting.', i: ['Lemon sponge', 'Ninho cream with lemon', 'Shimmer whipped frosting', 'Sugar bees', 'Sugar flowers'] } },
  { img: 'thanksgiving', sponge: ESPECIARIAS, fills: ['#C88A45', '#4A2A1E'],
    pt: { n: 'Mesa de Thanksgiving', o: 'Datas especiais', d: 'Folhas de outono, abóboras e laços para a mesa da família.', i: ['Massa de especiarias', 'Recheio de doce de leite', 'Ganache de chocolate', 'Folhas e abóboras decorativas'] },
    en: { n: 'Thanksgiving table', o: 'Special dates', d: 'Autumn leaves, pumpkins and ribbons for the family table.', i: ['Spice sponge', 'Dulce de leche filling', 'Chocolate ganache', 'Decorative leaves and pumpkins'] } },
];
const UI = {
  pt: { ing: 'Ingredientes', ex: 'Ingredientes de exemplo. A Yallem confirma sabores e alergênicos na encomenda.', cta: 'Quero um assim', close: 'Fechar', hint: 'Arraste ou use as setas. Toque num bolo para ver a fatia.', prev: 'Bolo anterior', next: 'Próximo bolo', region: 'Vitrine de bolos. Use as setas do teclado ou arraste.', aberto: n => `${n}: ingredientes e botão de pedido abertos.`, msg: n => `Oi, Yallem! Vi o bolo “${n}” no site e queria um parecido.` },
  en: { ing: 'Ingredients', ex: 'Sample ingredients. Yallem confirms flavors and allergens when you order.', cta: 'I want one like this', close: 'Close', hint: 'Drag or use the arrows. Tap a cake to see the slice.', prev: 'Previous cake', next: 'Next cake', region: 'Cake showcase. Use the arrow keys or drag.', aberto: n => `${n}: ingredients and order button open.`, msg: n => `Hi Yallem! I saw the “${n}” cake on your website and I’d like one like it.` },
};

const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = s => document.querySelector(s);
const palco = $('#palco'), cena = $('#cena'), anel = $('#anel'), vitrine = $('#vitrine');
const painel = $('#fatia'), bolo3d = $('#bolo3d');
const svgT = $('#coroaT'), svgF = $('#coroaF');
let lang = document.documentElement.lang.startsWith('en') ? 'en' : 'pt';

const N = CAKES.length, passo = 360 / N, AX = -24, AZ = -4, RAD = Math.PI / 180;

// ---------- Cards do anel ----------
const cards = CAKES.map((c, i) => {
  const slot = document.createElement('div'); slot.className = 'slot';
  const b = document.createElement('button'); b.type = 'button'; b.className = 'rc';
  b.innerHTML = `<span class="rf rf--a"><img src="img/${c.img}-400.webp" width="${c.w || 600}" height="${c.h || 800}" alt="" draggable="false" loading="lazy"><span class="cap"></span></span>
    <span class="rf rf--b" aria-hidden="true"><img src="img/logo.webp" width="200" height="200" alt="" draggable="false"></span>`;
  slot.appendChild(b); anel.appendChild(slot);
  b.addEventListener('click', e => { if (moveu > 6) { e.preventDefault(); return; } escolher(i); });
  b.addEventListener('focus', () => { if (semMover) return; if (sel < 0 && !arrastando) { alvo = Math.round(pos + relativo(i)); mola = 0.09; } });
  return { slot, el: b, cap: b.querySelector('.cap') };
});

// ---------- Geometria ----------
let W = 800, H = 640, R = 300, cw = 180, ch = 240, persp = 900, cx0 = 400, cy0 = 270;
const lateral = matchMedia('(min-width:900px)'); // mesma condição do CSS que põe o card ao lado do palco
let sh = { x: 0, y: 0, s: 1 }, shAlvo = { x: 0, y: 0, s: 1 };
function medir() {
  W = palco.clientWidth; H = palco.clientHeight;
  const corda = 2 * Math.sin(Math.PI / N);
  R = Math.min(W * 0.3, 340);
  cw = R * corda * 0.55;
  if (cw < 104) { cw = 104; R = cw / (corda * 0.55); }
  ch = Math.round(cw * 1.32);
  persp = R * 4.5;
  cx0 = W / 2; cy0 = H * 0.4;
  palco.style.perspective = persp + 'px';
  palco.style.perspectiveOrigin = '50% 50%';
  palco.style.setProperty('--cw', cw + 'px');
  palco.style.setProperty('--ch', ch + 'px');
  cena.style.top = cy0 + 'px';
  cards.forEach((c, i) => { c.slot.style.transform = `rotateY(${i * passo}deg) translateZ(${R}px)`; });
  const bw = Math.round(R * 1.8), bh = Math.round(R * 1.5);
  Object.assign(bolo3d.style, { width: bw + 'px', height: bh + 'px', left: -bw / 2 + 'px', top: -bh / 2 + 'px', transform: `rotateX(${-AX}deg)` });
  svgT.setAttribute('viewBox', `0 0 ${W} ${H}`); svgF.setAttribute('viewBox', `0 0 ${W} ${H}`);
  definirDeslocamento();
  sh = { ...shAlvo };
  construirCoroa();
  if (cake) cake.resize(bw, bh);
  acordar();
}
function definirDeslocamento() {
  if (sel < 0) { shAlvo = { x: 0, y: 0, s: 1 }; return; }
  // desktop: cena vai para a esquerda e o card ocupa a direita do palco; celular: card abaixo do palco, cena fica parada
  shAlvo = lateral.matches ? { x: -Math.min(W * 0.21, 240), y: 0, s: 0.9 } : { x: 0, y: 0, s: 1 };
}

// ---------- Coroa: duas fitas trançadas douradas e pérolas ----------
let fitaA = [], fitaB = [], perolas = [];
const NS = 'http://www.w3.org/2000/svg';
const pathT = [mk('path', svgT, 'fa'), mk('path', svgT, 'fb')], pathF = [mk('path', svgF, 'fa'), mk('path', svgF, 'fb')];
const gT = mk('g', svgT), gF = mk('g', svgF);
function mk(tag, pai, cls) { const e = document.createElementNS(NS, tag); if (cls) e.setAttribute('class', cls); pai.appendChild(e); return e; }
for (let j = 0; j < 32; j++) {
  const c = document.createElementNS(NS, 'circle');
  c.setAttribute('class', j % 2 ? 'p1' : 'p2');
  perolas.push({ el: c, f: (j + 0.5) / 32 * 2 * Math.PI, lado: null });
}
function construirCoroa() {
  fitaA = []; fitaB = [];
  const amp = Math.max(3, R * 0.018), ciclos = 16, M = 220;
  for (let i = 0; i <= M; i++) {
    const f = i / M * 2 * Math.PI, o = amp * Math.sin(f * ciclos);
    const px = Math.sin(f) * R, pz = Math.cos(f) * R;
    fitaA.push([px, o, pz]); fitaB.push([px, -o, pz]);
  }
}
let ct = 1, st = 0;
const cxA = Math.cos(AX * RAD), sxA = Math.sin(AX * RAD), czA = Math.cos(AZ * RAD), szA = Math.sin(AZ * RAD);
function proj(p) { // mesma ordem do CSS: rotateY(anel) → rotateX → rotateZ → scale → translate → perspectiva
  const x = p[0] * ct + p[2] * st, z = -p[0] * st + p[2] * ct, y = p[1];
  const y2 = y * cxA - z * sxA, z2 = y * sxA + z * cxA;
  const x3 = (x * czA - y2 * szA) * sh.s, y3 = (x * szA + y2 * czA) * sh.s, Z = z2 * sh.s;
  const X = cx0 + sh.x + x3, Y = cy0 + sh.y + y3, ox = W / 2, oy = H / 2;
  const k = persp / (persp - Z);
  return [ox + (X - ox) * k, oy + (Y - oy) * k, Z, k];
}
function trilha(arr) {
  let fs = '', bs = '', ps = null, pq = null;
  const pt = q => q[0].toFixed(1) + ' ' + q[1].toFixed(1) + ' ';
  for (const p of arr) {
    const q = proj(p), s = q[2] >= 0;
    if (ps === null || s !== ps) {
      if (ps !== null) { if (ps) fs += 'L' + pt(q); else bs += 'L' + pt(q); }
      if (s) fs += 'M' + pt(pq || q) + 'L' + pt(q); else bs += 'M' + pt(pq || q) + 'L' + pt(q);
    } else if (s) fs += 'L' + pt(q); else bs += 'L' + pt(q);
    ps = s; pq = q;
  }
  return [fs, bs];
}
function desenharCoroa(theta) {
  ct = Math.cos(theta); st = Math.sin(theta);
  const a = trilha(fitaA), b = trilha(fitaB);
  pathF[0].setAttribute('d', a[0]); pathT[0].setAttribute('d', a[1]);
  pathF[1].setAttribute('d', b[0]); pathT[1].setAttribute('d', b[1]);
  const rr = Math.max(2.4, R * 0.011);
  for (const p of perolas) {
    const q = proj([Math.sin(p.f) * R, 0, Math.cos(p.f) * R]), frente = q[2] >= 0;
    if (p.lado !== frente) { (frente ? gF : gT).appendChild(p.el); p.lado = frente; }
    p.el.setAttribute('cx', q[0].toFixed(1)); p.el.setAttribute('cy', q[1].toFixed(1)); p.el.setAttribute('r', (rr * q[3]).toFixed(2));
  }
}

// ---------- Estado do anel ----------
let pos = reduz ? 0 : 2.4, alvo = 0, mola = reduz ? 1 : 0.05;
let arrastando = false, moveu = 0, ultimoX = 0, ultimoT = 0, vel = 0, hover = false, sel = -1, visivel = false;
function relativo(i) { const r = ((i - pos) % N + N) % N; return r > N / 2 ? r - N : r; }
function renderAnel() {
  const th = -pos * passo;
  anel.style.transform = `rotateY(${th}deg)`;
  cena.style.transform = `translate3d(${sh.x}px,${sh.y}px,0) scale3d(${sh.s},${sh.s},${sh.s}) rotateZ(${AZ}deg) rotateX(${AX}deg)`;
  for (let i = 0; i < N; i++) {
    const rel = relativo(i), t = (Math.cos(rel * passo * RAD) + 1) / 2;
    cards[i].el.style.setProperty('--sombra', ((1 - t) * 0.55).toFixed(3));
    cards[i].el.style.opacity = sel >= 0 ? (t > 0.5 ? '0.05' : '0.3') : '';
    cards[i].el.classList.toggle('is-front', Math.abs(rel) < 0.5);
  }
  desenharCoroa(th * RAD);
  if (cake) cake.girar(th * RAD);
}
let tAnt = performance.now(), rafId = 0, tParou = 0, sujo = 3;
const acordar = () => { sujo = 3; }; // força redesenhar alguns quadros (mudança de estado, tamanho, volta à tela)
function quadro(agora) {
  const dt = Math.min(100, (agora || performance.now()) - tAnt) / 16.67; tAnt = agora || performance.now();
  const f = m => 1 - Math.pow(1 - m, dt); // mola independente da taxa de quadros
  let mexe = arrastando;
  if (!arrastando) {
    const d = alvo - pos;
    if (Math.abs(d) > 0.0005) { pos += d * f(mola); mexe = true; } else { if (pos !== alvo) { pos = alvo; sujo = 2; } mola = 0.09; }
    if (Math.abs(d) < 0.02) mola = 0.09;
  }
  const dsh = Math.abs(shAlvo.x - sh.x) + Math.abs(shAlvo.y - sh.y) + Math.abs(shAlvo.s - sh.s) * 100;
  if (dsh >= 0.05) {
    const k = reduz ? 1 : f(0.12);
    sh.x += (shAlvo.x - sh.x) * k; sh.y += (shAlvo.y - sh.y) * k; sh.s += (shAlvo.s - sh.s) * k; mexe = true;
  } else if (dsh > 0) { sh.x = shAlvo.x; sh.y = shAlvo.y; sh.s = shAlvo.s; sujo = 2; }
  if (cake && cake.animando()) mexe = true;
  // parado e sem mudança: não recalcula a coroa nem renderiza o Three.js
  if (visivel && (mexe || sujo > 0)) { renderAnel(); if (cake) cake.quadro(Math.abs(alvo - pos) < 0.015); if (sujo > 0) sujo--; }
  rafId = requestAnimationFrame(quadro);
}
// o laço só roda com a vitrine na tela e a aba visível; ao voltar, o tempo parado não conta para a animação do corte
function iniciar() {
  if (rafId) return;
  if (tParou) { if (cake) cake.deslocar(performance.now() - tParou); tParou = 0; }
  tAnt = performance.now(); sujo = 3; rafId = requestAnimationFrame(quadro);
}
function parar() { if (!rafId) return; cancelAnimationFrame(rafId); rafId = 0; tParou = performance.now(); }
function avaliar() { if (visivel && !document.hidden) iniciar(); else parar(); }
document.addEventListener('visibilitychange', avaliar);

// ---------- Controles ----------
palco.addEventListener('pointerenter', () => { hover = true; });
palco.addEventListener('pointerleave', () => { hover = false; });
palco.addEventListener('pointerdown', e => {
  if (e.button !== 0) return;
  arrastando = true; moveu = 0; vel = 0; ultimoX = e.clientX; ultimoT = performance.now();
});
window.addEventListener('pointermove', e => {
  if (!arrastando) return;
  const dx = e.clientX - ultimoX, agora = performance.now();
  moveu += Math.abs(dx);
  if (moveu > 6 && sel >= 0) fechar(false);
  const porCard = Math.max(90, R * 2 * Math.sin(Math.PI / N) * 1.1);
  const dp = -dx / porCard;
  pos += dp; alvo = pos;
  vel = dp / Math.max(1, agora - ultimoT) * 16;
  ultimoX = e.clientX; ultimoT = agora;
});
function soltar() {
  if (!arrastando) return;
  arrastando = false;
  if (moveu > 6) { alvo = Math.round(pos + vel * 12); mola = 0.09; }
  else alvo = Math.round(alvo);
  setTimeout(() => { moveu = 0; }, 0);
}
window.addEventListener('pointerup', soltar);
window.addEventListener('pointercancel', soltar);
let semMover = false;
function ir(n) { if (sel >= 0) fechar(false); alvo = Math.round(alvo) + n; mola = 0.09; }
// com o foco num card, as setas levam o foco junto: o card focado é sempre o que está na frente
function seguirFoco() {
  semMover = true;
  cards[((Math.round(alvo) % N) + N) % N].el.focus({ preventScroll: true });
  semMover = false;
}
palco.addEventListener('keydown', e => {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
  const noCard = !!(e.target.closest && e.target.closest('.rc'));
  ir(e.key === 'ArrowLeft' ? -1 : 1);
  if (noCard) seguirFoco();
  e.preventDefault();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && sel >= 0) fechar(true); });
const vctl = $('.vctl');
const focoNaVitrine = () => vitrine.contains(document.activeElement) || vctl.contains(document.activeElement);
$('#vAnt').addEventListener('click', () => ir(-1));
$('#vProx').addEventListener('click', () => ir(1));
setInterval(() => {
  if (visivel && !reduz && !hover && !arrastando && sel < 0 && !document.hidden && !document.documentElement.classList.contains('pausado') && !focoNaVitrine()) ir(1);
}, 3400);

// ---------- Escolher / fechar ----------
let ultimoCard = null;
function escolher(i) {
  ultimoCard = cards[i].el;
  sel = i; acordar();
  alvo = Math.round(pos + relativo(i)); mola = 0.09;
  cards.forEach((c, j) => c.el.classList.toggle('is-sel', j === i));
  palco.classList.add('aberto');
  definirDeslocamento();
  preencherPainel();
  painel.classList.remove('on'); painel.hidden = true;
  const mostrar = () => {
    if (sel !== i) return;
    painel.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => painel.classList.add('on')));
    anunciar(UI[lang].aberto(CAKES[i][lang].n));
    // só leva o foco e a rolagem se a pessoa ainda está nessa seleção; se ela foi para outro controle, não atrapalha
    const ae = document.activeElement;
    if (!ae || ae === document.body || ae === palco || ae === cards[i].el || painel.contains(ae)) {
      painel.querySelector('h3').focus({ preventScroll: true });
      if (!lateral.matches) setTimeout(() => painel.scrollIntoView({ behavior: reduz ? 'auto' : 'smooth', block: 'nearest' }), 120);
    }
  };
  if (cake) cake.abrir(i, mostrar); else mostrar();
}
const estado = $('#vStatus');
function anunciar(txt) { estado.textContent = ''; setTimeout(() => { estado.textContent = txt; }, 60); }
function fechar(devolverFoco) {
  if (sel < 0) return;
  sel = -1; acordar();
  palco.classList.remove('aberto');
  cards.forEach(c => c.el.classList.remove('is-sel'));
  definirDeslocamento();
  painel.classList.remove('on');
  setTimeout(() => { if (sel < 0) painel.hidden = true; }, 450);
  if (cake) cake.fechar();
  if (devolverFoco && ultimoCard) ultimoCard.focus({ preventScroll: true });
}
painel.querySelector('.x').addEventListener('click', () => fechar(true));
// "Quero um assim": entra no card "Seu pedido" do cardápio (cardapio.js)
painel.querySelector('.btn-pedir').addEventListener('click', () => {
  if (sel < 0) return;
  const c = CAKES[sel];
  document.dispatchEvent(new CustomEvent('yc-pedido-bolo', { detail: { pt: c.pt.n, en: c.en.n, img: c.img } }));
});

function preencherPainel() {
  if (sel < 0) return;
  const c = CAKES[sel], L = c[lang], u = UI[lang];
  const img = painel.querySelector('img');
  img.src = `img/${c.img}-600.webp`;
  img.srcset = c.w ? '' : `img/${c.img}-600.webp 600w, img/${c.img}-1000.webp 1000w`;
  img.alt = L.d;
  painel.querySelector('.occ').textContent = L.o;
  painel.querySelector('h3').textContent = L.n;
  painel.querySelector('.desc').textContent = L.d;
  painel.querySelector('h4').textContent = u.ing;
  painel.querySelector('ul').innerHTML = L.i.map(x => `<li>${x}</li>`).join('');
  const ex = painel.querySelector('.ex'); ex.hidden = !INGREDIENTES_DE_EXEMPLO; ex.textContent = u.ex;
  painel.querySelector('.btn-pedir span:last-child').textContent = u.cta;
  painel.querySelector('.x').setAttribute('aria-label', u.close);
}
function aplicarIdioma(l) {
  lang = l === 'en' ? 'en' : 'pt';
  const u = UI[lang];
  cards.forEach((c, i) => { c.cap.textContent = CAKES[i][lang].n; c.el.setAttribute('aria-label', CAKES[i][lang].n); });
  $('#vHint').textContent = u.hint;
  $('#vAnt').setAttribute('aria-label', u.prev);
  $('#vProx').setAttribute('aria-label', u.next);
  palco.setAttribute('aria-label', u.region);
  preencherPainel();
}
document.addEventListener('yc-lang', e => aplicarIdioma(e.detail));
aplicarIdioma(lang);

// ---------- Bolo 3D ----------
let cake = null;
async function iniciarBolo() {
  if (navigator.deviceMemory && navigator.deviceMemory <= 2) return; // celular com 2 GB ou menos: foto do bolo
  let THREE;
  try { THREE = await import('./vendor/three.module.min.js'); } catch (e) { return; }
  const canvas = document.getElementById('cake');
  let renderer;
  // failIfMajorPerformanceCaveat: se o celular só tiver WebGL por software, fica a foto do bolo (mais leve)
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power', failIfMajorPerformanceCaveat: true }); }
  catch (e) { return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  // se o aparelho derrubar o contexto WebGL (falta de memória), mostra a foto e segue funcionando; volta ao 3D se o contexto voltar
  canvas.addEventListener('webglcontextlost', e => { e.preventDefault(); vivo = false; bolo3d.classList.remove('ok'); }, false);
  canvas.addEventListener('webglcontextrestored', () => { vivo = true; bolo3d.classList.add('ok'); acordar(); }, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 1, 100000);
  scene.add(new THREE.HemisphereLight(0xfff8f3, 0xd8b6a6, 2.4));
  const sol = new THREE.DirectionalLight(0xffffff, 2.2); sol.position.set(-2.5, 5, 4); scene.add(sol);
  const contra = new THREE.DirectionalLight(0xffe2e2, 0.9); contra.position.set(3, 1.5, -3); scene.add(contra);

  const root = new THREE.Group(); scene.add(root);
  const giro = new THREE.Group(); root.add(giro);

  const mat = c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.75, metalness: 0 });
  const mFrost = new THREE.MeshStandardMaterial({ color: 0xfdf8f3, roughness: 0.62 });
  const mOuro = new THREE.MeshStandardMaterial({ color: 0xd8ad55, roughness: 0.32, metalness: 0.55 });
  const mRosa = mat(0xf2b3be), mMorango = new THREE.MeshStandardMaterial({ color: 0xc8233a, roughness: 0.35 });
  const mMirtilo = new THREE.MeshStandardMaterial({ color: 0x2f3966, roughness: 0.4 }), mFolha = mat(0x6f9d6a);

  // base: tábua dourada e pé de madeira clara
  const tabua = new THREE.Mesh(new THREE.CylinderGeometry(1.34, 1.34, 0.05, 72), mOuro); tabua.position.y = -0.53; giro.add(tabua);
  const pe = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.58, 0.32, 48), mat(0xeee3da)); pe.position.y = -0.715; giro.add(pe);

  const half = Math.PI / N, a0 = -Math.PI / 2 - half, a1 = -Math.PI / 2 + half; // setor centrado em +z
  function setor(r) { const s = new THREE.Shape(); s.moveTo(0, 0); s.absarc(0, 0, r, a0, a1, false); s.lineTo(0, 0); return s; }
  function coroaSetor(r1, r2) {
    const s = new THREE.Shape(); s.moveTo(r1 * Math.cos(a0), r1 * Math.sin(a0));
    s.absarc(0, 0, r2, a0, a1, false); s.lineTo(r1 * Math.cos(a1), r1 * Math.sin(a1)); s.absarc(0, 0, r1, a1, a0, true); return s;
  }
  function extr(shape, y0, h) {
    const g = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false, curveSegments: 14 });
    g.rotateX(-Math.PI / 2); g.translate(0, y0, 0); return g;
  }
  const gS = setor(0.95), gShell = coroaSetor(0.95, 1.0), gTopo = setor(1.0);
  const base = -0.5, camadas = [0.2, 0.065, 0.2, 0.065, 0.2];
  const topoY = base + camadas.reduce((a, b) => a + b, 0); // 0.23
  const geoEsfera = new THREE.SphereGeometry(1, 18, 14);
  const corCamada = (c, k) => k % 2 === 0 ? c.sponge : c.fills[(k - 1) / 2 % c.fills.length];
  const at = (t, r, y) => new THREE.Vector3(r * Math.sin(t), y, r * Math.cos(t));

  const fatias = CAKES.map((c, i) => {
    const g = new THREE.Group(), recheio = [];
    let y = base;
    camadas.forEach((h, k) => {
      const m = new THREE.Mesh(extr(gS, y, h), mat(corCamada(c, k))); recheio.push(m); g.add(m); y += h;
    });
    g.add(new THREE.Mesh(extr(gShell, base, topoY - base), mFrost));
    g.add(new THREE.Mesh(extr(gTopo, topoY, 0.07), mFrost));
    const yt = topoY + 0.07;
    // rosetas de chantilly
    [-0.55, 0.55].forEach(f => {
      const m = new THREE.Mesh(geoEsfera, mFrost); m.scale.set(0.075, 0.06, 0.075); m.position.copy(at(half * f, 0.87, yt + 0.035)); g.add(m);
      const t = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.022, 8, 18), mFrost); t.rotation.x = Math.PI / 2; t.position.copy(at(half * f, 0.87, yt + 0.012)); g.add(t);
    });
    // frutas: morango nas pares, mirtilo + framboesa nas ímpares
    if (i % 2 === 0) {
      const m = new THREE.Mesh(geoEsfera, mMorango); m.scale.set(0.07, 0.085, 0.07); m.position.copy(at(0, 0.84, yt + 0.07)); g.add(m);
      const f = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.03, 6), mFolha); f.position.copy(at(0, 0.84, yt + 0.15)); g.add(f);
    } else {
      const m = new THREE.Mesh(geoEsfera, mMirtilo); m.scale.setScalar(0.048); m.position.copy(at(-0.12, 0.82, yt + 0.045)); g.add(m);
      const r = new THREE.Mesh(geoEsfera, mat(0xb8324e)); r.scale.set(0.055, 0.06, 0.055); r.position.copy(at(0.12, 0.83, yt + 0.055)); g.add(r);
    }
    // florzinha rosa e pérolas douradas na borda
    const fl = new THREE.Mesh(geoEsfera, mRosa); fl.scale.set(0.06, 0.035, 0.06); fl.position.copy(at(half * 0.3, 0.7, yt + 0.03)); g.add(fl);
    for (let q = 0; q < 4; q++) {
      const p = new THREE.Mesh(geoEsfera, mOuro); p.scale.setScalar(0.018);
      p.position.copy(at(-half + (q + 0.5) * (2 * half / 4), 0.985, yt + 0.005)); g.add(p);
    }
    g.rotation.y = i * passo * RAD;
    g.traverse(m => { if (m.isMesh && !recheio.includes(m)) m.material = m.material.clone(); });
    giro.add(g);
    return { g, recheio, k: 0 };
  });

  // faca
  const faca = new THREE.Group();
  const lamina = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.4, 1.15), new THREE.MeshStandardMaterial({ color: 0xdfe5ea, roughness: 0.22, metalness: 0.35 }));
  lamina.position.z = 0.53; faca.add(lamina);
  const cabo = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.11, 0.42), mat(0x3b2a24)); cabo.position.set(0, 0.06, 1.32); faca.add(cabo);
  faca.visible = false; giro.add(faca);

  let fase = 'idle', t0 = 0, atual = -1, kSaida = 0, avisar = null, vivo = true;
  const easeIO = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  function corte(e, ang) { // e: 0..1 desce e sobe
    faca.visible = true; faca.rotation.y = ang;
    const desce = e < 0.55 ? easeIO(e / 0.55) : 1 - easeIO((e - 0.55) / 0.45);
    faca.position.y = 1.15 - desce * (1.15 + 0.27);
  }
  // a fatia sai um pouco para a frente, sobe e desaparece (k: 0 no bolo, 1 sumiu)
  function opacidade(g, op) {
    const t = op < 0.999;
    g.traverse(m => {
      if (!m.isMesh) return;
      if (m.material.transparent !== t) { m.material.transparent = t; m.material.depthWrite = !t; m.material.needsUpdate = true; }
      m.material.opacity = op;
    });
  }
  function posFatia(i, k) {
    const f = fatias[i]; f.k = k;
    const base = i * passo * RAD, sai = 0.28 * Math.min(1, k * 2.2), sobe = 1.7 * easeIO(k);
    f.g.rotation.y = base;
    f.g.position.set(Math.sin(base) * sai, sobe, Math.cos(base) * sai);
    f.g.scale.setScalar(1 - 0.18 * k);
    const op = k < 0.45 ? 1 : Math.max(0, 1 - (k - 0.45) / 0.55);
    opacidade(f.g, op);
    f.g.visible = op > 0.001;
  }

  let w = 0, h = 0;
  const api = {
    resize(bw, bh) {
      w = bw; h = bh;
      renderer.setSize(w, h, false); acordar();
      const D = persp, e = -AX * RAD;
      camera.fov = 2 * Math.atan((h / 2) / D) / RAD; camera.aspect = w / h;
      camera.position.set(0, D * Math.sin(e), D * Math.cos(e)); camera.lookAt(0, 0, 0);
      camera.near = D * 0.2; camera.far = D * 3; camera.updateProjectionMatrix();
      root.scale.setScalar(R * 0.55);
    },
    girar(theta) { giro.rotation.y = theta; },
    animando() { return fase === 'espera' || fase === 'corte' || fase === 'volta'; },
    deslocar(d) { t0 += d; },
    abrir(i, aoSumir) {
      if (atual >= 0 && atual !== i) posFatia(atual, 0);
      acordar(); atual = i; fase = 'espera'; faca.visible = false; avisar = aoSumir || null;
      // o bolo inteiro assume o sabor escolhido, para o corte mostrar um recheio só
      fatias.forEach(f => f.recheio.forEach((m, k) => m.material.color.set(corCamada(CAKES[i], k))));
    },
    fechar() { avisar = null; if (atual >= 0) { fase = 'volta'; t0 = performance.now(); kSaida = fatias[atual].k; faca.visible = false; } },
    quadro(parado) {
      const agora = performance.now();
      const sumiu = () => { posFatia(atual, 1); fase = 'aberta'; if (avisar) { const f = avisar; avisar = null; f(); } };
      if (fase === 'espera' && parado) {
        if (reduz) sumiu(); else { fase = 'corte'; t0 = agora; }
      }
      if (fase === 'corte') {
        const e = agora - t0, ang = atual * passo * RAD;
        if (e < 400) corte(e / 400, ang - half);
        else if (e < 800) corte((e - 400) / 400, ang + half);
        else if (e < 1700) { faca.visible = false; posFatia(atual, (e - 800) / 900); }
        else sumiu();
      }
      if (fase === 'volta') { // fecha: a fatia desce de volta para o lugar
        const e = Math.min(1, (agora - t0) / 650);
        posFatia(atual, kSaida * (1 - easeOut(e)));
        if (e >= 1) { fase = 'idle'; atual = -1; }
      }
      if (vivo) renderer.render(scene, camera);
    },
  };
  cake = api;
  api.resize(parseFloat(bolo3d.style.width), parseFloat(bolo3d.style.height));
  if (sel >= 0) api.abrir(sel);
  bolo3d.classList.add('ok'); acordar();
}

// ---------- Início ----------
medir();
let tRes; window.addEventListener('resize', () => { clearTimeout(tRes); tRes = setTimeout(medir, 120); });
if ('IntersectionObserver' in window) {
  new IntersectionObserver(es => { visivel = es[0].isIntersecting; avaliar(); }, { rootMargin: '120px 0px' }).observe(palco);
  new IntersectionObserver((es, ob) => { if (es[0].isIntersecting) { ob.disconnect(); iniciarBolo(); } }, { rootMargin: '900px 0px' }).observe(palco);
} else { visivel = true; iniciarBolo(); avaliar(); }
renderAnel();
