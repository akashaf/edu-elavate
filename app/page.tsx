import { createClient } from "@/utils/supabase/server";
import { Card, SimpleGrid } from "@mantine/core";
import { redirect } from "next/navigation";
import { CardDescription, CardTitle } from "./components/card-hover-effect";
import Link from "next/link";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: subject } = await supabase.from("subject").select();

  if (!user) {
    return redirect("/login");
  }

  const cards =
    subject &&
    subject.map((item) => (
      <div key={item.id}>
        <Link href={item.file_url}>
          <Card className="transition duration-300 ease-in-out transform hover:scale-105">
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              nihil autem nisi necessitatibus. Temporibus quisquam ab vero rem
              dolorum mollitia optio reprehenderit placeat molestias aspernatur
              illo officiis, atque similique ad!
            </CardDescription>
          </Card>
        </Link>
      </div>
    ));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl mx-auto px-8">
        {subject && <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>}
      </div>
    </main>
  );
}
