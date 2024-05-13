"use server";

import { createClient } from "@/utils/supabase/server";

export const getSubject = async () => {
  const supabase = createClient();
  const { data } = await supabase.from("subject").select();
  return data;
};
export const getSubjectByUuid = async (uuid: string) => {
  const supabase = createClient();
  const { data } = await supabase.from("subject").select().eq("uuid", uuid);

  return data;
};
