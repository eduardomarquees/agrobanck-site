// O mesmo número configurado em script.js será usado para encaminhar a solicitação.
const vForm = document.getElementById('viabilityForm');
const vMsg = document.getElementById('vFormMsg');
const whatsappNumber = typeof WHATSAPP !== 'undefined' ? WHATSAPP : 'SEU_NUMERO_COM_DDI_E_DDD';

vForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(vForm);
  const lines = [
    'Olá, AgroBanck! Quero solicitar uma análise de Viabilidade Econômica e Financeira.',
    '',
    'IDENTIFICAÇÃO',
    `Nome: ${data.get('nome')}`,
    `WhatsApp: ${data.get('whatsapp')}`,
    `E-mail: ${data.get('email') || '-'}`,
    `Município/UF: ${data.get('cidade') || '-'}`,
    '',
    'PROJETO',
    `Perfil: ${data.get('perfil')}`,
    `Atividade: ${data.get('atividade')}`,
    `Objetivo: ${data.get('objetivo')}`,
    `Prazo: ${data.get('prazo') || '-'}`,
    '',
    'DIMENSÃO FINANCEIRA',
    `Investimento estimado: ${data.get('investimento') || '-'}`,
    `Capital próprio: ${data.get('capital') || '-'}`,
    `Faturamento médio mensal: ${data.get('faturamento') || '-'}`,
    `Valor pretendido para captação: ${data.get('captacao') || '-'}`,
    '',
    'CONTEXTO',
    `${data.get('descricao') || '-'}`
  ];
  const text = encodeURIComponent(lines.join('\n'));
  if (whatsappNumber.startsWith('55') && whatsappNumber.length >= 12) {
    window.open(`https://wa.me/${61992137384}?text=${text}`, '_blank');
    vMsg.textContent = 'Abrindo o WhatsApp com os dados preenchidos.';
  } else {
    vMsg.textContent = 'A página está pronta. Cadastre o WhatsApp oficial da AgroBanck em script.js para ativar o envio.';
  }
});
