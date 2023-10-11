"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTags from "./RenderTags";

const hotQuestions: any = [
  {
    id: 1,
    title: "What is....",
    route: "/route/to/something",
  },
  {
    id: 2,
    title: "What is....",
    route: "/route/to/something",
  },
  {
    id: 3,
    title: "What is....",
    route: "/route/to/something",
  },
  {
    id: 4,
    title: "What is....",
    route: "/route/to/something",
  },
];

const popularTags = [
  {
    id: 1,
    name: "Lightning",
    total: "5",
  },
  {
    id: 2,
    name: "nextjs",
    total: "2",
  },
  {
    id: 3,
    name: "Bitcoin",
    total: "1",
  },
  {
    id: 4,
    name: "Webln",
    total: "1",
  },
];

const RightSidebar = () => {
  return (
    <section
      className="bg-light900_dark200 light-border sticky right-0 top-0 flex
      h-screen w-[320px] flex-col overflow-y-auto border-l p-6 pt-36
      shadow-light-300 dark:shadow-none max-xl:hidden max-lg:hidden custom-scrollbar"
    >
      <div className="">
        <h3 className="h3-bold text-dark200_light900">Hot Network</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question: any) => (
            <Link
              key={question.id}
              href={`/questions/${question.id}`}
              className="flex cursor-pointer 
            items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                width={20}
                height={20}
                alt="right"
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {popularTags.map((tag: any) => (
            <RenderTags
              _id={tag.id}
              name={tag.name}
              totalQuestions={tag.total}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
