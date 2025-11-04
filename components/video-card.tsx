"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface VideoCardProps {
  title: string
  thumbnail: string
  duration?: string
  category?: string
  comingSoon?: boolean
  onClick?: () => void
}

export function VideoCard({ title, thumbnail, duration, category, comingSoon = false, onClick }: VideoCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]",
        comingSoon && "opacity-60",
      )}
      onClick={onClick}
    >
      <div className="relative aspect-video bg-muted">
        <Image src={thumbnail || "/placeholder.svg"} alt={title} fill className="object-cover" />
        {!comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
              <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>
        )}
        {duration && !comingSoon && (
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{duration}</div>
        )}
        {comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Badge variant="secondary" className="text-base px-4 py-2">
              Em breve
            </Badge>
          </div>
        )}
      </div>
      <div className="p-4">
        {category && (
          <Badge variant="outline" className="mb-2">
            {category}
          </Badge>
        )}
        <h3 className="font-bold text-lg leading-snug line-clamp-2">{title}</h3>
      </div>
    </Card>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
