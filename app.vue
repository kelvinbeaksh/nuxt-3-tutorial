<template>
  <div>Hellow</div>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
  <button @click="addRecord">Add new record</button>
  <button @click="deleteRecord">Delete record</button>
  <button @click="updateRecord">Update record</button>
</template>

<script setup>
import { createClient } from "@supabase/supabase-js";
const config = useRuntimeConfig();

const supabase = createClient(supabaseUrl, superbaseToken);
const countries = ref([]);

const getCountries = async () => {
  const { data, error } = await supabase.from("countries").select();
  console.log("data", data, "error", error);
  countries.value = data;
};

const addRecord = async () => {
  try {
    const response = await supabase
      .from("countries")
      .insert([{ name: "Denmark" }])
      .select();

    if (response) {
      await getCountries();
    }
  } catch (error) {
    console.log("error", error);
  }
};

const deleteRecord = async () => {
  try {
    const response = await supabase
      .from("countries")
      .delete()
      .eq("name", "Denmark");

    if (response) {
      await getCountries();
    }
  } catch (error) {
    console.log("error", error);
  }
};

const updateRecord = async () => {
  try {
    const response = await supabase
      .from("countries")
      .update({ name: "USA" })
      .eq("name", "Denmark")
      .select();

    if (response) {
      await getCountries();
    }
  } catch (error) {
    console.log("error", error);
  }
};

onMounted(() => {
  getCountries();
});
</script>
