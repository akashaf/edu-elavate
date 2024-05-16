import { ActionIcon, Anchor, Box, Menu } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";
import Link from "next/link";
import { Key } from "react";

const Assessment = async ({
  assessmentBySubjectUuid,
}: {
  assessmentBySubjectUuid: Record<string, any>;
}) => {
  return (
    <Box pos="absolute" bottom={20} right={20}>
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
          {assessmentBySubjectUuid.map(
            (assessment: { uuid: Key; file_name: string }) => (
              <Menu.Item key={assessment.uuid}>
                <Anchor
                  component={Link}
                  href={`/assessment/${assessment.file_name.replace(
                    /\s/g,
                    "_"
                  )}`}
                  underline="never"
                  className="text-black dark:text-white"
                >
                  {assessment.file_name}
                </Anchor>
              </Menu.Item>
            )
          )}
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};

export default Assessment;
