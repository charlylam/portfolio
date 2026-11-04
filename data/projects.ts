export type Project = {
  slug: string;
  title: string;
  tagline: string;
  context: string;
  role: string;
  contributions: string[];
  stack: string[];
  challenge: { title: string; text: string };
  images: string[];
  liveUrl?: string;
  repoUrl?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "greenroots",
    title: "GreenRoots",
    tagline:
      "Plateforme e-commerce pour financer la plantation d'arbres dans des projets de reforestation.",
    context:
      "Projet de formation à l'École O'clock, réalisé à cinq en Scrum (mai à juin 2026), puis repris seul (juillet à août 2026) pour le paiement, la CI et le déploiement.",
    role: "Product Owner et développeur full-stack, principalement back-end",
    contributions: [
      "25 User Stories, périmètre MVP et priorisation du backlog",
      "Authentification : Argon2, JWT en cookie httpOnly, validation Zod",
      "Paiement Stripe Checkout avec webhook signé",
      "Emails transactionnels via l'API Brevo",
      "Front : page de connexion/inscription, panier (CartProvider)",
      "Déploiement : Docker, Render, Vercel, Supabase, CI, rate limiting",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express 5",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "Docker",
      "GitHub Actions",
    ],
    challenge: {
      title: "Une authentification qui ne traverse pas les domaines",
      text: "Le front (Vercel) et le back (Render) sont sur deux domaines : le cookie httpOnly en sameSite strict n'était jamais envoyé au backend, et l'appel Stripe échouait. J'ai ajouté une route Next.js intermédiaire qui lit le cookie côté serveur et relaie la requête avec un en-tête Authorization, puis complété la configuration CORS pour l'origine de production.",
    },
    images: [
      "/images/greenroots-accueil.png",
      "/images/greenroots-arbres.png",
      "/images/greenroots-panier.png",
    ],
    liveUrl: "https://greenroots-nu.vercel.app",
    repoUrl: "https://github.com/charlylam/Greenroots",
    note: "Paiement Stripe en mode test. Hébergement gratuit : le premier chargement peut prendre environ une minute.",
  },

    {
    slug: "pokedex",
    title: "Pokedex",
    tagline:
      "Application full-stack pour explorer les 151 Pokémon, les comparer, composer des équipes et voter.",
    context: "Projet de formation à l'École O'clock, mis en ligne en novembre 2026.",
    role: "Développeur full-stack",
    contributions: [
      "API REST avec architecture MVC : Pokémon, types, équipes, votes",
      "Modélisation de relations Many-to-Many (Pokémon et équipes, Pokémon et types)",
      "Authentification avec rôles (admin, utilisateur)",
      "Interface SvelteKit : liste, détail, comparaison de deux Pokémon, équipes, podium",
      "Déploiement : Vercel (client), Render (API), Supabase (base de données)",
    ],
    stack: ["SvelteKit", "Svelte 5", "Node.js", "Express", "PostgreSQL", "Sequelize", "JWT", "Argon2"],
    challenge: {
      title: "Passer d'un projet local à un déploiement en ligne",
      text: "Le projet avait été conçu pour tourner en local : l'adresse de l'API était écrite en dur et la base n'était pas prévue pour une connexion SSL. J'ai remplacé l'adresse par une variable d'environnement, rendu le SSL activable par configuration, puis déployé l'API sur Render, la base sur Supabase et le client sur Vercel. J'ai aussi remplacé le mot de passe du compte administrateur de démonstration, publié dans le script de remplissage, par un mot de passe haché que je suis seul à connaître.",
    },
    images: [
      "/images/pokedex-liste.png",
      "/images/pokedex-comparaison.png",
      "/images/pokedex-equipe.png",
    ],
    liveUrl: "https://pokedex-fullstack-ten.vercel.app",
    repoUrl: "https://github.com/charlylam/Pokedex-fullstack",
    note: "Compte de démonstration : Toto / Passw0rd, ou création d'un compte. Hébergement gratuit : le premier chargement peut prendre environ une minute.",
  },
];