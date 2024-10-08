"use client";
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
interface Props{
    href: string;
    src: string;
    title: string;
    description: string;
}
const ProjectCard = ( {href, src, title, description}: Props) => {  
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer">
            <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2a0e61] cursor-pointer'>
                <div className='h-[300px] w-full'>
                    <Image
                        src={src}
                        alt={title}
                        layout='fill'
                        objectFit='cover'
                        className='rounded-t-lg'
                    />
                </div>
                <div className='relative p-4'>
                    <h2 className='text-2xl font-semibold text-white'>{title}</h2>
                    <p className='mt-2 text-gray-300'>{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard