# Pedido de revisão — Yallem Cake Shop

Site estático (HTML + CSS + JS, sem build). Para rodar: `python3 -m http.server 8765` dentro desta pasta e abrir http://localhost:8765/

- `index.html` — página inteira (CSS e JS inline), PT/EN, abertura com caixinha, fita, pedido rápido, faixa de sabores
- `vitrine.js` — vitrine 3D (anel CSS 3D + bolo Three.js com corte)
- `vendor/three.module.min.js` — Three.js 0.160 (licença MIT em vendor/THREE-LICENSE.txt)
- `img/` — fotos em WebP

**Não reescreva o design.** Procure bugs reais e liste por severidade, com arquivo e linha:

1. `vitrine.js`: estados do bolo (`espera/corte/aberta/volta`). Clicar em outro bolo durante o corte, arrastar com o card aberto, trocar idioma com o card aberto, redimensionar no meio da animação — algo fica preso?
2. Vazamento de memória: `clone()` de materiais por fatia e o `requestAnimationFrame` que nunca para. Proponha pausar o loop quando a vitrine sai da tela.
3. Desempenho no celular: FPS da vitrine com CPU 4x mais lenta; onde está o custo (`desenharCoroa` reescrevendo SVG a cada quadro? `traverse` de opacidade?).
4. Contador de visitas (`yc-v`/`yc-s` no `<head>`): aba anônima, várias abas, storage bloqueado.
5. Acessibilidade da vitrine com leitor de tela: ordem de foco, anúncio do card, Esc.
6. Sem JavaScript a seção de bolos fica vazia — sugira a menor mudança que renderize as 8 fotos em HTML.

Entregue a lista primeiro; só aplique mudanças depois de aprovadas.

Conteúdo pendente da cliente (não é bug): horário (`HORARIO` no index.html), ingredientes reais (`INGREDIENTES_DE_EXEMPLO` em vitrine.js), domínio (`[PREENCHER-DOMINIO]`).
