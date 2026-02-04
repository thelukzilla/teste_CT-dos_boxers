// Fala Dev!
// Esse arquivo é o "cérebro" dos dados do site.
// A ideia de separar isso aqui é: se o cliente pedir para mudar o preço ou o telefone,
// você não precisa caçar lá no meio do código complexo. Muda aqui e o site atualiza sozinho.

// --- DADOS DE CONTATO ---
export const WHATSAPP_NUMBER = "5531995484675"; // Formato: 55 + DDD + Numero (sem traços)

// Aqui a gente já monta o link completo.
// O trecho "?text=..." cria aquela mensagem automática quando a pessoa clica.
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20boxe!`;

// --- O MENU DO TOPO ---
// Se precisar adicionar mais uma página, é só colocar mais uma linha aqui.
export const NAV_ITEMS = [
  { label: 'O Treino', href: '#benefits' },
  { label: 'Instrutor', href: '#instructor' },
  { label: 'Horários e Planos', href: '#pricing' },
  { label: 'Localização', href: '#location' },
];

// --- OS CARDS DE BENEFÍCIOS ---
// Sabe aqueles cards com ícones? Eles são gerados a partir dessa lista.
// O 'icon' tem que bater com o nome que a gente usa lá no componente Benefits (shield, flame, etc).
export const BENEFITS_LIST = [
  { title: "Auto Defesa", description: "Aprenda técnicas eficazes para se proteger e ganhar segurança.", icon: "shield" },
  { title: "Emagrecimento", description: "Queime calorias de forma intensa e divertida.", icon: "flame" },
  { title: "Condicionamento", description: "Melhore sua resistência cardiovascular e força física.", icon: "heart" },
  { title: "Autoestima", description: "Supere desafios e sinta-se mais confiante a cada treino.", icon: "star" },
  { title: "Combate à Ansiedade", description: "Libere o estresse e encontre equilíbrio mental.", icon: "brain" },
];

// --- TIPOS (TypeScript) ---
// Isso aqui é só pro VS Code te ajudar com o autocompletar e não deixar passar erro bobo.
export interface NavItem {
  label: string;
  href: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}