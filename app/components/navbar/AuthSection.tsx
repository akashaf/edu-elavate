"use client";

import { signOut } from "@/app/login/actions";
import { Button } from "@mantine/core";
import { IconLogout, IconUser } from "@tabler/icons-react";
import Link from "next/link";

export default function AuthSection({ session }: { session: any }) {
    const {user} = session;
    if (!user) return null;
  if (user)  
    return (
      <div className="flex items-center space-x-2">
        <Button
        component={Link}
          variant="outline"
          color="gray"
          leftSection={<IconUser className="w-5 h-5" />}
          href='settings'
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
    );
}
