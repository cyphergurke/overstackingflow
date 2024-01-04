import Filter from "@/components/shared/Filter";
import UserCard from "@/components/shared/cards/UserCard";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { UserFilters } from "@/constants/filters";
import { getAllUsers } from "@/lib/actions/user.action";
import Link from "next/link";


const Page = async () => {
    const { users } = await getAllUsers({});
    /* const serializedData = JSON.stringify(result.questions);
    const questions = JSON.parse(serializedData); */

    console.log(users[0].joinedAt, typeof users)

    return (
        <>
            <div className="flex w-full flex-col-reverse justify-between gap-6 sm:flex-row sm:items-center">
                <h1 className="h1-bold text-dark100_light900 ">
                    All Users
                </h1>
            </div>
            <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
                <LocalSearchBar
                    route="/community"
                    iconPosition="left"
                    imgSrc="/assets/icons/search.svg"
                    placeholder="Search for amazing talents"
                    otherClasses="flex-1"
                />
                <Filter
                    filters={UserFilters}
                    otherClasses="min-h-[56px] sm:min-w-[170px]"
                />
            </div>
            <section className="mt-12 flex flex-wrap gap-4">
                {users.length > 0 ? (
                    users.map((user) => (
                        <UserCard
                            key={user._id}
                            user={user}
                        />
                    ))
                ) : (
                    <div className="paragraph-regular text-dark200_light800 mx-auto max-w-3xl text-center">
                        <p>No users yet</p>
                        <Link href="/sign-up" className="mt-2 font-bold text-accent-blue">Join to be the first!</Link>
                    </div>
                )}
            </section>
        </>
    );
};

export default Page;
