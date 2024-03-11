"use client"
import React from 'react'
import { inputs } from '@/app/dashboard/data/playlists'
import { TriangleRightIcon } from '@radix-ui/react-icons'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Separator } from './ui/separator'

const Dashform = (attr) => {

    const [formData, setFormData] = React.useState({});

    



    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedFormData = { ...formData }

        inputs.forEach((input) => {
            input.group.forEach((group) => {
              group.fields.forEach((field) => {
                const value = event.target.elements[field.id].value;
                updatedFormData[input.user_id] = updatedFormData[input.user_id] || {};
                updatedFormData[input.user_id][group.group_id] = updatedFormData[input.user_id][group.group_id] || {};
                updatedFormData[input.user_id][group.group_id][field.id] = field.type === "checkbox" ? event.target.elements[field.id].checked : value;
              });
            });
          });

        setFormData(updatedFormData)
    }

    let test = `px-20 ${attr.visible}`
  return (
    
    <>
        <div className={test}>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between mt-3">
                        <p className="text-5xl font-bold">Input <span className="text-lg">[Pakaya123#hutta]</span></p>
                        <Button varient="default" type="submit">
                            <TriangleRightIcon/>Run
                        </Button>
                    </div>
                    <Separator className='m-2'/>
                    <Accordion type='multiple' className='w-full'>
                        {inputs.map((input)=>{
                            return(
                                input.group.map((group)=>{
                                    return(
                                        <AccordionItem value={group.group_id} key={group.group_id}>
                                            <AccordionTrigger>
                                                {group.name}
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                {group.fields.map((field)=>{
                                                    return(
                                                        <div key={field.id}>
                                                            <Label>{field.name}</Label>
                                                            {field.type === "text"?(
                                                                <input 
                                                                    type="text"
                                                                    id={field.id}
                                                                    defaultValue={field.default_value}     
                                                                />
                                                            ):(
                                                                <input 
                                                                    type="checkbox"
                                                                    id={field.id}
                                                                    defaultChecked={field.default_value === "true"}
                                                                />
                                                            )}
                                                        </div>
                                                    )
                                                })}
                                            </AccordionContent>
                                        </AccordionItem>
                                    )
                                })
                            )
                        })}
                    </Accordion>  
                </form>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
        
    </>
  )
}

export default Dashform

