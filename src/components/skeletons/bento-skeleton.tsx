import { cn } from "@/lib/utils"
import { LoadingGlow } from "@/components/loading-glow-card"

interface BentoSkeletonProps {
  className?: string
}

export function BentoSkeleton({ className }: BentoSkeletonProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-white/5 border border-white/10 shadow-sm",
        className
      )}
    >
      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent skew-x-12 animate-shimmer" />
      
      <div className="z-10 flex flex-col gap-1 p-6 transition-all duration-300">
        <LoadingGlow className="h-6 w-6 rounded bg-white/10 mb-2" />
        <LoadingGlow className="h-6 w-32 bg-white/10 mb-1" />
        <LoadingGlow className="h-4 w-48 bg-white/5" />
      </div>
      
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300Group" />
      
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300" />
      
      {/* Header Slot Placeholder */}
      <div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-white/5 mx-auto opacity-50 p-6 pt-0 mt-auto">
         <LoadingGlow className="h-full w-full bg-white/5 rounded-lg" />
      </div>
    </div>
  )
}
