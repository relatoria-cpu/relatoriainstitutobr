// ============================================================
// IBRA — SISTEMA DE COLETA DE EVIDÊNCIAS
// script_dinamico.js  —  Ajustes 1-4 (Competências, Territórios,
// Rubricas por Projeto e Dependência entre campos)
// Fonte: Matriz Mestra v4 + Central de Dados IBRA v3
// ============================================================

// ============================================================
// AJUSTE 2 — TERRITÓRIOS POR PROJETO
// Fonte: CENTRAL_DE_DADOS_IBRA_MAPA_PASTAS_v3, aba DIAGNOSTICO_PROJETOS
// ============================================================

const TERRITORIOS_POR_PROJETO = {
  "NÓS EM REDE": [
    "Rocinha-RJ",
    "Rio das Pedras-RJ",
    "GERAL",
    "A VALIDAR"
  ],
  "PORTAS ABERTAS": [
    "Rio de Janeiro-RJ — 6 polos A VALIDAR",
    "Belford Roxo-RJ",
    "Petrópolis-RJ",
    "São Gonçalo-RJ",
    "GERAL",
    "A VALIDAR"
  ],
  "QUALIFICA SE": [
    "Aracaju-SE — 2 polos técnicos A VALIDAR",
    "GERAL",
    "A VALIDAR"
  ],
  "CRIA HUB": [
    "Santa Cruz-RJ",
    "GERAL",
    "A VALIDAR"
  ],
  "ECONOMIA SOLIDÁRIA - JUNTOS!": [
    "São Miguel Paulista-SP",
    "GERAL",
    "A VALIDAR"
  ],
  "LABORATÓRIO RS": [
    "GERAL",
    "A VALIDAR"
  ],
  "LABORATÓRIO RJ": [
    "Rio das Pedras-RJ",
    "Jacarezinho-RJ",
    "Rocinha-RJ",
    "GERAL",
    "A VALIDAR"
  ],
  "JOGANDO JUNTOS": [
    "Rio de Janeiro-RJ",
    "São Gonçalo-RJ",
    "Petrópolis-RJ",
    "Queimados-RJ",
    "Belford Roxo-RJ",
    "GERAL",
    "A VALIDAR"
  ],
  "AGENTES DE DIREITO": [
    "Fortaleza-CE — regiões A VALIDAR",
    "GERAL",
    "A VALIDAR"
  ],
  "CONEXÃO EMPREENDEDORA": [
    "São João de Meriti-RJ",
    "Nova Iguaçu-RJ",
    "Arraial do Cabo-RJ",
    "Mangaratiba-RJ",
    "GERAL",
    "A VALIDAR"
  ],
  "NÓS EM REDE 2": [
    "Rocinha-RJ",
    "Rio das Pedras-RJ",
    "GERAL",
    "A VALIDAR"
  ],
  "PROSPERA RJ": [
    "Maré-RJ",
    "Jacarezinho-RJ",
    "GERAL",
    "A VALIDAR"
  ],
  "PROSPERA RS": [
    "GERAL",
    "A VALIDAR"
  ],
  "PROSPERA GO": [
    "GERAL",
    "A VALIDAR"
  ],
  "JOGANDO JUNTOS SE": [
    "GERAL",
    "A VALIDAR"
  ],
  "CONEXÕES CRIATIVAS": [
    "Benfica-RJ",
    "Triagem-RJ",
    "Rocinha-RJ",
    "Rio das Pedras-RJ",
    "Bangu-RJ",
    "Anil-RJ",
    "Complexo da Maré/Nova Holanda-RJ",
    "Belford Roxo-RJ",
    "São Gonçalo/Jockey-RJ",
    "Carangola/Petrópolis-RJ",
    "Centro de Campos dos Goytacazes-RJ",
    "GERAL",
    "A VALIDAR"
  ],
  "PNCC": [
    "GERAL",
    "A VALIDAR"
  ],
  "OUTRO / A PREENCHER": [
    "GERAL",
    "A VALIDAR",
    "Não se aplica"
  ]
};

// ============================================================
// AJUSTE 3 — RUBRICAS POR PROJETO
// Fonte: Matriz Mestra v4, aba 02_CADASTRO_MESTRE_RUBRICAS
// value = "COD_PROJETO|ID_RUBRICA|ID_FAMILIA|NOME_RUBRICA"
// label = "COD — NOME_PROJ — NOME_RUB — FAM-XX — RUB-XXXXXX"
// ============================================================

