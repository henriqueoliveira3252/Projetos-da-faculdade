// =============================
// IDENTIDADE VISUAL: ARTES E ÍCONES SVG
// =============================

const ARTES_PERSONAGENS_FALLBACK = Object.freeze({
    neutro: `<svg viewBox="0 0 260 340" xmlns="http://www.w3.org/2000/svg"><circle cx="130" cy="84" r="24" fill="#334155" fill-opacity="0.55"/><path d="M88 124 C104 110, 156 110, 172 124 L182 232 L156 232 L152 318 L108 318 L104 232 L78 232 Z" fill="#1e293b" fill-opacity="0.6" stroke="#475569" stroke-width="2" stroke-dasharray="6 5"/></svg>`,
    nox: `<svg viewBox="0 0 260 340" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fbNoxCapa" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#374151"/><stop offset="60%" stop-color="#1f2430"/><stop offset="100%" stop-color="#11151d"/></linearGradient><linearGradient id="fbNoxLamina" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e2e8f0"/><stop offset="55%" stop-color="#94a3b8"/><stop offset="100%" stop-color="#475569"/></linearGradient></defs><path d="M98 112 C62 126, 36 164, 24 204 C54 196, 76 184, 96 170 Z" fill="url(#fbNoxCapa)" stroke="#8b5cf6" stroke-width="1.5" stroke-opacity="0.6"/><path d="M94 128 C66 148, 48 180, 44 212 C68 202, 86 188, 102 172 Z" fill="#181c26"/><g transform="translate(52, 166) rotate(-28)"><path d="M0 12 L46 0 L38 14 L0 18 Z" fill="url(#fbNoxLamina)" stroke="#c084fc" stroke-width="1.5"/><rect x="-12" y="11" width="14" height="6" rx="2" fill="#334155"/></g><path d="M108 214 L84 268 L68 318 L86 318 L106 274 L122 230 Z" fill="#1e2430" stroke="#475569" stroke-width="1.2"/><path d="M134 212 L162 262 L176 318 L194 318 L180 256 L152 212 Z" fill="#272e3d" stroke="#64748b" stroke-width="1.2"/><path d="M66 306 L88 306 L92 318 L62 318 Z" fill="#111827" stroke="#8b5cf6" stroke-width="1.2"/><path d="M174 306 L196 306 L202 318 L172 318 Z" fill="#111827" stroke="#8b5cf6" stroke-width="1.2"/><path d="M98 116 L146 114 L154 214 L104 216 Z" fill="url(#fbNoxCapa)" stroke="#475569" stroke-width="1.5"/><path d="M104 122 L148 186 L142 196 L98 132 Z" fill="#8b5cf6" fill-opacity="0.45"/><rect x="103" y="204" width="52" height="10" rx="3" fill="#111827" stroke="#a855f7" stroke-width="1.4"/><path d="M96 114 C94 74, 114 54, 138 56 C156 58, 164 78, 156 112 L126 122 Z" fill="url(#fbNoxCapa)" stroke="#94a3b8" stroke-width="1.5"/><path d="M114 82 C126 76, 146 78, 152 92 C148 106, 132 110, 116 104 Z" fill="#0b0f17"/><ellipse cx="132" cy="91" rx="4.5" ry="2.2" fill="#e9d5ff"/><ellipse cx="145" cy="91" rx="4" ry="2" fill="#c084fc"/><path d="M138 126 L176 156 L166 170 L130 144 Z" fill="#272e3d" stroke="#64748b" stroke-width="1.2"/><g transform="translate(170, 152) rotate(16)"><path d="M0 6 L66 -6 L52 14 L0 14 Z" fill="url(#fbNoxLamina)" stroke="#c084fc" stroke-width="2"/><path d="M8 5 L62 -4" stroke="#e9d5ff" stroke-width="1.5"/><rect x="-14" y="5" width="16" height="8" rx="2" fill="#1e293b" stroke="#a855f7" stroke-width="1.2"/></g></svg>`,
    iris: `<svg viewBox="0 0 260 340" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fbIrisManto" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#155e75"/><stop offset="55%" stop-color="#0f3d56"/><stop offset="100%" stop-color="#082438"/></linearGradient><linearGradient id="fbIrisOuro" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fde047"/><stop offset="100%" stop-color="#d97706"/></linearGradient><radialGradient id="fbIrisCristal" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ccfbf1"/><stop offset="55%" stop-color="#2dd4bf"/><stop offset="100%" stop-color="#0284c7"/></radialGradient></defs><path d="M96 116 L68 308 L112 312 L118 124 Z" fill="#0a2e42" stroke="#38bdf8" stroke-width="1.2" stroke-opacity="0.45"/><path d="M100 112 L152 112 L172 318 L86 318 Z" fill="url(#fbIrisManto)" stroke="#38bdf8" stroke-width="1.5"/><path d="M118 118 L142 118 L148 318 L112 318 Z" fill="#0b3147" stroke="url(#fbIrisOuro)" stroke-width="1.6"/><path d="M130 144 L130 296" stroke="#fde047" stroke-width="1.4" stroke-dasharray="6 8"/><polygon points="130,162 136,172 130,182 124,172" fill="none" stroke="#fde047" stroke-width="1.4"/><polygon points="130,214 136,224 130,234 124,224" fill="none" stroke="#fde047" stroke-width="1.4"/><path d="M92 114 C112 102, 144 102, 160 114 L150 130 L102 130 Z" fill="#164e63" stroke="url(#fbIrisOuro)" stroke-width="2"/><ellipse cx="128" cy="84" rx="17" ry="20" fill="#fde68a" fill-opacity="0.88"/><path d="M92 72 C114 62, 144 62, 164 72 L134 32 C122 32, 110 48, 92 72 Z" fill="#0f3d56" stroke="url(#fbIrisOuro)" stroke-width="2"/><ellipse cx="134" cy="82" rx="3" ry="2" fill="#0ea5e9"/><path d="M98 124 L74 162 L88 170 L110 136 Z" fill="#155e75"/><circle cx="74" cy="166" r="11" fill="url(#fbIrisCristal)" fill-opacity="0.75"/><circle cx="74" cy="166" r="16" fill="none" stroke="#5eead4" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="184" y1="84" x2="184" y2="318" stroke="url(#fbIrisOuro)" stroke-width="5" stroke-linecap="round"/><path d="M172 88 C172 72, 196 72, 196 88" fill="none" stroke="#fde047" stroke-width="2.5"/><polygon points="184,38 197,58 184,76 171,58" fill="url(#fbIrisCristal)" stroke="#e0f2fe" stroke-width="1.6"/><circle cx="184" cy="57" r="22" fill="none" stroke="#2dd4bf" stroke-width="1.2" stroke-opacity="0.65"/><path d="M148 124 L184 154 L178 168 L140 140 Z" fill="#155e75"/></svg>`,
    bronn: `<svg viewBox="0 0 260 340" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fbBronnAco" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#cbd5e1"/><stop offset="50%" stop-color="#64748b"/><stop offset="100%" stop-color="#334155"/></linearGradient><linearGradient id="fbBronnBronze" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#78350f"/></linearGradient><linearGradient id="fbBronnAmbar" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fde68a"/><stop offset="50%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#b45309"/></linearGradient></defs><line x1="66" y1="88" x2="78" y2="210" stroke="#78350f" stroke-width="6" stroke-linecap="round"/><rect x="46" y="72" width="42" height="26" rx="5" fill="url(#fbBronnAco)" stroke="url(#fbBronnBronze)" stroke-width="2.5"/><rect x="82" y="218" width="38" height="100" rx="6" fill="url(#fbBronnAco)" stroke="#334155" stroke-width="2"/><rect x="132" y="218" width="40" height="100" rx="6" fill="url(#fbBronnAco)" stroke="#334155" stroke-width="2"/><rect x="80" y="246" width="42" height="14" rx="3" fill="url(#fbBronnBronze)"/><rect x="130" y="246" width="44" height="14" rx="3" fill="url(#fbBronnBronze)"/><path d="M76 302 L122 302 L124 318 L72 318 Z" fill="#1e293b" stroke="#d97706" stroke-width="1.6"/><path d="M130 302 L176 302 L180 318 L128 318 Z" fill="#1e293b" stroke="#d97706" stroke-width="1.6"/><path d="M74 108 L178 108 L170 222 L82 222 Z" fill="url(#fbBronnAco)" stroke="url(#fbBronnBronze)" stroke-width="3"/><path d="M98 118 L154 118 L146 204 L106 204 Z" fill="#475569" stroke="#f59e0b" stroke-width="1.5"/><path d="M52 104 C62 84, 96 86, 104 110 L92 142 L54 134 Z" fill="url(#fbBronnAco)" stroke="url(#fbBronnBronze)" stroke-width="2.5"/><path d="M148 110 C156 86, 190 84, 200 104 L198 134 L160 142 Z" fill="url(#fbBronnAco)" stroke="url(#fbBronnBronze)" stroke-width="2.5"/><path d="M98 104 L98 66 C98 48, 154 48, 154 66 L154 104 Z" fill="url(#fbBronnAco)" stroke="url(#fbBronnBronze)" stroke-width="2.5"/><rect x="112" y="72" width="34" height="10" rx="3" fill="#0f172a" stroke="#f59e0b" stroke-width="1.4"/><line x1="118" y1="77" x2="140" y2="77" stroke="#fbbf24" stroke-width="2.5"/><path d="M144 126 L216 138 L210 258 L176 292 L142 256 Z" fill="url(#fbBronnAco)" stroke="url(#fbBronnBronze)" stroke-width="4"/><path d="M154 142 L204 150 L200 246 L176 272 L152 246 Z" fill="#1e293b" stroke="#d97706" stroke-width="2"/><polygon points="178,166 196,200 178,236 160,200" fill="url(#fbBronnAmbar)" stroke="#fef3c7" stroke-width="1.6"/><polygon points="178,182 187,200 178,218 169,200" fill="#78350f"/></svg>`
});

