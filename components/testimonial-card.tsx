import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  city: string
  photo: string
  quote: string
}

export function TestimonialCard({ name, city, photo, quote }: TestimonialCardProps) {
  return (
    <Card className="p-6 flex flex-col gap-4">
      <Quote className="w-8 h-8 text-primary opacity-50" />
      <p className="text-base leading-relaxed italic">"{quote}"</p>
      <div className="flex items-center gap-3 mt-2">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
          <Image src={photo || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="font-bold text-sm">{name}</p>
          <p className="text-sm text-muted-foreground">{city}</p>
        </div>
      </div>
    </Card>
  )
}
