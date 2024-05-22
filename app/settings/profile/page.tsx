'use client';

import { Button, Divider, Input, TextInput, Title } from "@mantine/core";
import { useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";

export default function SettingsPage() {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data: any) => {
    try {
      console.log('success', data);
      
    } catch (error) {
      console.log('error', error);
      
    }
  };
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>

      <Title order={1}>Public Profile</Title>
      <small>Change your public profile information.</small>
      <Divider my="md" />
      <TextInput
        classNames={{
          label: "mb-2",
          root: "mb-4",
        }}
        label="Name"
        placeholder="Akashaf Khomarudin"
        {...register('name')}
      />
      <Input.Wrapper
        label="Phone Number"
        classNames={{
          label: "mb-2",
          root: "mb-4",
        }}
      >
        <Input
          component={IMaskInput}
          mask="+6 (000) 0000-0000"
          placeholder="Your phone"
          {...register('phone')}
        />
      </Input.Wrapper>
      <TextInput
        classNames={{
          label: "mb-2",
          root: "mb-4",
        }}
        label="Email"
        placeholder="akashaf@edu-elavate.com"
        {...register('email', { required: true })}
      />
      <Button type="submit" fullWidth mt="xl">Submit</Button>
    </form>
    </>
  );
}
