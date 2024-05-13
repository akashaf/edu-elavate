import { createClient } from "@/utils/supabase/server";
import { Card, SimpleGrid } from "@mantine/core";
import { redirect } from "next/navigation";
import { CardDescription, CardTitle } from "./components/card-hover-effect";
import Link from "next/link";
import { getSubject } from "./action";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const subject = await getSubject();

  if (!user) {
    return redirect("/login");
  }

  const cards =
    subject &&
    subject.map((item) => (
      <div key={item.uuid}>
        <Link href={item.file_url}>
          <Card className="transition duration-300 ease-in-out transform hover:scale-105">
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      </div>
    ));

  return (
    <div className="max-w-5xl mx-auto px-8">
      {subject && <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>}
    </div>
  );
}
