import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, BookOpen } from "lucide-react"

interface InstructorCardProps {
  id: string
  name: string
  photo: string
  city: string
  area: string
  courseCount: number
}

export function InstructorCard({ id, name, photo, city, area, courseCount }: InstructorCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex gap-4 p-4">
        {/* Photo */}
        <div className="relative w-24 h-24 flex-shrink-0 rounded-full overflow-hidden bg-muted">
          <Image src={photo || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg mb-1 truncate">{name}</h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{city}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <BookOpen className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{area}</span>
          </div>
          <Button asChild size="sm" className="w-full font-semibold min-h-[44px]">
            <Link href={`/instrutor/${id}`}>Ver Cursos ({courseCount})</Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}
