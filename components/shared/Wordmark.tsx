import { cn } from "lib/utils"

interface WordmarkProps {
  size?: "sm" | "md" | "lg"
  cursor?: boolean
  className?: string
}

export function Wordmark({ size = "md", cursor = false, className }: WordmarkProps) {
  return (
    <div
      className={cn(
        "flex items-center font-mono tracking-tight select-none",
        size === "sm" && "gap-1.5",
        size === "md" && "gap-2",
        size === "lg" && "gap-2.5",
        className,
      )}
    >
      <span
        className={cn(
          "font-bold text-electric-cyan",
          size === "sm" && "text-lg",
          size === "md" && "text-xl",
          size === "lg" && "text-3xl",
        )}
        style={{ textShadow: "0 0 12px rgba(0, 229, 255, 0.4)" }}
      >
        {">"}
      </span>
      <span
        className={cn(
          "font-bold text-rail-purple tracking-[-0.05em]",
          size === "sm" && "text-xl",
          size === "md" && "text-2xl",
          size === "lg" && "text-4xl",
        )}
      >
        autorail
      </span>
      {cursor && (
        <span
          className={cn(
            "bg-electric-cyan/80 animate-pulse rounded-[1px]",
            size === "sm" && "w-1.5 h-4 ml-0.5",
            size === "md" && "w-2 h-5 ml-0.5",
            size === "lg" && "w-2.5 h-7 ml-0.5",
          )}
        />
      )}
    </div>
  )
}
