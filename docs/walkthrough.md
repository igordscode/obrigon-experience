# 🖤 Walkthrough — OBRIGON Landing Page

## O que foi criado

Landing page imersiva para a marca de moda gótica de luxo **Obrigon**, com animações cinematográficas GSAP e estética "Rituais + Underground Luxo".

---

## 📂 Estrutura do Projeto

```
c:\Users\TestP\obrigon\
├── index.html    # Estrutura da página
├── style.css     # Estilos dark luxury
└── main.js       # Animações GSAP + interações
```

---

## 🛠️ Stack Tecnológica

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **GSAP** | 3.12.5 | Animações e ScrollTrigger |
| **Lenis** | 1.1.18 | Smooth scroll |
| **Google Fonts** | Bebas Neue + Inter | Tipografia |

---

## ✨ Funcionalidades Implementadas

### 1. Loader Animado
- Logo OBRIGON aparece com fade
- Barra de progresso preenche
- Transição suave para o conteúdo

### 2. Hero Section
- Título "CADA PEÇA É UM RITUAL" com reveal staggered
- Elementos flutuantes com blur (orbs coloridos)
- Indicador de scroll animado

### 3. Manifesto
- Parallax na imagem
- Reveal progressivo do texto

### 4. Worn By (Marquee)
- Nomes infinitos rolando: Madonna, Luísa Sonza, Matuê
- Cards de artistas com hover effect

### 5. Coleção
- Filtro por categorias (TODOS / TOPS / JAQUETAS / CHARMS)
- Grid de produtos com reveal stagger
- Tags de destaque (EXCLUSIVO, DROP DERMIS II)

### 6. Footer CTA
- "PRONTO PARA O RITUAL?" com glow accent
- Botão grande para a loja Shopify

### 7. Extras
- Cursor customizado (circle follower)
- Navegação que escurece no scroll
- Links suaves para âncoras

---

## 🎬 Gravação do Teste

O site foi testado e está funcionando:

![Teste da Landing Page](C:/Users/TestP/.gemini/antigravity/brain/cab0b343-2e0e-4b4d-85d8-3912e62f2cd9/obrigon_landing_test_1768680765252.webp)

---

## ✅ Resultado do Teste

| Funcionalidade | Status |
|----------------|--------|
| Loader animation | ✅ Funcionando |
| Hero title reveal | ✅ Funcionando |
| GSAP ScrollTrigger | ✅ Funcionando |
| Marquee infinite | ✅ Funcionando |
| Category filter | ✅ Funcionando |
| Smooth scroll | ✅ Funcionando |
| Cursor customizado | ✅ Funcionando |

---

## 🚀 Como Rodar

```bash
cd C:\Users\TestP\obrigon
npx serve -p 3030
```

Acesse: **http://localhost:3030**

---

## 📋 Próximos Passos Sugeridos

1. **Adicionar imagens reais** dos produtos e artistas
2. **Responsividade mobile** — menu hamburger
3. **Deploy no Netlify/Vercel** com domínio `experience.obrigon.com`
4. **Integração Shopify** — puxar produtos via API
