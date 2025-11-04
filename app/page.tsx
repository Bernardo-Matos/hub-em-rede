import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BottomNav } from "@/components/bottom-nav"
import { TestimonialCard } from "@/components/testimonial-card"
import { testimonials } from "@/data/testimonials"
import { BookOpen, Users, Award, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">HUB em Rede</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-balance opacity-95">
              Aprenda, cresça e transforme sua vida
            </p>
            <div className="relative aspect-video max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl mt-8">
              <Image
                src="/comunidade-pessoas-juntas-aprendendo.jpg"
                alt="Comunidade aprendendo juntos"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-8 font-bold">
                <Link href="/cursos">Ver Cursos</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 font-bold bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20"
              >
                <Link href="/cadastro">Criar Conta</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is HUB Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-balance">O que é o HUB em Rede?</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Uma plataforma feita para você! Aqui você encontra vídeos curtos e práticos sobre trabalho, saúde,
              educação e muito mais.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <Card className="p-6 text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Aprenda Fácil</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vídeos curtos e simples para você aprender no seu tempo
              </p>
            </Card>

            <Card className="p-6 text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-bold text-lg">Comunidade</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Feito para pessoas como você, da sua região
              </p>
            </Card>

            <Card className="p-6 text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg">Oportunidades</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Conteúdos que ajudam você a crescer e conquistar seus objetivos
              </p>
            </Card>

            <Card className="p-6 text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-chart-4/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-chart-4" />
              </div>
              <h3 className="font-bold text-lg">Gratuito</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Todo o conteúdo é 100% gratuito para você</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-balance">O que as pessoas estão dizendo</h2>
            <div className="space-y-4">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
            <h2 className="text-2xl font-bold mb-4 text-balance">Pronto para começar?</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Crie sua conta grátis e comece a aprender hoje mesmo!
            </p>
            <Button asChild size="lg" className="text-lg h-14 px-8 font-bold">
              <Link href="/cadastro">Criar Conta Grátis</Link>
            </Button>
          </Card>
        </div>
      </section>

      <BottomNav />
    </div>
  )
}
