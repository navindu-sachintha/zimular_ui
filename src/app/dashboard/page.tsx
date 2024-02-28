import Navigation from '@/components/main-nav';
import React from 'react'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Dashboard =  () => {
  const session = getServerSession();
  if(!session){
    redirect("/");
  }
  return (
    
    <>
      <Navigation />
      <center>Dashboard</center>
    </>
  )
}

export default Dashboard;
