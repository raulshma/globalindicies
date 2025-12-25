import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { LoadingGlow } from "@/components/loading-glow-card"
import { cn } from "@/lib/utils"

interface StatCardSkeletonProps {
  className?: string
}

export function StatCardSkeleton({ className }: StatCardSkeletonProps) {
  return (
    <Card className={cn("overflow-hidden border-white/10 bg-white/5", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <LoadingGlow className="h-3 w-24 bg-white/10" />
        <LoadingGlow className="h-4 w-4 rounded bg-white/5" />
      </CardHeader>
      <CardContent>
        <LoadingGlow className="h-8 w-16 bg-white/10 mb-1" />
        <LoadingGlow className="h-3 w-32 bg-white/5" />
      </CardContent>
    </Card>
  )
}
