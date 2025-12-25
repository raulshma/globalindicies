import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { LoadingGlow } from "@/components/loading-glow-card"

export function DomainSectionSkeleton() {
  return (
    <Card className="overflow-hidden border-white/10 bg-white/5">
      <CardHeader className="pb-4 border-b border-white/10 bg-white/5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <LoadingGlow className="size-8 rounded bg-white/10" />
            <div className="space-y-2">
              <LoadingGlow className="h-6 w-48 bg-white/10" />
              <LoadingGlow className="h-3 w-64 bg-white/5" />
            </div>
          </div>
          <LoadingGlow className="h-6 w-24 rounded bg-white/5" />
        </div>

        {/* Domain Stats */}
        <div className="mt-6 flex flex-wrap gap-6">
          <LoadingGlow className="h-6 w-24 rounded-full bg-white/5" />
          <LoadingGlow className="h-6 w-32 rounded-full bg-white/5" />
          <LoadingGlow className="h-6 w-20 rounded-full bg-white/5" />
        </div>
      </CardHeader>

      <CardContent className="pt-6 space-y-6">
        {/* Highlights */}
        <div className="grid gap-4 sm:grid-cols-2">
           <div className="h-20 border border-white/10 rounded p-3 bg-white/5">
              <LoadingGlow className="h-3 w-32 bg-white/5 mb-2" />
              <LoadingGlow className="h-5 w-48 bg-white/10 mb-2" />
              <LoadingGlow className="h-4 w-24 bg-white/5" />
           </div>
           <div className="h-20 border border-white/10 rounded p-3 bg-white/5">
              <LoadingGlow className="h-3 w-32 bg-white/5 mb-2" />
              <LoadingGlow className="h-5 w-48 bg-white/10 mb-2" />
              <LoadingGlow className="h-4 w-24 bg-white/5" />
           </div>
        </div>

        {/* Table Skeleton */}
        <div className="space-y-4">
             {/* Header */}
             <div className="flex gap-4 border-b border-white/10 pb-2">
                <LoadingGlow className="h-4 w-1/3 bg-white/5" />
                <LoadingGlow className="h-4 w-16 ml-auto bg-white/5" />
                <LoadingGlow className="h-4 w-16 ml-auto bg-white/5" />
                <LoadingGlow className="h-4 w-16 ml-auto bg-white/5" />
                <LoadingGlow className="h-4 w-16 ml-auto bg-white/5" />
             </div>
             
             {/* Rows */}
             {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="flex gap-4 py-3 border-b border-white/5 last:border-0">
                    <div className="w-1/3 space-y-1">
                        <LoadingGlow className="h-4 w-3/4 bg-white/10" />
                        <LoadingGlow className="h-3 w-1/2 bg-white/5" />
                    </div>
                    <LoadingGlow className="h-5 w-16 ml-auto bg-white/10" />
                    <LoadingGlow className="h-5 w-16 ml-auto bg-white/10 rounded-full" />
                    <LoadingGlow className="h-5 w-16 ml-auto bg-white/10" />
                    <LoadingGlow className="h-8 w-16 ml-auto bg-white/5 rounded" /> { /* Action button placeholder */ }
                </div>
             ))}
        </div>
      </CardContent>
    </Card>
  )
}
