import Navigation from '@/components/main-nav';
import DashLayout from './Dashlayout';
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
import Dashform from '@/components/dashform';

const Dashboard =  async () => {
  const session = await getServerSession();
  if(!session){
    redirect("/");
  }
  return (
    
    <>
      <Navigation />
      <DashLayout>
        <Dashform />
      </DashLayout>
    </>
  )
}

export default Dashboard;
