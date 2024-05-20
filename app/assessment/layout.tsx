import { redirect } from "next/navigation";
import { getUserSession } from "../actions";
import { Container } from "@mantine/core";

export default async function assessmentLayout({ children }: { children: React.ReactNode }) {
    const userSession = await getUserSession();

  if (!userSession.user) {
    return redirect("/login");
  }
    return (
        <Container>
        {children}
        </Container>
    );
    }