import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/shared/cards/QuestionCard";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { getQuestions } from "@/lib/actions/question.action";
import Link from "next/link";
import React from "react";

export default async function Home() {
  const result = await getQuestions();
  const serializedData = JSON.stringify(result.questions);
  const questions = JSON.parse(serializedData);

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-6 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900 ">
          All Questions
        </h1>
        <Link href="/ask-question" className="flex justify-end  max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          contianerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0
          ? questions.map((question: any) => (
            <>
              <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
              {question._id}
            </>
          )) : (
            <NoResult
              title="There`s no question to show"
              description="Some description"
              link="/"
              linkTitle="Ask a Question"
            />)}
      </div>
    </>
  );
};
