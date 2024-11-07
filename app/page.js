export default function Home() {
    return (
        <header>
            {/* User Profile */}
            <div className="flex item-center gap-2">
                {/* User Picture */}
                <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
                    <img
                        className="object-cover w-full h-full"
                        src="https://thispersondoesnotexist.com/image"
                        alt="Profile Picture"
                    />
                </div>

                {/* Greetings */}
                <small>Hi, Joshuel!</small>
            </div>
        </header>
    );
}
