type ProfileHeaderProps = {
    name: string;
    bio?: string;
    avatarUrl?: string;
};

export function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
    return (
        <header className="text-center">
            <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border border-white/15 bg-white/10 shadow-sm">
                {avatarUrl ? (
                    <img
                        src={avatarUrl}
                        alt={`${name} avatar`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                ) : null}
            </div>

            <h1 className="mt-4 text-xl font-bold tracking-tight text-black">
                {name}
            </h1>

            {bio ? (
                <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-black/70">
                    {bio}
                </p>
            ) : null}
        </header>
    );
}