import { Container, Paper, Title } from "@mantine/core";
import LoginForm from "./loginForm";

export default function LoginPage() {
  
  return (
    <>
      <Container size={420} my={40}>
        <Title ta="center" className="font-bold">
          Welcome back!
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <LoginForm />
        </Paper>
      </Container>
    </>
  );
}

