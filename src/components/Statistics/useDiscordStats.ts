import { useState, useEffect } from "react";

interface DiscordStats {
    members: number;
    loading: boolean;
    error: string | null;
}

export function useDiscordStats(serverId: string): DiscordStats {
    const [stats, setStats] = useState<DiscordStats>({
        members: 0,
        loading: true,
        error: null,
    });

    useEffect(() => {
        let isMounted = true;

        async function fetchStats() {
            try {
                const res = await fetch(`https://discord.com/api/guilds/${serverId}/widget.json`);

                if (!res.ok) throw new Error("Failed to fetch Discord data");

                const data = await res.json();

                const members = data.presence_count || 0;

                if (isMounted) {
                    setStats({ members, loading: false, error: null });
                }
            } catch (err) {
                if (isMounted) {
                    setStats((prev) => ({ ...prev, loading: false, error: "Failed to load stats" }));
                }
            }
        }

        fetchStats();

        return () => {
            isMounted = false;
        };
    }, [serverId]);

    return stats;
}
