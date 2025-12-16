import type { ReactNode } from 'react';

export default function Discord(): ReactNode {
    return (
        <>
            <script>
                window.location.href = "https://discord.gg/uTqyqtHWG4";
            </script>
            <a href="https://discord.gg/uTqyqtHWG4">リダイレクトしない場合はこちらをクリックしてください。</a>
        </>
    )
}