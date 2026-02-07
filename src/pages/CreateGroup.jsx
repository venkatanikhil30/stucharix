import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function CreateGroup() {
    const [session, setSession] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setSession(data.session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    async function handleCreateGroup(e) {
        e.preventDefault();

        const { data: sessionData } = await supabase.auth.getSession();

        if (!sessionData.session) {
            setMessage("Not authenticated");
            return;
        }

        const user = sessionData.session.user;
        console.log("Creating group as user:", user.id); // 🟢 DEBUG

        if (!name.trim()) {
            setMessage("Group name required");
            return;
        }

        // 1️⃣ Create group
        const { data: group, error: groupError } = await supabase
            .from("study_groups")
            .insert({
                name,
                description,
                owner_id: user.id, // 🔴 THIS MUST BE HERE
            })
            .select()
            .single();

        if (groupError) {
            setMessage(groupError.message);
            return;
        }

        // 2️⃣ ADD CREATOR AS MEMBER (THIS WAS MISSING)
        const { error: memberError } = await supabase
            .from("group_members")
            .insert({
                group_id: group.id,
                user_id: session.user.id,
                role: "owner",
            });

        if (memberError) {
            setMessage(memberError.message);
            return;
        }

        setMessage("Group created successfully!");
        setName("");
        setDescription("");
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleCreateGroup}
                className="border p-6 rounded w-full max-w-md bg-white"
            >
                <h1 className="text-xl font-bold mb-4">Create Study Group</h1>

                <input
                    type="text"
                    className="border p-2 w-full mb-3"
                    placeholder="Group name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // ✅ REQUIRED
                />

                <textarea
                    className="border p-2 w-full mb-3"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} // ✅ REQUIRED
                />

                <button
                    type="submit" // ✅ IMPORTANT
                    className="w-full bg-black text-white py-2 rounded"
                >
                    Create Group
                </button>

                {message && (
                    <p className="mt-3 text-center text-sm">{message}</p>
                )}
            </form>
        </div>
    );
}
