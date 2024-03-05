import { inputs } from '@/app/dashboard/data/playlists'
import React from 'react'
import { Button } from '@/components/ui/button'


export default function Sidenav() {
    return (
        <>
            <p className='p-2 text-lg font-medium'>Simulation Input</p>
            {inputs.group.map(group => {
                return (
                    <div key={group.group_id} className='p-2'>
                        <Button variant="outline" className='w-full'>{group.name}</Button>
                    </div>
                )
            })}
            <p className='p-2 text-lg font-medium'>Simulation Output</p>
            <p className='p-2 text-lg font-medium'>ML Beta</p>
        </>
    )
}
