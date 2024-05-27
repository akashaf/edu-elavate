"use client";

import { SubmitHandler, set, useForm } from "react-hook-form";
import { login } from "./actions";
import { Button, PasswordInput, TextInput } from "@mantine/core";

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    try {
      login(data);
    } catch (error) {
      setError("root", {
        message: "Invalid Data",
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Email"
          {...register("email", {
            validate: {
              email: (value) => value.includes("@") || "Invalid email",
            },
          })}
          placeholder="akashaf@eduElavate.com"
          error={errors?.email?.message}
          withAsterisk
        />
        <PasswordInput
          label="Password"
          {...register("password", {
            minLength: { value: 8, message: "Password is too short" },
            validate: {
              specialChar: (value) =>
                /[!@#$%^&*]/.test(value) ||
                "Password must contain special character",
            },
          })}
          placeholder="Your password"
          mt="md"
          error={errors.password?.message}
          withAsterisk
        />
        <Button type="submit" fullWidth mt="xl">
          Sign in
        </Button>
        {errors.root && (
          <div className="text-red-500">{errors.root.message}</div>
        )}
      </form>
    </>
  );
}
