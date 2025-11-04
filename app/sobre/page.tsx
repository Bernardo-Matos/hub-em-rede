import Link from "next/link"
import Image from "next/image"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Target, Heart, Users, Lightbulb } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold mb-2">Sobre o HUB</h1>
          <p className="text-lg opacity-95">Conheça nossa história e missão</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-2xl px-4 py-8 space-y-8">
        {/* Hero Image */}
        <div className="relative aspect-video rounded-xl overflow-hidden">
          <Image src="/comunidade-pessoas-diversas-juntas.jpg" alt="Comunidade unida" fill className="object-cover" />
        </div>

        {/* Mission Statement */}
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
          <h2 className="text-2xl font-bold mb-4 text-balance">Por que este projeto existe?</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            O HUB em Rede nasceu para levar conhecimento e oportunidades para comunidades que mais precisam. Acreditamos
            que todos merecem acesso a educação de qualidade, independente de onde moram.
          </p>
        </Card>

        {/* Values Grid */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center mb-6">Nossos Valores</h2>

          <Card className="p-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Acessibilidade</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Conteúdo simples e direto, feito para ser entendido por todos. Sem complicação, sem barreiras.
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
              <Heart className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Empatia</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Entendemos os desafios da sua comunidade e criamos conteúdo que realmente faz diferença no dia a dia.
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
              <Users className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Comunidade</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Feito por pessoas que se importam, para pessoas que querem crescer juntas.
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-chart-4/10 flex items-center justify-center">
              <Lightbulb className="w-7 h-7 text-chart-4" />
            </div>
            <h3 className="text-xl font-bold">Transformação</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Acreditamos no poder da educação para transformar vidas e comunidades inteiras.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-2">
          <h2 className="text-2xl font-bold mb-4 text-balance">Faça parte dessa transformação</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Junte-se a centenas de pessoas que já estão aprendendo e crescendo com a gente!
          </p>
          <Button asChild size="lg" className="text-lg h-14 px-8 font-bold">
            <Link href="/cadastro">Começar Agora</Link>
          </Button>
        </Card>
      </div>

      <BottomNav />
    </div>
  )
}
