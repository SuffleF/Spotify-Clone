import { SignedOut, UserButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SignInOAuthButtons from "./SignInOAuthButtons";
import { buttonVariants } from "./ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import { cn } from "@/lib/utils";

const Topbar = () => {

    const { isAdmin } = useAuthStore();
    return (
        <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">

            {/* Logo */}
            <div className="flex gap-2 items-center">
                <img src="/spotify.png" className="size-8" alt="Spotify logo" />
                Spotify
            </div>

            {/* Admin button & sign in-out button */}
            <div className="flex items-center gap-4">
                { isAdmin && (
                    <Link to={"/admin"} className={cn(buttonVariants({ variant: "outline" }))}>
                        <LayoutDashboardIcon className="size-4 mr-2" />
                        Admin Dashboard
                    </Link>
                )}

                <SignedOut>
                    <SignInOAuthButtons />
                </SignedOut>

                <UserButton />
            </div>
        </div>
    )
}

export default Topbar