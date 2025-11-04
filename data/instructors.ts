export interface Instructor {
  id: string
  name: string
  photo: string
  city: string
  area: string
  bio: string
  videoIds: string[]
}

export const instructors: Instructor[] = [
  {
    id: "1",
    name: "Maria Silva",
    photo: "/instrutora-maria.jpg",
    city: "Parauapebas, PA",
    area: "Trabalho e Emprego",
    bio: "Trabalho há 10 anos ajudando pessoas a encontrar emprego. Aprendi muito na vida e quero compartilhar com vocês!",
    videoIds: ["1", "2"],
  },
  {
    id: "2",
    name: "João Santos",
    photo: "/instrutor-joao.jpg",
    city: "Canaã dos Carajás, PA",
    area: "Finanças",
    bio: "Sou da comunidade e aprendi a cuidar do meu dinheiro. Agora ensino outras pessoas a fazer o mesmo.",
    videoIds: ["4", "5"],
  },
  {
    id: "3",
    name: "Ana Costa",
    photo: "/instrutora-ana.jpg",
    city: "Marabá, PA",
    area: "Saúde",
    bio: "Enfermeira comunitária há 8 anos. Ensino cuidados básicos de saúde para todos.",
    videoIds: ["3"],
  },
  {
    id: "4",
    name: "Carlos Oliveira",
    photo: "/instrutor-carlos.jpg",
    city: "Parauapebas, PA",
    area: "Educação",
    bio: "Professor aposentado que ama ensinar. Quero ajudar mais pessoas a aprender usando o celular.",
    videoIds: ["8"],
  },
]
