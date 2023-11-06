"use client"

import React from 'react'
import RenderTags from '../shared/sidebar/RenderTags'
import { HomePageFilters } from '@/constants/filters'
import { Button } from '../ui/button'

const HomeFilters = () => {
    const active = 'frequently';
    return (
        <div className='mt-10 flex-wrap gap-3 md:flex'>
            {HomePageFilters.map((filter) => (
                <Button key={filter.value} onClick={() => { }}
                    className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none
            ${active === filter.value
                            ? 'bg-primary-100 text-primary-500'
                            : 'bg-light-900 text-light-500 hover:bg-slate-200 dark:bg-dark-900 dark:text-light-500 dark:hover:bg-dark-900'}`}>
                    {filter.name}
                </Button>
            ))}
        </div>
    )
}

export default HomeFilters