"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

/**
 * Logs in a user with the provided email and password.
 * @param formData - The login form data containing the email and password.
 */
export async function login(formData: { email: string; password: string }) {
  const supabase = createClient();
  const data = {
    email: formData.email,
    password: formData.password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

/**
 * Signs out the user by calling the signOut method of the Supabase authentication client.
 * After signing out, it revalidates the path and redirects the user to the home page.
 */
export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}
