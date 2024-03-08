import React from 'react'
import { links } from '../../data/links'

export default function Footer() {
  return (
    <div className='bg-green_color px-20 p-10 text-white flex justify-between'>
        <div className='flex flex-col'>
            <h1>Green Harbour ECO4</h1>
            <h1>Contacts</h1>
            <h1>Email</h1>
            <h1>Phone</h1>
            <h1>Socials Links</h1>
        </div>
        <div className='flex flex-col'>
            {links.map((link) => (
                <div key={link.id}>
                    <h1>{link.linkText}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}
