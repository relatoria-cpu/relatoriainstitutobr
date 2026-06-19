// ============================================================
// SISTEMA DE COLETA DE EVIDÊNCIAS — INSTITUTO BR ARTE
// script.js — Validação e Envio do Formulário
// v1.0
// ============================================================

// ============================================================
// CONFIGURAÇÃO — ALTERE A URL ABAIXO APÓS PUBLICAR O WEB APP
// ============================================================
var WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbyjB5Wc6iKplH33CBPuqEGmHhseyfkm2S5PBrbO092_AawJalh43zp947dAVz3ldJxg/exec';
// Exemplo: 'https://script.google.com/macros/s/AKfy.../exec'


// ============================================================
// CAMPOS OBRIGATÓRIOS (nome do campo → mensagem de erro)
// ============================================================
var CAMPOS_OBRIGATORIOS = {
  codigo_acesso:              'Informe o código de acesso.',
  responsavel_envio:          'Informe o nome do responsável pelo envio.',
  email:                      'Informe um e-mail válido.',
  telefone:                   'Informe o telefone com DDD.',
  funcao:                     'Selecione a função.',
  projeto:                    'Selecione o projeto.',
  territorio_sede:            'Selecione o território ou sede.',
  competencia:                'Selecione a competência de referência.',
  data_atividade:             'Informe a data da atividade.',
  local:                      'Informe o local de realização.',
  nome_atividade:             'Informe o nome da atividade.',
  tipo_atividade:             'Selecione o tipo de atividade.',
  quantidade_participantes:   'Informe a quantidade de participantes.',
  publico_alvo:               'Informe o público-alvo atendido.',
  descricao_atividade:        'Descreva a atividade executada.',
  link_pasta_drive:           'Informe o link da pasta no Drive ou escreva "Pendente".',
  link_fotos:                 'Informe o link das fotos ou escreva "Pendente" ou "Não se aplica".',
  link_videos:                'Informe o link dos vídeos ou escreva "Pendente" ou "Não se aplica".',
  link_lista_presenca:        'Informe o link da lista de presença ou escreva "Não se aplica".',
  link_certificados:          'Informe o link dos certificados ou escreva "Não se aplica".',
  link_material_pedagogico:   'Informe o link do material ou escreva "Não se aplica".',
  link_card_divulgacao:       'Informe o link do card ou escreva "Não se aplica".',
  link_prints_sistema:        'Informe o link dos prints ou escreva "Não se aplica".',
  outros_documentos:          'Informe outros links ou escreva "Não se aplica".'
};

// Campos do grupo radio obrigatórios
var RADIOS_OBRIGATORIOS = {
  tem_fotos:                   'Selecione se a atividade possui fotos.',
  tem_lista_presenca:          'Selecione se a atividade possui lista de presença.',
  tem_relatorio_descricao:     'Selecione se há relatório ou descrição.',
  arquivos_organizados_por_data: 'Selecione se os arquivos estão organizados.',
  link_drive_liberado:         'Selecione o status do acesso ao Drive.',
  ha_pendencia_documental:     'Selecione se há pendência documental.',
  houve_intercorrencia:        'Selecione se houve intercorrência.',
  atividade_remarcada:         'Selecione se a atividade foi remarcada.',
  meta_parcialmente_cumprida:  'Selecione o status do cumprimento da meta.'
};

// Valores aceitáveis para campos de evidência (além de links válidos)
var VALORES_EVIDENCIA_VALIDOS = ['pendente', 'não se aplica', 'nao se aplica', 'a preencher'];


// ============================================================
// ESTADO DO ENVIO (evita duplo envio)
// ============================================================
var enviando = false;


// ============================================================
// INICIALIZAÇÃO — ao carregar a página
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
  var form      = document.getElementById('form-evidencias');
  var btnEnviar = document.getElementById('btn-enviar');
  var btnNovo   = document.getElementById('btn-novo-envio');
  var btnNovam  = document.getElementById('btn-tentar-novamente');

  if (!form) return;

  // Evento de envio do formulário
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (enviando) return;

    if (validarFormulario()) {
      enviarFormulario();
    }
  });

  // Limpar erro individual ao alterar campo
  form.addEventListener('change', function (e) {
    limparErroCampo(e.target.name || e.target.id);
  });

  form.addEventListener('input', function (e) {
    limparErroCampo(e.target.name || e.target.id);
  });

  // Botão "Registrar outra atividade"
  if (btnNovo) {
    btnNovo.addEventListener('click', function () {
      resetarInterface();
    });
  }

  // Botão "Tentar novamente"
  if (btnNovam) {
    btnNovam.addEventListener('click', function () {
      ocultarMensagemErroEnvio();
      mostrarFormulario();
    });
  }
});


