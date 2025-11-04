"use client"

import type React from "react"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, MessageSquare, Send, CheckCircle } from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      console.log("Contact form submitted:", formData)
    }
  }

  const whatsappNumber = "5531999999999" // Replace with actual number
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre o HUB em Rede.")

  if (submitted) {
    return (
      <div className="min-h-screen pb-24 flex items-center justify-center px-4">
        <Card className="p-8 max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Mensagem Enviada!</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Obrigado pelo contato. Vamos responder em breve!
          </p>
          <Button size="lg" className="w-full h-14 text-lg font-bold" onClick={() => (window.location.href = "/")}>
            Voltar ao Início
          </Button>
        </Card>
        <BottomNav />
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold mb-2">Contato</h1>
          <p className="text-lg opacity-95">Fale com a gente! Estamos aqui para ajudar</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-2xl px-4 py-8 space-y-6">
        {/* WhatsApp Card */}
        <Card className="p-6 bg-gradient-to-br from-accent/5 to-chart-4/5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">Fale pelo WhatsApp</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">Tire suas dúvidas rapidamente pelo WhatsApp</p>
              <Button asChild size="lg" className="w-full sm:w-auto h-12 font-bold">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </Card>

        {/* Divider */}
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-sm text-muted-foreground font-semibold">OU</span>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Envie uma mensagem</h2>
              <p className="text-sm text-muted-foreground">Responderemos por e-mail</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-semibold">
                Seu nome
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-12 text-base"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-semibold">
                Seu e-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12 text-base"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-base font-semibold">
                Sua mensagem
              </Label>
              <Textarea
                id="message"
                placeholder="Escreva sua mensagem aqui..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[120px] text-base resize-none"
              />
              <p className="text-sm text-muted-foreground">Conte-nos como podemos ajudar</p>
            </div>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold">
              <Send className="w-5 h-5 mr-2" />
              Enviar Mensagem
            </Button>
          </form>
        </Card>
      </div>

      <BottomNav />
    </div>
  )
}
