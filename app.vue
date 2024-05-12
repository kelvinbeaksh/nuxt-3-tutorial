<template>
  <div>Hellow</div>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'
const config = useRuntimeConfig()

const supabase = createClient(supabaseUrl , superbaseToken)
const countries = ref([])

async function getCountries() {
  const { data, error } = await supabase.from('countries').select()
  console.log('data', data, 'error', error)
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>