// ============================================================
// VALIDAÇÃO DO FORMULÁRIO
// ============================================================

/**
 * Valida todos os campos do formulário.
 * Retorna true se válido, false se houver erros.
 */
function validarFormulario() {
  var valido = true;
  limparTodosOsErros();

  // Validar campos de texto/select obrigatórios
  for (var nomeCampo in CAMPOS_OBRIGATORIOS) {
    var elemento = document.getElementById(nomeCampo);
    if (!elemento) continue;
    var valor = elemento.value.trim();

    if (valor === '') {
      exibirErroCampo(nomeCampo, CAMPOS_OBRIGATORIOS[nomeCampo]);
      valido = false;
      continue;
    }

    // Validação específica para campos de evidência
    if (elemento.classList.contains('campo-evidencia')) {
      if (!valorEvidenciaValido(valor)) {
        exibirErroCampo(nomeCampo, 'Cole um link válido, ou escreva "Pendente" ou "Não se aplica".');
        valido = false;
        continue;
      }
    }

    // Validação de e-mail
    if (nomeCampo === 'email' && !validarEmail(valor)) {
      exibirErroCampo(nomeCampo, 'Informe um endereço de e-mail válido.');
      valido = false;
    }
  }

  // Validar grupos de radio buttons
  for (var nomeRadio in RADIOS_OBRIGATORIOS) {
    var radiosSel = document.querySelectorAll('input[name="' + nomeRadio + '"]:checked');
    if (radiosSel.length === 0) {
      exibirErroCampo(nomeRadio, RADIOS_OBRIGATORIOS[nomeRadio]);
      valido = false;
    }
  }

  if (!valido) {
    mostrarErroGeral();
    rolarParaPrimeiroErro();
  } else {
    ocultarErroGeral();
  }

  return valido;
}

/**
 * Verifica se um valor de campo de evidência é aceitável:
 * - Link que começa com http:// ou https://
 * - Um dos valores pré-definidos como "Pendente" ou "Não se aplica"
 */
function valorEvidenciaValido(valor) {
  if (!valor || valor.trim() === '') return false;
  var v = valor.trim().toLowerCase();
  if (VALORES_EVIDENCIA_VALIDOS.indexOf(v) >= 0) return true;
  if (v.startsWith('http://') || v.startsWith('https://')) return true;
  return false;
}

/**
 * Valida formato de e-mail básico.
 */
function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


// ============================================================
// ENVIO DOS DADOS
// ============================================================

/**
 * Coleta todos os dados do formulário e envia via fetch para o Apps Script.
 * Usa mode: 'no-cors' pois o Apps Script não suporta CORS com resposta lida.
 * A confirmação de sucesso é baseada na ausência de erros de rede.
 */
function enviarFormulario() {
  if (!WEBAPP_URL || WEBAPP_URL === 'COLE_AQUI_A_URL_DO_APPS_SCRIPT_WEB_APP') {
    alert('A URL do Web App ainda não foi configurada no arquivo script.js.\n\nSubstitua o valor da variável WEBAPP_URL pela URL do seu Apps Script.');
    return;
  }

  enviando = true;
  var btn = document.getElementById('btn-enviar');
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Enviando...';
    btn.classList.add('carregando');
  }

  var dados = coletarDadosFormulario();
  var corpo = new URLSearchParams(dados).toString();

  fetch(WEBAPP_URL, {
    method:  'POST',
    mode:    'no-cors',                             // Apps Script não retorna CORS headers
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body:    corpo
  })
  .then(function () {
    // Com no-cors, a resposta é opaca — assume-se sucesso se não houver erro de rede
    mostrarMensagemSucesso(dados);
    ocultarFormulario();
  })
  .catch(function (err) {
    mostrarMensagemErroEnvio('Não foi possível conectar ao servidor. Verifique sua conexão com a internet e tente novamente.');
  })
  .finally(function () {
    enviando = false;
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Enviar Evidências';
      btn.classList.remove('carregando');
    }
  });
}

/**
 * Coleta todos os dados do formulário como objeto chave-valor.
 * Retorna o objeto pronto para serialização como form-urlencoded.
 */
