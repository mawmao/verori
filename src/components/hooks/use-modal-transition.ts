import { useEffect, useState } from "react"

export function useModalTransition(isOpen: boolean, duration = 120) {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setMounted(true)
      let id2 = 0
      const id1 = requestAnimationFrame(() => {
        id2 = requestAnimationFrame(() => setVisible(true))
      })
      return () => {
        cancelAnimationFrame(id1)
        cancelAnimationFrame(id2)
      }
    } else {
      setVisible(false)
      const t = setTimeout(() => setMounted(false), duration)
      return () => clearTimeout(t)
    }
  }, [isOpen, duration])

  return { mounted, visible }
}
