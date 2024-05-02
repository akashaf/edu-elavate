import { createClient } from "@/utils/supabase/server";
import { Button, Card, SimpleGrid } from "@mantine/core";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: subject } = await supabase.from("subject").select();

  if (!user) {
    return redirect("/login");
  }

  const cards = subject?.map((article) => (
    <Card key={article.uuid}>
      <Button component={Link} href={article.file_url}>
        {article.name}
      </Button>
    </Card>
  ));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </main>
  );
}
