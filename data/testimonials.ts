export interface Testimonial {
  id: string
  name: string
  city: string
  photo: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Silva",
    city: "Mariana, MG",
    photo: "/mulher-sorrindo.png",
    quote:
      "Os vídeos me ajudaram a conseguir meu primeiro emprego. Aprendi a fazer currículo e me preparar para entrevistas!",
  },
  {
    id: "2",
    name: "João Santos",
    city: "Brumadinho, MG",
    photo: "/homem-sorrindo.png",
    quote: "Nunca imaginei que aprender pudesse ser tão fácil. Os vídeos são curtos e diretos ao ponto.",
  },
  {
    id: "3",
    name: "Ana Costa",
    city: "Ouro Preto, MG",
    photo: "/young-woman-smiling.png",
    quote: "Agora sei cuidar melhor da minha saúde e das minhas finanças. Muito obrigada!",
  },
]
