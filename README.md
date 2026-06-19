# Sistema de Coleta de Evidências — Instituto BR Arte
**Versão 1.0 | Transferegov · MROSC · Emendas Parlamentares**

---

## Visão Geral da Arquitetura

```
GitHub Pages (index.html + style.css + script.js)
        |
        | POST (application/x-www-form-urlencoded, no-cors)
        v
Google Apps Script Web App (doPost) — VINCULADO à planilha
        |
        |---> Valida código de acesso (aba CONFIG)
        |---> Salva linha na planilha (BASE_ATIVIDADES)
        |---> Avalia status das evidências
        |---> Registra log (LOG_EXECUCOES)
        v
Google Sheets — IBRA_Coleta_Evidencias_Ponta_v1
        |
        |---> BASE_ATIVIDADES (53 colunas — 1 linha por atividade)
        |---> CONTROLE_RELATORIOS_ATIVIDADE
        |---> CONTROLE_RELATORIOS_MENSAIS
        |---> LISTAS_PADRAO
        |---> CONFIG
        |---> LOG_EXECUCOES
        v
Google Drive — IBRA_SISTEMA_COLETA_EVIDENCIAS
        |
        |---> 03_RELATORIOS_ATIVIDADE / DOCS | DOCX | PDF
        |---> 04_RELATORIOS_MENSAIS  / DOCS | DOCX | PDF
        |---> 07_TEMPLATES (template do relatório de atividade)
```

---

## Pré-Requisitos

- Conta Google (Google Drive, Google Sheets, Google Apps Script)
- Repositório no GitHub com GitHub Pages habilitado
- Navegador moderno para acessar o formulário

---

## Passo a Passo de Instalação

> **Modelo de implantação:** o script é **vinculado a uma planilha** (container-bound).
> Isso é obrigatório para que o menu "IBRA — Sistema de Evidências" apareça na planilha
> e para que as funções de menu (gerar relatórios, reprocessar linha) funcionem.
> **Não** crie o script avulso em "script.google.com > Novo projeto".

### Etapa 1 — Criar a planilha e abrir o editor de script

