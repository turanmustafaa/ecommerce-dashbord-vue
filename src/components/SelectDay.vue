<template>
  <div class="max-w-xs mx-auto">
    <label for="days" class="block text-sm font-medium"
      >Select Days</label
    >
    <select
      v-model="selected"
      id="days"
      class="block w-full text-base bg-transparent border-white border px-3 py-4 rounded-3xl mt-2"
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