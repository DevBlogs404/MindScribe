"use client";
import { useUser, UserButton, SignOutButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/app/components/Logo";

export default function SideBar() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { sessionId } = useAuth();

  const router = useRouter();
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-b from-slate-800 to-cyan-800 text-white">
      <div className="px-2">
        <Logo />
        <Link href="/post/new" className="btn">
          new post
        </Link>
        <Link
          href="/token-topup"
          className="block  text-center mt-2 hover:underline"
        >
          <FontAwesomeIcon icon={faCoins} className="text-yellow-500" />
          <span className="ml-1">0 tokens available</span>{" "}
        </Link>
      </div>
      <div className="flex-1 overflow-auto px-2">list of posts from a user</div>
      <div>
        {isSignedIn && sessionId ? (
          <>
            <div className="flex items-center px-2 gap-2 border-t border-t-black/50 h-20">
              <div className="min-w-[50px]">
                <Image
                  src={user.imageUrl}
                  alt="userimage"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className=" capitalize flex flex-col items-start">
                {user.username}
                {/* <Link href="/">Log Out</Link> */}
                <SignOutButton
                  signOutCallback={() => router.push("/")}
                  signOutOptions={{
                    sessionId,
                  }}
                >
                  <span className="text-sm">Sign Out</span>
                </SignOutButton>
              </div>
              {/* <UserButton afterSignOutUrl="/" /> */}
            </div>
          </>
        ) : (
          <Link href="/sign-in">SignIn</Link>
        )}
      </div>
    </div>
  );
}
