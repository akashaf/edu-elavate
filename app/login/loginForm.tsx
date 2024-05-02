'use client';

import { useForm } from "react-hook-form";
import { login } from "./actions";
import { Button, PasswordInput, TextInput } from "@mantine/core";

export default function LoginForm() {
    const {handleSubmit, register} = useForm();

  const onSubmit = (data: any) => login(data);
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Email"
            {...register("email")}
            placeholder="akashaf@eduElavate.com"
            required
          />
          <PasswordInput
            label="Password"
            {...register("password")}
            placeholder="Your password"
            required
            mt="md"
          />
          <Button type="submit" fullWidth mt="xl">
            Sign in
          </Button>
        </form>
      </>
    );
}