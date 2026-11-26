/**
 * Catálogo DEMONSTRATIVO de jogos e equipamentos disponíveis para jogar no local.
 * Todos os itens são fictícios (demo: true) até a casa cadastrar o acervo real.
 * Estrutura pronta para vir de um banco de dados.
 */
import cockpit from "@/assets/cockpit.jpg";
import racing from "@/assets/racing.jpg";
import pcGear from "@/assets/pc-gear.jpg";
import consoles from "@/assets/consoles.jpg";
import hero from "@/assets/hero-setup.jpg";

export type CategoryId = "cockpit" | "corrida" | "pc" | "switch" | "ps5";

export const CATEGORIES: Record<CategoryId, { label: string; path: string }> = {
  cockpit: { label: "Cockpit Gamer", path: "/cockpit-gamer" },
  corrida: { label: "Jogos de Corrida", path: "/jogos-de-corrida" },
  pc: { label: "PC Gamer", path: "/pc-gamer" },
  switch: { label: "Nintendo Switch", path: "/nintendo-switch" },
  ps5: { label: "PlayStation 5", path: "/playstation-5" },
};

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  group: string;
  platform: string;
  description: string;
  specs?: string[];
  featured?: boolean;
  image: string;
  demo: boolean;
};

const p = (x: Omit<Product, "demo">): Product => ({ ...x, demo: true });