const ICONES_HABILIDADES_SVG = Object.freeze({
    basico: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 L18 6 M14 5 L19 5 L19 10 M4 16 L8 20" stroke="#cbd5e1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
    nox_ofensiva: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 18 C7 8, 14 4, 21 5 C17 9, 13 13, 11 19 Z" fill="#8b5cf6" fill-opacity="0.35" stroke="#c084fc" stroke-width="2" stroke-linejoin="round"/><path d="M6 17 L19 6" stroke="#f3e8ff" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    nox_defensiva: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 15 C7 11, 11 11, 14 14 C16 16, 19 15, 21 12" stroke="#a855f7" stroke-width="2.2" stroke-linecap="round" fill="none"/><path d="M3 10 C6 7, 10 7, 13 9" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round" fill="none"/><circle cx="18" cy="8" r="1.6" fill="#c084fc"/><circle cx="15" cy="18" r="1.4" fill="#8b5cf6"/></svg>`,
    iris_ofensiva: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 19 L20 5" stroke="#38bdf8" stroke-width="3.2" stroke-linecap="round"/><path d="M5 17 L19 6" stroke="#e0f2fe" stroke-width="1.4" stroke-linecap="round"/><polygon points="8,7 10,9 8,11 6,9" fill="none" stroke="#fde047" stroke-width="1.4"/><polygon points="16,14 18,16 16,18 14,16" fill="none" stroke="#fde047" stroke-width="1.4"/></svg>`,
    iris_defensiva: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="#2dd4bf" fill-opacity="0.25" stroke="#2dd4bf" stroke-width="2"/><circle cx="12" cy="12" r="5" fill="none" stroke="#fde047" stroke-width="1.4" stroke-dasharray="2.5 2.5"/></svg>`,
    bronn_ofensiva: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5 L12 6 L12 15 L8 19 L4 15 Z" fill="#64748b" stroke="#d97706" stroke-width="1.8"/><path d="M15 7 C18 9, 19 15, 15 17 M18 5 C21 8, 22 16, 18 19" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" fill="none"/></svg>`,
    bronn_defensiva: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="8" height="6" rx="1" fill="#64748b" stroke="#d97706" stroke-width="1.5"/><rect x="13" y="5" width="8" height="6" rx="1" fill="#94a3b8" stroke="#d97706" stroke-width="1.5"/><rect x="3" y="13" width="11" height="6" rx="1" fill="#475569" stroke="#f59e0b" stroke-width="1.5"/><rect x="16" y="13" width="5" height="6" rx="1" fill="#64748b" stroke="#d97706" stroke-width="1.5"/></svg>`
});

// SVGs DAS ANIMAÇÕES DE HABILIDADE (NOX, ÍRIS E BRONN)
const SVG_EFEITOS_HABILIDADES = Object.freeze({
    arcoSombrio: `<svg viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradArcoNox" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c084fc" stop-opacity="0.15"/><stop offset="55%" stop-color="#a855f7" stop-opacity="0.95"/><stop offset="100%" stop-color="#f3e8ff" stop-opacity="1"/></linearGradient></defs><path d="M24 12 C86 24, 108 66, 32 118 C68 78, 66 42, 24 12 Z" fill="url(#gradArcoNox)"/><path d="M36 22 C84 36, 98 68, 42 108" fill="none" stroke="#f5d0fe" stroke-width="3" stroke-linecap="round"/></svg>`,
    silhuetaNox: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg"><path d="M36 44 C36 24, 62 24, 64 44 L72 98 L62 98 L64 150 L52 150 L48 106 L44 150 L32 150 L36 98 L24 98 Z" fill="#581c87" fill-opacity="0.65" stroke="#c084fc" stroke-width="2" stroke-dasharray="4 3"/></svg>`,
    runasIris: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="32" fill="rgba(45,212,191,0.14)" stroke="#38bdf8" stroke-width="2.2"/><circle cx="40" cy="40" r="23" fill="none" stroke="#fde047" stroke-width="1.4" stroke-dasharray="4 4"/><polygon points="40,10 66,40 40,70 14,40" fill="none" stroke="#5eead4" stroke-width="1.6"/><circle cx="40" cy="40" r="5" fill="#e0f2fe"/></svg>`,
    barreiraIris: `<svg viewBox="0 0 70 170" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradBarreiraIris" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ccfbf1" stop-opacity="0.52"/><stop offset="50%" stop-color="#2dd4bf" stop-opacity="0.28"/><stop offset="100%" stop-color="#0284c7" stop-opacity="0.45"/></linearGradient></defs><polygon points="18,12 50,28 58,86 50,144 18,160 10,86" fill="url(#gradBarreiraIris)" stroke="#67e8f9" stroke-width="2.6"/><polyline points="18,12 34,86 18,160" fill="none" stroke="#e0f2fe" stroke-width="1.4" stroke-opacity="0.75"/><polyline points="50,28 34,86 50,144" fill="none" stroke="#5eead4" stroke-width="1.4" stroke-opacity="0.75"/><line x1="10" y1="86" x2="58" y2="86" stroke="#a5f3fc" stroke-width="1.3" stroke-opacity="0.7"/></svg>`,
    ondaAmbar: `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg"><path d="M22 18 C72 30, 84 60, 22 102" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/><path d="M36 28 C70 38, 78 60, 36 92" fill="none" stroke="#fef3c7" stroke-width="2.6" stroke-linecap="round"/></svg>`,
    auraEscudoBronn: `<svg viewBox="0 0 60 110" xmlns="http://www.w3.org/2000/svg"><path d="M10 10 L50 18 L47 76 L30 98 L13 76 Z" fill="rgba(251,191,36,0.18)" stroke="#fde047" stroke-width="3.2"/><path d="M17 18 L43 24 L41 72 L30 88 L19 72 Z" fill="none" stroke="#f59e0b" stroke-width="1.6"/></svg>`,
    muralhaBronn: `<svg viewBox="0 0 150 84" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradPlacaBronn" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#cbd5e1"/><stop offset="55%" stop-color="#64748b"/><stop offset="100%" stop-color="#334155"/></linearGradient></defs><polygon points="10,24 44,18 48,78 6,78" fill="url(#gradPlacaBronn)" stroke="#f59e0b" stroke-width="2.2"/><polygon points="48,14 102,14 106,78 44,78" fill="url(#gradPlacaBronn)" stroke="#fbbf24" stroke-width="2.5"/><polygon points="106,18 140,24 144,78 102,78" fill="url(#gradPlacaBronn)" stroke="#f59e0b" stroke-width="2.2"/><line x1="56" y1="30" x2="94" y2="30" stroke="#fde68a" stroke-width="2.2"/><line x1="54" y1="54" x2="96" y2="54" stroke="#f59e0b" stroke-width="2"/></svg>`,
    corteBasico: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M16 62 L64 18" stroke="#e2e8f0" stroke-width="4" stroke-linecap="round"/><path d="M24 66 L66 26" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/></svg>`,
    faiscaImpacto: `<svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg"><circle cx="35" cy="35" r="10" fill="#ffffff" fill-opacity="0.9"/><path d="M35 8 L35 20 M35 50 L35 62 M8 35 L20 35 M50 35 L62 35 M16 16 L24 24 M46 46 L54 54 M54 16 L46 24 M24 46 L16 54" stroke="#fde047" stroke-width="2.6" stroke-linecap="round"/></svg>`
});

// =============================
// CATÁLOGO DE PERSONAGENS
// =============================

const CATALOGO_CLASSES = Object.freeze({
    nox: Object.freeze({
        id: "nox",
        nomeBase: "Nox",
        classe: "Assassino",
        vida: 85,
        ataque: 34,
        defesa: 6,
        arteCorpo: "./img/personagens/nox-corpo.svg",
        ofensiva: Object.freeze({
            nome: "Golpe Sombrio",
            descricao: "Soma 12 ao ataque neste golpe.",
            icone: "nox_ofensiva"
        }),
        defensiva: Object.freeze({
            nome: "Passo Sombrio",
            descricao: "Esquiva o próximo golpe da rodada.",
            icone: "nox_defensiva"
        })
    }),
    iris: Object.freeze({
        id: "iris",
        nomeBase: "Íris",
        classe: "Mago",
        vida: 100,
        ataque: 30,
        defesa: 8,
        arteCorpo: "./img/personagens/iris-corpo.svg",
        ofensiva: Object.freeze({
            nome: "Raio Arcano",
            descricao: "Ignora metade da defesa base do alvo.",
            icone: "iris_ofensiva"
        }),
        defensiva: Object.freeze({
            nome: "Barreira Arcana",
            descricao: "Absorve até 12 de dano do próximo golpe.",
            icone: "iris_defensiva"
        })
    }),
    bronn: Object.freeze({
        id: "bronn",
        nomeBase: "Bronn",
        classe: "Tanque",
        vida: 135,
        ataque: 23,
        defesa: 14,
        arteCorpo: "./img/personagens/bronn-corpo.svg",
        ofensiva: Object.freeze({
            nome: "Investida de Escudo",
            descricao: "Soma 6 ao ataque e protege até 6 contra o próximo golpe após executar.",
            icone: "bronn_ofensiva"
        }),
        defensiva: Object.freeze({
            nome: "Muralha",
            descricao: "Reduz pela metade o próximo golpe.",
            icone: "bronn_defensiva"
        })
    })
});

const RECARGA_HABILIDADE = 2;
const LIMITE_RODADAS_SEM_DANO = 3;
const DURACAO_FADE_DERROTADO_MS = 350;
const DURACAO_DESLIZE_VENCEDOR_MS = 650;

// =============================
// FÁBRICA DE INSTÂNCIAS INDEPENDENTES
// =============================

