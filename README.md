# Brasília Virtual Racing — site completo

Código-fonte do site da **Brasília Virtual Racing**, lan house gamer em Brasília – DF:
cockpits e simuladores de corrida, PC gamer, PlayStation 5 e Nintendo Switch.
O cliente paga **R$ 20 por hora** e joga o que quiser no local.

---

## Como rodar no seu computador

Você precisa do **Node.js 20 ou mais novo** (https://nodejs.org).

```sh
npm install
npm run dev
```

Depois abra **http://localhost:8080** no navegador.

Outros comandos úteis:

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Abre o site em modo de desenvolvimento |
| `npm run build` | Gera a versão final em `dist/` |
| `npm run preview` | Roda a versão final gerada pelo build |
| `npm run test` | Roda os testes automáticos |
| `npm run lint` | Confere o padrão do código |

---

## Onde mudar cada coisa

| Quero mudar... | Arquivo |
| --- | --- |
| Nome, descrição, WhatsApp, Instagram, cidade, valor da hora | `src/config/site.ts` |
| A logo | `src/assets/virtual-racing-logo.png` |
| A lista de jogos e equipamentos | `src/data/products.ts` |
| As fotos do site | `src/assets/` |
| Cores, fontes e estilo geral | `src/styles.css` |
| Textos e layout de uma página | `src/routes/` |
| Menu do topo | `src/config/site.ts` (lista `NAV`) |
| Rodapé | `src/components/store/Footer.tsx` |

### WhatsApp e Instagram

Ambos ficam em `src/config/site.ts`:

```ts
whatsappNumber: "5561984041221",   // só dígitos, com +55 e DDD
whatsappDisplay: "+55 (61) 98404-1221",
instagramHandle: "bsb.virtualracing",
pricePerHour: 20,
```

Mudando esses valores, **todos** os botões, mensagens prontas, página de preços e
rodapé se atualizam sozinhos. O valor da hora aparece em todos os lugares a partir
de `pricePerHour`.

---

## Páginas do site

| Endereço | Página |
| --- | --- |
| `/` | Início |
| `/cockpit-gamer` | Cockpit Gamer |
| `/jogos-de-corrida` | Jogos de Corrida |
| `/pc-gamer` | PC Gamer |
| `/nintendo-switch` | Nintendo Switch |
| `/playstation-5` | PlayStation 5 |
| `/gta-vi` | GTA VI |
| `/precos` | Preços (R$ 20/hora) |
| `/contato` | Contato |
| `/produto/{id}` | Página de cada item do catálogo |
| `/privacidade` | Política de privacidade |
| `/termos` | Termos de uso |

---

## Estrutura das pastas

```text
public/            favicon.png, robots.txt
src/assets/        logo e fotos
src/components/    peças do site (topo, rodapé, cartões, botões)
src/config/        site.ts — dados da casa
src/data/          products.ts — catálogo
src/routes/        uma página por arquivo
src/lib/           utilidades (SEO, tratamento de erros)
src/test/          testes automáticos
```

---

## Observações

- **A logo é a original, sem nenhuma alteração.** Ela está em
  `src/assets/virtual-racing-logo.png` e é exibida por `src/components/store/Logo.tsx`.
- **O catálogo é demonstrativo.** Todos os itens em `src/data/products.ts` têm
  `demo: true`. Troque pelos jogos e equipamentos reais da casa; a estrutura já
  está pronta para depois vir de um banco de dados sem mexer no visual.
- **Não há vendas no site.** Não existe carrinho, pagamento nem cadastro de clientes:
  os botões levam o cliente ao WhatsApp para reservar horário.
- **Ainda não há painel administrativo.** Para trocar textos e produtos, edite os
  arquivos listados acima.
- As fotos em `src/assets/` são ilustrativas. Substitua pelas fotos reais do espaço.

## Tecnologia

TanStack Start (React 19 + Vite), TypeScript, Tailwind CSS v4, shadcn/ui e Vitest.
