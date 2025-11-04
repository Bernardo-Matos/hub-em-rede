"use client"

import type React from "react"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Upload } from "lucide-react"

const themes = ["Trabalho", "Saúde", "Finanças", "Educação", "Outro"]
const courseTypes = ["Online", "Gravado"]

export default function EnviarCursoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoLink: "",
    theme: "",
    city: "",
    type: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("[v0] Course submission:", formData)
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        title: "",
        description: "",
        videoLink: "",
        theme: "",
        city: "",
        type: "",
      })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen pb-24 flex items-center justify-center px-4">
        <Card className="p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Curso Enviado!</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Obrigado por compartilhar seu conhecimento! Vamos analisar seu curso e ele estará disponível em breve.
          </p>
          <Button onClick={() => setSubmitted(false)} className="w-full min-h-[48px] font-semibold">
            Enviar Outro Curso
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
          <div className="flex items-center gap-3 mb-2">
            <Upload className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Enviar Curso</h1>
          </div>
          <p className="text-lg opacity-95 leading-relaxed">Compartilhe seu conhecimento com a comunidade</p>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto max-w-2xl px-4 py-6">
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-base font-semibold">
                Título do Curso *
              </Label>
              <Input
                id="title"
                placeholder="Ex: Como fazer um currículo"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                required
                className="min-h-[48px] text-base"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-base font-semibold">
                Descrição *
              </Label>
              <Textarea
                id="description"
                placeholder="Conte o que você vai ensinar neste curso..."
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                required
                rows={4}
                className="text-base resize-none"
              />
            </div>

            {/* Video Link */}
            <div className="space-y-2">
              <Label htmlFor="videoLink" className="text-base font-semibold">
                Link do Vídeo *
              </Label>
              <Input
                id="videoLink"
                type="url"
                placeholder="Cole o link do YouTube, TikTok, etc."
                value={formData.videoLink}
                onChange={(e) => handleChange("videoLink", e.target.value)}
                required
                className="min-h-[48px] text-base"
              />
              <p className="text-sm text-muted-foreground">
                Você pode usar vídeos do YouTube, TikTok ou outras plataformas
              </p>
            </div>

            {/* Theme */}
            <div className="space-y-2">
              <Label htmlFor="theme" className="text-base font-semibold">
                Tema *
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {themes.map((theme) => (
                  <Button
                    key={theme}
                    type="button"
                    variant={formData.theme === theme ? "default" : "outline"}
                    onClick={() => handleChange("theme", theme)}
                    className="min-h-[48px] font-semibold"
                  >
                    {theme}
                  </Button>
                ))}
              </div>
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label htmlFor="city" className="text-base font-semibold">
                Sua Cidade *
              </Label>
              <Input
                id="city"
                placeholder="Ex: Parauapebas, PA"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                required
                className="min-h-[48px] text-base"
              />
            </div>

            {/* Course Type */}
            <div className="space-y-2">
              <Label className="text-base font-semibold">Tipo de Curso *</Label>
              <div className="grid grid-cols-2 gap-2">
                {courseTypes.map((type) => (
                  <Button
                    key={type}
                    type="button"
                    variant={formData.type === type ? "default" : "outline"}
                    onClick={() => handleChange("type", type)}
                    className="min-h-[48px] font-semibold"
                  >
                    {type}
                  </Button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Online: aulas ao vivo | Gravado: vídeos já prontos</p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full min-h-[56px] text-lg font-bold"
              disabled={
                !formData.title ||
                !formData.description ||
                !formData.videoLink ||
                !formData.theme ||
                !formData.city ||
                !formData.type
              }
            >
              Enviar Curso
            </Button>

            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              Seu curso será analisado e publicado em até 48 horas
            </p>
          </form>
        </Card>
      </div>

      <BottomNav />
    </div>
  )
}
