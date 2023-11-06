"use client"

import React from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { SelectItem } from '@radix-ui/react-select';


interface FilterPropsI {
    filters: { name: string, value: string }[];
    otherClasses?: string;
    contianerClasses?: string;
}

const Filter = ({
    filters,
    otherClasses,
    contianerClasses,
}: FilterPropsI) => {
    return (
        <div className={`relative ${contianerClasses}`}>
            <Select>
                <SelectTrigger className={`${otherClasses} body-regular light-border
                bg-light800_dark300 text-dark-500_light700 border px-5 py-2.5`}>
                    <div className='line-clamp-1 flex-1 text-left'>
                        <SelectValue placeholder="Select a Filter" />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {filters && filters.map((filter: { name: string, value: string }) => (
                            <SelectItem key={filter.value} value={filter.value}>
                                {filter.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default Filter