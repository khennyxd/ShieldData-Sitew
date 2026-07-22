# ShieldData — Site institucional

Reconstrução completa de shielddataa.vercel.app seguindo o PROMPT-MESTRE v2 (Doutrina da Harmonia).

## Sistema de design
- **Fonte:** General Sans (auto-hospedada, `/fonts/general-sans/`), única família, pesos 400/500/600/700.
- **Paleta:** papel frio (`--ink-99`) 60% · tinta-marinho (`--ink-08/15`) 30% · vermelho-selo (`--seal-50`) 10%, gerada em HSL a partir de duas matizes.
- **Espaçamento/tipografia:** escalas fixas base-8 e modular 1.25 (ver `css/styles.css`, topo).
- **Movimento:** GSAP + ScrollTrigger + DrawSVG para o selo do hero; nunca `ease`/`linear` default.
- **Sinal de assinatura:** o selo circular animado no hero ("carimbo de diligência") — motivo do universo legal/burocrático, não um dashboard genérico.

## ⚠️ SUBSTITUIR antes de publicar
- **Telefone/WhatsApp:** `+258 84 000 0000` — é o mesmo placeholder do site anterior; troca pelo número real da ShieldData.
- **Email:** `info@shielddata.co.mz` — confirma se é este o domínio real.
- **Endereço:** `Av. Julius Nyerere, Maputo` — confirma morada exacta.
- **Logo:** o site usa um monograma vectorial como fallback (ver `images/LEIA-ME.md`). Se existir logo real, envia para eu integrar.
- **Formulário de contacto:** neste momento só mostra confirmação em ecrã (`alert`); precisa de ligação a um backend/serviço de email (ex: Formspree, EmailJS, ou endpoint próprio) antes de publicar.

## Estrutura de ficheiros
```
index.html
css/styles.css
js/main.js
js/vendor/          (GSAP, ScrollTrigger, DrawSVGPlugin, ScrollToPlugin)
fonts/general-sans/  (.woff2 + fonts.css)
images/LEIA-ME.md
```

## Notas técnicas
- Testado visualmente em mobile (~375px), tablet (~768px) e desktop (~1440px) via CSS responsivo (grids colapsam para 1 coluna abaixo dos breakpoints indicados).
- Foto da secção "Sobre Nós" carregada via Pexels (uso comercial livre) — recomenda-se descarregar para `/images/` antes de publicação a longo prazo, para não depender do link externo.
- `prefers-reduced-motion` respeitado (desactiva reveals/marquee).
