"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <section
      className="bg-light900_dark200 light-border custom-scrollbar sticky left-0 top-0
       flex h-screen flex-col justify-between overflow-y-auto border-r p-6
       pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]"
    >
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900 rounded-lg hover:bg-slate-400"
              } flex items-center justify-start gap-2 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col items-start self-stretch">
        <SignedIn>
          <SignOutButton>
            <div className="flex w-full flex-col gap-3  ">
              <Link href="/sign-in" className="">
                <Button
                  className="small-medium  text-dark400_light900 min-h-[41px] w-full
                    rounded-lg bg-slate-200 px-4 py-3 shadow-none hover:bg-slate-600  "
                >
                  <Image
                    src="/assets/icons/account.svg"
                    alt="log out"
                    width={20}
                    height={20}
                    className="invert-colors lg:hidden "
                  />
                  <span className="primary-text-gradient text-base font-bold max-lg:hidden">
                    Log Out
                  </span>
                </Button>
              </Link>
            </div>
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <div className="flex w-full flex-col gap-3">
            <Link href="/sign-in">
              <Button
                className="small-medium btn-secondary text-dark400_light900
                    min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
              >
                <Image
                  src="/assets/icons/account.svg"
                  alt="log in"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
                <span className="primary-text-gradient font-bold hover:bg-slate-400 max-lg:hidden">
                  Log In
                </span>
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                className="small-medium light-border-2 btn-tertiary min-h-[41px]
                    w-full rounded-lg px-4 py-3 shadow-none hover:bg-slate-400 dark:text-white"
              >
                <Image
                  src="/assets/icons/account.svg"
                  alt="sign up"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
                <span className="primary-text-gradient font-bold max-lg:hidden">
                  Sign Up
                </span>
              </Button>
            </Link>
          </div>
        </SignedOut>
      </div>
    </section>
  );
};

export default LeftSidebar;
