# Book de Pronta Entrega DNX (com atualizacao em tempo real)

Pacote pronto para publicar do zero, com a estrutura padrao recomendada
pelo proprio Netlify.

Estrutura:
```
netlify.toml
package.json
README.md
public/
  index.html
netlify/
  functions/
    get-edits.js
    save-edits.js
```

## Passo a passo

1. Extraia este zip de verdade no seu computador (botao direito, "Extrair
   Tudo"). Nao use a pasta temporaria que o Windows abre ao dar duplo
   clique no zip.
2. Crie um repositorio novo no GitHub (recomendado, para nao ficar nada
   dos testes anteriores misturado). Pode chamar de
   prontaentrega-dnx-v2, por exemplo.
3. No repositorio novo, va em "Adicionar arquivo" -> "Carregar arquivos" e
   arraste TODO o conteudo desta pasta extraida de uma vez: os 4 arquivos
   soltos (netlify.toml, package.json, README.md) e as duas pastas
   inteiras (public e netlify). Comprometa as mudancas.
4. Confira que a raiz do repositorio ficou assim:
   README.md, netlify.toml, package.json, netlify/, public/
5. Crie um site novo no Netlify (recomendado, em vez de reusar o antigo):
   Add new site -> Import from GitHub -> escolha o repositorio novo.
   Publish directory: public
   Sem build command
6. Depois do primeiro deploy, va em Site configuration -> Environment
   variables e adicione, se quiser reforcar (opcional, o modo automatico
   deveria funcionar sozinho numa configuracao limpa):
   BOOK_BLOBS_SITE_ID = (Project ID do site, achado em Project
   configuration -> General -> Project information)
   BOOK_BLOBS_TOKEN = (um Personal access token, gerado em User settings
   -> Applications -> Personal access tokens)
   Se adicionar essas duas, sera preciso trocar as duas funcoes para usar
   esses nomes (posso gerar essa versao se for necessario).
7. Depois de qualquer mudanca de variavel de ambiente, sempre force um
   novo deploy: Deploys -> Trigger deploy -> Deploy site (ou "without
   cache").
8. Teste abrindo:
   https://SEUSITE.netlify.app/.netlify/functions/get-edits
   Se aparecer {"edits":{},"manualProducts":[]}, funcionou.
