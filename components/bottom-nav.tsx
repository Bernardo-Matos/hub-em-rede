"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, PlayCircle, User, Users } from "lucide-react"
import { cn } from "@/lib/utils"

export function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/",
      label: "Início",
      icon: Home,
    },
    {
      href: "/cursos",
      label: "Cursos",
      icon: PlayCircle,
    },
    {
      href: "/instrutores",
      label: "Instrutores",
      icon: Users,
    },
    {
      href: "/cadastro",
      label: "Perfil",
      icon: User,
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="flex items-center justify-around h-20 max-w-lg mx-auto px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 min-w-[64px] h-16 rounded-lg transition-colors",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
              aria-label={item.label}
            >
              <Icon className="w-6 h-6" strokeWidth={2.5} />
              <span className="text-xs font-semibold">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
