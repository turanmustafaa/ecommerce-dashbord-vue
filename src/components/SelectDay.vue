<template>
  <div class="max-w-xs mx-auto">
    <label for="days" class="block text-sm font-medium text-gray-700"
      >Select Days</label
    >
    <select
      v-model="selected"
      id="days"
      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      <option v-for="day in days" :key="day.value" :value="day.value">
        {{ day.text }}
      </option>
    </select>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const selected = ref(store.state.selectedDays);
    const days = ref([
      { value: "60", text: "60 days" },
      { value: "30", text: "30 days" },
      { value: "15", text: "15 days" },
      { value: "7", text: "7 days" },
    ]);
    watch(selected, async (newVal) => {
      await store.dispatch("setSelectedDays", newVal);
      await store.dispatch("getGraphData", newVal);
      
    });
    return {
      days,
      selected,
    };
  },
};
</script>

<style>
</style>