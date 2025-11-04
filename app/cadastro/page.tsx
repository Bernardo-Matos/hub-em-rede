"use client"

import type React from "react"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { User, MapPin, Phone, CheckCircle } from "lucide-react"

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
    terms: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.city && formData.phone && formData.terms) {
      setSubmitted(true)
      // Here you would typically send data to a backend
      console.log("Form submitted:", formData)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen pb-24 flex items-center justify-center px-4">
        <Card className="p-8 max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Bem-vindo(a)!</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Seu cadastro foi realizado com sucesso. Agora você pode acessar todos os cursos!
          </p>
          <Button
            size="lg"
            className="w-full h-14 text-lg font-bold"
            onClick={() => (window.location.href = "/cursos")}
          >
            Ver Cursos
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
          <h1 className="text-3xl font-bold mb-2">Criar Conta</h1>
          <p className="text-lg opacity-95">Preencha os dados abaixo para começar</p>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-3">
              <Label htmlFor="name" className="text-base font-semibold flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Seu nome completo
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Ex: Maria da Silva"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-14 text-base"
              />
              <p className="text-sm text-muted-foreground">Digite seu nome como aparece nos documentos</p>
            </div>

            {/* City Field */}
            <div className="space-y-3">
              <Label htmlFor="city" className="text-base font-semibold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Sua cidade
              </Label>
              <Input
                id="city"
                type="text"
                placeholder="Ex: Mariana, MG"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
                className="h-14 text-base"
              />
              <p className="text-sm text-muted-foreground">Cidade onde você mora</p>
            </div>

            {/* Phone Field */}
            <div className="space-y-3">
              <Label htmlFor="phone" className="text-base font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Seu telefone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Ex: (31) 99999-9999"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-14 text-base"
              />
              <p className="text-sm text-muted-foreground">Número com DDD para contato</p>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
              <Checkbox
                id="terms"
                checked={formData.terms}
                onCheckedChange={(checked) => setFormData({ ...formData, terms: checked as boolean })}
                required
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                Eu aceito compartilhar meus dados para receber informações sobre cursos e oportunidades. Seus dados
                estão seguros conosco.
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-lg font-bold"
              disabled={!formData.name || !formData.city || !formData.phone || !formData.terms}
            >
              Criar Minha Conta
            </Button>
          </form>
        </Card>
      </div>

      <BottomNav />
    </div>
  )
}