function criarLutador(classeId, apelidoDigitado, numeroJogador) {
    const modelo = CATALOGO_CLASSES[classeId];

    if (!modelo) {
        return null;
    }

    const apelidoLimpo = typeof apelidoDigitado === "string"
        ? apelidoDigitado.trim().slice(0, 24)
        : "";

    const tagJogador = `J${numeroJogador}`;
    const nomeExibicao = apelidoLimpo !== ""
        ? `${apelidoLimpo} (${modelo.nomeBase})`
        : `${modelo.nomeBase} (${tagJogador})`;

    return {
        numeroJogador: numeroJogador,
        classeId: modelo.id,
        nomeBase: modelo.nomeBase,
        classe: modelo.classe,
        apelido: apelidoLimpo,
        nomeExibicao: nomeExibicao,
        arteCorpo: modelo.arteCorpo,
        vidaMax: modelo.vida,
        vidaAtual: modelo.vida,
        ataque: modelo.ataque,
        defesa: modelo.defesa,
        ofensiva: modelo.ofensiva,
        defensiva: modelo.defensiva,
        recargaOfensiva: 0,
        recargaDefensiva: 0,
        efeitos: {
            esquiva: false,
            barreira: 0,
            muralha: false,
            escudoInvestida: 0
        }
    };
}

function limparEfeitosRodada(lutador) {
    lutador.efeitos.esquiva = false;
    lutador.efeitos.barreira = 0;
    lutador.efeitos.muralha = false;
    lutador.efeitos.escudoInvestida = 0;
}

// =============================
// ESTADO DA BATALHA E SEQUENCIAMENTO VISUAL
// =============================

let estadoBatalha = "aguardando"; // "aguardando" | "em_andamento" | "encerrada"
let lutador1 = null;
let lutador2 = null;
let rodadaAtual = 0;
let rodadasSemDano = 0;
let animandoRodada = false;
let desfechoDisparado = false;
let tokenAnimacao = 0;
let timersAtivos = [];

// =============================
// INICIALIZAÇÃO DA ARENA
// =============================

