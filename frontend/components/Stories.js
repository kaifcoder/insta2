import faker from "@faker-js/faker"
import { useEffect, useState } from "react";
import Story from './Story'
import { useSession } from 'next-auth/react'

function Stories() {
    const { data: session } = useSession();

    const [suggestion, setSuggestion] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(15)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,

        }))
        setSuggestion(suggestions);
    }, []);


    return (
        <div>

            <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 
            border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
                {
                    session && (
                        <Story
                            img={session.user.image}
                            username={session.user.username}
                        />
                    )
                }
                {suggestion.map(profile => (
                    <Story key={profile.id} img={profile.avatar} username={profile.username} />
                ))}
            </div>
        </div>
    );
}

export default Stories;
