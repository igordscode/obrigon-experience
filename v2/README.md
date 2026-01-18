# 🖤 OBRIGON v2 — UNHEIMLICH

**Versão experimental** do site Obrigon com conceito "O Estranho Familiar".

---

## 🎯 Conceito

Landing page imersiva que transforma o e-commerce em um **ritual gótico** através de 7 sessões narrativas:

1. **O ALTAR** — A entrada do templo
2. **A PROCISSÃO** — Galeria horizontal de artefatos
3. **OS INICIADOS** — Prova social com estética CCTV
4. **A MEMBRANA** — Manifesto orgânico
5. **A ALUCINAÇÃO** — Editorial cinematográfico
6. **A AUTÓPSIA** — Dissecção técnica
7. **O VAZIO** — O pacto final

---

## 🚀 Como Rodar

```bash
cd v2
npx serve -p 3031

# Acessar
http://localhost:3031
```

---

## 🛠️ Stack Técnica

- **HTML/CSS/JS** — Vanilla
- **GSAP 3.12** — Animações
- **ScrollTrigger** — Scroll effects
- **Lenis 1.1** — Smooth scroll

---

## ✨ Features Implementadas

### Interações
- ✅ Cursor olho customizado
- ✅ Parallax no produto (mouse move)
- ✅ Scroll horizontal (Procissão)
- ✅ Rabiscos SVG animados (Iniciados)
- ✅ Efeito líquido no fundo (Membrana)
- ✅ Glitch pulsante (Alucinação)
- ✅ Cursor UV (Autópsia)
- ✅ Form handling + scroll to top

### Animações
- ✅ Fade in sequencial
- ✅ Velas piscando
- ✅ Fumaça subindo
- ✅ Spotlight no hover
- ✅ Text reveal com GSAP
- ✅ Runas girando

---

## 📂 Estrutura

```
v2/
├── index.html          # HTML principal
├── style.css           # Global + Sessão 1
├── sessions.css        # Sessões 2-7
├── main.js             # GSAP + interações
├── README.md           # Este arquivo
└── brainstorm/         # Referências visuais
```

**Assets compartilhados:**
- `../assets/logo.png`
- `../image/` (produtos)
- `../image/famosos/` (artistas)

---

## 🎨 Design System

### Cores
```css
--black: #0a0a0a
--deep-black: #000000
--accent-red: #ff2d55
--accent-cyan: #00ffff
```

### Tipografia
- **Bebas Neue** — Títulos
- **Inter** — Corpo

---

## 📝 Próximos Passos

- [ ] Integração Shopify (botões "INVOCAR")
- [ ] Vídeo real para Sessão 5
- [ ] WebGL para fumaça/líquido
- [ ] Sound design
- [ ] Mobile optimization
- [ ] Performance (lazy load, WebP)
- [ ] Deploy Vercel/Netlify

---

## 📊 Status

**Implementação:** ✅ 100% (7/7 sessões)  
**Testes:** ⏳ Aguardando feedback  
**Deploy:** ⏳ Pendente

---

**Desenvolvido com 🖤 por Antigravity**  
*Baseado no brainstorm conceitual do Gemini*

