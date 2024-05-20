"use client";

import { useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  UnstyledButton,
  rem,
  Anchor,
  Flex,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./NavbarLinksGroup.module.css";
import Link from "next/link";

interface LinksGroupProps {
  icon: React.ReactNode;
  label: string;
  initiallyOpened?: boolean;
  link: string;
  links?: { label: string; link: string }[];
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  link,
  links,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);

  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Anchor
      component={Link}
      className={classes.link}
      href={link.link}
      key={link.label}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            {link ? (
              <Anchor
                underline="never"
                classNames={{
                  root: "text-black dark:text-white",
                }}
                component={Link}
                href={link}
              >
                <Flex>
                  <ThemeIcon variant="light" size={30}>
                    {Icon}
                  </ThemeIcon>
                  <Box ml="md">{label}</Box>
                </Flex>
              </Anchor>
            ) : (
              <>
                <ThemeIcon variant="light" size={30}>
                  {Icon}
                </ThemeIcon>
                <Box ml="md">{label}</Box>
              </>
            )}
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? "rotate(-90deg)" : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
