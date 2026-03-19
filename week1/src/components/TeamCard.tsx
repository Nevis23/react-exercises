import {useState} from "react";

export interface CardProps {
    name: string;
    role: string;
}

export const Card = ({name, role}: CardProps) => {
    const [votes, setVotes] = useState(0);

    return (
        <div className="bg-white rounded-2x1 shadow-md p-6 w-64 text-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500 mb-4">{role}</p>
        <p className="text-gray-700 mb-4">Votes: {votes}</p>

        <button
            onClick={() => setVotes(votes + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
        Vote 👍
        </button>
        </div>
    );
};