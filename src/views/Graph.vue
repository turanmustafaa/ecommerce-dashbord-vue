<template>
    <section class="w-full">
        <SelectDay />
    <GraphChart />
    <Table v-if="tableData.length" />
    </section>
</template>

<script>
import { onMounted, ref, watch,computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import SelectDay from '../components/SelectDay.vue';
import GraphChart from '../components/GraphChart.vue';
import Table from '../components/Table.vue';
import { toast } from 'vue3-toastify';
export default {
    components : {
        SelectDay,
        GraphChart,
        Table
    },
  setup() {
    const store = useStore();
    const router = useRouter();
    const tableData = computed(() => store.getters.tableDataGetter);

    onMounted(async () => {
        await store.dispatch('getGraphData')
         
        toast("Welcome!", {
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
        });

        setTimeout(() => {
               toast("You can Click the column to see sales etc. for a day. and also you can click the other column for the compare days", {
                autoClose: 8000,
                position: toast.POSITION.TOP_RIGHT,
                });
        }, 1500);
    })
    return {
        tableData
    };
  },
};
</script>

<style>
</style>