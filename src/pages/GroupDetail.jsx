import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function GroupDetail() {
    const { id } = useParams();
    const [group, setGroup] = useState(null);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        async function loadGroup() {
            // Fetch group
            const { data: groupData } = await supabase
                .from("study_groups")
                .select("*")
                .eq("id", id)
                .single();

            setGroup(groupData);

            // Fetch members
            const { data: memberData } = await supabase
                .from("group_members")
                .select("role, user_id")
                .eq("group_id", id);

            setMembers(memberData || []);
        }

        loadGroup();
    }, [id]);

    if (!group) return <p className="p-6">Loading...</p>;

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-2">{group.name}</h1>
            <p className="text-gray-600 mb-6">{group.description}</p>

            <h2 className="text-lg font-semibold mb-2">Members</h2>

            <ul className="space-y-2">
                {members.map((m) => (
                    <li key={m.user_id} className="border p-2 rounded">
                        {m.user_id} — <span className="italic">{m.role}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
