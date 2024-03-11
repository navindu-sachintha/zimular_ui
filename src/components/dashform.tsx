"use client"
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
import { useIndex } from '@/utils/IndexProvider';
import { Form } from './ui/form';
import { FormState, FieldValues, FieldError, ErrorOption, SubmitHandler, SubmitErrorHandler, FieldArrayPath, FieldArray, FieldErrors, Field, RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';
  

const Dashform = (attr) => {
    

    let test = `px-20 ${attr.visible}`
  return (
    
    <>
        <div className={test}>
            <Form>
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
                                                        {field.type === 'text' ? (
                                                            <Input type='text' />
                                                        ):(
                                                            <Checkbox/>
                                                        )

                                                        }
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
            </Form>
            
        </div>
        
    </>
  )
}

export default Dashform

