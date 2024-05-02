import { createClient } from "@/utils/supabase/server";
import { Button, Card, SimpleGrid } from "@mantine/core";
import Link from "next/link";
import { redirect } from "next/navigation";
import { HoverEffect } from "./components/card-hover-effect";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: subject } = await supabase.from("subject").select();

  if (!user) {
    return redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid> */}
      <div className="max-w-5xl mx-auto px-8">
      {subject && <HoverEffect items={subject} />}  
    </div>
    </main>
  );
}