1. Acesse [https://sheets.google.com](https://sheets.google.com) e crie uma **planilha em branco**.
2. No menu da planilha, clique em **Extensões > Apps Script**.
   - Isso abre um editor de script **já vinculado** a esta planilha.
3. (Opcional) Renomeie o projeto de script para: `IBRA_Sistema_Coleta_Evidencias_v1`.

> Não é preciso nomear a planilha manualmente: o setup vai renomeá-la para
> `IBRA_Coleta_Evidencias_Ponta_v1` automaticamente.

---

### Etapa 2 — Colar o código do Apps Script

1. Exclua todo o conteúdo do editor (a função `myFunction` padrão).
2. Copie todo o conteúdo do arquivo `codigo_apps_script.gs`.
3. Cole no editor do Apps Script.
4. Salve o arquivo: **Ctrl + S** (ou Cmd + S no Mac).

---

### Etapa 3 — Executar o setup inicial

1. No editor do Apps Script, no menu suspenso de funções, selecione: `setupSistemaIBRA`.
2. Clique no botão **Executar** (triângulo/play).
3. Na primeira execução, o Google solicitará autorização.

---

### Etapa 4 — Autorizar as permissões

1. Clique em **Revisar permissões**.
2. Selecione sua conta Google.
3. Clique em **Avançado** (se aparecer aviso de app não verificado).
4. Clique em **Acessar o projeto (não seguro)**.
5. Clique em **Permitir**.

> **Nota:** O aviso "app não verificado" é normal para scripts pessoais do Google. O código roda apenas na sua conta.

6. Aguarde o setup completar. Uma caixa de diálogo confirmará o sucesso e informará que a planilha foi renomeada.
7. **Recarregue a aba da planilha (F5).** O menu **"IBRA — Sistema de Evidências"** passará a aparecer na barra de menus.

---

### Etapa 5 — Definir o Código de Acesso

1. Volte para a planilha (que já foi renomeada para `IBRA_Coleta_Evidencias_Ponta_v1` pelo setup).
2. Acesse a aba **CONFIG**.
3. Encontre a linha com a chave `CODIGO_ACESSO`.
4. Substitua o valor padrão `IBRA2026` pelo código que deseja usar.
5. **Guarde este código** — ele será informado aos responsáveis pelo preenchimento do formulário.

> **Segurança:** Não compartilhe o código publicamente. Ele é a única barreira de proteção contra envios indevidos.

---

### Etapa 6 — Publicar o Apps Script como Web App

1. No editor do Apps Script, clique em **Implantar** (botão azul, canto superior direito).
2. Selecione **Nova implantação**.
3. Clique no ícone de engrenagem ao lado de "Tipo" e selecione **Aplicativo da Web**.
4. Preencha:
   - **Descrição:** `IBRA Coleta Evidencias v1`
   - **Executar como:** Minha conta (`seu@email.com`)
   - **Quem tem acesso:** **Qualquer pessoa** (necessário para o formulário público funcionar)
5. Clique em **Implantar**.
6. Copie a **URL do aplicativo da web** exibida.
   - Formato: `https://script.google.com/macros/s/AKfycb.../exec`
7. Clique em **Concluído**.

> **Importante:** Sempre que alterar o código, clique em **Implantar > Gerenciar implantações > Editar** e crie uma nova versão. A URL permanece a mesma.

---

### Etapa 7 — Configurar a URL do Web App no script.js

1. Abra o arquivo `script.js` em um editor de texto.
2. Localize a linha:
   ```javascript
   var WEBAPP_URL = 'COLE_AQUI_A_URL_DO_APPS_SCRIPT_WEB_APP';
   ```
3. Substitua pelo valor copiado na Etapa 6:
   ```javascript
   var WEBAPP_URL = 'https://script.google.com/macros/s/AKfycb.../exec';
   ```
4. Salve o arquivo.

---

### Etapa 8 — Subir os arquivos no GitHub

1. Crie ou acesse um repositório no GitHub.
   - Sugestão de nome: `ibra-evidencias`
2. Faça upload dos seguintes arquivos:
   - `index.html`
   - `style.css`
   - `script.js`
   - `logo.png` (logomarca do Instituto BR Arte — opcional, o formulário funciona sem ela)
3. Certifique-se de que todos os arquivos estão na raiz do repositório.

---

### Etapa 9 — Ativar o GitHub Pages

1. No repositório, clique em **Settings** (Configurações).
2. No menu lateral, clique em **Pages**.
3. Em **Source**, selecione: **Deploy from a branch**.
4. Em **Branch**, selecione: `main` (ou `master`) e pasta `/ (root)`.
5. Clique em **Save**.
6. Aguarde 1-2 minutos.
7. O GitHub exibirá a URL pública do formulário.
   - Formato: `https://seuusuario.github.io/ibra-evidencias/`

---

### Etapa 10 — Testar o formulário

1. Acesse a URL do GitHub Pages.
2. Preencha o formulário com dados de teste:
   - Use o código de acesso definido na Etapa 5.
   - Preencha todos os campos obrigatórios.
   - Para campos de evidência, use "Pendente" ou "Não se aplica" conforme necessário.
3. Clique em **Enviar Evidências**.
4. Aguarde a mensagem de confirmação.

> **Nota sobre CORS (importante):** O formulário usa `mode: 'no-cors'`. Por isso o
> navegador **não consegue ler a resposta** do servidor: a mensagem de sucesso na tela
> apenas confirma que a requisição saiu, **não** que foi aceita. Um código de acesso
> inválido ou um erro interno também exibem "sucesso" para quem preenche. A confirmação
> real é sempre a **nova linha na aba BASE_ATIVIDADES** e o registro `ENVIO_OK` na aba
> **LOG_EXECUCOES**. Verifique essas duas abas após o teste.

---

### Etapa 11 — Verificar a linha na planilha

1. Abra a planilha `IBRA_Coleta_Evidencias_Ponta_v1`.
2. Acesse a aba **BASE_ATIVIDADES**.
3. Verifique se uma nova linha foi adicionada com os dados enviados pelo formulário.
4. Verifique também a aba **LOG_EXECUCOES** para confirmar o log `ENVIO_OK`.

---

### Etapa 12 — Gerar o primeiro Relatório de Atividade

1. Na aba **BASE_ATIVIDADES**, localize a linha com o envio de teste.
2. Na coluna **GERAR_RELATORIO_ATIVIDADE**, altere o valor para `Sim`.
3. No menu da planilha, clique em **IBRA — Sistema de Evidências**.
4. Clique em **Gerar Relatórios de Atividade Pendentes**.
5. Aguarde o processamento.
6. Uma mensagem informará quantos relatórios foram gerados.

---

### Etapa 13 — Verificar o Google Docs, DOCX e PDF no Drive

1. Abra o Google Drive.
2. Localize a pasta `IBRA_SISTEMA_COLETA_EVIDENCIAS`.
3. Acesse `03_RELATORIOS_ATIVIDADE`:
   - `DOCS` — Google Docs gerado (editável)
   - `DOCX` — Arquivo Word (.docx) para download
   - `PDF` — Arquivo PDF para arquivamento
4. Abra o Google Docs para verificar o relatório gerado.
5. Os links de cada arquivo foram registrados automaticamente na planilha, nas colunas:
   - `LINK_RELATORIO_ATIVIDADE_GERADO`
   - `LINK_DOCX_ATIVIDADE_GERADO`
   - `LINK_PDF_ATIVIDADE_GERADO`

---

## Manutenção

### Atualizar o Código de Acesso
- Acesse a aba **CONFIG** na planilha.
- Localize a chave `CODIGO_ACESSO` e atualize o valor.
- Informe o novo código aos responsáveis pelo preenchimento.

### Adicionar Novos Projetos ou Territórios
- Acesse a aba **LISTAS_PADRAO** na planilha.
- Edite as colunas `PROJETOS` ou `TERRITORIOS`.
- No formulário HTML (`index.html`), adicione as novas opções nos `<select>` correspondentes e faça novo deploy no GitHub.

### Atualizar o Código do Apps Script
1. Edite o código no editor do Apps Script.
2. Salve.
3. Clique em **Implantar > Gerenciar implantações**.
4. Clique no lápis (Editar) ao lado da implantação ativa.
5. Em **Versão**, selecione **Nova versão**.
6. Clique em **Implantar**.
7. A URL permanece a mesma — não é necessário atualizar o `script.js`.

---

## Segurança

- O Código de Acesso é a única proteção contra envios não autorizados. Use um código não óbvio.
- Não publique o Código de Acesso em repositórios públicos ou grupos abertos.
- Envios com código inválido são registrados na aba **LOG_EXECUCOES** com tipo `BLOQUEADO`.
- Não são coletados dados financeiros, CPF ou informações sensíveis dos participantes pelo formulário.
- O Apps Script roda exclusivamente na conta Google do administrador.

---

## Resolução de Problemas

| Problema | Causa provável | Solução |
|---|---|---|
| Menu "IBRA" não aparece | Planilha não recarregada após o setup | Recarregue a planilha (F5) |
| Menu "IBRA" não aparece | Script criado avulso, sem vínculo à planilha | Refaça pela Etapa 1: crie a planilha e use **Extensões > Apps Script** |
| Formulário não envia | URL do Web App não configurada | Verifique a variável `WEBAPP_URL` no `script.js` |
| Linha não aparece na planilha | Código de acesso errado (envio bloqueado) | Verifique `CODIGO_ACESSO` em CONFIG e o registro `BLOQUEADO` no LOG |
| Linha não aparece na planilha | Permissão do Web App incorreta | Republique com acesso "Qualquer pessoa" |
| Erro ao gerar relatório | Template não configurado | Execute `setupSistemaIBRA()` novamente |
| Formulário aparece sem estilo | Arquivo style.css não enviado | Verifique se `style.css` está no repositório |
| Logo não aparece | Arquivo logo.png ausente | Normal — o formulário usa texto como fallback |

---

## Arquivos do Projeto

| Arquivo | Função |
|---|---|
| `index.html` | Formulário HTML com todos os blocos e campos |
| `style.css` | Estilos institucionais do formulário |
| `script.js` | Validação e envio dos dados |
| `codigo_apps_script.gs` | Backend completo no Google Apps Script |
| `README.md` | Este documento |

---

## Versões

| Versão | Descrição |
|---|---|
| 1.0 | Formulário HTML + Apps Script + Relatório de Atividade + Estrutura de Drive |
| 1.1 | Correção de auditoria: script vinculado (menu funcional), ordem de setup, trava de concorrência (LockService), CONFIG completa |
| 2.0 (previsto) | Relatório Mensal por Rubrica com agrupamento por PROJETO + RUBRICA + COMPETÊNCIA |

---

OSC: **INSTITUTO BR ARTE** | CNPJ: 26.757.702/0001-08 | Responsável: MARDONIO JOSE DE QUEIROZ
