<script setup lang="ts">
import { computed, ref } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { graphql } from '@/gql';

const testData = useQuery(
  graphql(`
    query Characters($id: ID! = 1) {
      character(id: $id) {
        name
        status
      }
    }
  `),
);

const resultResponse = computed(() => testData.result.value?.character);

console.log('resultResponse: ', resultResponse.value);
</script>

<template>
  <div>
    <div>name: {{ resultResponse?.name }}</div>
  </div>

  Characters page
</template>

<style lang="scss">
@import '@/styles/vars.scss';
</style>
