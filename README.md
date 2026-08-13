# Portfólio — Leonardo Kremer

Site pessoal em HTML e CSS puros, sem framework e sem build. Um arquivo por
responsabilidade, tokens em custom properties e fonte auto-hospedada.

**Direção visual:** suíço-brutalista condensado — régua de 1px e 3px, canto reto,
zero sombra, tipografia condensada em caixa alta e mostarda como única cor.

## Estrutura

```
.
├── index.html                 # todo o conteúdo (é a fonte da verdade)
├── styles.css                 # tokens + componentes; tema claro e escuro
├── main.js                    # tema, menu mobile, revelação no scroll, link ativo
├── favicon.svg
├── .nojekyll                  # GitHub Pages serve os arquivos como estão
└── assets/fonts/
    ├── archivo-narrow-latin.woff2   # subset latin, 18 KB
    └── OFL.txt                      # licença da fonte
```

## Rodar localmente

Qualquer servidor estático serve. Sem servidor a fonte pode não carregar por
causa da política de `file://`.

```bash
python -m http.server 8000
# depois abra http://localhost:8000
```

## Publicar no GitHub Pages

Settings → Pages → Source: **Deploy from a branch** → branch `main`, pasta `/ (root)`.
O site fica em `https://devleonardok.github.io/portfolio/`.

Depois de publicar, preencha `og:url` e `og:image` no `<head>` do `index.html`
(as duas linhas estão comentadas lá).

## Como editar o conteúdo

Tudo vive no `index.html`, sem template nem JSON:

| O quê | Onde |
|---|---|
| Frase da dobra e números | seção `.hero` |
| Texto do "Sobre" e os quatro fatos da coluna | seção `#sobre` |
| Stack e nível | tabela em `#stack` — troque o texto **e** o `data-nivel` (3 avançado, 2 intermediário, 1 básico) e ligue/desligue os `<i class="on">` |
| Projetos | blocos `.proj` em `#projetos` |
| Experiência e Formação | blocos **comentados** logo depois de `#projetos` — descomente e preencha |
| Contato | `#contato` e o rodapé |

Os níveis da tabela foram inferidos da bio do GitHub e dos projetos deste
portfólio. São auto-declarados: ajuste para o que você assina.

## Temas

Três estados, como manda o padrão: sem escolha explícita o site segue
`prefers-color-scheme`; ao clicar em "Tema" a escolha é gravada em
`localStorage` e estampada como `data-theme` no `<html>`. Todas as cores saem
de custom properties — nenhuma cor é declarada dentro de uma media query.

## Tipografia

[Archivo Narrow](https://fonts.google.com/specimen/Archivo+Narrow) (SIL Open Font
License 1.1), subset latin auto-hospedado com `preload`. O texto corrido usa a
fonte do sistema, para não gastar requisição em algo que o sistema já resolve.

## Acessibilidade

Link de pular para o conteúdo, foco visível, tabela com `<caption>` e `scope`,
menu com `aria-expanded`, seção ativa marcada com `aria-current`, e a animação
de scroll desligada sob `prefers-reduced-motion`. Sem JavaScript a página segue
completa e legível.
