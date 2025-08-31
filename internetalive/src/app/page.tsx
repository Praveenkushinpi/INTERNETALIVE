import PrismaticBurst from "@/components/PrismaticBurst";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* PrismaticBurst Background */}
      <div className="absolute inset-0">
        <PrismaticBurst
          animationType="rotate3d"
          intensity={2}
          speed={0.5}
          distort={1.0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={24}
          mixBlendMode="lighten"
          colors={['#ff007a', '#4d3dff', '#ffffff']}
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-9xl font-bold">INTERNETALIVE</h1>
        <p className="mt-4 text-xl max-w-xl">
          INTERNETALIVE is an experiment to reclaim the web as a place for people, not machines.
        </p>
      </div>
    </div>
  );
}