const RUBRICAS_POR_PROJETO = {
  "NÓS EM REDE": [
    { v: "NER|RUB-000001|FAM-02|Serviço de Direção Geral - Coordenação da estratégia e supervisão geral", l: "NER — NÓS EM REDE — Serviço de Direção Geral - Coordenação da estratégia e supervisão geral — FAM-02 — RUB-000001" },
    { v: "NER|RUB-000002|FAM-02|Serviço de Coordenação Pedagógica - Desenvolvimento, Revisão e Apoio às ações formativas", l: "NER — NÓS EM REDE — Serviço de Coordenação Pedagógica - Desenvolvimento, Revisão e Apoio às ações formativas — FAM-02 — RUB-000002" },
    { v: "NER|RUB-000003|FAM-02|Coordenador de Programação", l: "NER — NÓS EM REDE — Coordenador de Programação — FAM-02 — RUB-000003" },
    { v: "NER|RUB-000004|FAM-05|Coordenação de Comunicação", l: "NER — NÓS EM REDE — Coordenação de Comunicação — FAM-05 — RUB-000004" },
    { v: "NER|RUB-000005|FAM-06|Serviço de Elaboração de Prestação de Contas", l: "NER — NÓS EM REDE — Serviço de Elaboração de Prestação de Contas — FAM-06 — RUB-000005" },
    { v: "NER|RUB-000006|FAM-14|Produção de VT Institucional", l: "NER — NÓS EM REDE — Produção de VT Institucional — FAM-14 — RUB-000006" },
    { v: "NER|RUB-000007|FAM-05|Serviço de Assessoria de Imprensa", l: "NER — NÓS EM REDE — Serviço de Assessoria de Imprensa — FAM-05 — RUB-000007" },
    { v: "NER|RUB-000008|FAM-05|Assessoria de Comunicação", l: "NER — NÓS EM REDE — Assessoria de Comunicação — FAM-05 — RUB-000008" },
    { v: "NER|RUB-000009|FAM-11|Cenografia do Espaço - Espaço de Projeção", l: "NER — NÓS EM REDE — Cenografia do Espaço - Espaço de Projeção — FAM-11 — RUB-000009" },
    { v: "NER|RUB-000010|FAM-11|Locação de Projetor", l: "NER — NÓS EM REDE — Locação de Projetor — FAM-11 — RUB-000010" },
    { v: "NER|RUB-000011|FAM-11|Locação de Sonorização", l: "NER — NÓS EM REDE — Locação de Sonorização — FAM-11 — RUB-000011" },
    { v: "NER|RUB-000012|FAM-11|Locação de cadeiras para exibição", l: "NER — NÓS EM REDE — Locação de cadeiras para exibição — FAM-11 — RUB-000012" },
    { v: "NER|RUB-000013|FAM-11|Cenografia do Espaço - Aulas e Criação", l: "NER — NÓS EM REDE — Cenografia do Espaço - Aulas e Criação — FAM-11 — RUB-000013" },
    { v: "NER|RUB-000014|FAM-11|Locação de Computadores para Aula", l: "NER — NÓS EM REDE — Locação de Computadores para Aula — FAM-11 — RUB-000014" },
    { v: "NER|RUB-000015|FAM-11|Locação de Câmeras de Foto e Vídeo profissional aulas", l: "NER — NÓS EM REDE — Locação de Câmeras de Foto e Vídeo profissional aulas — FAM-11 — RUB-000015" },
    { v: "NER|RUB-000016|FAM-11|Locação de Iluminação para aulas", l: "NER — NÓS EM REDE — Locação de Iluminação para aulas — FAM-11 — RUB-000016" },
    { v: "NER|RUB-000017|FAM-02|Serviço de Assistência de Coordenação Pedagógica", l: "NER — NÓS EM REDE — Serviço de Assistência de Coordenação Pedagógica — FAM-02 — RUB-000017" },
    { v: "NER|RUB-000018|FAM-06|Serviço de Assessoria Jurídica", l: "NER — NÓS EM REDE — Serviço de Assessoria Jurídica — FAM-06 — RUB-000018" },
    { v: "NER|RUB-000019|FAM-06|Serviço de Assessoria Contábil", l: "NER — NÓS EM REDE — Serviço de Assessoria Contábil — FAM-06 — RUB-000019" },
    { v: "NER|RUB-000020|FAM-05|Criação de Material Gráfico e Identidade Visual", l: "NER — NÓS EM REDE — Criação de Material Gráfico e Identidade Visual — FAM-05 — RUB-000020" },
    { v: "NER|RUB-000021|FAM-05|Banners", l: "NER — NÓS EM REDE — Banners — FAM-05 — RUB-000021" },
    { v: "NER|RUB-000022|FAM-14|Registro Fotográfico", l: "NER — NÓS EM REDE — Registro Fotográfico — FAM-14 — RUB-000022" },
    { v: "NER|RUB-000023|FAM-14|Registro Videográfico", l: "NER — NÓS EM REDE — Registro Videográfico — FAM-14 — RUB-000023" },
    { v: "NER|RUB-000024|FAM-08|Assistente de Produção", l: "NER — NÓS EM REDE — Assistente de Produção — FAM-08 — RUB-000024" },
    { v: "NER|RUB-000025|FAM-14|Curadoria para mostra de vídeos", l: "NER — NÓS EM REDE — Curadoria para mostra de vídeos — FAM-14 — RUB-000025" },
    { v: "NER|RUB-000026|FAM-11|Técnico de Projeção - Regulagem dos equipamentos de projeção", l: "NER — NÓS EM REDE — Técnico de Projeção - Regulagem dos equipamentos de projeção — FAM-11 — RUB-000026" },
    { v: "NER|RUB-000027|FAM-11|Técnico de Sonorização - Regulagem dos equipamentos de sonorização", l: "NER — NÓS EM REDE — Técnico de Sonorização - Regulagem dos equipamentos de sonorização — FAM-11 — RUB-000027" },
    { v: "NER|RUB-000028|FAM-14|Edição e Finalização de Vídeos dos Cursos", l: "NER — NÓS EM REDE — Edição e Finalização de Vídeos dos Cursos — FAM-14 — RUB-000028" },
    { v: "NER|RUB-000029|FAM-13|Audiodescrição", l: "NER — NÓS EM REDE — Audiodescrição — FAM-13 — RUB-000029" },
    { v: "NER|RUB-000030|FAM-13|Legendagem descritiva ou Legenda para surdos e ensurdecidos (LSE)", l: "NER — NÓS EM REDE — Legendagem descritiva ou Legenda para surdos e ensurdecidos (LSE) — FAM-13 — RUB-000030" },
    { v: "NER|RUB-000031|FAM-13|Língua Brasileira de Sinais – LIBRAS - Vídeos", l: "NER — NÓS EM REDE — Língua Brasileira de Sinais – LIBRAS - Vídeos — FAM-13 — RUB-000031" },
    { v: "NER|RUB-000032|FAM-03|Atividades Formativas - Cursos", l: "NER — NÓS EM REDE — Atividades Formativas - Cursos — FAM-03 — RUB-000032" },
    { v: "NER|RUB-000033|FAM-13|Língua Brasileira de Sinais – LIBRAS - Aulas", l: "NER — NÓS EM REDE — Língua Brasileira de Sinais – LIBRAS - Aulas — FAM-13 — RUB-000033" },
    { v: "NER|RUB-000034|FAM-11|Locação de Computador Exibição", l: "NER — NÓS EM REDE — Locação de Computador Exibição — FAM-11 — RUB-000034" },
    { v: "NER|RUB-000035|FAM-07|Limpeza (dois locais de limpeza x 2 núcleos)", l: "NER — NÓS EM REDE — Limpeza (dois locais de limpeza x 2 núcleos) — FAM-07 — RUB-000035" },
    { v: "NER|RUB-000036|FAM-11|Locação Rocinha (2 espaços)", l: "NER — NÓS EM REDE — Locação Rocinha (2 espaços) — FAM-11 — RUB-000036" },
    { v: "NER|RUB-000037|FAM-11|Locação Rio das Pedras (espaços)", l: "NER — NÓS EM REDE — Locação Rio das Pedras (espaços) — FAM-11 — RUB-000037" },
  ],
  "PORTAS ABERTAS": [
    { v: "PA|RUB-000038|FAM-02|Serviço de Coordenação Pedagógica - Desenvolvimento, Revisão e Apoio às ações formativas", l: "PA — PORTAS ABERTAS — Serviço de Coordenação Pedagógica - Desenvolvimento, Revisão e Apoio às ações formativas — FAM-02 — RUB-000038" },
    { v: "PA|RUB-000039|FAM-03|Atividades Formativas - Cursos", l: "PA — PORTAS ABERTAS — Atividades Formativas - Cursos — FAM-03 — RUB-000039" },
    { v: "PA|RUB-000040|FAM-14|Registro Fotográfico e Videográfico", l: "PA — PORTAS ABERTAS — Registro Fotográfico e Videográfico — FAM-14 — RUB-000040" },
    { v: "PA|RUB-000041|FAM-05|Serviço de Aplicação de Identidade Visual - Produção e Aplicação", l: "PA — PORTAS ABERTAS — Serviço de Aplicação de Identidade Visual - Produção e Aplicação — FAM-05 — RUB-000041" },
    { v: "PA|RUB-000042|FAM-06|Serviço de Assessoria Contábil", l: "PA — PORTAS ABERTAS — Serviço de Assessoria Contábil — FAM-06 — RUB-000042" },
    { v: "PA|RUB-000043|FAM-06|Serviço de Assessoria Jurídica", l: "PA — PORTAS ABERTAS — Serviço de Assessoria Jurídica — FAM-06 — RUB-000043" },
    { v: "PA|RUB-000044|FAM-02|Serviço de Coordenação Geral de Projeto - Coordenação da estratégia e supervisão geral", l: "PA — PORTAS ABERTAS — Serviço de Coordenação Geral de Projeto - Coordenação da estratégia e supervisão geral — FAM-02 — RUB-000044" },
    { v: "PA|RUB-000045|FAM-05|Suporte de Divulgação em Comunicação Social", l: "PA — PORTAS ABERTAS — Suporte de Divulgação em Comunicação Social — FAM-05 — RUB-000045" },
    { v: "PA|RUB-000046|FAM-12|Insumos", l: "PA — PORTAS ABERTAS — Insumos — FAM-12 — RUB-000046" },
    { v: "PA|RUB-000047|FAM-11|Locação Belfod Roxo", l: "PA — PORTAS ABERTAS — Locação Belfod Roxo — FAM-11 — RUB-000047" },
    { v: "PA|RUB-000048|FAM-11|Locação Petrópolis", l: "PA — PORTAS ABERTAS — Locação Petrópolis — FAM-11 — RUB-000048" },
    { v: "PA|RUB-000049|FAM-11|Locação Anil", l: "PA — PORTAS ABERTAS — Locação Anil — FAM-11 — RUB-000049" },
    { v: "PA|RUB-000050|FAM-11|Locação Bangu", l: "PA — PORTAS ABERTAS — Locação Bangu — FAM-11 — RUB-000050" },
    { v: "PA|RUB-000051|FAM-11|Locação Jesuítas", l: "PA — PORTAS ABERTAS — Locação Jesuítas — FAM-11 — RUB-000051" },
    { v: "PA|RUB-000052|FAM-11|Locação São Gonçalo", l: "PA — PORTAS ABERTAS — Locação São Gonçalo — FAM-11 — RUB-000052" },
    { v: "PA|RUB-000053|FAM-11|Locação Bairro Carioca", l: "PA — PORTAS ABERTAS — Locação Bairro Carioca — FAM-11 — RUB-000053" },
    { v: "PA|RUB-000054|FAM-11|Locação sem espaço", l: "PA — PORTAS ABERTAS — Locação sem espaço — FAM-11 — RUB-000054" },
    { v: "PA|RUB-000055|FAM-11|Locação sem espaço", l: "PA — PORTAS ABERTAS — Locação sem espaço — FAM-11 — RUB-000055" },
    { v: "PA|RUB-000056|FAM-02|Coord. de Núcleo - Bairro Carioca - Alessandro Barros - Inspire-se", l: "PA — PORTAS ABERTAS — Coord. de Núcleo - Bairro Carioca - Alessandro Barros - Inspire-se — FAM-02 — RUB-000056" },
    { v: "PA|RUB-000057|FAM-02|Coord. de Núcleo - Anil - André Coutinho", l: "PA — PORTAS ABERTAS — Coord. de Núcleo - Anil - André Coutinho — FAM-02 — RUB-000057" },
    { v: "PA|RUB-000058|FAM-02|Coord. de Núcleo - Bangu - Ariana Caldas", l: "PA — PORTAS ABERTAS — Coord. de Núcleo - Bangu - Ariana Caldas — FAM-02 — RUB-000058" },
    { v: "PA|RUB-000059|FAM-02|Coord. de Núcleo - Belfod Roxo - Bruno de Moura", l: "PA — PORTAS ABERTAS — Coord. de Núcleo - Belfod Roxo - Bruno de Moura — FAM-02 — RUB-000059" },
    { v: "PA|RUB-000060|FAM-02|Coord. de Núcleo - São Gonçalo - Daglys Oliveira", l: "PA — PORTAS ABERTAS — Coord. de Núcleo - São Gonçalo - Daglys Oliveira — FAM-02 — RUB-000060" },
    { v: "PA|RUB-000061|FAM-02|Coord. de Núcleo - Manguinhos - Lauro Sergio - Lapa Eventos", l: "PA — PORTAS ABERTAS — Coord. de Núcleo - Manguinhos - Lauro Sergio - Lapa Eventos — FAM-02 — RUB-000061" },
    { v: "PA|RUB-000062|FAM-02|Coord. de Núcleo - Petrópolis - Márcio Felipe", l: "PA — PORTAS ABERTAS — Coord. de Núcleo - Petrópolis - Márcio Felipe — FAM-02 — RUB-000062" },
    { v: "PA|RUB-000063|FAM-02|Coord. de Núcleo - Jesuítas - Verlene Pereira", l: "PA — PORTAS ABERTAS — Coord. de Núcleo - Jesuítas - Verlene Pereira — FAM-02 — RUB-000063" },
    { v: "PA|RUB-000064|FAM-02|Coord. de Núcleo - Maré - Willian Alcides- Makuta", l: "PA — PORTAS ABERTAS — Coord. de Núcleo - Maré - Willian Alcides- Makuta — FAM-02 — RUB-000064" },
  ],
  "QUALIFICA SE": [
    { v: "QSE|RUB-000065|FAM-02|Serviço de Direção Local de Núcleo", l: "QSE — QUALIFICA SE — Serviço de Direção Local de Núcleo — FAM-02 — RUB-000065" },
    { v: "QSE|RUB-000066|FAM-02|Serviço de Coordenação Digital", l: "QSE — QUALIFICA SE — Serviço de Coordenação Digital — FAM-02 — RUB-000066" },
    { v: "QSE|RUB-000067|FAM-02|Serviço de Coordenação Pedagógica", l: "QSE — QUALIFICA SE — Serviço de Coordenação Pedagógica — FAM-02 — RUB-000067" },
    { v: "QSE|RUB-000068|FAM-02|Serviço de Assistência de Coordenação Pedagógica", l: "QSE — QUALIFICA SE — Serviço de Assistência de Coordenação Pedagógica — FAM-02 — RUB-000068" },
    { v: "QSE|RUB-000069|FAM-01|Serviço de Apoio Administrativo", l: "QSE — QUALIFICA SE — Serviço de Apoio Administrativo — FAM-01 — RUB-000069" },
    { v: "QSE|RUB-000070|FAM-10|Serviços integrados de EAD (plataforma, hospedagem, suporte, treinamento e material digital)", l: "QSE — QUALIFICA SE — Serviços integrados de EAD (plataforma, hospedagem, suporte, treinamento e material digital) — FAM-10 — RUB-000070" },
    { v: "QSE|RUB-000071|FAM-03|Atividades Formativas - Cursos", l: "QSE — QUALIFICA SE — Atividades Formativas - Cursos — FAM-03 — RUB-000071" },
    { v: "QSE|RUB-000072|FAM-12|Material de Consumo", l: "QSE — QUALIFICA SE — Material de Consumo — FAM-12 — RUB-000072" },
    { v: "QSE|RUB-000073|FAM-12|Impressão de Apostilas e Produção de Camisas", l: "QSE — QUALIFICA SE — Impressão de Apostilas e Produção de Camisas — FAM-12 — RUB-000073" },
    { v: "QSE|RUB-000074|FAM-12|Alimentação (Biscoito + Sucos por núcleo)", l: "QSE — QUALIFICA SE — Alimentação (Biscoito + Sucos por núcleo) — FAM-12 — RUB-000074" },
    { v: "QSE|RUB-000075|FAM-11|Locação Santo Antônio", l: "QSE — QUALIFICA SE — Locação Santo Antônio — FAM-11 — RUB-000075" },
    { v: "QSE|RUB-000076|FAM-11|Locação sem espaço", l: "QSE — QUALIFICA SE — Locação sem espaço — FAM-11 — RUB-000076" },
    { v: "QSE|RUB-000077|FAM-15|Passagens para alunos", l: "QSE — QUALIFICA SE — Passagens para alunos — FAM-15 — RUB-000077" },
  ],
  "CRIA HUB": [
    { v: "CH|RUB-000078|FAM-02|Serviço de Direção Geral", l: "CH — CRIA HUB — Serviço de Direção Geral — FAM-02 — RUB-000078" },
    { v: "CH|RUB-000079|FAM-02|Serviço de Coordenação Digital", l: "CH — CRIA HUB — Serviço de Coordenação Digital — FAM-02 — RUB-000079" },
    { v: "CH|RUB-000080|FAM-02|Serviço de Planejamento Pedagógico", l: "CH — CRIA HUB — Serviço de Planejamento Pedagógico — FAM-02 — RUB-000080" },
    { v: "CH|RUB-000081|FAM-01|Serviço de Apoio Administrativo", l: "CH — CRIA HUB — Serviço de Apoio Administrativo — FAM-01 — RUB-000081" },
    { v: "CH|RUB-000082|FAM-10|Serviços integrados de EAD (plataforma, hospedagem, suporte, treinamento e material digital)", l: "CH — CRIA HUB — Serviços integrados de EAD (plataforma, hospedagem, suporte, treinamento e material digital) — FAM-10 — RUB-000082" },
    { v: "CH|RUB-000083|FAM-11|Locação de Computadores", l: "CH — CRIA HUB — Locação de Computadores — FAM-11 — RUB-000083" },
    { v: "CH|RUB-000084|FAM-12|Alimentação (para alunos) - Biscoito", l: "CH — CRIA HUB — Alimentação (para alunos) - Biscoito — FAM-12 — RUB-000084" },
    { v: "CH|RUB-000085|FAM-03|Atividades Formativas - Cursos", l: "CH — CRIA HUB — Atividades Formativas - Cursos — FAM-03 — RUB-000085" },
    { v: "CH|RUB-000086|FAM-12|Material de Consumo", l: "CH — CRIA HUB — Material de Consumo — FAM-12 — RUB-000086" },
    { v: "CH|RUB-000087|FAM-12|Impressão de Apostilas e Produção de Camisas", l: "CH — CRIA HUB — Impressão de Apostilas e Produção de Camisas — FAM-12 — RUB-000087" },
    { v: "CH|RUB-000088|FAM-11|Locação sem espaço", l: "CH — CRIA HUB — Locação sem espaço — FAM-11 — RUB-000088" },
    { v: "CH|RUB-000089|FAM-15|Passagens para alunos", l: "CH — CRIA HUB — Passagens para alunos — FAM-15 — RUB-000089" },
  ],
  "ECONOMIA SOLIDÁRIA - JUNTOS!": [
    { v: "ESJ|RUB-000090|FAM-05|Identidade Visual", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Identidade Visual — FAM-05 — RUB-000090" },
    { v: "ESJ|RUB-000091|FAM-12|Ecobag", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Ecobag — FAM-12 — RUB-000091" },
    { v: "ESJ|RUB-000092|FAM-12|Camisas", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Camisas — FAM-12 — RUB-000092" },
    { v: "ESJ|RUB-000093|FAM-11|Locação de Computadores", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Locação de Computadores — FAM-11 — RUB-000093" },
    { v: "ESJ|RUB-000094|FAM-11|Locação de Projetores", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Locação de Projetores — FAM-11 — RUB-000094" },
    { v: "ESJ|RUB-000095|FAM-11|Locação de Sistemas de audio", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Locação de Sistemas de audio — FAM-11 — RUB-000095" },
    { v: "ESJ|RUB-000096|FAM-11|Locação de Cadeiras", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Locação de Cadeiras — FAM-11 — RUB-000096" },
    { v: "ESJ|RUB-000097|FAM-11|Locação de Mesas", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Locação de Mesas — FAM-11 — RUB-000097" },
    { v: "ESJ|RUB-000098|FAM-11|Locação de Armarios", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Locação de Armarios — FAM-11 — RUB-000098" },
    { v: "ESJ|RUB-000099|FAM-11|Locação de Impressoras", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Locação de Impressoras — FAM-11 — RUB-000099" },
    { v: "ESJ|RUB-000100|FAM-11|Locação de Celulares", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Locação de Celulares — FAM-11 — RUB-000100" },
    { v: "ESJ|RUB-000101|FAM-11|Locação de Cameras de Áudio e Vídeo", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Locação de Cameras de Áudio e Vídeo — FAM-11 — RUB-000101" },
    { v: "ESJ|RUB-000102|FAM-03|Cursos e Atividades Formativas", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Cursos e Atividades Formativas — FAM-03 — RUB-000102" },
    { v: "ESJ|RUB-000103|FAM-14|Registro Fotográfico", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Registro Fotográfico — FAM-14 — RUB-000103" },
    { v: "ESJ|RUB-000104|FAM-14|Registro Videográfico", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Registro Videográfico — FAM-14 — RUB-000104" },
    { v: "ESJ|RUB-000105|FAM-12|Material de Escritório", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Material de Escritório — FAM-12 — RUB-000105" },
    { v: "ESJ|RUB-000106|FAM-05|Impulsionamento Online", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Impulsionamento Online — FAM-05 — RUB-000106" },
    { v: "ESJ|RUB-000107|FAM-11|Locação São Miguel", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Locação São Miguel — FAM-11 — RUB-000107" },
    { v: "ESJ|RUB-000108|FAM-01|Apoio Administrativo (Andreia)", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Apoio Administrativo (Andreia) — FAM-01 — RUB-000108" },
    { v: "ESJ|RUB-000109|FAM-07|Apoio Operacional (Felipe)", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Apoio Operacional (Felipe) — FAM-07 — RUB-000109" },
    { v: "ESJ|RUB-000110|FAM-05|Estratégia de Mídias (Henrique)", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Estratégia de Mídias (Henrique) — FAM-05 — RUB-000110" },
    { v: "ESJ|RUB-000111|FAM-05|Assessoria de Imprensa (Paola - JMJ)", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Assessoria de Imprensa (Paola - JMJ) — FAM-05 — RUB-000111" },
    { v: "ESJ|RUB-000112|FAM-02|Coordenadora Geral de Núcleo (Maria Iracema - JMJ)", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Coordenadora Geral de Núcleo (Maria Iracema - JMJ) — FAM-02 — RUB-000112" },
    { v: "ESJ|RUB-000113|FAM-05|Design (Tela Criativa)", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Design (Tela Criativa) — FAM-05 — RUB-000113" },
    { v: "ESJ|RUB-000114|FAM-02|Coordenação Pedagógica (tela Criativa)", l: "ESJ — ECONOMIA SOLIDÁRIA - JUNTOS! — Coordenação Pedagógica (tela Criativa) — FAM-02 — RUB-000114" },
  ],
  "LABORATÓRIO RS": [
    { v: "LRS|RUB-000115|FAM-02|Direção Geral", l: "LRS — LABORATÓRIO RS — Direção Geral — FAM-02 — RUB-000115" },
    { v: "LRS|RUB-000116|FAM-02|Coordenação Geral Local", l: "LRS — LABORATÓRIO RS — Coordenação Geral Local — FAM-02 — RUB-000116" },
    { v: "LRS|RUB-000117|FAM-02|Assistente de Coordenação", l: "LRS — LABORATÓRIO RS — Assistente de Coordenação — FAM-02 — RUB-000117" },
    { v: "LRS|RUB-000118|FAM-06|Assessoria Jurídica", l: "LRS — LABORATÓRIO RS — Assessoria Jurídica — FAM-06 — RUB-000118" },
    { v: "LRS|RUB-000119|FAM-06|Assessoria Contábil", l: "LRS — LABORATÓRIO RS — Assessoria Contábil — FAM-06 — RUB-000119" },
    { v: "LRS|RUB-000120|FAM-05|Coordenação de Comunicação", l: "LRS — LABORATÓRIO RS — Coordenação de Comunicação — FAM-05 — RUB-000120" },
    { v: "LRS|RUB-000121|FAM-14|Registro Fotográfico", l: "LRS — LABORATÓRIO RS — Registro Fotográfico — FAM-14 — RUB-000121" },
    { v: "LRS|RUB-000122|FAM-05|Assistente de Comunicação", l: "LRS — LABORATÓRIO RS — Assistente de Comunicação — FAM-05 — RUB-000122" },
    { v: "LRS|RUB-000123|FAM-06|Análise e Consultoria de Políticas Públicas", l: "LRS — LABORATÓRIO RS — Análise e Consultoria de Políticas Públicas — FAM-06 — RUB-000123" },
    { v: "LRS|RUB-000124|FAM-04|Mobilização Territorial", l: "LRS — LABORATÓRIO RS — Mobilização Territorial — FAM-04 — RUB-000124" },
    { v: "LRS|RUB-000125|FAM-09|Serviços de Pesquisa", l: "LRS — LABORATÓRIO RS — Serviços de Pesquisa — FAM-09 — RUB-000125" },
    { v: "LRS|RUB-000126|FAM-03|Curso de Capacitação", l: "LRS — LABORATÓRIO RS — Curso de Capacitação — FAM-03 — RUB-000126" },
    { v: "LRS|RUB-000127|FAM-12|Buffet para Seminário", l: "LRS — LABORATÓRIO RS — Buffet para Seminário — FAM-12 — RUB-000127" },
    { v: "LRS|RUB-000128|FAM-08|Produção de Seminário", l: "LRS — LABORATÓRIO RS — Produção de Seminário — FAM-08 — RUB-000128" },
    { v: "LRS|RUB-000129|FAM-05|Sinalização para Seminário", l: "LRS — LABORATÓRIO RS — Sinalização para Seminário — FAM-05 — RUB-000129" },
    { v: "LRS|RUB-000130|FAM-03|Palestrante para Seminário", l: "LRS — LABORATÓRIO RS — Palestrante para Seminário — FAM-03 — RUB-000130" },
    { v: "LRS|RUB-000131|FAM-06|Elaboração de Projeto Executivo para Intervenção Urbana", l: "LRS — LABORATÓRIO RS — Elaboração de Projeto Executivo para Intervenção Urbana — FAM-06 — RUB-000131" },
    { v: "LRS|RUB-000132|FAM-11|Serviço de Adequação de Espaço", l: "LRS — LABORATÓRIO RS — Serviço de Adequação de Espaço — FAM-11 — RUB-000132" },
    { v: "LRS|RUB-000133|FAM-03|Bolsistas", l: "LRS — LABORATÓRIO RS — Bolsistas — FAM-03 — RUB-000133" },
  ],
  "LABORATÓRIO RJ": [
    { v: "LRJ|RUB-000134|FAM-02|Direção Geral", l: "LRJ — LABORATÓRIO RJ — Direção Geral — FAM-02 — RUB-000134" },
    { v: "LRJ|RUB-000135|FAM-02|Coordenação Geral Local", l: "LRJ — LABORATÓRIO RJ — Coordenação Geral Local — FAM-02 — RUB-000135" },
    { v: "LRJ|RUB-000136|FAM-02|Assistente de Coordenação", l: "LRJ — LABORATÓRIO RJ — Assistente de Coordenação — FAM-02 — RUB-000136" },
    { v: "LRJ|RUB-000137|FAM-06|Assessoria Jurídica", l: "LRJ — LABORATÓRIO RJ — Assessoria Jurídica — FAM-06 — RUB-000137" },
    { v: "LRJ|RUB-000138|FAM-06|Assessoria Contábil", l: "LRJ — LABORATÓRIO RJ — Assessoria Contábil — FAM-06 — RUB-000138" },
    { v: "LRJ|RUB-000139|FAM-05|Coordenador de Comunicação", l: "LRJ — LABORATÓRIO RJ — Coordenador de Comunicação — FAM-05 — RUB-000139" },
    { v: "LRJ|RUB-000140|FAM-14|Registro Fotográfico", l: "LRJ — LABORATÓRIO RJ — Registro Fotográfico — FAM-14 — RUB-000140" },
    { v: "LRJ|RUB-000141|FAM-05|Assistente de Comunicação", l: "LRJ — LABORATÓRIO RJ — Assistente de Comunicação — FAM-05 — RUB-000141" },
    { v: "LRJ|RUB-000142|FAM-06|Análise e Consultoria de Políticas Públicas", l: "LRJ — LABORATÓRIO RJ — Análise e Consultoria de Políticas Públicas — FAM-06 — RUB-000142" },
    { v: "LRJ|RUB-000143|FAM-04|Mobilização Territorial", l: "LRJ — LABORATÓRIO RJ — Mobilização Territorial — FAM-04 — RUB-000143" },
    { v: "LRJ|RUB-000144|FAM-09|Serviços de Pesquisa", l: "LRJ — LABORATÓRIO RJ — Serviços de Pesquisa — FAM-09 — RUB-000144" },
    { v: "LRJ|RUB-000145|FAM-03|Curso de Capacitação", l: "LRJ — LABORATÓRIO RJ — Curso de Capacitação — FAM-03 — RUB-000145" },
    { v: "LRJ|RUB-000146|FAM-12|Buffet para Seminário", l: "LRJ — LABORATÓRIO RJ — Buffet para Seminário — FAM-12 — RUB-000146" },
    { v: "LRJ|RUB-000147|FAM-08|Produção de Seminário", l: "LRJ — LABORATÓRIO RJ — Produção de Seminário — FAM-08 — RUB-000147" },
    { v: "LRJ|RUB-000148|FAM-05|Sinalização para Seminário", l: "LRJ — LABORATÓRIO RJ — Sinalização para Seminário — FAM-05 — RUB-000148" },
    { v: "LRJ|RUB-000149|FAM-03|Palestrante para Seminário", l: "LRJ — LABORATÓRIO RJ — Palestrante para Seminário — FAM-03 — RUB-000149" },
    { v: "LRJ|RUB-000150|FAM-06|Elaboração de Projeto Executivo para Intervenção Urbana", l: "LRJ — LABORATÓRIO RJ — Elaboração de Projeto Executivo para Intervenção Urbana — FAM-06 — RUB-000150" },
    { v: "LRJ|RUB-000151|FAM-11|Serviço de Adequação de Espaço", l: "LRJ — LABORATÓRIO RJ — Serviço de Adequação de Espaço — FAM-11 — RUB-000151" },
    { v: "LRJ|RUB-000152|FAM-03|Bolsistas", l: "LRJ — LABORATÓRIO RJ — Bolsistas — FAM-03 — RUB-000152" },
  ],
  "JOGANDO JUNTOS": [
    { v: "JJ|RUB-000153|FAM-02|Coordenação de Núcleo", l: "JJ — JOGANDO JUNTOS — Coordenação de Núcleo — FAM-02 — RUB-000153" },
    { v: "JJ|RUB-000154|FAM-02|Coordenação de RH - Gerencia a equipe do projeto", l: "JJ — JOGANDO JUNTOS — Coordenação de RH - Gerencia a equipe do projeto — FAM-02 — RUB-000154" },
    { v: "JJ|RUB-000155|FAM-02|Coordenação Pedagógica - Ações Formativas", l: "JJ — JOGANDO JUNTOS — Coordenação Pedagógica - Ações Formativas — FAM-02 — RUB-000155" },
    { v: "JJ|RUB-000156|FAM-01|Assistente Administrativo", l: "JJ — JOGANDO JUNTOS — Assistente Administrativo — FAM-01 — RUB-000156" },
    { v: "JJ|RUB-000157|FAM-03|Assistente Educação Física", l: "JJ — JOGANDO JUNTOS — Assistente Educação Física — FAM-03 — RUB-000157" },
    { v: "JJ|RUB-000158|FAM-06|Contabilidade", l: "JJ — JOGANDO JUNTOS — Contabilidade — FAM-06 — RUB-000158" },
    { v: "JJ|RUB-000159|FAM-06|Assistência Jurídica", l: "JJ — JOGANDO JUNTOS — Assistência Jurídica — FAM-06 — RUB-000159" },
    { v: "JJ|RUB-000160|FAM-03|Professor Educação Física", l: "JJ — JOGANDO JUNTOS — Professor Educação Física — FAM-03 — RUB-000160" },
    { v: "JJ|RUB-000161|FAM-11|Locação Computadores (notebooks)", l: "JJ — JOGANDO JUNTOS — Locação Computadores (notebooks) — FAM-11 — RUB-000161" },
    { v: "JJ|RUB-000162|FAM-12|Insumos", l: "JJ — JOGANDO JUNTOS — Insumos — FAM-12 — RUB-000162" },
    { v: "JJ|RUB-000163|FAM-11|Locação de Equipamento de Som", l: "JJ — JOGANDO JUNTOS — Locação de Equipamento de Som — FAM-11 — RUB-000163" },
    { v: "JJ|RUB-000164|FAM-05|Social Mídia", l: "JJ — JOGANDO JUNTOS — Social Mídia — FAM-05 — RUB-000164" },
    { v: "JJ|RUB-000165|FAM-11|Locação sem espaço", l: "JJ — JOGANDO JUNTOS — Locação sem espaço — FAM-11 — RUB-000165" },
  ],
  "AGENTES DE DIREITO": [
    { v: "AD|RUB-000166|FAM-03|Atividades Formativas", l: "AD — AGENTES DE DIREITO — Atividades Formativas — FAM-03 — RUB-000166" },
    { v: "AD|RUB-000167|FAM-08|Produção Seminário", l: "AD — AGENTES DE DIREITO — Produção Seminário — FAM-08 — RUB-000167" },
    { v: "AD|RUB-000168|FAM-11|Sonorização Seminário", l: "AD — AGENTES DE DIREITO — Sonorização Seminário — FAM-11 — RUB-000168" },
    { v: "AD|RUB-000169|FAM-10|Consultoria TI", l: "AD — AGENTES DE DIREITO — Consultoria TI — FAM-10 — RUB-000169" },
  ],
  "CONEXÃO EMPREENDEDORA": [
    { v: "CE|RUB-000170|FAM-02|Coordenação Geral", l: "CE — CONEXÃO EMPREENDEDORA — Coordenação Geral — FAM-02 — RUB-000170" },
    { v: "CE|RUB-000171|FAM-02|Coordenação Regional - Coordenação Executiva das ações do projeto", l: "CE — CONEXÃO EMPREENDEDORA — Coordenação Regional - Coordenação Executiva das ações do projeto — FAM-02 — RUB-000171" },
    { v: "CE|RUB-000172|FAM-02|Coordenação Pedagógica - Desenvolvimento, Revisão e Apoio às ações formativas", l: "CE — CONEXÃO EMPREENDEDORA — Coordenação Pedagógica - Desenvolvimento, Revisão e Apoio às ações formativas — FAM-02 — RUB-000172" },
    { v: "CE|RUB-000173|FAM-06|Serviço de Contador", l: "CE — CONEXÃO EMPREENDEDORA — Serviço de Contador — FAM-06 — RUB-000173" },
    { v: "CE|RUB-000174|FAM-06|Serviço de Advogado", l: "CE — CONEXÃO EMPREENDEDORA — Serviço de Advogado — FAM-06 — RUB-000174" },
    { v: "CE|RUB-000175|FAM-05|Serviço de Aplicação de Identidade Visual - Produção e Aplicação", l: "CE — CONEXÃO EMPREENDEDORA — Serviço de Aplicação de Identidade Visual - Produção e Aplicação — FAM-05 — RUB-000175" },
    { v: "CE|RUB-000176|FAM-14|Registro Fotográfico", l: "CE — CONEXÃO EMPREENDEDORA — Registro Fotográfico — FAM-14 — RUB-000176" },
    { v: "CE|RUB-000177|FAM-05|Suporte de Divulgação em Comunicação Social", l: "CE — CONEXÃO EMPREENDEDORA — Suporte de Divulgação em Comunicação Social — FAM-05 — RUB-000177" },
    { v: "CE|RUB-000178|FAM-12|Insumos", l: "CE — CONEXÃO EMPREENDEDORA — Insumos — FAM-12 — RUB-000178" },
    { v: "CE|RUB-000179|FAM-11|Locação de Computadores", l: "CE — CONEXÃO EMPREENDEDORA — Locação de Computadores — FAM-11 — RUB-000179" },
    { v: "CE|RUB-000180|FAM-03|Instrutores para Cursos - Atividades Formativas", l: "CE — CONEXÃO EMPREENDEDORA — Instrutores para Cursos - Atividades Formativas — FAM-03 — RUB-000180" },
    { v: "CE|RUB-000181|FAM-11|Locação sem espaço", l: "CE — CONEXÃO EMPREENDEDORA — Locação sem espaço — FAM-11 — RUB-000181" },
  ],
  "NÓS EM REDE 2": [
    { v: "NER2|RUB-000182|FAM-02|Coordenação Executiva", l: "NER2 — NÓS EM REDE 2 — Coordenação Executiva — FAM-02 — RUB-000182" },
    { v: "NER2|RUB-000183|FAM-02|Coordenação Pedagógica", l: "NER2 — NÓS EM REDE 2 — Coordenação Pedagógica — FAM-02 — RUB-000183" },
    { v: "NER2|RUB-000184|FAM-02|Coordenação de Produção", l: "NER2 — NÓS EM REDE 2 — Coordenação de Produção — FAM-02 — RUB-000184" },
    { v: "NER2|RUB-000185|FAM-05|Coordenação de Comunicação", l: "NER2 — NÓS EM REDE 2 — Coordenação de Comunicação — FAM-05 — RUB-000185" },
    { v: "NER2|RUB-000186|FAM-01|Assistente Administrativo", l: "NER2 — NÓS EM REDE 2 — Assistente Administrativo — FAM-01 — RUB-000186" },
    { v: "NER2|RUB-000187|FAM-05|Assessoria de Imprensa", l: "NER2 — NÓS EM REDE 2 — Assessoria de Imprensa — FAM-05 — RUB-000187" },
    { v: "NER2|RUB-000188|FAM-05|Assistente de Comunicação", l: "NER2 — NÓS EM REDE 2 — Assistente de Comunicação — FAM-05 — RUB-000188" },
    { v: "NER2|RUB-000189|FAM-14|Registro Fotográfico", l: "NER2 — NÓS EM REDE 2 — Registro Fotográfico — FAM-14 — RUB-000189" },
    { v: "NER2|RUB-000190|FAM-14|Registro Videográfico", l: "NER2 — NÓS EM REDE 2 — Registro Videográfico — FAM-14 — RUB-000190" },
    { v: "NER2|RUB-000191|FAM-05|Criação de Material Gráfico e Identidade Visual", l: "NER2 — NÓS EM REDE 2 — Criação de Material Gráfico e Identidade Visual — FAM-05 — RUB-000191" },
    { v: "NER2|RUB-000192|FAM-14|Produção de VT Institucional", l: "NER2 — NÓS EM REDE 2 — Produção de VT Institucional — FAM-14 — RUB-000192" },
    { v: "NER2|RUB-000193|FAM-05|Banners", l: "NER2 — NÓS EM REDE 2 — Banners — FAM-05 — RUB-000193" },
    { v: "NER2|RUB-000194|FAM-11|Locação de Espaço - Espaço de Formação", l: "NER2 — NÓS EM REDE 2 — Locação de Espaço - Espaço de Formação — FAM-11 — RUB-000194" },
    { v: "NER2|RUB-000195|FAM-11|Locação de Computador - Espaço de Formação", l: "NER2 — NÓS EM REDE 2 — Locação de Computador - Espaço de Formação — FAM-11 — RUB-000195" },
    { v: "NER2|RUB-000196|FAM-11|Locação de Cadeiras - Espaço de Formação", l: "NER2 — NÓS EM REDE 2 — Locação de Cadeiras - Espaço de Formação — FAM-11 — RUB-000196" },
    { v: "NER2|RUB-000197|FAM-11|Locação de Câmeras de Foto e Vídeo Profissionais para Aulas", l: "NER2 — NÓS EM REDE 2 — Locação de Câmeras de Foto e Vídeo Profissionais para Aulas — FAM-11 — RUB-000197" },
    { v: "NER2|RUB-000198|FAM-11|Locação de Equipamentos de Iluminação para Aulas", l: "NER2 — NÓS EM REDE 2 — Locação de Equipamentos de Iluminação para Aulas — FAM-11 — RUB-000198" },
    { v: "NER2|RUB-000199|FAM-02|Assistente Pedagógico", l: "NER2 — NÓS EM REDE 2 — Assistente Pedagógico — FAM-02 — RUB-000199" },
    { v: "NER2|RUB-000200|FAM-03|Professores", l: "NER2 — NÓS EM REDE 2 — Professores — FAM-03 — RUB-000200" },
    { v: "NER2|RUB-000201|FAM-13|Intérprete de Libras para Aulas", l: "NER2 — NÓS EM REDE 2 — Intérprete de Libras para Aulas — FAM-13 — RUB-000201" },
    { v: "NER2|RUB-000202|FAM-11|Locação de Computador - Espaço de Exibições", l: "NER2 — NÓS EM REDE 2 — Locação de Computador - Espaço de Exibições — FAM-11 — RUB-000202" },
    { v: "NER2|RUB-000203|FAM-11|Locação de Equipamento de Projeção - Espaço de Exibições", l: "NER2 — NÓS EM REDE 2 — Locação de Equipamento de Projeção - Espaço de Exibições — FAM-11 — RUB-000203" },
    { v: "NER2|RUB-000204|FAM-11|Locação de Equipamento de Sonorização - Espaço de Exibições", l: "NER2 — NÓS EM REDE 2 — Locação de Equipamento de Sonorização - Espaço de Exibições — FAM-11 — RUB-000204" },
    { v: "NER2|RUB-000205|FAM-11|Locação de Cadeiras - Espaço de Exibições", l: "NER2 — NÓS EM REDE 2 — Locação de Cadeiras - Espaço de Exibições — FAM-11 — RUB-000205" },
    { v: "NER2|RUB-000206|FAM-08|Curadoria para Exibições", l: "NER2 — NÓS EM REDE 2 — Curadoria para Exibições — FAM-08 — RUB-000206" },
    { v: "NER2|RUB-000207|FAM-08|Produção para Exibições", l: "NER2 — NÓS EM REDE 2 — Produção para Exibições — FAM-08 — RUB-000207" },
    { v: "NER2|RUB-000208|FAM-08|Técnico de Projeção para Exibições", l: "NER2 — NÓS EM REDE 2 — Técnico de Projeção para Exibições — FAM-08 — RUB-000208" },
    { v: "NER2|RUB-000209|FAM-11|Técnico de Sonorização para Exibições", l: "NER2 — NÓS EM REDE 2 — Técnico de Sonorização para Exibições — FAM-11 — RUB-000209" },
    { v: "NER2|RUB-000210|FAM-14|Edição e Finalização dos Vídeos dos Cursos para Exibições", l: "NER2 — NÓS EM REDE 2 — Edição e Finalização dos Vídeos dos Cursos para Exibições — FAM-14 — RUB-000210" },
    { v: "NER2|RUB-000211|FAM-13|Audiodescrição dos Vídeos dos Cursos para Exibições", l: "NER2 — NÓS EM REDE 2 — Audiodescrição dos Vídeos dos Cursos para Exibições — FAM-13 — RUB-000211" },
    { v: "NER2|RUB-000212|FAM-13|Legendagem descritiva ou Legenda para surdos e ensurdecidos (LSE) para Exibições", l: "NER2 — NÓS EM REDE 2 — Legendagem descritiva ou Legenda para surdos e ensurdecidos (LSE) para Exibições — FAM-13 — RUB-000212" },
    { v: "NER2|RUB-000213|FAM-13|Intérprete de Libras para Exibições", l: "NER2 — NÓS EM REDE 2 — Intérprete de Libras para Exibições — FAM-13 — RUB-000213" },
  ],
  "PROSPERA RJ": [
    { v: "PRJ|RUB-000214|FAM-02|Coordenação Geral", l: "PRJ — PROSPERA RJ — Coordenação Geral — FAM-02 — RUB-000214" },
    { v: "PRJ|RUB-000215|FAM-02|Coordenação Pedagógica", l: "PRJ — PROSPERA RJ — Coordenação Pedagógica — FAM-02 — RUB-000215" },
    { v: "PRJ|RUB-000216|FAM-05|Coordenação de Comunicação", l: "PRJ — PROSPERA RJ — Coordenação de Comunicação — FAM-05 — RUB-000216" },
    { v: "PRJ|RUB-000217|FAM-06|Assessoria Jurídica", l: "PRJ — PROSPERA RJ — Assessoria Jurídica — FAM-06 — RUB-000217" },
    { v: "PRJ|RUB-000218|FAM-06|Assessoria Contábil", l: "PRJ — PROSPERA RJ — Assessoria Contábil — FAM-06 — RUB-000218" },
    { v: "PRJ|RUB-000219|FAM-01|Apoio Administrativo", l: "PRJ — PROSPERA RJ — Apoio Administrativo — FAM-01 — RUB-000219" },
    { v: "PRJ|RUB-000220|FAM-04|Mobilizadores - Agentes de Desenvolvimento Territorial", l: "PRJ — PROSPERA RJ — Mobilizadores - Agentes de Desenvolvimento Territorial — FAM-04 — RUB-000220" },
    { v: "PRJ|RUB-000221|FAM-05|Criação de Material Gráfico e Identidade Visual", l: "PRJ — PROSPERA RJ — Criação de Material Gráfico e Identidade Visual — FAM-05 — RUB-000221" },
    { v: "PRJ|RUB-000222|FAM-14|Produção de VT Institucional", l: "PRJ — PROSPERA RJ — Produção de VT Institucional — FAM-14 — RUB-000222" },
    { v: "PRJ|RUB-000223|FAM-05|Banners", l: "PRJ — PROSPERA RJ — Banners — FAM-05 — RUB-000223" },
    { v: "PRJ|RUB-000224|FAM-05|Assessoria de Comunicação", l: "PRJ — PROSPERA RJ — Assessoria de Comunicação — FAM-05 — RUB-000224" },
    { v: "PRJ|RUB-000225|FAM-14|Registro Fotográfico", l: "PRJ — PROSPERA RJ — Registro Fotográfico — FAM-14 — RUB-000225" },
    { v: "PRJ|RUB-000226|FAM-09|Pesquisa para Mapeamento Local", l: "PRJ — PROSPERA RJ — Pesquisa para Mapeamento Local — FAM-09 — RUB-000226" },
    { v: "PRJ|RUB-000227|FAM-09|Análise de Dados", l: "PRJ — PROSPERA RJ — Análise de Dados — FAM-09 — RUB-000227" },
    { v: "PRJ|RUB-000228|FAM-05|Diagramação e Editoração de Relatórios", l: "PRJ — PROSPERA RJ — Diagramação e Editoração de Relatórios — FAM-05 — RUB-000228" },
    { v: "PRJ|RUB-000229|FAM-11|Locação de Espaço", l: "PRJ — PROSPERA RJ — Locação de Espaço — FAM-11 — RUB-000229" },
    { v: "PRJ|RUB-000230|FAM-10|Plataforma EAD", l: "PRJ — PROSPERA RJ — Plataforma EAD — FAM-10 — RUB-000230" },
    { v: "PRJ|RUB-000231|FAM-14|Gravação de Videoaulas", l: "PRJ — PROSPERA RJ — Gravação de Videoaulas — FAM-14 — RUB-000231" },
    { v: "PRJ|RUB-000232|FAM-13|Legendagem de Vídeos", l: "PRJ — PROSPERA RJ — Legendagem de Vídeos — FAM-13 — RUB-000232" },
    { v: "PRJ|RUB-000233|FAM-12|Confecção de Material Pedagógico em PDF", l: "PRJ — PROSPERA RJ — Confecção de Material Pedagógico em PDF — FAM-12 — RUB-000233" },
    { v: "PRJ|RUB-000234|FAM-02|Assistente Pedagógico", l: "PRJ — PROSPERA RJ — Assistente Pedagógico — FAM-02 — RUB-000234" },
    { v: "PRJ|RUB-000235|FAM-03|Atividades Formativas", l: "PRJ — PROSPERA RJ — Atividades Formativas — FAM-03 — RUB-000235" },
    { v: "PRJ|RUB-000236|FAM-11|Locação de Espaço", l: "PRJ — PROSPERA RJ — Locação de Espaço — FAM-11 — RUB-000236" },
    { v: "PRJ|RUB-000237|FAM-06|Diagnóstico de Negócios", l: "PRJ — PROSPERA RJ — Diagnóstico de Negócios — FAM-06 — RUB-000237" },
    { v: "PRJ|RUB-000238|FAM-06|Consultorias Individuais", l: "PRJ — PROSPERA RJ — Consultorias Individuais — FAM-06 — RUB-000238" },
    { v: "PRJ|RUB-000239|FAM-12|Lanche para Consultorias Individuais", l: "PRJ — PROSPERA RJ — Lanche para Consultorias Individuais — FAM-12 — RUB-000239" },
  ],
  "PROSPERA RS": [
    { v: "PRS|RUB-000240|FAM-02|Coordenação Geral", l: "PRS — PROSPERA RS — Coordenação Geral — FAM-02 — RUB-000240" },
    { v: "PRS|RUB-000241|FAM-02|Coordenação Pedagógica", l: "PRS — PROSPERA RS — Coordenação Pedagógica — FAM-02 — RUB-000241" },
    { v: "PRS|RUB-000242|FAM-05|Coordenação de Comunicação", l: "PRS — PROSPERA RS — Coordenação de Comunicação — FAM-05 — RUB-000242" },
    { v: "PRS|RUB-000243|FAM-06|Assessoria Jurídica", l: "PRS — PROSPERA RS — Assessoria Jurídica — FAM-06 — RUB-000243" },
    { v: "PRS|RUB-000244|FAM-06|Assessoria Contábil", l: "PRS — PROSPERA RS — Assessoria Contábil — FAM-06 — RUB-000244" },
    { v: "PRS|RUB-000245|FAM-01|Apoio Administrativo", l: "PRS — PROSPERA RS — Apoio Administrativo — FAM-01 — RUB-000245" },
    { v: "PRS|RUB-000246|FAM-05|Criação de Material Gráfico e Identidade Visual", l: "PRS — PROSPERA RS — Criação de Material Gráfico e Identidade Visual — FAM-05 — RUB-000246" },
    { v: "PRS|RUB-000247|FAM-14|Produção de VT Institucional", l: "PRS — PROSPERA RS — Produção de VT Institucional — FAM-14 — RUB-000247" },
    { v: "PRS|RUB-000248|FAM-05|Banners", l: "PRS — PROSPERA RS — Banners — FAM-05 — RUB-000248" },
    { v: "PRS|RUB-000249|FAM-05|Assessoria de Comunicação", l: "PRS — PROSPERA RS — Assessoria de Comunicação — FAM-05 — RUB-000249" },
    { v: "PRS|RUB-000250|FAM-14|Registro Fotográfico", l: "PRS — PROSPERA RS — Registro Fotográfico — FAM-14 — RUB-000250" },
    { v: "PRS|RUB-000251|FAM-09|Pesquisa para Mapeamento Local", l: "PRS — PROSPERA RS — Pesquisa para Mapeamento Local — FAM-09 — RUB-000251" },
    { v: "PRS|RUB-000252|FAM-09|Análise de Dados", l: "PRS — PROSPERA RS — Análise de Dados — FAM-09 — RUB-000252" },
    { v: "PRS|RUB-000253|FAM-05|Diagramação e Editoração de Relatórios", l: "PRS — PROSPERA RS — Diagramação e Editoração de Relatórios — FAM-05 — RUB-000253" },
    { v: "PRS|RUB-000254|FAM-11|Locação de Espaço", l: "PRS — PROSPERA RS — Locação de Espaço — FAM-11 — RUB-000254" },
    { v: "PRS|RUB-000255|FAM-11|Cenografia do Espaço", l: "PRS — PROSPERA RS — Cenografia do Espaço — FAM-11 — RUB-000255" },
    { v: "PRS|RUB-000256|FAM-11|Locação de Projetor", l: "PRS — PROSPERA RS — Locação de Projetor — FAM-11 — RUB-000256" },
    { v: "PRS|RUB-000257|FAM-11|Locação de Equipamento de Sonorização", l: "PRS — PROSPERA RS — Locação de Equipamento de Sonorização — FAM-11 — RUB-000257" },
    { v: "PRS|RUB-000258|FAM-11|Locação de Computador", l: "PRS — PROSPERA RS — Locação de Computador — FAM-11 — RUB-000258" },
    { v: "PRS|RUB-000259|FAM-07|Limpeza", l: "PRS — PROSPERA RS — Limpeza — FAM-07 — RUB-000259" },
    { v: "PRS|RUB-000260|FAM-12|Coffee Break para Eventos e Oficinas", l: "PRS — PROSPERA RS — Coffee Break para Eventos e Oficinas — FAM-12 — RUB-000260" },
    { v: "PRS|RUB-000261|FAM-08|Assistente de Produção", l: "PRS — PROSPERA RS — Assistente de Produção — FAM-08 — RUB-000261" },
    { v: "PRS|RUB-000262|FAM-03|Palestrante", l: "PRS — PROSPERA RS — Palestrante — FAM-03 — RUB-000262" },
    { v: "PRS|RUB-000263|FAM-13|Tradução em Libras", l: "PRS — PROSPERA RS — Tradução em Libras — FAM-13 — RUB-000263" },
    { v: "PRS|RUB-000264|FAM-11|Locação de Espaço", l: "PRS — PROSPERA RS — Locação de Espaço — FAM-11 — RUB-000264" },
    { v: "PRS|RUB-000265|FAM-11|Cenografia do Espaço", l: "PRS — PROSPERA RS — Cenografia do Espaço — FAM-11 — RUB-000265" },
    { v: "PRS|RUB-000266|FAM-11|Locação de Projetor", l: "PRS — PROSPERA RS — Locação de Projetor — FAM-11 — RUB-000266" },
    { v: "PRS|RUB-000267|FAM-11|Locação de Equipamento de Sonorização", l: "PRS — PROSPERA RS — Locação de Equipamento de Sonorização — FAM-11 — RUB-000267" },
    { v: "PRS|RUB-000268|FAM-11|Locação de Computador", l: "PRS — PROSPERA RS — Locação de Computador — FAM-11 — RUB-000268" },
    { v: "PRS|RUB-000269|FAM-07|Limpeza", l: "PRS — PROSPERA RS — Limpeza — FAM-07 — RUB-000269" },
    { v: "PRS|RUB-000270|FAM-12|Coffee Break para Eventos e Oficinas", l: "PRS — PROSPERA RS — Coffee Break para Eventos e Oficinas — FAM-12 — RUB-000270" },
    { v: "PRS|RUB-000271|FAM-08|Assistente de Produção", l: "PRS — PROSPERA RS — Assistente de Produção — FAM-08 — RUB-000271" },
    { v: "PRS|RUB-000272|FAM-03|Palestrante", l: "PRS — PROSPERA RS — Palestrante — FAM-03 — RUB-000272" },
    { v: "PRS|RUB-000273|FAM-13|Tradução em Libras", l: "PRS — PROSPERA RS — Tradução em Libras — FAM-13 — RUB-000273" },
    { v: "PRS|RUB-000274|FAM-10|Plataforma EAD", l: "PRS — PROSPERA RS — Plataforma EAD — FAM-10 — RUB-000274" },
    { v: "PRS|RUB-000275|FAM-14|Gravação de Videoaulas", l: "PRS — PROSPERA RS — Gravação de Videoaulas — FAM-14 — RUB-000275" },
    { v: "PRS|RUB-000276|FAM-13|Legendagem de Vídeos", l: "PRS — PROSPERA RS — Legendagem de Vídeos — FAM-13 — RUB-000276" },
    { v: "PRS|RUB-000277|FAM-12|Confecção de Material Pedagógico em PDF", l: "PRS — PROSPERA RS — Confecção de Material Pedagógico em PDF — FAM-12 — RUB-000277" },
    { v: "PRS|RUB-000278|FAM-02|Assistente Pedagógico", l: "PRS — PROSPERA RS — Assistente Pedagógico — FAM-02 — RUB-000278" },
    { v: "PRS|RUB-000279|FAM-03|Atividades Formativas", l: "PRS — PROSPERA RS — Atividades Formativas — FAM-03 — RUB-000279" },
    { v: "PRS|RUB-000280|FAM-06|Diagnóstico de Negócios", l: "PRS — PROSPERA RS — Diagnóstico de Negócios — FAM-06 — RUB-000280" },
    { v: "PRS|RUB-000281|FAM-06|Consultorias Individuais", l: "PRS — PROSPERA RS — Consultorias Individuais — FAM-06 — RUB-000281" },
    { v: "PRS|RUB-000282|FAM-12|Lanche para Consultorias Individuais", l: "PRS — PROSPERA RS — Lanche para Consultorias Individuais — FAM-12 — RUB-000282" },
    { v: "PRS|RUB-000283|FAM-11|Locação de Espaço", l: "PRS — PROSPERA RS — Locação de Espaço — FAM-11 — RUB-000283" },
    { v: "PRS|RUB-000284|FAM-11|Cenografia do Espaço", l: "PRS — PROSPERA RS — Cenografia do Espaço — FAM-11 — RUB-000284" },
    { v: "PRS|RUB-000285|FAM-11|Locação de Projetor", l: "PRS — PROSPERA RS — Locação de Projetor — FAM-11 — RUB-000285" },
    { v: "PRS|RUB-000286|FAM-11|Locação de Equipamento de Sonorização", l: "PRS — PROSPERA RS — Locação de Equipamento de Sonorização — FAM-11 — RUB-000286" },
    { v: "PRS|RUB-000287|FAM-11|Locação de Computador", l: "PRS — PROSPERA RS — Locação de Computador — FAM-11 — RUB-000287" },
    { v: "PRS|RUB-000288|FAM-07|Limpeza", l: "PRS — PROSPERA RS — Limpeza — FAM-07 — RUB-000288" },
    { v: "PRS|RUB-000289|FAM-12|Coffee Break para Eventos e Oficinas", l: "PRS — PROSPERA RS — Coffee Break para Eventos e Oficinas — FAM-12 — RUB-000289" },
    { v: "PRS|RUB-000290|FAM-08|Assistente de Produção", l: "PRS — PROSPERA RS — Assistente de Produção — FAM-08 — RUB-000290" },
    { v: "PRS|RUB-000291|FAM-03|Palestrante", l: "PRS — PROSPERA RS — Palestrante — FAM-03 — RUB-000291" },
    { v: "PRS|RUB-000292|FAM-13|Tradução em Libras", l: "PRS — PROSPERA RS — Tradução em Libras — FAM-13 — RUB-000292" },
    { v: "PRS|RUB-000293|FAM-04|Mobilizadores - Agentes de Desenvolvimento Territorial", l: "PRS — PROSPERA RS — Mobilizadores - Agentes de Desenvolvimento Territorial — FAM-04 — RUB-000293" },
  ],
  "PROSPERA GO": [
    { v: "PGO|RUB-000294|FAM-02|Coordenação Geral", l: "PGO — PROSPERA GO — Coordenação Geral — FAM-02 — RUB-000294" },
    { v: "PGO|RUB-000295|FAM-02|Coordenação Pedagógica", l: "PGO — PROSPERA GO — Coordenação Pedagógica — FAM-02 — RUB-000295" },
    { v: "PGO|RUB-000296|FAM-05|Coordenação de Comunicação", l: "PGO — PROSPERA GO — Coordenação de Comunicação — FAM-05 — RUB-000296" },
    { v: "PGO|RUB-000297|FAM-06|Assessoria Jurídica", l: "PGO — PROSPERA GO — Assessoria Jurídica — FAM-06 — RUB-000297" },
    { v: "PGO|RUB-000298|FAM-06|Assessoria Contábil", l: "PGO — PROSPERA GO — Assessoria Contábil — FAM-06 — RUB-000298" },
    { v: "PGO|RUB-000299|FAM-01|Apoio Administrativo", l: "PGO — PROSPERA GO — Apoio Administrativo — FAM-01 — RUB-000299" },
    { v: "PGO|RUB-000300|FAM-05|Criação de Material Gráfico e Identidade Visual", l: "PGO — PROSPERA GO — Criação de Material Gráfico e Identidade Visual — FAM-05 — RUB-000300" },
    { v: "PGO|RUB-000301|FAM-14|Produção de VT Institucional", l: "PGO — PROSPERA GO — Produção de VT Institucional — FAM-14 — RUB-000301" },
    { v: "PGO|RUB-000302|FAM-05|Banners", l: "PGO — PROSPERA GO — Banners — FAM-05 — RUB-000302" },
    { v: "PGO|RUB-000303|FAM-05|Assessoria de Comunicação", l: "PGO — PROSPERA GO — Assessoria de Comunicação — FAM-05 — RUB-000303" },
    { v: "PGO|RUB-000304|FAM-14|Registro Fotográfico", l: "PGO — PROSPERA GO — Registro Fotográfico — FAM-14 — RUB-000304" },
    { v: "PGO|RUB-000305|FAM-09|Pesquisa para Mapeamento Local", l: "PGO — PROSPERA GO — Pesquisa para Mapeamento Local — FAM-09 — RUB-000305" },
    { v: "PGO|RUB-000306|FAM-09|Análise de Dados", l: "PGO — PROSPERA GO — Análise de Dados — FAM-09 — RUB-000306" },
    { v: "PGO|RUB-000307|FAM-05|Diagramação e Editoração de Relatórios", l: "PGO — PROSPERA GO — Diagramação e Editoração de Relatórios — FAM-05 — RUB-000307" },
    { v: "PGO|RUB-000308|FAM-11|Locação de Espaço", l: "PGO — PROSPERA GO — Locação de Espaço — FAM-11 — RUB-000308" },
    { v: "PGO|RUB-000309|FAM-11|Cenografia do Espaço", l: "PGO — PROSPERA GO — Cenografia do Espaço — FAM-11 — RUB-000309" },
    { v: "PGO|RUB-000310|FAM-11|Locação de Projetor", l: "PGO — PROSPERA GO — Locação de Projetor — FAM-11 — RUB-000310" },
    { v: "PGO|RUB-000311|FAM-11|Locação de Equipamento de Sonorização", l: "PGO — PROSPERA GO — Locação de Equipamento de Sonorização — FAM-11 — RUB-000311" },
    { v: "PGO|RUB-000312|FAM-11|Locação de Computador", l: "PGO — PROSPERA GO — Locação de Computador — FAM-11 — RUB-000312" },
    { v: "PGO|RUB-000313|FAM-07|Limpeza", l: "PGO — PROSPERA GO — Limpeza — FAM-07 — RUB-000313" },
    { v: "PGO|RUB-000314|FAM-12|Coffee Break para Eventos e Oficinas", l: "PGO — PROSPERA GO — Coffee Break para Eventos e Oficinas — FAM-12 — RUB-000314" },
    { v: "PGO|RUB-000315|FAM-08|Assistente de Produção", l: "PGO — PROSPERA GO — Assistente de Produção — FAM-08 — RUB-000315" },
    { v: "PGO|RUB-000316|FAM-03|Palestrante", l: "PGO — PROSPERA GO — Palestrante — FAM-03 — RUB-000316" },
    { v: "PGO|RUB-000317|FAM-13|Tradução em Libras", l: "PGO — PROSPERA GO — Tradução em Libras — FAM-13 — RUB-000317" },
    { v: "PGO|RUB-000318|FAM-11|Locação de Espaço", l: "PGO — PROSPERA GO — Locação de Espaço — FAM-11 — RUB-000318" },
    { v: "PGO|RUB-000319|FAM-11|Cenografia do Espaço", l: "PGO — PROSPERA GO — Cenografia do Espaço — FAM-11 — RUB-000319" },
    { v: "PGO|RUB-000320|FAM-11|Locação de Projetor", l: "PGO — PROSPERA GO — Locação de Projetor — FAM-11 — RUB-000320" },
    { v: "PGO|RUB-000321|FAM-11|Locação de Equipamento de Sonorização", l: "PGO — PROSPERA GO — Locação de Equipamento de Sonorização — FAM-11 — RUB-000321" },
    { v: "PGO|RUB-000322|FAM-11|Locação de Computador", l: "PGO — PROSPERA GO — Locação de Computador — FAM-11 — RUB-000322" },
    { v: "PGO|RUB-000323|FAM-07|Limpeza", l: "PGO — PROSPERA GO — Limpeza — FAM-07 — RUB-000323" },
    { v: "PGO|RUB-000324|FAM-12|Coffee Break para Eventos e Oficinas", l: "PGO — PROSPERA GO — Coffee Break para Eventos e Oficinas — FAM-12 — RUB-000324" },
    { v: "PGO|RUB-000325|FAM-08|Assistente de Produção", l: "PGO — PROSPERA GO — Assistente de Produção — FAM-08 — RUB-000325" },
    { v: "PGO|RUB-000326|FAM-03|Palestrante", l: "PGO — PROSPERA GO — Palestrante — FAM-03 — RUB-000326" },
    { v: "PGO|RUB-000327|FAM-13|Tradução em Libras", l: "PGO — PROSPERA GO — Tradução em Libras — FAM-13 — RUB-000327" },
    { v: "PGO|RUB-000328|FAM-10|Plataforma EAD", l: "PGO — PROSPERA GO — Plataforma EAD — FAM-10 — RUB-000328" },
    { v: "PGO|RUB-000329|FAM-14|Gravação de Videoaulas", l: "PGO — PROSPERA GO — Gravação de Videoaulas — FAM-14 — RUB-000329" },
    { v: "PGO|RUB-000330|FAM-13|Legendagem de Vídeos", l: "PGO — PROSPERA GO — Legendagem de Vídeos — FAM-13 — RUB-000330" },
    { v: "PGO|RUB-000331|FAM-12|Confecção de Material Pedagógico em PDF", l: "PGO — PROSPERA GO — Confecção de Material Pedagógico em PDF — FAM-12 — RUB-000331" },
    { v: "PGO|RUB-000332|FAM-02|Assistente Pedagógico", l: "PGO — PROSPERA GO — Assistente Pedagógico — FAM-02 — RUB-000332" },
    { v: "PGO|RUB-000333|FAM-03|Atividades Formativas", l: "PGO — PROSPERA GO — Atividades Formativas — FAM-03 — RUB-000333" },
    { v: "PGO|RUB-000334|FAM-06|Diagnóstico de Negócios", l: "PGO — PROSPERA GO — Diagnóstico de Negócios — FAM-06 — RUB-000334" },
    { v: "PGO|RUB-000335|FAM-06|Consultorias Individuais", l: "PGO — PROSPERA GO — Consultorias Individuais — FAM-06 — RUB-000335" },
    { v: "PGO|RUB-000336|FAM-12|Lanche para Consultorias Individuais", l: "PGO — PROSPERA GO — Lanche para Consultorias Individuais — FAM-12 — RUB-000336" },
    { v: "PGO|RUB-000337|FAM-11|Locação de Espaço", l: "PGO — PROSPERA GO — Locação de Espaço — FAM-11 — RUB-000337" },
    { v: "PGO|RUB-000338|FAM-11|Cenografia do Espaço", l: "PGO — PROSPERA GO — Cenografia do Espaço — FAM-11 — RUB-000338" },
    { v: "PGO|RUB-000339|FAM-11|Locação de Projetor", l: "PGO — PROSPERA GO — Locação de Projetor — FAM-11 — RUB-000339" },
    { v: "PGO|RUB-000340|FAM-11|Locação de Equipamento de Sonorização", l: "PGO — PROSPERA GO — Locação de Equipamento de Sonorização — FAM-11 — RUB-000340" },
    { v: "PGO|RUB-000341|FAM-11|Locação de Computador", l: "PGO — PROSPERA GO — Locação de Computador — FAM-11 — RUB-000341" },
    { v: "PGO|RUB-000342|FAM-07|Limpeza", l: "PGO — PROSPERA GO — Limpeza — FAM-07 — RUB-000342" },
    { v: "PGO|RUB-000343|FAM-12|Coffee Break para Eventos e Oficinas", l: "PGO — PROSPERA GO — Coffee Break para Eventos e Oficinas — FAM-12 — RUB-000343" },
    { v: "PGO|RUB-000344|FAM-08|Assistente de Produção", l: "PGO — PROSPERA GO — Assistente de Produção — FAM-08 — RUB-000344" },
    { v: "PGO|RUB-000345|FAM-03|Palestrante", l: "PGO — PROSPERA GO — Palestrante — FAM-03 — RUB-000345" },
    { v: "PGO|RUB-000346|FAM-13|Tradução em Libras", l: "PGO — PROSPERA GO — Tradução em Libras — FAM-13 — RUB-000346" },
    { v: "PGO|RUB-000347|FAM-04|Mobilizadores - Agentes de Desenvolvimento Territorial", l: "PGO — PROSPERA GO — Mobilizadores - Agentes de Desenvolvimento Territorial — FAM-04 — RUB-000347" },
  ],
  "JOGANDO JUNTOS SE": [
    { v: "JJSE|RUB-000348|FAM-06|Assessoria Jurídica", l: "JJSE — JOGANDO JUNTOS SE — Assessoria Jurídica — FAM-06 — RUB-000348" },
    { v: "JJSE|RUB-000349|FAM-06|Assessoria Contábil", l: "JJSE — JOGANDO JUNTOS SE — Assessoria Contábil — FAM-06 — RUB-000349" },
    { v: "JJSE|RUB-000350|FAM-01|Assistente Administrativo", l: "JJSE — JOGANDO JUNTOS SE — Assistente Administrativo — FAM-01 — RUB-000350" },
    { v: "JJSE|RUB-000351|FAM-02|Coordenação de Núcleo", l: "JJSE — JOGANDO JUNTOS SE — Coordenação de Núcleo — FAM-02 — RUB-000351" },
    { v: "JJSE|RUB-000352|FAM-03|Professor Esportivo", l: "JJSE — JOGANDO JUNTOS SE — Professor Esportivo — FAM-03 — RUB-000352" },
    { v: "JJSE|RUB-000353|FAM-03|Assistente de Educação Física", l: "JJSE — JOGANDO JUNTOS SE — Assistente de Educação Física — FAM-03 — RUB-000353" },
    { v: "JJSE|RUB-000354|FAM-05|Social Media", l: "JJSE — JOGANDO JUNTOS SE — Social Media — FAM-05 — RUB-000354" },
    { v: "JJSE|RUB-000355|FAM-11|Locação de equipamento de som", l: "JJSE — JOGANDO JUNTOS SE — Locação de equipamento de som — FAM-11 — RUB-000355" },
    { v: "JJSE|RUB-000356|FAM-11|Locação de notebook", l: "JJSE — JOGANDO JUNTOS SE — Locação de notebook — FAM-11 — RUB-000356" },
    { v: "JJSE|RUB-000357|FAM-12|Insumos", l: "JJSE — JOGANDO JUNTOS SE — Insumos — FAM-12 — RUB-000357" },
  ],
  "PNCC": [
    { v: "PNCC|RUB-000358|FAM-08|Produção - Apresentações artístico-culturais - Ações M.", l: "PNCC — PNCC — Produção - Apresentações artístico-culturais - Ações M. — FAM-08 — RUB-000358" },
    { v: "PNCC|RUB-000359|FAM-03|Serviço de Produção/organização - Ações de formação, capacitação e apoio técnico", l: "PNCC — PNCC — Serviço de Produção/organização - Ações de formação, capacitação e apoio técnico — FAM-03 — RUB-000359" },
    { v: "PNCC|RUB-000360|FAM-04|Serviço de Produção - Ações de mobilização social", l: "PNCC — PNCC — Serviço de Produção - Ações de mobilização social — FAM-04 — RUB-000360" },
    { v: "PNCC|RUB-000361|FAM-12|Serviço de coffee break - Ações de Formação G", l: "PNCC — PNCC — Serviço de coffee break - Ações de Formação G — FAM-12 — RUB-000361" },
    { v: "PNCC|RUB-000362|FAM-12|Serviço de coffee break - Ações de Formação G (2)", l: "PNCC — PNCC — Serviço de coffee break - Ações de Formação G (2) — FAM-12 — RUB-000362" },
    { v: "PNCC|RUB-000363|FAM-14|Registro Videográfico", l: "PNCC — PNCC — Registro Videográfico — FAM-14 — RUB-000363" },
    { v: "PNCC|RUB-000364|FAM-11|Locação de Palco", l: "PNCC — PNCC — Locação de Palco — FAM-11 — RUB-000364" },
    { v: "PNCC|RUB-000365|FAM-11|Locação de Palco (2)", l: "PNCC — PNCC — Locação de Palco (2) — FAM-11 — RUB-000365" },
    { v: "PNCC|RUB-000366|FAM-11|Locação de Som - Apresentações", l: "PNCC — PNCC — Locação de Som - Apresentações — FAM-11 — RUB-000366" },
    { v: "PNCC|RUB-000367|FAM-11|Locação de Som - Curso de Historia", l: "PNCC — PNCC — Locação de Som - Curso de Historia — FAM-11 — RUB-000367" },
    { v: "PNCC|RUB-000368|FAM-11|Locação de Som - Curso Conhecer (1)", l: "PNCC — PNCC — Locação de Som - Curso Conhecer (1) — FAM-11 — RUB-000368" },
    { v: "PNCC|RUB-000369|FAM-11|Locação de Som - Grande Porte", l: "PNCC — PNCC — Locação de Som - Grande Porte — FAM-11 — RUB-000369" },
    { v: "PNCC|RUB-000370|FAM-11|Locação de Som - Para Suporte", l: "PNCC — PNCC — Locação de Som - Para Suporte — FAM-11 — RUB-000370" },
    { v: "PNCC|RUB-000371|FAM-11|Locação de Som - Curso Conhecer (2)", l: "PNCC — PNCC — Locação de Som - Curso Conhecer (2) — FAM-11 — RUB-000371" },
    { v: "PNCC|RUB-000372|FAM-11|Locação de kit de projeção (1)", l: "PNCC — PNCC — Locação de kit de projeção (1) — FAM-11 — RUB-000372" },
    { v: "PNCC|RUB-000373|FAM-11|Locação de kit de projeção (2)", l: "PNCC — PNCC — Locação de kit de projeção (2) — FAM-11 — RUB-000373" },
    { v: "PNCC|RUB-000374|FAM-11|Locação de kit de projeção (3)", l: "PNCC — PNCC — Locação de kit de projeção (3) — FAM-11 — RUB-000374" },
    { v: "PNCC|RUB-000375|FAM-11|Locação de kit de projeção (4)", l: "PNCC — PNCC — Locação de kit de projeção (4) — FAM-11 — RUB-000375" },
    { v: "PNCC|RUB-000376|FAM-11|Locação de kit de projeção (5)", l: "PNCC — PNCC — Locação de kit de projeção (5) — FAM-11 — RUB-000376" },
    { v: "PNCC|RUB-000377|FAM-03|Curso de História das Políticas Culturais no Brasil e no Ceará - 20 horas-aula", l: "PNCC — PNCC — Curso de História das Políticas Culturais no Brasil e no Ceará - 20 horas-aula — FAM-03 — RUB-000377" },
    { v: "PNCC|RUB-000378|FAM-03|Ministrantes Ações de Formação", l: "PNCC — PNCC — Ministrantes Ações de Formação — FAM-03 — RUB-000378" },
    { v: "PNCC|RUB-000379|FAM-03|Curso Conhecer e Agir com as Leis de Incentivo e Renúncia Fiscal - 20 horas-aula", l: "PNCC — PNCC — Curso Conhecer e Agir com as Leis de Incentivo e Renúncia Fiscal - 20 horas-aula — FAM-03 — RUB-000379" },
    { v: "PNCC|RUB-000380|FAM-03|Curso Prismas do Patrimônio Cultural - 20 horas-aula", l: "PNCC — PNCC — Curso Prismas do Patrimônio Cultural - 20 horas-aula — FAM-03 — RUB-000380" },
    { v: "PNCC|RUB-000381|FAM-03|Curso de Introdução às Políticas Culturais - 20 horas-aula", l: "PNCC — PNCC — Curso de Introdução às Políticas Culturais - 20 horas-aula — FAM-03 — RUB-000381" },
    { v: "PNCC|RUB-000382|FAM-03|Curso de Teoria e Prática dos Direitos Culturais - 20 horas-aula", l: "PNCC — PNCC — Curso de Teoria e Prática dos Direitos Culturais - 20 horas-aula — FAM-03 — RUB-000382" },
    { v: "PNCC|RUB-000383|FAM-03|Curso de Teoria dos Direitos Humanos - 20 horas-aula", l: "PNCC — PNCC — Curso de Teoria dos Direitos Humanos - 20 horas-aula — FAM-03 — RUB-000383" },
    { v: "PNCC|RUB-000384|FAM-03|Ministrante Ações de Formação", l: "PNCC — PNCC — Ministrante Ações de Formação — FAM-03 — RUB-000384" },
    { v: "PNCC|RUB-000385|FAM-05|Assessoria de Imprensa", l: "PNCC — PNCC — Assessoria de Imprensa — FAM-05 — RUB-000385" },
    { v: "PNCC|RUB-000386|FAM-06|Assessoria Contábil", l: "PNCC — PNCC — Assessoria Contábil — FAM-06 — RUB-000386" },
  ],
  "CONEXÕES CRIATIVAS": [
    { v: "CC|RUB-000387|FAM-02|Coordenação Geral", l: "CC — CONEXÕES CRIATIVAS — Coordenação Geral — FAM-02 — RUB-000387" },
    { v: "CC|RUB-000388|FAM-06|Assessoria Contábil", l: "CC — CONEXÕES CRIATIVAS — Assessoria Contábil — FAM-06 — RUB-000388" },
    { v: "CC|RUB-000389|FAM-06|Assessoria Jurídica", l: "CC — CONEXÕES CRIATIVAS — Assessoria Jurídica — FAM-06 — RUB-000389" },
    { v: "CC|RUB-000390|FAM-05|Coordenação de Comunicação", l: "CC — CONEXÕES CRIATIVAS — Coordenação de Comunicação — FAM-05 — RUB-000390" },
    { v: "CC|RUB-000391|FAM-02|Coordenação Pedagógica", l: "CC — CONEXÕES CRIATIVAS — Coordenação Pedagógica — FAM-02 — RUB-000391" },
    { v: "CC|RUB-000392|FAM-01|Apoio Administrativo", l: "CC — CONEXÕES CRIATIVAS — Apoio Administrativo — FAM-01 — RUB-000392" },
    { v: "CC|RUB-000393|FAM-04|Assistente de Mobilização Territorial", l: "CC — CONEXÕES CRIATIVAS — Assistente de Mobilização Territorial — FAM-04 — RUB-000393" },
    { v: "CC|RUB-000394|FAM-02|Coordenação Local de Projeto", l: "CC — CONEXÕES CRIATIVAS — Coordenação Local de Projeto — FAM-02 — RUB-000394" },
    { v: "CC|RUB-000395|FAM-08|Assistente de Produção Local", l: "CC — CONEXÕES CRIATIVAS — Assistente de Produção Local — FAM-08 — RUB-000395" },
    { v: "CC|RUB-000396|FAM-05|Assessoria de Comunicação", l: "CC — CONEXÕES CRIATIVAS — Assessoria de Comunicação — FAM-05 — RUB-000396" },
    { v: "CC|RUB-000397|FAM-05|Criação de Material Gráfico e Identidade Visual", l: "CC — CONEXÕES CRIATIVAS — Criação de Material Gráfico e Identidade Visual — FAM-05 — RUB-000397" },
    { v: "CC|RUB-000398|FAM-14|Registro Fotográfico", l: "CC — CONEXÕES CRIATIVAS — Registro Fotográfico — FAM-14 — RUB-000398" },
    { v: "CC|RUB-000399|FAM-14|Contratação de Artista para Criação e Produção de VT Institucional", l: "CC — CONEXÕES CRIATIVAS — Contratação de Artista para Criação e Produção de VT Institucional — FAM-14 — RUB-000399" },
    { v: "CC|RUB-000400|FAM-05|Banners", l: "CC — CONEXÕES CRIATIVAS — Banners — FAM-05 — RUB-000400" },
    { v: "CC|RUB-000401|FAM-13|Tradução em Libras", l: "CC — CONEXÕES CRIATIVAS — Tradução em Libras — FAM-13 — RUB-000401" },
    { v: "CC|RUB-000402|FAM-03|Atividades Formativas (Professor)", l: "CC — CONEXÕES CRIATIVAS — Atividades Formativas (Professor) — FAM-03 — RUB-000402" },
    { v: "CC|RUB-000403|FAM-12|Camisas para Identificação de Participantes", l: "CC — CONEXÕES CRIATIVAS — Camisas para Identificação de Participantes — FAM-12 — RUB-000403" },
  ],
  "OUTRO / A PREENCHER": [
    { v: "OUTRO|A_CLASSIFICAR|A_CLASSIFICAR|A CLASSIFICAR PELA EQUIPE TÉCNICA", l: "A CLASSIFICAR PELA EQUIPE TÉCNICA" }
  ]
};

// ============================================================
// AJUSTE 4 — FUNÇÕES DE DEPENDÊNCIA ENTRE CAMPOS
// ============================================================

function atualizarTerritoriosPorProjeto() {
  const projeto    = document.getElementById('projeto').value;
  const selTerr    = document.getElementById('territorio_sede');
  const valorAtual = selTerr.value;

  // Limpar opções existentes
  selTerr.innerHTML = '';

  if (!projeto) {
    selTerr.innerHTML = '<option value="">Selecione primeiro o projeto</option>';
    return;
  }

  const territorios = TERRITORIOS_POR_PROJETO[projeto] || ['GERAL', 'A VALIDAR'];

  // Opção padrão
  const optDefault = document.createElement('option');
  optDefault.value = '';
  optDefault.textContent = 'Selecione...';
  selTerr.appendChild(optDefault);

  territorios.forEach(function(terr) {
    const opt = document.createElement('option');
    opt.value = terr;
    opt.textContent = terr;
    selTerr.appendChild(opt);
  });

  // Adicionar "Não se aplica" e "Outro" sempre ao final
  ['Não se aplica', 'Outro'].forEach(function(extra) {
    if (!territorios.includes(extra)) {
      const opt = document.createElement('option');
      opt.value = extra;
      opt.textContent = extra;
      selTerr.appendChild(opt);
    }
  });

  // Tentar restaurar o valor anterior se ainda existir
  if (valorAtual) {
    selTerr.value = valorAtual;
  }
}

function atualizarRubricasPorProjeto() {
  const projeto   = document.getElementById('projeto').value;
  const selRub    = document.getElementById('rubrica_relacionada');
  const valorAtual = selRub.value;

  // Limpar opções existentes
  selRub.innerHTML = '';

  if (!projeto) {
    selRub.innerHTML = '<option value="">Selecione primeiro o projeto</option>';
    return;
  }

  const rubricas = RUBRICAS_POR_PROJETO[projeto];

  // Opção padrão
  const optDefault = document.createElement('option');
  optDefault.value = '';
  optDefault.textContent = 'Selecione...';
  selRub.appendChild(optDefault);

  if (!rubricas || rubricas.length === 0) {
    const optNA = document.createElement('option');
    optNA.value = 'A_CLASSIFICAR';
    optNA.textContent = 'A CLASSIFICAR PELA EQUIPE TÉCNICA';
    selRub.appendChild(optNA);
    return;
  }

  rubricas.forEach(function(rub) {
    const opt = document.createElement('option');
    opt.value = rub.v;
    opt.textContent = rub.l;
    selRub.appendChild(opt);
  });

  // Tentar restaurar o valor anterior se ainda existir
  if (valorAtual) {
    selRub.value = valorAtual;
  }
}

// ============================================================
// AJUSTE 4 — LISTENER NO CAMPO PROJETO
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  const selectProjeto = document.getElementById('projeto');

  // Estado inicial: campos dependentes mostram instrução
  atualizarTerritoriosPorProjeto();
  atualizarRubricasPorProjeto();

  // Ao mudar projeto, atualizar território e rubrica
  selectProjeto.addEventListener('change', function () {
    atualizarTerritoriosPorProjeto();
    atualizarRubricasPorProjeto();
  });
});
