import Navigation from '@/components/main-nav';
import React from 'react'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Sidebar } from '@/components/sidebar';
import { playlists } from './data/playlists';

const Dashboard =  async () => {
  const session = await getServerSession();
  if(!session){
    redirect("/");
  }
  return (
    
    <>
      <Navigation />
      <div className="md:hidden">
        Test
      </div>
      <div className="hidden md:block">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <div className="ml-auto mr-4">
                    <div className="space-between flex items-center">
                      <Button>
                        Run
                      </Button>
                      <Button>
                        Stop
                      </Button>
                    </div>
                    <div>
                      Test
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;
