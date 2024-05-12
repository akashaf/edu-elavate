import { Button, Text } from "@mantine/core";

// create stunning error page using mantine components and tailwindcss
export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5">
      <Text fw="center" size="xl">
        404 - Page Not Found
      </Text>
      <Button color="blue" component="a" href="/">
        Go back to home
      </Button>
    </div>
  );
}