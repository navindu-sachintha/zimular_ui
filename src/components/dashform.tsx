import React from 'react'
import { inputs } from '@/app/dashboard/data/playlists'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
  

function Dashform() {
  return (
    
    <>
        <div className='px-20'>
            <Accordion type="multiple" className='w-full'>
                {inputs.group.map(group => {
                    return (
                        <AccordionItem value={group.group_id} key={group.group_id}>
                            <AccordionTrigger>
                                {group.name}
                            </AccordionTrigger>
                            <AccordionContent>
                                {group.fields.map(field => {
                                    return (
                                        <div key={field.id}>
                                            <Label>{field.name}</Label>
                                            {field.type === 'text' ? (
                                                <Input type='text' placeholder={field.defult_value}/>
                                            ):(
                                                <div className='flex items-center'>
                                                    <Checkbox />
                                                    <Label>{field.name}</Label>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </div>
        
    </>
  )
}

export default Dashform
