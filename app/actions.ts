"use server";

import { createClient } from "@/utils/supabase/server";

export const getUserSession = async () => {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  return data;
};
export const getSubject = async () => {
  const supabase = createClient();
  const { data } = await supabase.from("subject").select();
  return data;
};
export const getSubjectByUser = async () => {
  const supabase = createClient();
  const { data } = await supabase.from("subject_user").select(`
  *, subject (*), profiles (*)`);
  return data;
};
export const getSubjectByUuid = async (uuid: string) => {
  const supabase = createClient();
  const { data } = await supabase.from("subject").select().eq("uuid", uuid);

  return data;
};
export const getAssessmentBySubjectUuid = async (uuid: string) => {
  const supabase = createClient();
  const { data } = await supabase
    .from("assessment")
    .select()
    .eq("subject_uuid", uuid);

  return data;
};
