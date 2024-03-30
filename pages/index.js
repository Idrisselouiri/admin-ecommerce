import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <main className="bg-slate-100">
        <div className="h-screen w-full flex justify-center items-center">
          <button
            onClick={() => signIn()}
            className="bg-blue-600 text-white text-[18px] font-medium p-4 rounded"
          >
            Sign In With Google
          </button>
        </div>
      </main>
    );
  }
  return (
    <main className="bg-slate-100">
      <div className="h-screen w-full flex justify-center items-center">
        <button
          onClick={() => signOut()}
          className="bg-blue-600 text-white text-[18px] font-medium p-4 rounded"
        >
          Log Out as {session.user.email}
        </button>
      </div>
    </main>
  );
}
