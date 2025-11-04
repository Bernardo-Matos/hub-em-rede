"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { BottomNav } from "@/components/bottom-nav"
import { VideoCard } from "@/components/video-card"
import { instructors } from "@/data/instructors"
import { videos } from "@/data/videos"
import { MapPin, BookOpen } from "lucide-react"

export default async function InstructorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const instructor = instructors.find((i) => i.id === id)

  if (!instructor) {
    notFound()
  }

  const instructorVideos = videos.filter((video) => instructor.videoIds.includes(video.id))

  return (
    <div className="min-h-screen pb-24">
      {/* Header with instructor info */}
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="flex gap-4 items-start">
            {/* Photo */}
            <div className="relative w-24 h-24 flex-shrink-0 rounded-full overflow-hidden bg-primary-foreground/10">
              <Image src={instructor.photo || "/placeholder.svg"} alt={instructor.name} fill className="object-cover" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold mb-2">{instructor.name}</h1>
              <div className="flex items-center gap-1 text-sm opacity-95 mb-1">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{instructor.city}</span>
              </div>
              <div className="flex items-center gap-1 text-sm opacity-95">
                <BookOpen className="w-4 h-4 flex-shrink-0" />
                <span>{instructor.area}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="container mx-auto max-w-2xl px-4 py-6">
        <div className="bg-muted/50 rounded-xl p-6 mb-6">
          <h2 className="font-bold text-lg mb-3">Sobre mim</h2>
          <p className="text-muted-foreground leading-relaxed">{instructor.bio}</p>
        </div>

        {/* Videos Section */}
        <div>
          <h2 className="font-bold text-xl mb-4">Cursos ({instructorVideos.length})</h2>
          <div className="space-y-6">
            {instructorVideos.map((video) => (
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

          {instructorVideos.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>Este instrutor ainda não publicou cursos.</p>
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
