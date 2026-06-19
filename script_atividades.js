// ============================================================
// IBRA — SISTEMA DE COLETA DE EVIDÊNCIAS
// script_atividades.js
// Tipos de atividade fechados por projeto e por família de rubrica
//
// Fontes:
//   Matriz Mestra v4 — aba 02A_CADASTRO_MESTRE_METAS
//   Matriz Mestra v4 — aba 02C_BASE_PT_ESTRUTURADO
//   Matriz Mestra v4 — aba ACHADOS_PT_A_VALIDAR
//   Matriz Mestra v4 — aba 02_CADASTRO_MESTRE_RUBRICAS (famílias)
//
// GRAU DE SEGURANÇA POR PROJETO:
//   ALTO    = atividade explícita no Plano de Trabalho (metas/etapas)
//   MÉDIO   = inferida com segurança pela família da rubrica cadastrada
//   A VALIDAR = sem base documental suficiente
// ============================================================


// ============================================================
// 1. LISTA GERAL — fallback quando projeto não tiver lista
// ============================================================
const ATIVIDADES_GERAIS = [
  "Reunião / planejamento da execução",
  "Evidência geral da competência",
  "Prestação de contas / documentação",
  "Outra / A classificar pela equipe técnica"
];


// ============================================================
// 2. ATIVIDADES POR PROJETO
// Derivadas de: metas, etapas, produtos, rubricas e PT
// ============================================================
const ATIVIDADES_POR_PROJETO = {

  // ----------------------------------------------------------
  // NÓS EM REDE — NER
  // PT: Coordenador de Programação (meta NER-M001)
  //     Locação de espaço para atividades em Rocinha/Rio das Pedras
  // Famílias: FAM-02, FAM-03, FAM-05, FAM-06, FAM-07, FAM-08, FAM-11, FAM-13, FAM-14
  // Grau geral: MÉDIO-ALTO
  // ----------------------------------------------------------
  "NÓS EM REDE": [
    "Atividade formativa / aula / oficina / curso",
    "Exibição / mostra / sessão audiovisual",
    "Produção / organização de atividade cultural",
    "Coordenação / acompanhamento da execução",
    "Registro fotográfico / audiovisual",
    "Edição / finalização de vídeo ou acervo",
    "Comunicação / divulgação",
    "Acessibilidade / Libras / audiodescrição / legendagem",
    "Apoio operacional / limpeza / serviços gerais",
    "Assessoria técnica / jurídica / contábil",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // PORTAS ABERTAS — PA
  // PT: PA-M001 (gestão/planejamento), PA-M002 (infraestrutura),
  //     PA-M003 (36 cursos / 20 vagas), PA-M004 (27 cursos / 20 vagas)
  // Famílias: FAM-02, FAM-03, FAM-04, FAM-05, FAM-06, FAM-11, FAM-12, FAM-14
  // Grau geral: ALTO (PT detalhado localizado)
  // ----------------------------------------------------------
  "PORTAS ABERTAS": [
    "Atividade formativa / aula / oficina / curso",
    "Coordenação de núcleo / acompanhamento da execução",
    "Mobilização de participantes / busca ativa / inscrição",
    "Uso de espaço / infraestrutura vinculada à atividade",
    "Registro fotográfico / audiovisual",
    "Comunicação / divulgação",
    "Assessoria técnica / jurídica / contábil",
    "Entrega / uso de insumos e material pedagógico",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // QUALIFICA SE — QSE
  // PT: QSE-M001 (2 polos técnicos Aracaju/SE),
  //     QSE-M002 (1 plataforma EAD),
  //     QSE-M003 (32 turmas de formação híbrida — turismo/hotelaria/gastronomia),
  //     QSE-M004 (1.280 vagas formações profissionais),
  //     QSE-M005 (apoio administrativo — divergência interna)
  // Famílias: FAM-01, FAM-02, FAM-03, FAM-10, FAM-11, FAM-12, FAM-15
  // Grau geral: MÉDIO (vigência/pólos a validar; PT com estrutura clara)
  // ----------------------------------------------------------
  "QUALIFICA SE": [
    "Atividade formativa / aula / curso / turma híbrida",
    "Uso / acesso à plataforma EAD",
    "Registro de acesso / log / evidência digital de sistema",
    "Coordenação / acompanhamento da execução",
    "Apoio administrativo / organização documental",
    "Uso de espaço / infraestrutura vinculada à atividade",
    "Entrega / uso de insumos e material pedagógico",
    "Deslocamento / apoio ao participante",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // CRIA HUB — CH
  // PT: Apoio administrativo, cursos com alimentação (biscoito/suco),
  //     plataforma EAD para suporte às turmas
  // Famílias: FAM-01, FAM-02, FAM-03, FAM-10, FAM-11, FAM-12, FAM-15
  // Grau geral: MÉDIO (polo Santa Cruz/RJ a validar; vigência a confirmar)
  // ----------------------------------------------------------
  "CRIA HUB": [
    "Atividade formativa / aula / curso / turma",
    "Uso / acesso à plataforma EAD",
    "Registro de acesso / log / evidência digital de sistema",
    "Coordenação / acompanhamento da execução",
    "Apoio administrativo / organização documental",
    "Uso de espaço / infraestrutura vinculada à atividade",
    "Entrega / distribuição de alimentação (biscoito/suco)",
    "Entrega / uso de insumos e material pedagógico",
    "Deslocamento / apoio ao participante",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // ECONOMIA SOLIDÁRIA - JUNTOS! — ESJ
  // PT: ESJ-M001 — 1.000 horas de formação em 25 turmas
  //     Temas: cooperativismo, associativismo, colaboração em rede
  // Famílias: FAM-01, FAM-02, FAM-03, FAM-05, FAM-07, FAM-11, FAM-12, FAM-14
  // Grau geral: MÉDIO (estrutura das metas parcialmente identificada)
  // ----------------------------------------------------------
  "ECONOMIA SOLIDÁRIA - JUNTOS!": [
    "Atividade formativa / aula / curso / oficina",
    "Coordenação / acompanhamento da execução",
    "Apoio administrativo / organização documental",
    "Registro fotográfico / audiovisual",
    "Comunicação / divulgação",
    "Apoio operacional / limpeza / serviços gerais",
    "Uso de espaço / infraestrutura vinculada à atividade",
    "Entrega / uso de insumos e material pedagógico",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // LABORATÓRIO RS — LRS
  // PT: LRS-M001 (gestão), LRS-M002 (diagnóstico territorial —
  //     4 territórios), LRS-M003 (16 cursos + 4 seminários de
  //     engajamento comunitário), LRS-M004 (intervenções urbanas)
  // Famílias: FAM-02, FAM-03, FAM-04, FAM-05, FAM-06, FAM-08, FAM-09, FAM-11, FAM-12, FAM-14
  // Grau geral: ALTO (metas claras no PT)
  // ----------------------------------------------------------
  "LABORATÓRIO RS": [
    "Diagnóstico / pesquisa / escuta territorial",
    "Curso de capacitação / engajamento comunitário",
    "Seminário / encontro formativo",
    "Produção / organização de evento",
    "Mobilização territorial",
    "Intervenção urbana / ação no território",
    "Gestão / coordenação do projeto",
    "Registro fotográfico / audiovisual",
    "Comunicação / divulgação",
    "Assessoria técnica / jurídica / contábil",
    "Uso de espaço / infraestrutura vinculada à atividade",
    "Entrega / uso de insumos",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // LABORATÓRIO RJ — LRJ
  // PT: LRJ-M001 (gestão), LRJ-M002 (diagnóstico — 3 territórios:
  //     Rio das Pedras, Jacarezinho, Rocinha), LRJ-M003 (12 cursos +
  //     3 seminários), LRJ-M004 (intervenções urbanas)
  // Famílias: FAM-02, FAM-03, FAM-04, FAM-05, FAM-06, FAM-08, FAM-09, FAM-11, FAM-12, FAM-14
  // Grau geral: ALTO (estrutura espelhada com LRS, PT localizado)
  // ----------------------------------------------------------
  "LABORATÓRIO RJ": [
    "Diagnóstico / pesquisa / escuta territorial",
    "Curso de capacitação / engajamento comunitário",
    "Seminário / encontro formativo",
    "Produção / organização de evento",
    "Mobilização territorial",
    "Intervenção urbana / ação no território",
    "Gestão / coordenação do projeto",
    "Registro fotográfico / audiovisual",
    "Comunicação / divulgação",
    "Assessoria técnica / jurídica / contábil",
    "Uso de espaço / infraestrutura vinculada à atividade",
    "Entrega / uso de insumos",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // JOGANDO JUNTOS — JJ
  // PT: JJ-EIXO1 (estruturação — 2 meses), JJ-EIXO2 (implantação
  //     de 16 núcleos esportivos com atividades contínuas)
  // Famílias: FAM-01, FAM-02, FAM-03, FAM-05, FAM-06, FAM-11, FAM-12
  // Grau geral: ALTO (metas claras — núcleos esportivos)
  // ----------------------------------------------------------
  "JOGANDO JUNTOS": [
    "Atividade esportiva / prática esportiva / treino",
    "Aula / oficina esportiva",
    "Coordenação de núcleo / acompanhamento da execução",
    "Comunicação / divulgação",
    "Apoio administrativo / organização documental",
    "Uso de espaço / infraestrutura vinculada à atividade",
    "Entrega / uso de insumos",
    "Assessoria técnica / jurídica / contábil",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // AGENTES DE DIREITO — AD
  // PT: AD-M001 (34 bolsas agentes mobilizadores — comunidade LGBTQIA+
  //     Fortaleza/CE), AD-M002 (40 atividades formativas),
  //     AD-M003 (100 grupos de discussão / sessões de esclarecimento),
  //     AD-M004 (1 material informativo), AD-M005 (1 seminário)
  // Famílias: FAM-03, FAM-08, FAM-10, FAM-11
  // Grau geral: ALTO (metas muito específicas no PT)
  // ----------------------------------------------------------
  "AGENTES DE DIREITO": [
    "Atividade formativa / capacitação de agentes",
    "Grupo de discussão / sessão de esclarecimento",
    "Mobilização territorial / trabalho de campo",
    "Seminário / encontro",
    "Produção / organização de evento",
    "Uso / registro de sistema ou plataforma digital",
    "Uso de espaço / infraestrutura vinculada à atividade",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // CONEXÃO EMPREENDEDORA — CE
  // PT: CE-M001 (gestão), CE-M002 (infraestrutura),
  //     CE-M003 (34 cursos / 20 vagas — formação profissional presencial),
  //     CE-M004 (31 cursos / 20 vagas)
  // Famílias: FAM-02, FAM-03, FAM-05, FAM-06, FAM-11, FAM-12, FAM-14
  // Grau geral: ALTO (estrutura espelhada com PA, PT localizado)
  // ----------------------------------------------------------
  "CONEXÃO EMPREENDEDORA": [
    "Atividade formativa / aula / oficina / curso",
    "Coordenação / acompanhamento da execução",
    "Uso de espaço / infraestrutura vinculada à atividade",
    "Registro fotográfico / audiovisual",
    "Comunicação / divulgação",
    "Assessoria técnica / jurídica / contábil",
    "Entrega / uso de insumos e material pedagógico",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // NÓS EM REDE 2 — NER2
  // PT: estrutura BLOQUEADA — PT auto-identificado como "Nós em Rede"
  //     Rubricas análogas ao NER + acessibilidade (FAM-13)
  // Famílias: FAM-01, FAM-02, FAM-03, FAM-05, FAM-08, FAM-11, FAM-13, FAM-14
  // Grau geral: MÉDIO (inferido por simetria com NER e famílias cadastradas)
  // ----------------------------------------------------------
  "NÓS EM REDE 2": [
    "Atividade formativa / aula / oficina / curso",
    "Exibição / mostra / sessão audiovisual",
    "Produção / organização de atividade cultural",
    "Coordenação / acompanhamento da execução",
    "Apoio administrativo / organização documental",
    "Registro fotográfico / audiovisual",
    "Edição / finalização de vídeo ou acervo",
    "Comunicação / divulgação",
    "Acessibilidade / Libras / audiodescrição / legendagem",
    "Uso de espaço / infraestrutura vinculada à atividade",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // PROSPERA RJ — PRJ
  // PT: PRJ-M001 (gerenciamento), PRJ-M002 (comunicação),
  //     PRJ-M003 (500 questionários + relatório de pesquisa),
  //     PRJ-M004 (10 oficinas online + 5 presenciais de capacitação),
  //     PRJ-M005 (100 consultorias 8h + 100 diagnósticos)
  // Famílias: FAM-01, FAM-02, FAM-03, FAM-04, FAM-05, FAM-06,
  //           FAM-09, FAM-10, FAM-11, FAM-12, FAM-13, FAM-14
  // Territórios: Maré, Jacarezinho (e outros 3 a confirmar)
  // Grau geral: ALTO (PT muito detalhado, metas claras)
  // ----------------------------------------------------------
  "PROSPERA RJ": [
    "Diagnóstico de negócios",
    "Consultoria individual / atendimento ao empreendedor",
    "Oficina / palestra / capacitação técnica",
    "Mapeamento / aplicação de questionário / pesquisa",
    "Mobilização territorial / identificação de empreendimentos",
    "Coordenação / gerenciamento do projeto",
    "Registro fotográfico / audiovisual",
    "Gravação de videoaula",
    "Legendagem / acessibilidade audiovisual",
    "Comunicação / divulgação",
    "Uso da plataforma EAD / registro digital",
    "Uso de espaço / infraestrutura vinculada à atividade",
    "Entrega / uso de insumos e material pedagógico",
    "Assessoria técnica / jurídica / contábil",
    "Apoio administrativo / organização documental",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // PROSPERA RS — PRS
  // PT: Estrutura semelhante ao Prospera GO — 6 metas análogas
  //     Detalhe final pendente de validação
  // Famílias: FAM-01..FAM-14 (estrutura completa, análoga ao PGO)
  // Grau geral: MÉDIO (inferido por simetria com PGO, PT parcialmente analisado)
  // ----------------------------------------------------------
  "PROSPERA RS": [
    "Diagnóstico de negócios",
    "Consultoria individual / atendimento ao empreendedor",
    "Oficina / palestra / capacitação técnica",
    "Seminário de formação de lideranças",
    "Mapeamento / aplicação de questionário / pesquisa",
    "Mobilização territorial / identificação de empreendimentos",
    "Coordenação / gerenciamento do projeto",
    "Registro fotográfico / audiovisual",
    "Gravação de videoaula",
    "Legendagem / acessibilidade audiovisual",
    "Comunicação / divulgação",
    "Produção / organização de evento",
    "Uso da plataforma EAD / registro digital",
    "Uso de espaço / infraestrutura vinculada à atividade",
    "Apoio operacional / limpeza / serviços gerais",
    "Entrega / uso de insumos e material pedagógico",
    "Assessoria técnica / jurídica / contábil",
    "Apoio administrativo / organização documental",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // PROSPERA GO — PGO
  // PT: PGO-M001 (gerenciamento), PGO-M002 (comunicação),
  //     PGO-M003 (200 questionários + relatório de pesquisa),
  //     PGO-M004 (2 seminários de formação de lideranças),
  //     PGO-M005 (20 oficinas — 10 presenciais + 10 online + 2 palestras),
  //     PGO-M006 (50 diagnósticos, 50 consultorias 1h, 1 feira de negócios)
  // Famílias: FAM-01..FAM-14 (estrutura mais completa entre os Próspera)
  // Grau geral: ALTO (PT mais detalhado entre os projetos Próspera)
  // ----------------------------------------------------------
  "PROSPERA GO": [
    "Diagnóstico de negócios",
    "Consultoria individual / atendimento ao empreendedor",
    "Oficina / palestra / capacitação técnica",
    "Seminário de formação de lideranças",
    "Feira de negócios / evento de empreendedorismo",
    "Mapeamento / aplicação de questionário / pesquisa",
    "Mobilização territorial / identificação de empreendimentos",
    "Coordenação / gerenciamento do projeto",
    "Registro fotográfico / audiovisual",
    "Gravação de videoaula",
    "Legendagem / acessibilidade audiovisual",
    "Comunicação / divulgação",
    "Produção / organização de evento",
    "Uso da plataforma EAD / registro digital",
    "Uso de espaço / infraestrutura vinculada à atividade",
    "Apoio operacional / limpeza / serviços gerais",
    "Entrega / uso de insumos e material pedagógico",
    "Assessoria técnica / jurídica / contábil",
    "Apoio administrativo / organização documental",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // JOGANDO JUNTOS SE — JJSE
  // PT: JJSE-M001 (administração), JJSE-M002 (24 turmas / 384 vagas
  //     atividades esportivas em 2 núcleos em Aracaju/SE)
  // Famílias: FAM-01, FAM-02, FAM-03, FAM-05, FAM-06, FAM-11, FAM-12
  // Grau geral: ALTO (estrutura clara no PT — espelhada com JJ)
  // ----------------------------------------------------------
  "JOGANDO JUNTOS SE": [
    "Atividade esportiva / prática esportiva / treino",
    "Aula / oficina esportiva",
    "Coordenação de núcleo / acompanhamento da execução",
    "Apoio administrativo / organização documental",
    "Comunicação / divulgação",
    "Uso de espaço / infraestrutura vinculada à atividade",
    "Entrega / uso de insumos",
    "Assessoria técnica / jurídica / contábil",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // CONEXÕES CRIATIVAS — CC
  // PT: CC-FASE1 (pré-produção 3 meses — planejamento, pedagógico,
  //     comunicação, organização de 12 núcleos),
  //     CC-FASE2 (execução 9 meses — 216 cursos/oficinas, 18/núcleo,
  //     12 núcleos em RJ),
  //     CC-FASE3 (pós-produção 1 mês — relatório de comprovação)
  // Famílias: FAM-01, FAM-02, FAM-03, FAM-04, FAM-05, FAM-06,
  //           FAM-08, FAM-12, FAM-13, FAM-14
  // Grau geral: ALTO (PT com 3 fases claras e 216 cursos/oficinas)
  // ----------------------------------------------------------
  "CONEXÕES CRIATIVAS": [
    "Curso / oficina artístico-cultural",
    "Atividade formativa / pedagógica / criativa",
    "Produção / organização de evento cultural",
    "Coordenação de núcleo / coordenação local de projeto",
    "Mobilização territorial / articulação comunitária",
    "Registro fotográfico / audiovisual",
    "Contratação / produção de VT institucional",
    "Acessibilidade / Libras / legendagem / audiodescrição",
    "Comunicação / divulgação",
    "Apoio administrativo / organização documental",
    "Assessoria técnica / jurídica / contábil",
    "Entrega / uso de insumos e material pedagógico",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // PNCC
  // Rubricas: FAM-03, FAM-04, FAM-05, FAM-06, FAM-08, FAM-11, FAM-12, FAM-14
  // Nota: código ausente na base — PT não localizado
  //       Tipos inferidos exclusivamente pelas famílias cadastradas
  // Grau geral: MÉDIO (inferido pelas famílias; PT pendente)
  // ----------------------------------------------------------
  "PNCC": [
    "Apresentação artístico-cultural / ação M.",
    "Atividade de formação / capacitação",
    "Mobilização social / ação comunitária",
    "Produção / organização de evento cultural",
    "Registro videográfico / audiovisual",
    "Uso de espaço / locação vinculada à atividade",
    "Comunicação / divulgação / assessoria de imprensa",
    "Assessoria técnica / contábil",
    "Entrega / uso de insumos (coffee break, materiais)",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],

  // ----------------------------------------------------------
  // OUTRO / A PREENCHER — lista mínima
  // ----------------------------------------------------------
  "OUTRO / A PREENCHER": [
    "Reunião / planejamento da execução",
    "Atividade formativa / aula / oficina / curso",
    "Registro fotográfico / audiovisual",
    "Comunicação / divulgação",
    "Reunião / alinhamento / planejamento da execução",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ]
};


// ============================================================
// 3. ATIVIDADES POR FAMÍLIA DE RUBRICA
// Usado como refinamento quando a rubrica selecionada
// pertence a uma família com tipos de atividade bem definidos.
// Chave = ID_FAMILIA (ex.: "FAM-03")
// ============================================================
const ATIVIDADES_POR_FAMILIA = {
  "FAM-01": [
    "Apoio administrativo / organização documental",
    "Suporte à execução / controle de cronograma",
    "Rastreabilidade documental / arquivamento",
    "Evidência de prestação de serviço administrativo",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],
  "FAM-02": [
    "Coordenação / acompanhamento da execução",
    "Reunião de equipe / planejamento",
    "Supervisão de atividades no território",
    "Relatório de coordenação / memória de reunião",
    "Articulação institucional / mobilização de equipe",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],
  "FAM-03": [
    "Aula / oficina / curso",
    "Atividade formativa presencial",
    "Atividade formativa híbrida / online",
    "Palestra / seminário / encontro formativo",
    "Capacitação de agentes",
    "Registro de presença / lista de participantes",
    "Entrega de material pedagógico",
    "Evidência pedagógica / certificado",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],
  "FAM-04": [
    "Mobilização territorial / busca ativa",
    "Inscrição / confirmação de participantes",
    "Articulação comunitária / institucional",
    "Ação territorial / trabalho de campo",
    "Registro de mobilização / relatório de campo",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],
  "FAM-05": [
    "Comunicação / divulgação de atividade",
    "Produção de peça gráfica / card / banner",
    "Publicação em rede social / impulsionamento",
    "Assessoria de imprensa / comunicação institucional",
    "Identidade visual / sinalização",
    "Evidência de publicação / print de divulgação",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],
  "FAM-06": [
    "Assessoria jurídica / contábil",
    "Consultoria técnica individual",
    "Diagnóstico de negócios / análise técnica",
    "Elaboração de prestação de contas",
    "Evidência de prestação de serviço especializado",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],
  "FAM-07": [
    "Serviço de limpeza / conservação",
    "Apoio operacional / serviços gerais",
    "Evidência de prestação de serviço operacional",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],
  "FAM-08": [
    "Produção / organização de evento",
    "Seminário / apresentação / mostra",
    "Evento cultural / ação artística",
    "Curadoria / direção artística",
    "Evidência de produção / nota fiscal de evento",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],
  "FAM-09": [
    "Pesquisa territorial / diagnóstico participativo",
    "Aplicação de questionário / escuta comunitária",
    "Análise de dados / relatório de pesquisa",
    "Levantamento de demandas / mapeamento",
    "Evidência de pesquisa / instrumento de coleta",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],
  "FAM-10": [
    "Uso / acesso à plataforma EAD",
    "Gravação / upload de videoaula ou conteúdo digital",
    "Registro de acesso / log / captura de tela do sistema",
    "Suporte técnico / manutenção de sistema",
    "Consultoria em TI",
    "Evidência digital de uso da plataforma",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],
  "FAM-11": [
    "Uso de espaço / locação vinculada à atividade",
    "Montagem / adequação de espaço",
    "Uso de equipamento (som, projeção, computador)",
    "Infraestrutura de evento / locação de palco",
    "Evidência de uso / nota fiscal de locação",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],
  "FAM-12": [
    "Entrega / uso de insumos / material pedagógico",
    "Distribuição de alimentação (coffee break / biscoito)",
    "Entrega de camisas / kits / ecobags",
    "Uso / consumo de material de escritório",
    "Evidência de entrega / nota fiscal de material",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],
  "FAM-13": [
    "Acessibilidade / Libras / intérprete",
    "Audiodescrição de vídeo / material",
    "Legendagem / LSE de vídeo",
    "Evidência de prestação de serviço de acessibilidade",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],
  "FAM-14": [
    "Registro fotográfico de atividade",
    "Registro videográfico / filmagem",
    "Gravação de videoaula / conteúdo audiovisual",
    "Edição / finalização de vídeo",
    "Produção de VT institucional",
    "Curadoria / mostra de vídeos",
    "Evidência audiovisual / acervo",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ],
  "FAM-15": [
    "Deslocamento / transporte de participante",
    "Distribuição de passagens / auxílio transporte",
    "Evidência de deslocamento / comprovante de passagem",
    "Evidência geral da competência",
    "Outra / A classificar pela equipe técnica"
  ]
};


// ============================================================
// 4. FUNÇÃO DINÂMICA — atualizarTiposAtividade()
// Lógica:
//   1. Ao selecionar projeto → carrega tipos do projeto
//   2. Ao selecionar rubrica → se houver família identificada,
//      refina com lista da família; senão mantém lista do projeto
//   3. Sem projeto selecionado → "Selecione primeiro o projeto"
//   4. Projeto sem lista → lista mínima (ATIVIDADES_GERAIS)
// ============================================================

function atualizarTiposAtividade() {
  var projeto  = document.getElementById('projeto').value;
  var rubrica  = document.getElementById('rubrica_relacionada').value;
  var selTipo  = document.getElementById('tipo_atividade');
  var valorAtual = selTipo.value;

  // Sem projeto
  if (!projeto) {
    selTipo.innerHTML = '<option value="">Selecione primeiro o projeto</option>';
    return;
  }

  // Determinar lista base pelo projeto
  var listaBase = ATIVIDADES_POR_PROJETO[projeto] || ATIVIDADES_GERAIS;

  // Tentar refinar pela família da rubrica selecionada
  // value format: COD_PROJETO|CODIGO_RUBRICA|ID_RUBRICA|ID_FAMILIA|NOME_RUBRICA
  var listaFinal = listaBase;
  if (rubrica && rubrica.indexOf('|') !== -1) {
    var partes = rubrica.split('|');
    var idFam  = (partes[3] || '').trim(); // posição 3 = ID_FAMILIA
    if (idFam && ATIVIDADES_POR_FAMILIA[idFam]) {
      // Combinar: lista da família + itens exclusivos do projeto não repetidos
      var listaFam = ATIVIDADES_POR_FAMILIA[idFam];
      var extras   = listaBase.filter(function(item) {
        return listaFam.indexOf(item) === -1;
      });
      // Remover o fallback da família para reposicionar ao final
      var semFallback = listaFam.filter(function(item) {
        return item !== 'Outra / A classificar pela equipe técnica' &&
               item !== 'Evidência geral da competência';
      });
      listaFinal = semFallback
        .concat(extras.filter(function(item) {
          return item !== 'Outra / A classificar pela equipe técnica' &&
                 item !== 'Evidência geral da competência';
        }))
        .concat([
          'Evidência geral da competência',
          'Outra / A classificar pela equipe técnica'
        ]);
    }
  }

  // Popular o select
  selTipo.innerHTML = '';

  var optDefault = document.createElement('option');
  optDefault.value = '';
  optDefault.textContent = 'Selecione...';
  selTipo.appendChild(optDefault);

  listaFinal.forEach(function(tipo) {
    var opt = document.createElement('option');
    opt.value = tipo;
    opt.textContent = tipo;
    selTipo.appendChild(opt);
  });

  // Tentar restaurar seleção anterior
  if (valorAtual) {
    selTipo.value = valorAtual;
  }
}


// ============================================================
// 5. LISTENERS
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  var selProjeto = document.getElementById('projeto');
  var selRubrica = document.getElementById('rubrica_relacionada');

  // Estado inicial
  atualizarTiposAtividade();

  // Ao mudar projeto → atualiza tipos (a função de território/rubrica
  // já existe em script_dinamico_v2.js e chama seus próprios listeners;
  // aqui adicionamos apenas o listener do tipo_atividade)
  selProjeto.addEventListener('change', function () {
    atualizarTiposAtividade();
  });

  // Ao mudar rubrica → refinar tipos pela família
  selRubrica.addEventListener('change', function () {
    atualizarTiposAtividade();
  });
});
