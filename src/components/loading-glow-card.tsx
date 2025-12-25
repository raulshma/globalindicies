import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface LoadingGlowProps {
  className?: string
}

export function LoadingGlow({ className }: LoadingGlowProps) {
  return (
    <div className={cn("relative overflow-hidden bg-white/5 rounded", className)}>
      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent skew-x-12 animate-shimmer" />
    </div>
  )
}

interface LoadingGlowCardProps {
  className?: string
}

export function LoadingGlowCard({ className }: LoadingGlowCardProps) {
  return (
    <Card className={cn(
      "h-full overflow-hidden relative border-white/10 bg-white/5",
      className
    )}>
      {/* Glow effect overlay */}
      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent skew-x-12 animate-shimmer" />
      
      <CardHeader className="pb-2 space-y-2">
        {/* Title skeleton */}
        <LoadingGlow className="h-5 w-2/3 bg-white/10" />
        {/* Domain badge skeleton */}
        <LoadingGlow className="h-4 w-1/4 bg-white/5" />
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Rank/Percentile row */}
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <LoadingGlow className="h-8 w-16 bg-white/10" />
            <LoadingGlow className="h-3 w-12 bg-white/5" />
          </div>
          <LoadingGlow className="h-6 w-12 bg-white/10 rounded-full" />
        </div>
        
        {/* Score row */}
        <div className="flex justify-between items-center pt-2">
          <LoadingGlow className="h-4 w-10 bg-white/5" />
          <LoadingGlow className="h-4 w-8 bg-white/10" />
        </div>
        
        {/* Year/Change row */}
        <div className="flex justify-between items-center">
          <LoadingGlow className="h-4 w-12 bg-white/5" />
          <LoadingGlow className="h-4 w-16 bg-white/5" />
        </div>
        
        {/* Source link */}
        <div className="pt-2 border-t border-white/10">
           <LoadingGlow className="h-3 w-1/3 bg-white/5" />
        </div>
      </CardContent>
    </Card>
  )
}
