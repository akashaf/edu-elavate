import { getUserSession } from "@/app/action";
import { NavLink } from "@mantine/core";
import Link from "next/link";
import AuthSection from "./AuthSection";

export default async function Navbar() {
  const session = await getUserSession();

  return (
    <nav className="inline-flex items-center justify-between p-4 fixed top-0 left-0 right-0 shadow-md">
      <div>
        <NavLink
          component={Link}
          classNames={{ label: "text-xl font-bold tracking-widest" }}
          href="/"
          label="EduElavate"
        />
      </div>
      <AuthSection session={session} />
    </nav>
  );
}
