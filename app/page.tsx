import { Card, SimpleGrid } from "@mantine/core";
import { redirect } from "next/navigation";
import { CardDescription, CardTitle } from "./components/card-hover-effect";
import Link from "next/link";
import { getSubject, getUserSession } from "./actions";

export default async function Home() {
  const userSession = await getUserSession();

  const subject = await getSubject();

  if (!userSession.user) {
    return redirect("/login");
  }

  interface Subject {
    uuid: string;
    name: string;
    description: string;
  }

  const cards: JSX.Element[] | null =
    subject &&
    subject.map((item: Subject) => (
      <div key={item.uuid}>
        <Link href={`matematik/${item.uuid}`}>
          <Card
            withBorder
            radius="md"
            shadow="md"
            className="transition duration-300 ease-in-out transform hover:scale-105"
          >
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