export const PRODUCTS: Product[] = [
  // Cockpit
  p({ id: "cockpit-pro-aluminio", name: "Cockpit Pro em Perfil de Alumínio", category: "cockpit", group: "Cockpits profissionais", platform: "Multiplataforma", description: "Estrutura rígida para direct drive, ajuste completo de banco e pedais.", specs: ["Perfil 80x40", "Suporte a direct drive", "Ajuste de altura"], featured: true, image: cockpit }),
  p({ id: "simulador-completo", name: "Simulador de Corrida Completo", category: "cockpit", group: "Simuladores de corrida", platform: "PC", description: "Setup pronto: cockpit, volante, pedais e câmbio.", specs: ["Base direct drive", "Pedais com load cell", "Câmbio H"], featured: true, image: hero }),
  p({ id: "volante-direct-drive", name: "Volante Direct Drive 8Nm", category: "cockpit", group: "Volantes gamer", platform: "PC / PS5", description: "Force feedback preciso e aro em camurça.", specs: ["8 Nm", "Aro 300 mm"], image: cockpit }),
  p({ id: "pedais-load-cell", name: "Pedais Load Cell 3 Pedais", category: "cockpit", group: "Pedais", platform: "PC", description: "Acelerador, freio com célula de carga e embreagem.", image: cockpit }),
  p({ id: "cambio-h-sequencial", name: "Câmbio H + Sequencial", category: "cockpit", group: "Câmbios", platform: "PC / PS5", description: "Câmbio 7+R com modo sequencial.", image: cockpit }),
  p({ id: "banco-esportivo", name: "Banco Esportivo Concha", category: "cockpit", group: "Bancos esportivos", platform: "Universal", description: "Banco estilo competição em fibra e tecido.", image: cockpit }),
  p({ id: "suporte-volante", name: "Suporte para Volante Dobrável", category: "cockpit", group: "Suportes", platform: "Universal", description: "Suporte compacto compatível com principais volantes.", image: cockpit }),
  // Jogos de corrida
  p({ id: "jogo-formula-1", name: "Jogo de Fórmula 1 – Temporada Atual", category: "corrida", group: "Fórmula 1", platform: "PS5", description: "Temporada oficial com equipes e pistas.", featured: true, image: racing }),
  p({ id: "jogo-simulador-gt", name: "Simulador GT de Pista", category: "corrida", group: "Simuladores", platform: "PC", description: "Física realista e campeonatos online.", image: racing }),
  p({ id: "jogo-rua", name: "Corrida de Rua Noturna", category: "corrida", group: "Corridas de rua", platform: "PS5", description: "Mundo aberto, personalização e perseguições.", image: racing }),
  p({ id: "jogo-drift", name: "Drift Masters", category: "corrida", group: "Drift", platform: "PC", description: "Competições de drift com física dedicada.", image: racing }),
  p({ id: "jogo-rally", name: "Rally Mundial", category: "corrida", group: "Rally", platform: "PS5", description: "Estágios de terra, neve e asfalto.", image: racing }),
  p({ id: "jogo-arcade", name: "Kart Arcade Party", category: "corrida", group: "Arcade", platform: "Nintendo Switch", description: "Corridas divertidas para toda a família.", image: racing }),
  p({ id: "jogo-endurance", name: "Endurance Motorsport", category: "corrida", group: "Automobilismo", platform: "PC", description: "Provas de resistência com troca de pilotos.", image: racing }),
  // PC
  p({ id: "pc-alto-desempenho", name: "Estação PC Gamer Alto Desempenho", category: "pc", group: "Estações de jogo", platform: "PC", description: "Para jogar em 4K e fazer streaming.", specs: ["CPU 8 núcleos", "GPU 16 GB", "32 GB DDR5", "SSD 2 TB NVMe"], featured: true, image: hero }),
  p({ id: "pc-intermediario", name: "Estação PC Gamer Intermediária", category: "pc", group: "Estações de jogo", platform: "PC", description: "1440p com alta taxa de quadros.", specs: ["CPU 6 núcleos", "GPU 12 GB", "16 GB DDR5", "SSD 1 TB"], image: hero }),
  p({ id: "pc-entrada", name: "Estação PC Gamer de Entrada", category: "pc", group: "Estações de jogo", platform: "PC", description: "Ideal para e-sports em Full HD.", specs: ["CPU 6 núcleos", "GPU 8 GB", "16 GB DDR4", "SSD 512 GB"], image: hero }),
  p({ id: "monitor-gamer", name: "Monitor Gamer 27\" 165 Hz", category: "pc", group: "Periféricos", platform: "PC / Console", description: "QHD, 1 ms.", image: hero }),
  p({ id: "teclado-mecanico", name: "Teclado Mecânico RGB", category: "pc", group: "Periféricos", platform: "PC", description: "Switches lineares, ABNT2.", image: pcGear }),
  p({ id: "mouse-gamer", name: "Mouse Gamer 26K DPI", category: "pc", group: "Periféricos", platform: "PC", description: "Leve, sensor óptico de alta precisão.", image: pcGear }),
  p({ id: "headset-gamer", name: "Headset Gamer 7.1", category: "pc", group: "Periféricos", platform: "PC / Console", description: "Som surround e microfone removível.", image: pcGear }),
  // Switch
  p({ id: "switch-oled", name: "Nintendo Switch OLED", category: "switch", group: "Consoles", platform: "Nintendo Switch", description: "Tela OLED de 7 polegadas.", featured: true, image: consoles }),
  p({ id: "switch", name: "Nintendo Switch", category: "switch", group: "Consoles", platform: "Nintendo Switch", description: "Jogue na TV ou no modo portátil.", image: consoles }),
  p({ id: "switch-lite", name: "Nintendo Switch Lite", category: "switch", group: "Consoles", platform: "Nintendo Switch", description: "Compacto e dedicado ao portátil.", image: consoles }),
  p({ id: "switch-jogo-fisico", name: "Jogo de Aventura para Switch", category: "switch", group: "Jogos", platform: "Nintendo Switch", description: "Aventura para jogar sozinho ou em dupla.", image: consoles }),
  p({ id: "switch-controle", name: "Controle Pro", category: "switch", group: "Controles", platform: "Nintendo Switch", description: "Ergonômico, bateria de longa duração.", image: consoles }),
  // PS5
  p({ id: "ps5-slim", name: "PlayStation 5 Slim", category: "ps5", group: "Consoles", platform: "PS5", description: "Mais compacto, SSD de 1 TB.", featured: true, image: consoles }),
  p({ id: "ps5", name: "PlayStation 5", category: "ps5", group: "Consoles", platform: "PS5", description: "Console com leitor de disco.", image: consoles }),
  p({ id: "dualsense", name: "Controle DualSense", category: "ps5", group: "Controles", platform: "PS5", description: "Feedback tátil e gatilhos adaptáveis.", image: consoles }),
  p({ id: "ps5-jogo", name: "Jogo de Ação para PS5", category: "ps5", group: "Jogos", platform: "PS5", description: "Ação cinematográfica para a nova geração.", image: consoles }),
  p({ id: "ps5-headset", name: "Headset Sem Fio para PS5", category: "ps5", group: "Acessórios", platform: "PS5", description: "Áudio 3D.", image: pcGear }),
];

export const getProduct = (id: string) => PRODUCTS.find((x) => x.id === id);
