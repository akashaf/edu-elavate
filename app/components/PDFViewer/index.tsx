"use client";
import { ActionIcon, Anchor, Box, Menu } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";
import PDFViewer from "./PDFViewer";
import Link from "next/link";

export default function PDFViewerIndex({
  subjectByUuid,
}: {
  subjectByUuid: any;
}) {
  return (
    <Box pos="relative">
      <PDFViewer fileUrl={subjectByUuid[0].file_url} />
      <Box pos="fixed" bottom={20} right={40}>
        <Menu
          position="top"
          offset={8}
          transitionProps={{
            transition: "pop-bottom-left",
            duration: 400,
            timingFunction: "ease",
          }}
        >
          <Menu.Target>
            <ActionIcon color="blue" radius="xl" size={40}>
              <IconDotsVertical stroke={1.5} size={30} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Menu.Item key={i}>
                  <Anchor
                    component={Link}
                    href={`/assessment/${i}`}
                    key={i}
                    underline="never"
                    className="text-black"
                  >
                    Assessment {i}
                  </Anchor>
                </Menu.Item>
              ))}
          </Menu.Dropdown>
        </Menu>
      </Box>
    </Box>
  );
}
