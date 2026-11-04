export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ton travail a été qualifié de soigné, reflétant ainsi ta rigueur professionnelle et ton souci du détail. [...] Tu as su convaincre le jury par ta maîtrise technique et ta capacité à présenter ton travail de manière professionnelle.",
    author: "Jury du titre professionnel CDA",
    role: "Retour de soutenance, École O'clock",
  },
  {
    quote:
      "Merci à toi Charly, merci pour ton travail et ta rigueur, tu es un super élément pour une entreprise.",
    author: "Flavie V",
    role: "Chef de projet, agence web",
  },
  {
    quote:
      "Merci Charly pour cette période de stage, merci pour ton engagement, je te souhaite une belle réussite.",
    author: "Maxime A",
    role: "Directeur d'exploitation, agence web",
  },
  {
    quote:
      "C'est vraiment une aventure la reconversion, surtout quand on suit une formation intensive. Tu n'as rien lâché.",
    author: "Virginie L",
    role: "Tutrice pédagogique, École O'clock",
  },
];