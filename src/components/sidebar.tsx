import { cn } from "@/lib/utils"
import { Button } from  "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import { Playlist } from "@/app/dashboard/data/playlists"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[]
}

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        {/* <ScrollArea className="h-[300px]"></ScrollArea> */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
            Simulation Input
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              Input 01
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Input 02
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Input 03
            </Button>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Simulation Output
          </h2>
          <ScrollArea className="h-[100px] px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
            ML Model
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              Input 01
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Input 02
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Input 03
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