document.addEventListener("DOMContentLoaded", () => {
    const formSelecao = document.querySelector("#formSelecao");

    if (!formSelecao) {
        return;
    }

    const painelSelecao = document.querySelector("#painelSelecao");
    const secaoCampoBatalha = document.querySelector("#secaoCampoBatalha");

    const selectJ1 = document.querySelector("#classeJ1");
    const inputApelidoJ1 = document.querySelector("#apelidoJ1");
    const previaJ1 = document.querySelector("#previaJ1");

    const selectJ2 = document.querySelector("#classeJ2");
    const inputApelidoJ2 = document.querySelector("#apelidoJ2");
    const previaJ2 = document.querySelector("#previaJ2");

    const mensagemValidacao = document.querySelector("#mensagemValidacao");
    const btnIniciar = document.querySelector("#btnIniciar");
    const btnAtacar = document.querySelector("#btnAtacar");
    const btnNovaBatalha = document.querySelector("#btnNovaBatalha");
    const resultado = document.querySelector("#resultado");

    // Painel de status da rodada
    const numeroRodadaTela = document.querySelector("#numeroRodada");
    const textoIniciativaTela = document.querySelector("#textoIniciativa");
    const contadorSemDanoTela = document.querySelector("#contadorSemDano");

    // Elementos Jogador 1
    const molduraRetratoJ1 = document.querySelector("#molduraRetratoJ1");
    const retratoJ1 = document.querySelector("#retratoJ1");
    const nomeAtacanteTela = document.querySelector("#nomeAtacante");
    const classeAtacanteTela = document.querySelector("#classeAtacanteTela");
    const ataqueAtacanteTela = document.querySelector("#ataqueAtacante");
    const defesaAtacanteTela = document.querySelector("#defesaAtacante");
    const vidaAtacanteTela = document.querySelector("#vidaAtacante");
    const vidaMaxAtacanteTela = document.querySelector("#vidaMaxAtacante");
    const vidaBarraAtacante = document.querySelector("#vidaBarraAtacante");
    const barraContainerAtacante = document.querySelector("#barraContainerAtacante");

    // Elementos Jogador 2
    const molduraRetratoJ2 = document.querySelector("#molduraRetratoJ2");
    const retratoJ2 = document.querySelector("#retratoJ2");
    const nomeDefensorTela = document.querySelector("#nomeDefensor");
    const classeDefensorTela = document.querySelector("#classeDefensorTela");
    const ataqueDefensorTela = document.querySelector("#ataqueDefensor");
    const defesaDefensorTela = document.querySelector("#defesaDefensor");
    const vidaDefensorTela = document.querySelector("#vidaDefensor");
    const vidaMaxDefensorTela = document.querySelector("#vidaMaxDefensor");
    const vidaBarraDefensor = document.querySelector("#vidaBarraDefensor");
    const barraContainerDefensor = document.querySelector("#barraContainerDefensor");

    // Palco central, camadas de efeitos e letreiro de desfecho
    const palcoArena = document.querySelector("#palcoArena");
    const camadaEfeitosArena = document.querySelector("#camadaEfeitosArena");
    const bannerDesfecho = document.querySelector("#bannerDesfecho");
    const tituloDesfecho = document.querySelector("#tituloDesfecho");
    const subtituloDesfecho = document.querySelector("#subtituloDesfecho");

    const palcoLutadorJ1 = document.querySelector("#palcoLutadorJ1");
    const efeitosLutadorJ1 = document.querySelector("#efeitosLutadorJ1");
    const plaquetaJ1 = document.querySelector("#plaquetaJ1");
    const figuraJ1 = document.querySelector("#figuraJ1");

    const palcoLutadorJ2 = document.querySelector("#palcoLutadorJ2");
    const efeitosLutadorJ2 = document.querySelector("#efeitosLutadorJ2");
    const plaquetaJ2 = document.querySelector("#plaquetaJ2");
    const figuraJ2 = document.querySelector("#figuraJ2");

    // Controles de ação por jogador
    const controlesAcao = {
        1: {
            basico: document.querySelector("#radioBasicoJ1"),
            iconeBasico: document.querySelector("#iconeBasicoJ1"),
            ofensiva: document.querySelector("#radioOfensivaJ1"),
            iconeOfensiva: document.querySelector("#iconeOfensivaJ1"),
            defensiva: document.querySelector("#radioDefensivaJ1"),
            iconeDefensiva: document.querySelector("#iconeDefensivaJ1"),
            nomeOfensiva: document.querySelector("#nomeOfensivaJ1"),
            descOfensiva: document.querySelector("#descOfensivaJ1"),
            statusOfensiva: document.querySelector("#statusOfensivaJ1"),
            nomeDefensiva: document.querySelector("#nomeDefensivaJ1"),
            descDefensiva: document.querySelector("#descDefensivaJ1"),
            statusDefensiva: document.querySelector("#statusDefensivaJ1")
        },
        2: {
            basico: document.querySelector("#radioBasicoJ2"),
            iconeBasico: document.querySelector("#iconeBasicoJ2"),
            ofensiva: document.querySelector("#radioOfensivaJ2"),
            iconeOfensiva: document.querySelector("#iconeOfensivaJ2"),
            defensiva: document.querySelector("#radioDefensivaJ2"),
            iconeDefensiva: document.querySelector("#iconeDefensivaJ2"),
            nomeOfensiva: document.querySelector("#nomeOfensivaJ2"),
            descOfensiva: document.querySelector("#descOfensivaJ2"),
            statusOfensiva: document.querySelector("#statusOfensivaJ2"),
            nomeDefensiva: document.querySelector("#nomeDefensivaJ2"),
            descDefensiva: document.querySelector("#descDefensivaJ2"),
            statusDefensiva: document.querySelector("#statusDefensivaJ2")
        }
    };

    function prefereMovimentoReduzido() {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    function limparTimersAtivos() {
        for (const timerId of timersAtivos) {
            clearTimeout(timerId);
        }
        timersAtivos = [];
    }

    function agendarTimer(callback, atrasoMs, tokenAtual) {
        const timerId = setTimeout(() => {
            timersAtivos = timersAtivos.filter((id) => id !== timerId);
            if (tokenAtual !== tokenAnimacao) {
                return;
            }
            callback();
        }, atrasoMs);
        timersAtivos.push(timerId);
        return timerId;
    }

    function esperarCancelavel(ms, tokenAtual) {
        if (prefereMovimentoReduzido() || ms <= 0) {
            return Promise.resolve(tokenAtual === tokenAnimacao);
        }

        return new Promise((resolve) => {
            agendarTimer(() => {
                resolve(tokenAtual === tokenAnimacao);
            }, ms, tokenAtual);
        });
    }

    function obterRefsSlot(numeroJogador) {
        return numeroJogador === 1
            ? { slot: palcoLutadorJ1, efeitos: efeitosLutadorJ1, figura: figuraJ1 }
            : { slot: palcoLutadorJ2, efeitos: efeitosLutadorJ2, figura: figuraJ2 };
    }

    function limparCamadasEfeitosHabilidades() {
        camadaEfeitosArena.replaceChildren();
        efeitosLutadorJ1.replaceChildren();
        efeitosLutadorJ2.replaceChildren();

        const classesTemporarias = [
            "em-avanco",
            "em-retorno",
            "nox-preparando",
            "nox-esquivando",
            "bronn-preparando",
            "bronn-plantando",
            "lutador-atingido"
        ];

        for (const slot of [palcoLutadorJ1, palcoLutadorJ2]) {
            slot.classList.remove(...classesTemporarias);
            slot.style.removeProperty("--deslocamento-x");
            slot.style.removeProperty("--esquiva-x");
        }
    }

    function resetarVisualDesfecho() {
        tokenAnimacao += 1;
        limparTimersAtivos();
        limparCamadasEfeitosHabilidades();

        animandoRodada = false;
        desfechoDisparado = false;

        palcoArena.classList.remove("vitoria-revelada", "empate-revelado");
        palcoArena.removeAttribute("data-desfecho");

        bannerDesfecho.setAttribute("aria-hidden", "true");
        tituloDesfecho.textContent = "";
        subtituloDesfecho.textContent = "";

        for (const slot of [palcoLutadorJ1, palcoLutadorJ2]) {
            slot.classList.remove("lutador-derrotado", "lutador-vencedor", "vencedor-centralizado");
        }
    }

    // =============================
    // MOTOR VISUAL DAS HABILIDADES
    // =============================

    function obterMetricasCombate(atacanteNum, defensorNum, defesaAtivaTipo) {
        const arenaRect = palcoArena.getBoundingClientRect();
        const refsAtk = obterRefsSlot(atacanteNum);
        const refsDef = obterRefsSlot(defensorNum);
        const rectAtk = refsAtk.figura.getBoundingClientRect();
        const rectDef = refsDef.figura.getBoundingClientRect();

        const dir = atacanteNum === 1 ? 1 : -1;
        const atkCenterX = rectAtk.left - arenaRect.left + rectAtk.width * 0.5;
        const atkCenterY = rectAtk.top - arenaRect.top + rectAtk.height * 0.52;
        const defCenterX = rectDef.left - arenaRect.left + rectDef.width * 0.5;
        const defCenterY = rectDef.top - arenaRect.top + rectDef.height * 0.52;

        // Origem do feixe de Íris alinhada ao círculo de runas à frente dela
        const origemRaioX = atkCenterX + dir * (rectAtk.width * 0.34);
        const origemRaioY = rectAtk.top - arenaRect.top + rectAtk.height * 0.36;

        // Ponto real de contato: borda da defesa ativa ou corpo do alvo
        let alvoX = defCenterX - dir * (rectDef.width * 0.08);
        let alvoY = defCenterY;

        if (defesaAtivaTipo === "barreira") {
            alvoX = defCenterX - dir * (rectDef.width * 0.36);
            alvoY = defCenterY;
        } else if (defesaAtivaTipo === "muralha") {
            alvoX = defCenterX - dir * (rectDef.width * 0.32);
            alvoY = rectDef.top - arenaRect.top + rectDef.height * 0.72;
        } else if (defesaAtivaTipo === "escudoInvestida") {
            alvoX = defCenterX - dir * (rectDef.width * 0.24);
            alvoY = rectDef.top - arenaRect.top + rectDef.height * 0.58;
        }

        const distanciaBruta = Math.abs(alvoX - atkCenterX) - rectDef.width * 0.28;
        const alcanceMaximo = Math.max(36, arenaRect.width * 0.44);
        const distanciaAvanco = Math.max(26, Math.min(distanciaBruta, alcanceMaximo)) * dir;

        return {
            arenaWidth: arenaRect.width,
            arenaHeight: arenaRect.height,
            dir,
            atkCenterX,
            atkCenterY,
            defCenterX,
            defCenterY,
            origemRaioX,
            origemRaioY,
            alvoX,
            alvoY,
            distanciaAvanco
        };
    }

    function mostrarBadgeCombate(numeroJogador, texto, variante = "") {
        const { efeitos } = obterRefsSlot(numeroJogador);
        const badge = document.createElement("span");
        badge.className = `badge-combate ${variante}`.trim();
        badge.textContent = texto;
        efeitos.appendChild(badge);

        setTimeout(() => {
            badge.remove();
        }, 860);
    }

    function emitirFaiscaImpacto(x, y) {
        const faisca = document.createElement("div");
        faisca.className = "faisca-impacto";
        faisca.style.left = `${x}px`;
        faisca.style.top = `${y}px`;
        faisca.innerHTML = SVG_EFEITOS_HABILIDADES.faiscaImpacto;
        camadaEfeitosArena.appendChild(faisca);

        setTimeout(() => {
            faisca.remove();
        }, 320);
    }

    function ativarPosturaVisual(lutador, tokenAtual) {
        const { slot, efeitos } = obterRefsSlot(lutador.numeroJogador);

        if (lutador.classeId === "nox") {
            const existente = efeitos.querySelector(".nox-nevoa");
            if (existente) {
                existente.remove();
            }
            const nevoa = document.createElement("div");
            nevoa.className = "nox-nevoa";
            efeitos.appendChild(nevoa);
            return;
        }

        if (lutador.classeId === "iris") {
            const existente = efeitos.querySelector(".iris-barreira");
            if (existente) {
                existente.remove();
            }
            const barreira = document.createElement("div");
            barreira.className = "iris-barreira";
            barreira.innerHTML = SVG_EFEITOS_HABILIDADES.barreiraIris;
            efeitos.appendChild(barreira);
            return;
        }

        if (lutador.classeId === "bronn") {
            const existente = efeitos.querySelector(".bronn-muralha");
            if (existente) {
                existente.remove();
            }
            slot.classList.add("bronn-plantando");
            const muralha = document.createElement("div");
            muralha.className = "bronn-muralha";
            muralha.innerHTML = SVG_EFEITOS_HABILIDADES.muralhaBronn;
            efeitos.appendChild(muralha);

            agendarTimer(() => {
                slot.classList.remove("bronn-plantando");
            }, 340, tokenAtual);
        }
    }

    function dissiparPosturaVisual(numeroJogador, seletor) {
        const { efeitos } = obterRefsSlot(numeroJogador);
        const el = efeitos.querySelector(seletor);
        if (!el) {
            return;
        }

        if (seletor === ".bronn-muralha") {
            el.classList.add("recolhendo");
        } else {
            el.classList.add("dissipando");
        }

        setTimeout(() => {
            el.remove();
        }, 360);
    }

    function ativarAuraEscudoBronn(numeroJogador) {
        const { efeitos } = obterRefsSlot(numeroJogador);
        const existente = efeitos.querySelector(".bronn-aura-escudo");
        if (existente) {
            existente.remove();
        }
        const aura = document.createElement("div");
        aura.className = "bronn-aura-escudo";
        aura.innerHTML = SVG_EFEITOS_HABILIDADES.auraEscudoBronn;
        efeitos.appendChild(aura);
    }

    async function aplicarReacaoContato(evento, metricas, tokenAtual) {
        const defensor = evento.defensor;
        const refsDef = obterRefsSlot(defensor.numeroJogador);

        // 1. Esquiva de Nox (Passo Sombrio)
        if (evento.esquivou) {
            const decoy = document.createElement("div");
            decoy.className = "nox-silhueta-esquiva";
            decoy.innerHTML = SVG_EFEITOS_HABILIDADES.silhuetaNox;
            refsDef.efeitos.appendChild(decoy);

            const recuoX = defensor.numeroJogador === 1 ? -22 : 22;
            refsDef.slot.style.setProperty("--esquiva-x", `${recuoX}px`);
            refsDef.slot.classList.add("nox-esquivando");

            mostrarBadgeCombate(defensor.numeroJogador, "Esquivou!", "esquiva");
            dissiparPosturaVisual(defensor.numeroJogador, ".nox-nevoa");

            await esperarCancelavel(340, tokenAtual);
            refsDef.slot.classList.remove("nox-esquivando");
            refsDef.slot.style.removeProperty("--esquiva-x");
            setTimeout(() => decoy.remove(), 220);
            return;
        }

        // 2. Barreira Arcana de Íris absorveu parte ou todo o golpe
        if (evento.absorvidoBarreira > 0) {
            const barreira = refsDef.efeitos.querySelector(".iris-barreira");
            emitirFaiscaImpacto(metricas.alvoX, metricas.alvoY);

            if (barreira) {
                barreira.classList.remove("absorvendo");
                void barreira.offsetWidth;
                barreira.classList.add("absorvendo");
            }

            if (evento.danoFinal > 0) {
                mostrarBadgeCombate(defensor.numeroJogador, `Absorveu ${evento.absorvidoBarreira}`, "escudo");
                await esperarCancelavel(160, tokenAtual);
                dissiparPosturaVisual(defensor.numeroJogador, ".iris-barreira");

                refsDef.slot.classList.remove("lutador-atingido");
                void refsDef.slot.offsetWidth;
                refsDef.slot.classList.add("lutador-atingido");
                mostrarBadgeCombate(defensor.numeroJogador, `-${evento.danoFinal}`);
            } else {
                mostrarBadgeCombate(defensor.numeroJogador, `Bloqueado (${evento.absorvidoBarreira})`, "escudo");
                await esperarCancelavel(220, tokenAtual);
                dissiparPosturaVisual(defensor.numeroJogador, ".iris-barreira");
            }
            return;
        }

        // 3. Muralha de Bronn reduziu o golpe pela metade
        if (evento.muralhaAtivada) {
            const muralha = refsDef.efeitos.querySelector(".bronn-muralha");
            emitirFaiscaImpacto(metricas.alvoX, metricas.alvoY);

            if (muralha) {
                muralha.classList.remove("muralha-tremor");
                void muralha.offsetWidth;
                muralha.classList.add("muralha-tremor");
            }

            if (evento.danoFinal > 0) {
                mostrarBadgeCombate(defensor.numeroJogador, `Muralha • -${evento.danoFinal}`, "ambar");
                await esperarCancelavel(150, tokenAtual);
                refsDef.slot.classList.remove("lutador-atingido");
                void refsDef.slot.offsetWidth;
                refsDef.slot.classList.add("lutador-atingido");
            } else {
                mostrarBadgeCombate(defensor.numeroJogador, "Muralha bloqueou!", "ambar");
                await esperarCancelavel(180, tokenAtual);
            }

            dissiparPosturaVisual(defensor.numeroJogador, ".bronn-muralha");
            return;
        }

        // 4. Proteção da Investida de Escudo de Bronn absorveu dano na mesma rodada
        if (evento.absorvidoInvestida > 0) {
            const aura = refsDef.efeitos.querySelector(".bronn-aura-escudo");
            emitirFaiscaImpacto(metricas.alvoX, metricas.alvoY);

            if (aura) {
                aura.classList.remove("brilhando");
                void aura.offsetWidth;
                aura.classList.add("brilhando");
            }

            if (evento.danoFinal > 0) {
                mostrarBadgeCombate(defensor.numeroJogador, `Escudo -${evento.absorvidoInvestida} • -${evento.danoFinal}`, "ambar");
                await esperarCancelavel(140, tokenAtual);
                refsDef.slot.classList.remove("lutador-atingido");
                void refsDef.slot.offsetWidth;
                refsDef.slot.classList.add("lutador-atingido");
            } else {
                mostrarBadgeCombate(defensor.numeroJogador, `Escudo absorveu ${evento.absorvidoInvestida}`, "ambar");
                await esperarCancelavel(180, tokenAtual);
            }

            dissiparPosturaVisual(defensor.numeroJogador, ".bronn-aura-escudo");
            return;
        }

        // 5. Impacto direto padrão
        emitirFaiscaImpacto(metricas.alvoX, metricas.alvoY);
        if (evento.danoFinal > 0) {
            refsDef.slot.classList.remove("lutador-atingido");
            void refsDef.slot.offsetWidth;
            refsDef.slot.classList.add("lutador-atingido");
            mostrarBadgeCombate(defensor.numeroJogador, `-${evento.danoFinal}`);
        } else {
            mostrarBadgeCombate(defensor.numeroJogador, "0 de dano", "ambar");
        }
    }

    async function executarGolpeVisual(evento, tokenAtual) {
        const atacante = evento.atacante;
        const defensor = evento.defensor;
        const refsAtk = obterRefsSlot(atacante.numeroJogador);
        const metricas = obterMetricasCombate(
            atacante.numeroJogador,
            defensor.numeroJogador,
            evento.defesaAtivaAntesDoGolpe
        );

        // NOX — GOLPE SOMBRIO
        if (evento.tipoAcao === "ofensiva" && atacante.classeId === "nox") {
            refsAtk.slot.classList.add("nox-preparando");
            if (!await esperarCancelavel(140, tokenAtual)) return;

            refsAtk.slot.classList.remove("nox-preparando");
            const rastro = document.createElement("div");
            rastro.className = "nox-rastro";
            refsAtk.efeitos.appendChild(rastro);

            refsAtk.slot.style.setProperty("--deslocamento-x", `${metricas.distanciaAvanco}px`);
            refsAtk.slot.classList.add("em-avanco");
            if (!await esperarCancelavel(210, tokenAtual)) return;

            const arco = document.createElement("div");
            arco.className = "arco-sombrio";
            arco.style.left = `${metricas.alvoX}px`;
            arco.style.top = `${metricas.alvoY}px`;
            arco.style.setProperty("--dir", String(metricas.dir));
            arco.innerHTML = SVG_EFEITOS_HABILIDADES.arcoSombrio;
            camadaEfeitosArena.appendChild(arco);
            setTimeout(() => arco.remove(), 360);

            atualizarCardsArena();
            await aplicarReacaoContato(evento, metricas, tokenAtual);
            if (tokenAtual !== tokenAnimacao) return;

            refsAtk.slot.classList.remove("em-avanco");
            refsAtk.slot.classList.add("em-retorno");
            await esperarCancelavel(280, tokenAtual);
            refsAtk.slot.classList.remove("em-retorno");
            rastro.remove();
            return;
        }

        // ÍRIS — RAIO ARCANO
        if (evento.tipoAcao === "ofensiva" && atacante.classeId === "iris") {
            const carga = document.createElement("div");
            carga.className = "iris-carga-cajado";
            refsAtk.efeitos.appendChild(carga);

            const runas = document.createElement("div");
            runas.className = "iris-runas";
            runas.innerHTML = SVG_EFEITOS_HABILIDADES.runasIris;
            refsAtk.efeitos.appendChild(runas);

            if (!await esperarCancelavel(240, tokenAtual)) return;

            const w = Math.max(1, Math.round(metricas.arenaWidth));
            const h = Math.max(1, Math.round(metricas.arenaHeight));
            const svgBeam = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svgBeam.setAttribute("class", "svg-raio-arcano");
            svgBeam.setAttribute("viewBox", `0 0 ${w} ${h}`);
            svgBeam.innerHTML = `
                <line x1="${metricas.origemRaioX}" y1="${metricas.origemRaioY}" x2="${metricas.alvoX}" y2="${metricas.alvoY}" stroke="#0284c7" stroke-width="14" stroke-opacity="0.38" stroke-linecap="round"/>
                <line x1="${metricas.origemRaioX}" y1="${metricas.origemRaioY}" x2="${metricas.alvoX}" y2="${metricas.alvoY}" stroke="#2dd4bf" stroke-width="7" stroke-linecap="round"/>
                <line x1="${metricas.origemRaioX}" y1="${metricas.origemRaioY}" x2="${metricas.alvoX}" y2="${metricas.alvoY}" stroke="#f0fdfa" stroke-width="2.6" stroke-linecap="round"/>
                <circle cx="${metricas.alvoX}" cy="${metricas.alvoY}" r="16" fill="#5eead4" fill-opacity="0.55"/>
                <circle cx="${metricas.alvoX}" cy="${metricas.alvoY}" r="8" fill="#ffffff"/>
            `;
            camadaEfeitosArena.appendChild(svgBeam);
            setTimeout(() => svgBeam.remove(), 400);

            atualizarCardsArena();
            await aplicarReacaoContato(evento, metricas, tokenAtual);
            if (tokenAtual !== tokenAnimacao) return;

            await esperarCancelavel(220, tokenAtual);
            carga.remove();
            runas.remove();
            return;
        }

        // BRONN — INVESTIDA DE ESCUDO
        if (evento.tipoAcao === "ofensiva" && atacante.classeId === "bronn") {
            refsAtk.slot.classList.add("bronn-preparando");
            if (!await esperarCancelavel(150, tokenAtual)) return;

            refsAtk.slot.classList.remove("bronn-preparando");
            refsAtk.slot.style.setProperty("--deslocamento-x", `${metricas.distanciaAvanco}px`);
            refsAtk.slot.classList.add("em-avanco");
            if (!await esperarCancelavel(230, tokenAtual)) return;

            const onda = document.createElement("div");
            onda.className = "onda-ambar";
            onda.style.left = `${metricas.alvoX}px`;
            onda.style.top = `${metricas.alvoY}px`;
            onda.style.setProperty("--dir", String(metricas.dir));
            onda.innerHTML = SVG_EFEITOS_HABILIDADES.ondaAmbar;
            camadaEfeitosArena.appendChild(onda);
            setTimeout(() => onda.remove(), 360);

            atualizarCardsArena();
            await aplicarReacaoContato(evento, metricas, tokenAtual);
            if (tokenAtual !== tokenAnimacao) return;

            refsAtk.slot.classList.remove("em-avanco");
            refsAtk.slot.classList.add("em-retorno");
            await esperarCancelavel(280, tokenAtual);
            refsAtk.slot.classList.remove("em-retorno");

            if (evento.ganhouEscudoInvestida && atacante.vidaAtual > 0) {
                ativarAuraEscudoBronn(atacante.numeroJogador);
            }
            return;
        }

        // ATAQUE BÁSICO
        refsAtk.slot.style.setProperty("--deslocamento-x", `${metricas.distanciaAvanco * 0.78}px`);
        refsAtk.slot.classList.add("em-avanco");
        if (!await esperarCancelavel(200, tokenAtual)) return;

        const corte = document.createElement("div");
        corte.className = "corte-basico";
        corte.style.left = `${metricas.alvoX}px`;
        corte.style.top = `${metricas.alvoY}px`;
        corte.style.setProperty("--dir", String(metricas.dir));
        corte.innerHTML = SVG_EFEITOS_HABILIDADES.corteBasico;
        camadaEfeitosArena.appendChild(corte);
        setTimeout(() => corte.remove(), 280);

        atualizarCardsArena();
        await aplicarReacaoContato(evento, metricas, tokenAtual);
        if (tokenAtual !== tokenAnimacao) return;

        refsAtk.slot.classList.remove("em-avanco");
        refsAtk.slot.classList.add("em-retorno");
        await esperarCancelavel(240, tokenAtual);
        refsAtk.slot.classList.remove("em-retorno");
    }

    // =============================
    // SEQUÊNCIA DE VITÓRIA E EMPATE
    // =============================

    function dispararSequenciaVitoria(vencedor, derrotado) {
        if (desfechoDisparado || !vencedor || !derrotado) {
            return;
        }

        desfechoDisparado = true;
        const tokenAtual = tokenAnimacao;

        const slotVencedor = vencedor.numeroJogador === 1 ? palcoLutadorJ1 : palcoLutadorJ2;
        const slotDerrotado = derrotado.numeroJogador === 1 ? palcoLutadorJ1 : palcoLutadorJ2;
        const nomeExibidoVencedor = vencedor.apelido !== "" ? vencedor.apelido : vencedor.nomeExibicao;

        palcoArena.dataset.desfecho = "vitoria";
        slotVencedor.classList.add("lutador-vencedor");

        tituloDesfecho.textContent = "VITÓRIA";
        subtituloDesfecho.textContent = nomeExibidoVencedor;

        if (prefereMovimentoReduzido()) {
            slotDerrotado.classList.add("lutador-derrotado");
            slotVencedor.classList.add("vencedor-centralizado");
            palcoArena.classList.add("vitoria-revelada");
            bannerDesfecho.setAttribute("aria-hidden", "false");
            return;
        }

        // Etapa 1 (0 ms -> 350 ms): derrotado, sombra e etiqueta somem suavemente
        slotDerrotado.classList.add("lutador-derrotado");

        // Etapa 2 (350 ms -> 1000 ms): vencedor desliza até o meio da plataforma
        agendarTimer(() => {
            if (estadoBatalha !== "encerrada") {
                return;
            }
            slotVencedor.classList.add("vencedor-centralizado");
        }, DURACAO_FADE_DERROTADO_MS, tokenAtual);

        // Etapa 3 (1000 ms): acende halo dourado e revela VITÓRIA + nome acima
        agendarTimer(() => {
            if (estadoBatalha !== "encerrada") {
                return;
            }
            palcoArena.classList.add("vitoria-revelada");
            bannerDesfecho.setAttribute("aria-hidden", "false");
        }, DURACAO_FADE_DERROTADO_MS + DURACAO_DESLIZE_VENCEDOR_MS, tokenAtual);
    }

    function dispararSequenciaEmpate() {
        if (desfechoDisparado) {
            return;
        }

        desfechoDisparado = true;

        palcoArena.dataset.desfecho = "empate";
        tituloDesfecho.textContent = "EMPATE";
        subtituloDesfecho.textContent = `${LIMITE_RODADAS_SEM_DANO} rodadas consecutivas sem dano`;

        palcoArena.classList.add("empate-revelado");
        bannerDesfecho.setAttribute("aria-hidden", "false");
    }

    function renderizarArtePersonagem(container, classeId, textoAlternativo) {
        container.replaceChildren();
        const modelo = CATALOGO_CLASSES[classeId];

        if (!modelo) {
            container.innerHTML = ARTES_PERSONAGENS_FALLBACK.neutro;
            if (textoAlternativo) {
                container.setAttribute("aria-label", textoAlternativo);
            }
            return;
        }

        const img = document.createElement("img");
        img.src = modelo.arteCorpo;
        img.alt = textoAlternativo || `${modelo.nomeBase} — ${modelo.classe}`;
        img.addEventListener("error", () => {
            container.innerHTML = ARTES_PERSONAGENS_FALLBACK[modelo.id] || ARTES_PERSONAGENS_FALLBACK.neutro;
        }, { once: true });

        container.appendChild(img);
        if (textoAlternativo) {
            container.setAttribute("aria-label", textoAlternativo);
        }
    }

    function renderizarIconeHabilidade(container, chaveIcone) {
        container.innerHTML = ICONES_HABILIDADES_SVG[chaveIcone] || ICONES_HABILIDADES_SVG.basico;
    }

    function renderizarPrevia(classeId, apelido, containerPrevia) {
        containerPrevia.replaceChildren();

        const modelo = CATALOGO_CLASSES[classeId];
        if (!modelo) {
            const pVazio = document.createElement("p");
            pVazio.className = "previa-vazia";
            pVazio.textContent = "Escolha um personagem para visualizar classe e atributos.";
            containerPrevia.appendChild(pVazio);
            return;
        }

        const apelidoLimpo = apelido.trim();

        const pTitulo = document.createElement("p");
        const strongTitulo = document.createElement("strong");
        strongTitulo.textContent = apelidoLimpo !== ""
            ? `${apelidoLimpo} — ${modelo.nomeBase} (${modelo.classe})`
            : `${modelo.nomeBase} — ${modelo.classe}`;
        pTitulo.appendChild(strongTitulo);

        const pAtributos = document.createElement("p");
        pAtributos.textContent = `❤️ Vida: ${modelo.vida} | ⚔️ Ataque: ${modelo.ataque} | 🛡️ Defesa: ${modelo.defesa}`;

        const pHabilidades = document.createElement("p");
        pHabilidades.textContent = `✨ ${modelo.ofensiva.nome} / 🛡️ ${modelo.defensiva.nome}`;

        containerPrevia.append(pTitulo, pAtributos, pHabilidades);
    }

    function atualizarBarraVida(vidaAtual, vidaMax, barraEl, containerEl) {
        const porcentagem = vidaMax > 0
            ? Math.max(0, Math.min(100, (vidaAtual / vidaMax) * 100))
            : 0;

        barraEl.style.width = `${porcentagem}%`;
        containerEl.setAttribute("aria-valuenow", String(Math.round(porcentagem)));

        if (porcentagem > 50) {
            barraEl.style.backgroundColor = "green";
        } else if (porcentagem > 20) {
            barraEl.style.backgroundColor = "orange";
        } else {
            barraEl.style.backgroundColor = "red";
        }
    }

    function atualizarBadgeRecarga(badgeEl, valorRecarga, ativo) {
        badgeEl.classList.remove("pronta", "em-recarga");

        if (!ativo) {
            badgeEl.textContent = "Aguardando";
            return;
        }

        if (valorRecarga > 0) {
            badgeEl.textContent = `Recarga: ${valorRecarga} ${valorRecarga === 1 ? "rodada" : "rodadas"}`;
            badgeEl.classList.add("em-recarga");
        } else {
            badgeEl.textContent = "Pronta";
            badgeEl.classList.add("pronta");
        }
    }

    function atualizarControlesAcaoJogador(numeroJogador, modeloOuLutador) {
        const ui = controlesAcao[numeroJogador];
        const emCombate = estadoBatalha === "em_andamento" && Boolean(lutador1) && Boolean(lutador2) && !animandoRodada;

        if (!animandoRodada) {
            ui.basico.checked = true;
        }
        ui.basico.disabled = !emCombate;
        renderizarIconeHabilidade(ui.iconeBasico, "basico");

        if (!modeloOuLutador) {
            ui.nomeOfensiva.textContent = "Habilidade Ofensiva";
            ui.descOfensiva.textContent = "Selecione um personagem.";
            ui.ofensiva.disabled = true;
            renderizarIconeHabilidade(ui.iconeOfensiva, "basico");
            atualizarBadgeRecarga(ui.statusOfensiva, 0, false);

            ui.nomeDefensiva.textContent = "Habilidade Defensiva";
            ui.descDefensiva.textContent = "Selecione um personagem.";
            ui.defensiva.disabled = true;
            renderizarIconeHabilidade(ui.iconeDefensiva, "basico");
            atualizarBadgeRecarga(ui.statusDefensiva, 0, false);
            return;
        }

        const recargaOfensiva = typeof modeloOuLutador.recargaOfensiva === "number"
            ? modeloOuLutador.recargaOfensiva
            : 0;
        const recargaDefensiva = typeof modeloOuLutador.recargaDefensiva === "number"
            ? modeloOuLutador.recargaDefensiva
            : 0;

        ui.nomeOfensiva.textContent = modeloOuLutador.ofensiva.nome;
        ui.descOfensiva.textContent = modeloOuLutador.ofensiva.descricao;
        ui.ofensiva.disabled = !emCombate || recargaOfensiva > 0;
        renderizarIconeHabilidade(ui.iconeOfensiva, modeloOuLutador.ofensiva.icone);
        atualizarBadgeRecarga(ui.statusOfensiva, recargaOfensiva, estadoBatalha === "em_andamento");

        ui.nomeDefensiva.textContent = modeloOuLutador.defensiva.nome;
        ui.descDefensiva.textContent = modeloOuLutador.defensiva.descricao;
        ui.defensiva.disabled = !emCombate || recargaDefensiva > 0;
        renderizarIconeHabilidade(ui.iconeDefensiva, modeloOuLutador.defensiva.icone);
        atualizarBadgeRecarga(ui.statusDefensiva, recargaDefensiva, estadoBatalha === "em_andamento");
    }

    function atualizarPainelRodada() {
        numeroRodadaTela.textContent = String(rodadaAtual);
        contadorSemDanoTela.textContent = `${rodadasSemDano} / ${LIMITE_RODADAS_SEM_DANO}`;

        if (estadoBatalha !== "em_andamento" || !lutador1 || !lutador2) {
            textoIniciativaTela.textContent = estadoBatalha === "encerrada"
                ? "Batalha encerrada"
                : "Aguardando início";
            return;
        }

        const primeiro = rodadaAtual % 2 === 1 ? lutador1 : lutador2;
        textoIniciativaTela.textContent = `J${primeiro.numeroJogador} (${primeiro.nomeExibicao})`;
    }

    function sincronizarSlotVisual(numeroJogador, dados) {
        const ehJ1 = numeroJogador === 1;
        const moldura = ehJ1 ? molduraRetratoJ1 : molduraRetratoJ2;
        const retrato = ehJ1 ? retratoJ1 : retratoJ2;
        const nomeEl = ehJ1 ? nomeAtacanteTela : nomeDefensorTela;
        const classeEl = ehJ1 ? classeAtacanteTela : classeDefensorTela;
        const atqEl = ehJ1 ? ataqueAtacanteTela : ataqueDefensorTela;
        const defEl = ehJ1 ? defesaAtacanteTela : defesaDefensorTela;
        const vidaEl = ehJ1 ? vidaAtacanteTela : vidaDefensorTela;
        const vidaMaxEl = ehJ1 ? vidaMaxAtacanteTela : vidaMaxDefensorTela;
        const barraEl = ehJ1 ? vidaBarraAtacante : vidaBarraDefensor;
        const barraCont = ehJ1 ? barraContainerAtacante : barraContainerDefensor;
        const palcoSlot = ehJ1 ? palcoLutadorJ1 : palcoLutadorJ2;
        const plaqueta = ehJ1 ? plaquetaJ1 : plaquetaJ2;
        const figura = ehJ1 ? figuraJ1 : figuraJ2;

        if (!dados) {
            moldura.dataset.classe = "";
            palcoSlot.dataset.classe = "";
            figura.dataset.classeRenderizada = "";
            renderizarArtePersonagem(retrato, "", "");
            renderizarArtePersonagem(figura, "", `Lutador do Jogador ${numeroJogador} não selecionado`);

            nomeEl.textContent = "---";
            classeEl.textContent = "Aguardando seleção";
            atqEl.textContent = "0";
            defEl.textContent = "0";
            vidaEl.textContent = "0";
            vidaMaxEl.textContent = "0";
            plaqueta.textContent = `J${numeroJogador} • Aguardando`;
            atualizarBarraVida(100, 100, barraEl, barraCont);
            atualizarControlesAcaoJogador(numeroJogador, null);
            return;
        }

        moldura.dataset.classe = dados.classeId;
        palcoSlot.dataset.classe = dados.classeId;

        const descAlt = `Jogador ${numeroJogador}: ${dados.nomeBase} (${dados.classe})`;
        if (figura.dataset.classeRenderizada !== dados.classeId) {
            renderizarArtePersonagem(retrato, dados.classeId, descAlt);
            renderizarArtePersonagem(figura, dados.classeId, descAlt);
            figura.dataset.classeRenderizada = dados.classeId;
        }

        nomeEl.textContent = dados.nomeExibicao;
        classeEl.textContent = `${dados.nomeBase} • ${dados.classe}`;
        atqEl.textContent = String(dados.ataque);
        defEl.textContent = String(dados.defesa);
        vidaEl.textContent = String(dados.vidaAtual);
        vidaMaxEl.textContent = String(dados.vidaMax);
        plaqueta.textContent = `J${numeroJogador} • ${dados.apelido !== "" ? dados.apelido : dados.nomeBase}`;

        atualizarBarraVida(dados.vidaAtual, dados.vidaMax, barraEl, barraCont);
        atualizarControlesAcaoJogador(numeroJogador, dados);
    }

    function atualizarCardsArena() {
        if (lutador1 && lutador2) {
            sincronizarSlotVisual(1, lutador1);
            sincronizarSlotVisual(2, lutador2);
        } else {
            figuraJ1.dataset.classeRenderizada = "";
            figuraJ2.dataset.classeRenderizada = "";
            const previaObj1 = criarLutador(selectJ1.value, inputApelidoJ1.value, 1);
            const previaObj2 = criarLutador(selectJ2.value, inputApelidoJ2.value, 2);
            sincronizarSlotVisual(1, previaObj1);
            sincronizarSlotVisual(2, previaObj2);
        }

        atualizarPainelRodada();
    }

    function definirVisibilidadeSelecao(visivel) {
        painelSelecao.hidden = !visivel;
        painelSelecao.classList.toggle("recolhido", !visivel);
        selectJ1.disabled = !visivel;
        inputApelidoJ1.disabled = !visivel;
        selectJ2.disabled = !visivel;
        inputApelidoJ2.disabled = !visivel;
        btnIniciar.disabled = !visivel;
    }

    function focarCampoDeBatalha() {
        secaoCampoBatalha.focus({ preventScroll: true });
        secaoCampoBatalha.scrollIntoView({
            behavior: prefereMovimentoReduzido() ? "auto" : "smooth",
            block: "start"
        });
    }

    function adicionarBlocoResultado(tituloTexto, linhasTexto) {
        const bloco = document.createElement("div");

        const titulo = document.createElement("h3");
        titulo.textContent = tituloTexto;
        bloco.appendChild(titulo);

        for (const linha of linhasTexto) {
            const p = document.createElement("p");
            p.textContent = linha;
            bloco.appendChild(p);
        }

        resultado.appendChild(bloco);
    }

    function obterAcaoSelecionada(numeroJogador, lutador) {
        const selecionado = document.querySelector(`input[name="acaoJ${numeroJogador}"]:checked`);
        const valor = selecionado ? selecionado.value : "basico";

        if (valor === "ofensiva" && lutador.recargaOfensiva === 0) {
            return "ofensiva";
        }

        if (valor === "defensiva" && lutador.recargaDefensiva === 0) {
            return "defensiva";
        }

        return "basico";
    }

    function aplicarPosturaDefensiva(lutador, linhasLog) {
        if (lutador.classeId === "nox") {
            lutador.efeitos.esquiva = true;
            linhasLog.push(
                `🛡️ ${lutador.nomeExibicao} ativou ${lutador.defensiva.nome} e vai esquivar o próximo golpe da rodada.`
            );
            return;
        }

        if (lutador.classeId === "iris") {
            lutador.efeitos.barreira = 12;
            linhasLog.push(
                `🛡️ ${lutador.nomeExibicao} ativou ${lutador.defensiva.nome} (absorve até 12 de dano do próximo golpe).`
            );
            return;
        }

        if (lutador.classeId === "bronn") {
            lutador.efeitos.muralha = true;
            linhasLog.push(
                `🛡️ ${lutador.nomeExibicao} ativou ${lutador.defensiva.nome} (reduz pela metade o próximo golpe).`
            );
        }
    }

    function executarGolpe(atacante, defensor, tipoAcao, linhasLog) {
        let nomeAcao = "Ataque Básico";
        let ataqueEfetivo = atacante.ataque;
        let defesaEfetiva = defensor.defesa;

        // Identifica qual defesa estava visível antes do impacto para alinhar feixes/ondas
        let defesaAtivaAntesDoGolpe = null;
        if (defensor.efeitos.barreira > 0) {
            defesaAtivaAntesDoGolpe = "barreira";
        } else if (defensor.efeitos.muralha) {
            defesaAtivaAntesDoGolpe = "muralha";
        } else if (defensor.efeitos.escudoInvestida > 0) {
            defesaAtivaAntesDoGolpe = "escudoInvestida";
        }

        if (tipoAcao === "ofensiva") {
            nomeAcao = atacante.ofensiva.nome;

            if (atacante.classeId === "nox") {
                ataqueEfetivo += 12;
            } else if (atacante.classeId === "iris") {
                defesaEfetiva = Math.floor(defensor.defesa / 2);
            } else if (atacante.classeId === "bronn") {
                ataqueEfetivo += 6;
            }
        }

        const danoBruto = Math.max(0, ataqueEfetivo - defesaEfetiva);
        let danoFinal = danoBruto;
        const notasDefesa = [];

        let esquivou = false;
        let muralhaAtivada = false;
        let absorvidoBarreira = 0;
        let absorvidoInvestida = 0;

        if (defensor.efeitos.esquiva) {
            defensor.efeitos.esquiva = false;
            danoFinal = 0;
            esquivou = true;
            notasDefesa.push(`${defensor.nomeExibicao} esquivou com ${defensor.defensiva.nome}`);
        } else {
            if (defensor.efeitos.muralha) {
                defensor.efeitos.muralha = false;
                muralhaAtivada = true;
                danoFinal = Math.floor(danoFinal / 2);
                notasDefesa.push(`Muralha reduziu o golpe pela metade`);
            }

            if (defensor.efeitos.barreira > 0) {
                absorvidoBarreira = Math.min(danoFinal, defensor.efeitos.barreira);
                defensor.efeitos.barreira = 0;
                danoFinal = Math.max(0, danoFinal - absorvidoBarreira);
                notasDefesa.push(`Barreira Arcana absorveu ${absorvidoBarreira} de dano`);
            }

            if (defensor.efeitos.escudoInvestida > 0) {
                absorvidoInvestida = Math.min(danoFinal, defensor.efeitos.escudoInvestida);
                defensor.efeitos.escudoInvestida = 0;
                danoFinal = Math.max(0, danoFinal - absorvidoInvestida);
                notasDefesa.push(`proteção da Investida absorveu ${absorvidoInvestida} de dano`);
            }
        }

        let ganhouEscudoInvestida = false;
        if (tipoAcao === "ofensiva" && atacante.classeId === "bronn") {
            atacante.efeitos.escudoInvestida = 6;
            ganhouEscudoInvestida = true;
            notasDefesa.push(`${atacante.nomeExibicao} ganhou proteção de até 6 contra o próximo golpe`);
        }

        defensor.vidaAtual = Math.max(0, defensor.vidaAtual - danoFinal);

        const complemento = notasDefesa.length > 0 ? ` (${notasDefesa.join("; ")})` : "";
        linhasLog.push(
            `⚔️ ${atacante.nomeExibicao} usou ${nomeAcao} contra ${defensor.nomeExibicao}${complemento}: ${danoFinal} de dano. Vida de ${defensor.nomeExibicao}: ${defensor.vidaAtual}.`
        );

        return {
            atacante,
            defensor,
            tipoAcao,
            danoFinal,
            esquivou,
            muralhaAtivada,
            absorvidoBarreira,
            absorvidoInvestida,
            ganhouEscudoInvestida,
            defesaAtivaAntesDoGolpe
        };
    }

    function encerrarBatalha(desfecho) {
        estadoBatalha = "encerrada";
        animandoRodada = false;
        btnAtacar.disabled = true;
        atualizarCardsArena();

        if (!desfecho) {
            return;
        }

        if (desfecho.tipo === "vitoria") {
            dispararSequenciaVitoria(desfecho.vencedor, desfecho.derrotado);
        } else if (desfecho.tipo === "empate") {
            dispararSequenciaEmpate();
        }
    }

    function iniciarBatalha(evento) {
        evento.preventDefault();
        mensagemValidacao.textContent = "";

        const classeId1 = selectJ1.value;
        const classeId2 = selectJ2.value;

        if (!CATALOGO_CLASSES[classeId1] && !CATALOGO_CLASSES[classeId2]) {
            mensagemValidacao.textContent = "Selecione os personagens do Jogador 1 e do Jogador 2 antes de iniciar.";
            return;
        }

        if (!CATALOGO_CLASSES[classeId1]) {
            mensagemValidacao.textContent = "Selecione um personagem válido para o Jogador 1.";
            selectJ1.focus();
            return;
        }

        if (!CATALOGO_CLASSES[classeId2]) {
            mensagemValidacao.textContent = "Selecione um personagem válido para o Jogador 2.";
            selectJ2.focus();
            return;
        }

        resetarVisualDesfecho();
        figuraJ1.dataset.classeRenderizada = "";
        figuraJ2.dataset.classeRenderizada = "";

        lutador1 = criarLutador(classeId1, inputApelidoJ1.value, 1);
        lutador2 = criarLutador(classeId2, inputApelidoJ2.value, 2);

        rodadaAtual = 1;
        rodadasSemDano = 0;
        estadoBatalha = "em_andamento";

        definirVisibilidadeSelecao(false);
        btnAtacar.disabled = false;

        atualizarCardsArena();
        resultado.replaceChildren();
        adicionarBlocoResultado("⚔️ Batalha iniciada!", [
            `${lutador1.nomeExibicao} (${lutador1.classe}) VS ${lutador2.nomeExibicao} (${lutador2.classe})`,
            `Rodada 1: iniciativa do Jogador 1 (${lutador1.nomeExibicao}). Escolha as ações e clique em Executar Rodada.`
        ]);

        focarCampoDeBatalha();
    }

    async function executarRodada() {
        if (estadoBatalha !== "em_andamento" || animandoRodada || !lutador1 || !lutador2) {
            return;
        }

        if (lutador1.vidaAtual <= 0 || lutador2.vidaAtual <= 0) {
            const vencedor = lutador1.vidaAtual > 0 ? lutador1 : lutador2;
            const derrotado = vencedor === lutador1 ? lutador2 : lutador1;
            encerrarBatalha({ tipo: "vitoria", vencedor, derrotado });
            return;
        }

        animandoRodada = true;
        btnAtacar.disabled = true;
        const tokenAtual = ++tokenAnimacao;

        // Bloqueia troca de rádios durante a sequência da rodada
        atualizarControlesAcaoJogador(1, lutador1);
        atualizarControlesAcaoJogador(2, lutador2);

        const acaoJ1 = obterAcaoSelecionada(1, lutador1);
        const acaoJ2 = obterAcaoSelecionada(2, lutador2);

        const ordem = rodadaAtual % 2 === 1
            ? [
                { lutador: lutador1, oponente: lutador2, acao: acaoJ1 },
                { lutador: lutador2, oponente: lutador1, acao: acaoJ2 }
            ]
            : [
                { lutador: lutador2, oponente: lutador1, acao: acaoJ2 },
                { lutador: lutador1, oponente: lutador2, acao: acaoJ1 }
            ];

        const [primeiroTurno, segundoTurno] = ordem;
        const linhasLog = [
            `Iniciativa da rodada ${rodadaAtual}: ${primeiroTurno.lutador.nomeExibicao}.`
        ];

        const defesasAtivadas = [];
        const golpesPlanejados = [];
        const habilidadesUsadas = [];
        let danoTotalRodada = 0;
        let nocauteInfo = null;

        // 1. Calcula defesas escolhidas primeiro
        for (const turno of ordem) {
            if (turno.acao === "defensiva") {
                aplicarPosturaDefensiva(turno.lutador, linhasLog);
                defesasAtivadas.push(turno.lutador);
            }
        }

        if (primeiroTurno.acao === "ofensiva" || primeiroTurno.acao === "defensiva") {
            habilidadesUsadas.push({ lutador: primeiroTurno.lutador, tipo: primeiroTurno.acao });
        }

        // 2. Calcula ação de quem tem iniciativa
        if (primeiroTurno.acao !== "defensiva") {
            const evento1 = executarGolpe(
                primeiroTurno.lutador,
                primeiroTurno.oponente,
                primeiroTurno.acao,
                linhasLog
            );
            danoTotalRodada += evento1.danoFinal;
            golpesPlanejados.push(evento1);
        }

        if (segundoTurno.lutador.vidaAtual <= 0) {
            nocauteInfo = {
                vencedor: primeiroTurno.lutador,
                derrotado: segundoTurno.lutador
            };
        } else {
            // 3. Calcula ação do segundo lutador se ainda puder agir
            if (segundoTurno.acao === "ofensiva" || segundoTurno.acao === "defensiva") {
                habilidadesUsadas.push({ lutador: segundoTurno.lutador, tipo: segundoTurno.acao });
            }

            if (segundoTurno.acao !== "defensiva") {
                const evento2 = executarGolpe(
                    segundoTurno.lutador,
                    segundoTurno.oponente,
                    segundoTurno.acao,
                    linhasLog
                );
                danoTotalRodada += evento2.danoFinal;
                golpesPlanejados.push(evento2);
            }

            if (primeiroTurno.lutador.vidaAtual <= 0) {
                nocauteInfo = {
                    vencedor: segundoTurno.lutador,
                    derrotado: primeiroTurno.lutador
                };
            }
        }

        // Atualiza o log textual da rodada
        resultado.replaceChildren();
        adicionarBlocoResultado(`📜 Resumo da Rodada ${rodadaAtual}`, linhasLog);

        // Executa a sequência visual sincronizada (ou pula imediatamente com prefers-reduced-motion)
        if (!prefereMovimentoReduzido()) {
            // Etapa A: defesas escolhidas entram primeiro
            if (defesasAtivadas.length > 0) {
                for (const lutadorDef of defesasAtivadas) {
                    ativarPosturaVisual(lutadorDef, tokenAtual);
                }
                if (!await esperarCancelavel(380, tokenAtual)) return;
            }

            // Etapa B: golpes em ordem de iniciativa
            for (const eventoGolpe of golpesPlanejados) {
                await executarGolpeVisual(eventoGolpe, tokenAtual);
                if (tokenAtual !== tokenAnimacao) return;
                if (!await esperarCancelavel(160, tokenAtual)) return;
            }
        }

        // Caso haja nocaute, finaliza o último golpe e inicia a animação de vitória
        if (nocauteInfo) {
            limparCamadasEfeitosHabilidades();
            adicionarBlocoResultado(`💀 ${nocauteInfo.derrotado.nomeExibicao} foi derrotado!`, [
                `Vitória de ${nocauteInfo.vencedor.nomeExibicao}! Clique em Nova Batalha para jogar novamente.`
            ]);
            encerrarBatalha({
                tipo: "vitoria",
                vencedor: nocauteInfo.vencedor,
                derrotado: nocauteInfo.derrotado
            });
            return;
        }

        // 4. Encerramento normal da rodada: dissipa defesas restantes e atualiza recargas
        if (!prefereMovimentoReduzido()) {
            dissiparPosturaVisual(1, ".nox-nevoa");
            dissiparPosturaVisual(1, ".iris-barreira");
            dissiparPosturaVisual(1, ".bronn-muralha");
            dissiparPosturaVisual(1, ".bronn-aura-escudo");
            dissiparPosturaVisual(2, ".nox-nevoa");
            dissiparPosturaVisual(2, ".iris-barreira");
            dissiparPosturaVisual(2, ".bronn-muralha");
            dissiparPosturaVisual(2, ".bronn-aura-escudo");
        }

        for (const lutador of [lutador1, lutador2]) {
            if (lutador.recargaOfensiva > 0) {
                lutador.recargaOfensiva -= 1;
            }
            if (lutador.recargaDefensiva > 0) {
                lutador.recargaDefensiva -= 1;
            }
            limparEfeitosRodada(lutador);
        }

        for (const usada of habilidadesUsadas) {
            if (usada.tipo === "ofensiva") {
                usada.lutador.recargaOfensiva = RECARGA_HABILIDADE;
            } else if (usada.tipo === "defensiva") {
                usada.lutador.recargaDefensiva = RECARGA_HABILIDADE;
            }
        }

        // 5. Empate após 3 rodadas seguidas sem dano
        if (danoTotalRodada === 0) {
            rodadasSemDano += 1;
            const avisoSemDano = `⚖️ Nenhum dano causado nesta rodada (${rodadasSemDano}/${LIMITE_RODADAS_SEM_DANO} rodadas seguidas sem dano).`;
            const ultimoBloco = resultado.lastElementChild;
            if (ultimoBloco) {
                const p = document.createElement("p");
                p.textContent = avisoSemDano;
                ultimoBloco.appendChild(p);
            }
        } else {
            rodadasSemDano = 0;
        }

        if (rodadasSemDano >= LIMITE_RODADAS_SEM_DANO) {
            adicionarBlocoResultado("🤝 Empate!", [
                `A batalha terminou empatada após ${LIMITE_RODADAS_SEM_DANO} rodadas consecutivas sem dano.`
            ]);
            encerrarBatalha({ tipo: "empate" });
            return;
        }

        rodadaAtual += 1;
        animandoRodada = false;
        btnAtacar.disabled = false;
        atualizarCardsArena();
    }

    function reiniciarBatalha() {
        resetarVisualDesfecho();

        estadoBatalha = "aguardando";
        lutador1 = null;
        lutador2 = null;
        rodadaAtual = 0;
        rodadasSemDano = 0;

        mensagemValidacao.textContent = "";
        resultado.replaceChildren();

        definirVisibilidadeSelecao(true);
        btnAtacar.disabled = true;

        renderizarPrevia(selectJ1.value, inputApelidoJ1.value, previaJ1);
        renderizarPrevia(selectJ2.value, inputApelidoJ2.value, previaJ2);
        atualizarCardsArena();
    }

    function aoAlterarSelecao() {
        mensagemValidacao.textContent = "";
        renderizarPrevia(selectJ1.value, inputApelidoJ1.value, previaJ1);
        renderizarPrevia(selectJ2.value, inputApelidoJ2.value, previaJ2);
        if (estadoBatalha === "aguardando") {
            atualizarCardsArena();
        }
    }

    // Prévia em tempo real
    selectJ1.addEventListener("change", aoAlterarSelecao);
    inputApelidoJ1.addEventListener("input", aoAlterarSelecao);
    selectJ2.addEventListener("change", aoAlterarSelecao);
    inputApelidoJ2.addEventListener("input", aoAlterarSelecao);

    // Eventos de controle
    formSelecao.addEventListener("submit", iniciarBatalha);
    btnAtacar.addEventListener("click", executarRodada);
    btnNovaBatalha.addEventListener("click", reiniciarBatalha);

    // Estado inicial
    reiniciarBatalha();
});
