import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadGroups() {
            const { data, error } = await supabase
                .from("group_members")
                .select(`
          role,
          study_groups (
            id,
            name,
            description,
            created_at
          )
        `);

            if (!error && data) {
                setGroups(data);
            }

            setLoading(false);
        }

        loadGroups();
    }, []);

    if (loading) {
        return <p className="p-6">Loading…</p>;
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">My Study Groups</h1>

                {/* 👇 CREATE GROUP BUTTON */}
                <Link
                    to="/create-group"
                    className="bg-black text-white px-4 py-2 rounded"
                >
                    + Create Group
                </Link>
            </div>

            {groups.length === 0 && (
                <p>No groups yet. Create your first one!</p>
            )}

            <div className="space-y-4">
                {groups.map((g) => (
                    <Link key={g.study_groups.id} to={`/groups/${g.study_groups.id}`}>
                        <div
                            className="border p-4 rounded hover:bg-gray-50 cursor-pointer"
                        >
                            <h2 className="font-semibold text-lg">
                                {g.study_groups.name}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {g.study_groups.description}
                            </p>
                            <p className="text-xs mt-1 text-gray-400">
                                Role: {g.role}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
