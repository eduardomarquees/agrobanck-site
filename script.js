// CONFIGURE AQUI O WHATSAPP DA AGROBANCK.
// Exemplo: const WHATSAPP = "5561999999999";
const WHATSAPP = "55619921373843";

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
if (menuBtn) menuBtn.addEventListener("click", () => menu.classList.toggle("open"));

document.querySelectorAll(".menu a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

const form = document.getElementById("leadForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const lines = [
    "Olá, AgroBanck! Quero falar sobre um projeto.",
    "",
    `Nome: ${data.get("nome")}`,
    `WhatsApp: ${data.get("whatsapp")}`,
    `Município/UF: ${data.get("cidade") || "-"}`,
    `Perfil: ${data.get("perfil") || "-"}`,
    `Interesse: ${data.get("interesse") || "-"}`,
    `Valor aproximado: ${data.get("valor") || "-"}`,
  ];
  const text = encodeURIComponent(lines.join("\n"));
  if (WHATSAPP.startsWith("55") && WHATSAPP.length >= 12) {
    window.open(`https://wa.me/${61992137384}?text=${text}`, "_blank");
    msg.textContent = "Abrindo o WhatsApp...";
  } else {
    msg.textContent = "O formulário está pronto. Cadastre o número da AgroBanck em script.js para ativar o WhatsApp.";
  }
});
