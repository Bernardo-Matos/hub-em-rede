export interface Video {
  id: string
  title: string
  thumbnail: string
  duration: string
  category: string
  comingSoon?: boolean
  instructorId?: string
}

export const videos: Video[] = [
  {
    id: "1",
    title: "Como fazer um currículo simples e eficaz",
    thumbnail: "/pessoa-escrevendo-curriculo.jpg",
    duration: "5:30",
    category: "Trabalho",
    instructorId: "1",
  },
  {
    id: "2",
    title: "Direitos trabalhistas: o que você precisa saber",
    thumbnail: "/trabalhadores-conversando.jpg",
    duration: "8:15",
    category: "Trabalho",
    instructorId: "1",
  },
  {
    id: "3",
    title: "Primeiros socorros básicos",
    thumbnail: "/primeiros-socorros.png",
    duration: "6:45",
    category: "Saúde",
    instructorId: "3",
  },
  {
    id: "4",
    title: "Como organizar suas finanças",
    thumbnail: "/pessoa-organizando-dinheiro.jpg",
    duration: "7:20",
    category: "Finanças",
    instructorId: "2",
  },
  {
    id: "5",
    title: "Educação financeira para iniciantes",
    thumbnail: "/educacao-financeira.jpg",
    duration: "9:00",
    category: "Finanças",
    instructorId: "2",
  },
  {
    id: "6",
    title: "Comunicação eficaz no trabalho",
    thumbnail: "/pessoas-conversando-trabalho.jpg",
    duration: "5:50",
    category: "Trabalho",
    comingSoon: true,
  },
  {
    id: "7",
    title: "Saúde mental e bem-estar",
    thumbnail: "/pessoa-meditando.jpg",
    duration: "10:30",
    category: "Saúde",
    comingSoon: true,
  },
  {
    id: "8",
    title: "Como usar o celular para aprender",
    thumbnail: "/pessoa-usando-celular-aprendizado.jpg",
    duration: "4:45",
    category: "Educação",
    instructorId: "4",
  },
]
