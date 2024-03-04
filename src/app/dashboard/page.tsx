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

const Dashboard =  async () => {
  const session = await getServerSession();
  if(!session){
    redirect("/");
  }
  return (
    
    <>
      <Navigation />
    </>
  )
}

export default Dashboard;
