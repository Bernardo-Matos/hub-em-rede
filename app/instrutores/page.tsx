import { BottomNav } from "@/components/bottom-nav"
import { InstructorCard } from "@/components/instructor-card"
import { instructors } from "@/data/instructors"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UserPlus } from "lucide-react"

export default function InstrutoresPage() {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold mb-2">Instrutores</h1>
          <p className="text-lg opacity-95 leading-relaxed">Pessoas da sua comunidade ensinando o que sabem</p>
        </div>
      </div>

      {/* CTA to become instructor */}
      <div className="container mx-auto max-w-2xl px-4 py-6">
        <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl p-6 mb-6 border-2 border-secondary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <UserPlus className="w-6 h-6 text-secondary" />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-lg mb-2">Você também pode ensinar!</h2>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Compartilhe seu conhecimento com a comunidade. É grátis e fácil!
              </p>
              <Button asChild size="sm" variant="secondary" className="font-semibold min-h-[44px] px-6">
                <Link href="/enviar-curso">Enviar Meu Curso</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Instructors List */}
        <div className="space-y-4">
          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor.id}
              id={instructor.id}
              name={instructor.name}
              photo={instructor.photo}
              city={instructor.city}
              area={instructor.area}
              courseCount={instructor.videoIds.length}
            />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
