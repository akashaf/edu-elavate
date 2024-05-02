"use client";

import { MantineColorsTuple, createTheme } from "@mantine/core";
const myColor: MantineColorsTuple = [
  '#f7f3f2',
  '#e7e5e5',
  '#d2c9c6',
  '#bdaaa4',
  '#ab9087',
  '#a17f75',
  '#9d766b',
  '#896459',
  '#7b584e',
  '#6d4b40'
];
export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    myColor,
  }
});