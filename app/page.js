import { ImStatsBars } from "react-icons/im";

export default function Home() {
    return (
        <header className="flex items-center justify-between">
            {/* User Profile */}
            <div className="flex items-center gap-2">
                {/* User Picture */}
                <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
                    <img
                        className="object-cover w-full h-full"
                        src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-1/368665439_784995100295340_6107996026778078849_n.jpg?stp=c4.98.555.555a_dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=cbQkUn5XW_IQ7kNvgEWb8AY&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=AwPmMbNt0Hlj2K5sIB5HmuR&oh=00_AYBaeQvbtSCAuii4lqPpcToxH2Hrswx93zwD0uNsoBxpWg&oe=67325F7E"
                        alt="Profile Picture"
                    />
                </div>

                {/* Greetings */}
                <small>Hi, Joshuel!</small>
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-2">
                <div>
                    <ImStatsBars className="text-2xl" />
                </div>
                <div>
                    <button className="btn btn-danger">Sign out</button>
                </div>
            </nav>
        </header>
    );
}
