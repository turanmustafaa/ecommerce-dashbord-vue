<template>
  <div class="p-4 text-white mt-10">
    <div class="mb-4">
    <div class="relative w-1/4">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search By Product Name" required />
    </div>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-transparent">
        <thead class="">
          <tr class="border-b pb-6">
            <th class="px-4 py-2">SKU</th>
            <th class="px-4 py-2">Product Name</th>
            <th class="px-4 py-2">
              {{ compareDates[0] }} <br />Sales / Units<br />Avg. Selling Price
            </th>
            <th v-if="tableData[0]?.sku?.amount2" class="px-4 py-2">
              {{ compareDates[1] }} <br />Sales / Units<br />Avg. Selling Price
            </th>
            <th class="px-4 py-2">SKU Refund Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in paginatedData"
            :key="index"
            class="border-b"
          >
            <td class="px-4 py-2">{{ item?.sku.asin }}</td>
            <td class="px-4 py-2">{{ item.sku.productName }}</td>
            <td class="px-8 py-2">
              <div class=" text-nowrap">
                <span>{{ item.sku.amount }} / {{ turnNumberFnc(item.sku.qty, item.sku.amount) }}</span>
              </div>
              <div>{{ item.sku.sortingAmount }}</div>
            </td>
            <td v-if="tableData[0]?.sku?.amount2" class="px-8 py-2">
              <div class=" text-nowrap">
                <span>{{ item.sku.amount2 }} / {{ turnNumberFnc(item.sku.qty2, item.sku.amount2) }}</span>
              </div>
              <div>{{ item.sku.sortingAmount }}</div>
            </td>
            <td class="px-4 py-2">{{ item.refundRate }}</td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-center mt-4">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 mx-2 border rounded bg-gray-700 disabled:bg-gray-500"
        >
          Previous
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 mx-2 border rounded bg-gray-700 disabled:bg-gray-500"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const tableData = computed(() => store.getters.tableDataGetter);
    const compareDates = computed(() => store.state.compareDays);
    const searchQuery = ref("");
    const currentPage = ref(1);
    const itemsPerPage = 10;

    const filteredTableData = computed(() => {
      if (!searchQuery.value) {
        return tableData.value;
      }
      return tableData.value.filter((item) =>
        item.sku.productName
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
      );
    });

    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredTableData.value.slice(start, end);
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredTableData.value.length / itemsPerPage);
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const turnNumberFnc = (val1, val2) => {
      return Math.floor(val1 * val2);
    };

    return {
      tableData,
      compareDates,
      searchQuery,
      currentPage,
      totalPages,
      nextPage,
      prevPage,
      paginatedData,
      turnNumberFnc,
    };
  },
};
</script>

<style scoped>
</style>
