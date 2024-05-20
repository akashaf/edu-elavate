import { redirect } from "next/navigation";
import { getUserSession } from "../actions";
import { Code, Container, Flex, ScrollArea, rem } from "@mantine/core";
import { IconGauge, IconNotes } from "@tabler/icons-react";
import { cn } from "@/utils/cn";
import { LinksGroup } from "../components/profile/NavbarLinksGroup";
import classes from "../components/profile/NavbarNested.module.css";

export default async function settingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSession = await getUserSession();

  if (!userSession.user) {
    return redirect("/login");
  }
  const mockdata = [
    {
      label: "Profile",
      icon: <IconGauge style={{ width: rem(18), height: rem(18) }} />,
      link: "/settings/profile",
    },
    {
      label: "Change Password",
      icon: <IconGauge style={{ width: rem(18), height: rem(18) }} />,
      link: "/settings/password",
    },
    // {
    //   label: "Sample Nested Menu",
    //   icon: <IconNotes style={{ width: rem(18), height: rem(18) }} />,
    //   initiallyOpened: true,
    //   links: [
    //     { label: "Overview", link: "/" },
    //     { label: "Forecasts", link: "/" },
    //     { label: "Outlook", link: "/" },
    //     { label: "Real time", link: "/" },
    //   ],
    // },
  ];
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));
  return (
    <Container>
      <Flex gap="md">
        <div>
          <nav className={classes.navbar}>
            <ScrollArea className={classes.links}>
              <div className={classes.linksInner}>{links}</div>
            </ScrollArea>

            <div className={cn("text-right", classes.footer)}>
              <Code fw={700}>v3.1.2</Code>
            </div>
          </nav>
        </div>
        <div>{children}</div>
      </Flex>
    </Container>
  );
}
