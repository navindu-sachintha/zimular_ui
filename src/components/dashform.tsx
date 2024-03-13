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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from './ui/input';
import { DialogClose } from '@radix-ui/react-dialog'


const Dashform = (attr:any) => {

    const [formData, setFormData] = React.useState({});

    



    const handleSubmit = (e:any) => {
        e.preventDefault();

        const updatedFormData: { [key: string]: any } = { ...formData }

        inputs.forEach((input) => {
                input.group.forEach((group) => {
                    group.fields.forEach((field) => {
                        const value = e.target.elements[field.id].value;
                        updatedFormData[input.user_id] = updatedFormData[input.user_id] || {};
                        updatedFormData[input.user_id][group.group_id] = updatedFormData[input.user_id][group.group_id] || {};
                        updatedFormData[input.user_id][group.group_id][field.name] = field.type === "checkbox" ? e.target.elements[field.id].checked : value;
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
                        <p className="text-5xl font-bold">Input <span className="text-lg">[ {inputs[0].input} ]</span></p>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="default" type="submit">
                                    <TriangleRightIcon/>Run
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogDescription>
                                    <form >
                                        <div className="grid gap-4 py-4">
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="name" className="text-right">
                                                Output Name
                                                </Label>
                                                <Input id="name"  className="col-span-3" />
                                            </div>
                                        
                                        </div>
                                        <DialogClose asChild>
                                            <Button type="submit">Save</Button>
                                        </DialogClose>
                                    </form>
                                </DialogDescription>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <Separator className='m-2 mt-10'/>
                    <Accordion type='multiple' className='w-full '>
                        {inputs.map((input)=>{
                            return(
                                input.group.map((group)=>{
                                    return(
                                        <AccordionItem value={group.group_id} key={group.group_id}>
                                            <AccordionTrigger>
                                                {group.name}
                                            </AccordionTrigger>
                                            <AccordionContent className='flex flex-wrap gap-4'>
                                                {group.fields.map((field)=>{
                                                    return(
                                                        <div key={field.id} className='flex justify-center space-x-4 '>
                                                            <Label className=''>{field.name}</Label>
                                                            {field.type === "text"?(
                                                                <input className='border border-black justify-between '
                                                                    type="text"
                                                                    id={field.id}
                                                                    defaultValue={field.defult_value}     
                                                                />
                                                            ):(
                                                                <input 
                                                                    type="checkbox"
                                                                    id={field.id}
                                                                    defaultChecked={field.defult_value === "true"}
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

