import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { LoadingGlow } from "@/components/loading-glow-card"
import { cn } from "@/lib/utils"

interface ChartSkeletonProps {
  className?: string
  height?: number
}

export function ChartSkeleton({ className, height = 300 }: ChartSkeletonProps) {
  return (
    <Card className={cn("overflow-hidden border-white/10 bg-white/5", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-white/5">
        <div className="space-y-2">
            <LoadingGlow className="h-5 w-48 bg-white/10" />
            <LoadingGlow className="h-3 w-64 bg-white/5" />
        </div>
      </CardHeader>
      <CardContent className="pt-6 relative">
        <div className="w-full flex items-end gap-2" style={{ height: `${height}px` }}>
            {/* Bars/Points simulation */}
             {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end gap-2 h-full">
                <div 
                   className="w-full rounded-t bg-white/5 overflow-hidden" 
                   style={{ height: `${Math.random() * 60 + 20}%` }}
                >
                   <LoadingGlow className="h-full w-full" />
                </div>
                </div>
             ))}
        </div>
      </CardContent>
    </Card>
  )
}
