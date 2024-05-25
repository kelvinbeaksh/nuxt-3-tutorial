import { createClient } from "@supabase/supabase-js";

const createSupabaseClient = () => {
  const config = useRuntimeConfig();
  const supabaseUrl = config.public.supabaseUrl;
  const superbaseToken = config.public.supabaseToken;
  return createClient(supabaseUrl, superbaseToken);
};

export const getTodos = async () => {
  const supabase = createSupabaseClient();
  const response = await supabase.from("tasks").select();
  return response;
};

export const deleteToDo = async () => {
  try {
    const supabase = createSupabaseClient();
    const response = await supabase
      .from("tasks")
      .delete()
      .eq("name", "Denmark");

    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const updateToDo = async () => {
  try {
    const supabase = createSupabaseClient();
    const response = await supabase
      .from("tasks")
      .update({ name: "USA" })
      .eq("name", "Denmark")
      .select();

    return response;
  } catch (error) {
    console.log("error", error);
  }
};
