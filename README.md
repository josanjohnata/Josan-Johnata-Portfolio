# Josan Johnata · AI Engineer

Portfólio pessoal com foco em inteligência artificial aplicada, engenharia de produto e segurança ofensiva.

- `pt.html`: português.
- `index.html`: inglês.
- `style/main.css`: estilos responsivos.
- `script/main.js`: menu, navegação e ano do rodapé.

## Rodar localmente

Na pasta do repositório:

```sh
python3 serve.py
```

Acesse <http://localhost:8000/pt> ou <http://localhost:8000/en>.

O site é estático e não precisa instalar dependências. As fontes são carregadas do Google Fonts; há fontes de sistema como alternativa.

## Conteúdo

Os projetos em destaque são [FoxApply](https://www.foxapply.com/), [Pentesty](https://www.pentesty.co/), [SecureDragon](https://securedragon.ai/) e [Netflix Clone](https://github.com/josanjohnata/project-netflix-final). Os números de 10 mil+ usuários e 56 países foram fornecidos pelo autor do portfólio.

Identidade visual adaptada do portfólio original, baseado em Kards, da Styleshout.

## Publicação

O projeto da Vercel está conectado à branch `main`. As versões públicas usam `/pt` e `/en`; os links antigos com `.html` são redirecionados para endereços sem extensão. Ao abrir a raiz do domínio, `script/language.js` identifica o idioma principal do navegador: português (`pt`, `pt-BR`, `pt-PT`) abre `/pt`; qualquer outro idioma abre `/en`. Parâmetros e âncoras são preservados. Os caminhos explícitos `/pt` e `/en` respeitam a escolha feita pelo visitante.

As regras estão em `vercel.json`. O servidor `serve.py` oferece os mesmos caminhos de idioma no ambiente local.
