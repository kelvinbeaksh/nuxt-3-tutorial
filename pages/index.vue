<template>
  <div>
    <Button name="Get Task" :onclick="getTasks"></Button>
  </div>
</template>

<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";
const getTasks = async () => {
  const response = await getTodos(createClient);
  console.log("tasks", response);
};
</script>

<style lang="scss" scoped></style>
