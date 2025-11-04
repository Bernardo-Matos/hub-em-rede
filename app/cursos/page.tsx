"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { VideoCard } from "@/components/video-card"
import { videos } from "@/data/videos"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

const categories = ["Todos", "Trabalho", "Saúde", "Finanças", "Educação"]

export default function CursosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredVideos =
    selectedCategory === "Todos" ? videos : videos.filter((video) => video.category === selectedCategory)

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold mb-2">Cursos</h1>
          <p className="text-lg opacity-95">Escolha um vídeo e comece a aprender</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-0 z-40 bg-background border-b border-border py-4 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="font-semibold">Filtrar por tema:</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap font-semibold min-h-[44px] px-5"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="container mx-auto max-w-2xl px-4 py-6">
        <div className="space-y-6">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              thumbnail={video.thumbnail}
              duration={video.duration}
              category={video.category}
              comingSoon={video.comingSoon}
              onClick={() => {
                if (!video.comingSoon) {
                  alert(`Abrindo vídeo: ${video.title}`)
                }
              }}
            />
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Nenhum vídeo encontrado nesta categoria.</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}
