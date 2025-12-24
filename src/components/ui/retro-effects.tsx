import { cn } from "@/lib/utils"

export function SoftGradientMesh({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden bg-background",
        className
      )}
    >
      <div className="absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-blue-400/20 blur-[120px] animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-purple-400/20 blur-[120px] animate-float box-decoration-clone" style={{ animationDelay: "-3s" }} />
    </div>
  )
}

export function GrainOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.05] bg-repeat mix-blend-overlay"
         style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
         }}
    />
  )
}
