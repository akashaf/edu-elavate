import { Container, Paper, Title } from "@mantine/core";
import LoginForm from "./loginForm";
import classes from "./AuthenticationTitle.module.css";

export default function LoginPage() {
  return (
    <>
      <Container size={420} my="25vh">
        <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <LoginForm />
        </Paper>
      </Container>
    </>
  );
}
