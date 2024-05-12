"use client";
import { signOut } from "@/app/login/actions";
import { Button } from "@mantine/core";
import { IconLogout, IconUser } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 fixed top-0 left-0 right-0 shadow-md">
      <div>EduElavate</div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          color="gray"
          leftSection={<IconUser className="w-5 h-5" />}
        >
          Profile
        </Button>
        <Button
          variant="outline"
          color="red"
          leftSection={<IconLogout className="w-5 h-5" />}
          onClick={() => signOut()}
        >
          Logout
        </Button>
      </div>
    </nav>
  );
}