function coletarDadosFormulario() {
  var form  = document.getElementById('form-evidencias');
  var dados = {};

  if (!form) return dados;

  // Campos de texto e select
  var elementos = form.querySelectorAll('input:not([type="radio"]), select, textarea');
  elementos.forEach(function (el) {
    if (el.name) {
      dados[el.name] = el.value.trim();
    }
  });

  // Radio buttons — pegar o selecionado
  var radiosProcessados = {};
  var radios = form.querySelectorAll('input[type="radio"]');
  radios.forEach(function (radio) {
    if (!radiosProcessados[radio.name]) {
      var selecionado = form.querySelector('input[name="' + radio.name + '"]:checked');
      dados[radio.name] = selecionado ? selecionado.value : '';
      radiosProcessados[radio.name] = true;
    }
  });

  return dados;
}


// ============================================================
// CONTROLE DA INTERFACE
// ============================================================

function ocultarFormulario() {
  var form = document.getElementById('form-evidencias');
  if (form) form.style.display = 'none';
  var envio = document.querySelector('.envio-area');
  if (envio) envio.style.display = 'none';
  var erroGeral = document.getElementById('erro-geral');
  if (erroGeral) erroGeral.style.display = 'none';
}

function mostrarFormulario() {
  var form = document.getElementById('form-evidencias');
  if (form) form.style.display = 'block';
  var envio = document.querySelector('.envio-area');
  if (envio) envio.style.display = 'flex';
}

function mostrarMensagemSucesso(dados) {
  var el = document.getElementById('msg-sucesso');
  if (el) el.style.display = 'block';

  var elId = document.getElementById('msg-id-atividade');
  if (elId && dados.projeto && dados.competencia) {
    elId.textContent = 'Projeto: ' + dados.projeto + ' · Competência: ' + dados.competencia +
      ' · Atividade: ' + (dados.nome_atividade || 'não informado');
  }

  ocultarMensagemErroEnvio();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function ocultarMensagemSucesso() {
  var el = document.getElementById('msg-sucesso');
  if (el) el.style.display = 'none';
}

function mostrarMensagemErroEnvio(detalhe) {
  var el = document.getElementById('msg-erro-envio');
  if (el) el.style.display = 'block';

  var det = document.getElementById('detalhe-erro-envio');
  if (det && detalhe) det.textContent = detalhe;

  ocultarMensagemSucesso();
  mostrarFormulario();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function ocultarMensagemErroEnvio() {
  var el = document.getElementById('msg-erro-envio');
  if (el) el.style.display = 'none';
}

function resetarInterface() {
  ocultarMensagemSucesso();
  ocultarMensagemErroEnvio();

  var form = document.getElementById('form-evidencias');
  if (form) {
    form.reset();
    form.style.display = 'block';
  }

  var envio = document.querySelector('.envio-area');
  if (envio) envio.style.display = 'flex';

  limparTodosOsErros();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ============================================================
// GERENCIAMENTO DE ERROS DE VALIDAÇÃO
// ============================================================

function exibirErroCampo(nomeCampo, mensagem) {
  var spanErro = document.getElementById('erro-' + nomeCampo);
  if (spanErro) spanErro.textContent = mensagem;

  // Marcar campo visualmente como inválido
  var campo = document.getElementById(nomeCampo);
  if (!campo) campo = document.querySelector('[name="' + nomeCampo + '"]');
  if (campo && campo.tagName !== 'INPUT' || (campo && campo.type !== 'radio')) {
    if (campo) campo.classList.add('campo-invalido');
  }
}

function limparErroCampo(nomeCampo) {
  var spanErro = document.getElementById('erro-' + nomeCampo);
  if (spanErro) spanErro.textContent = '';

  var campo = document.getElementById(nomeCampo);
  if (campo) campo.classList.remove('campo-invalido');
}

function limparTodosOsErros() {
  var spans = document.querySelectorAll('.campo-erro');
  spans.forEach(function (s) { s.textContent = ''; });

  var invalidos = document.querySelectorAll('.campo-invalido');
  invalidos.forEach(function (el) { el.classList.remove('campo-invalido'); });
}

function mostrarErroGeral() {
  var el = document.getElementById('erro-geral');
  if (el) el.style.display = 'block';
}

function ocultarErroGeral() {
  var el = document.getElementById('erro-geral');
  if (el) el.style.display = 'none';
}

function rolarParaPrimeiroErro() {
  var primeiroCampoErro = document.querySelector('.campo-invalido, .campo-erro:not(:empty)');
  if (primeiroCampoErro) {
    primeiroCampoErro.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
