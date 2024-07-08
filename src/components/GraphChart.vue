<template>
  <div id="chart-container" style="overflow-x: auto; width: 100%" class="mt-10">
    <div style="min-width: 100vw">
      <apexchart
        type="bar"
        height="450"
        :options="chartOptions"
        :series="series"
        @click="clickHandler"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { useStore } from "vuex";
import VueApexCharts from "vue3-apexcharts";
import dayjs from "dayjs";

export default {
  name: "ChartComponent",
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    const store = useStore();
    const series = ref([]);
    const clickedColumns = ref([]);
    const graphData = computed(() => store.getters.graphDataGetter);

    const clickHandler =  (event, chartContext, config) => {
        console.log("click")
        handleColumnClick(config)
    }
    const handleColumnClick = (config) => {
        console.log(config,'config')
      const date = chartOptions.value.xaxis.categories[config.dataPointIndex];
      console.log(date,'date')
      if (clickedColumns.value.length < 2) {
        clickedColumns.value.push(date);
      } else {
        clickedColumns.value = [date];
      }
    };

    const chartOptions = ref({
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
          type: "x", // or 'y' for vertical zooming
          autoScaleYaxis: true,
        },
        // events: {
        //     handleColumnClick(config){
        //         console.log('config')
        //     }
        // },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          borderRadiusApplication: "end", // 'around', 'end'
          borderRadiusWhenStacked: "last", // 'all', 'last'
          dataLabels: {
            total: {
              enabled: false,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
        shared: true,
        intersect: false,
        x: {
          format: "MM/dd/yyyy",
        },
        y: {
          formatter: function (val) {
            return val.toFixed(2);
          },
        },
        theme: "dark", // Set to 'dark' theme
        style: {
          fontSize: "14px",
          fontFamily: undefined,
          background: "#000000", // Background color
          color: "#FFFFFF", // Text color
        },
      },
      xaxis: {
        type: "datetime",
        categories: [],
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
    });

    const updateChart = async () => {
      console.log(graphData.value, "graphhhhhhhhh");
      if (graphData.value && graphData.value.length) {
        const categories = graphData.value.map((item) =>item.date);

        const profitData = graphData.value.map((item) => item.profit);
        const fbaAmountData = graphData.value.map((item) => item.fbaAmount);
        const fbmAmountData = graphData.value.map((item) => item.fbmAmount);
        const totalSales = graphData.value.map((item) => item.amount);
        const shippingSales = graphData.value.map((item) => item.shippingAmount);
        series.value = [
        { name: "profit", data: profitData },
        { name: "fbaAmount", data: fbaAmountData },
        { name: "fbmAmount", data: fbmAmountData },
        { name: "totalSales", data: totalSales },
        { name: "Shipping", data: shippingSales },
        ];

        chartOptions.value.xaxis.categories = categories;
      } else {
        console.error("Graph data is empty or undefined");
      }
    };

    onMounted(async () => {
      await updateChart();
    });

    watch(
      () => graphData,
      async () => {
        console.log("calısıyorrrrrrrrr");
        await updateChart();
      },
      { deep: true }
    );
    watch(() => clickedColumns.value, async () => {
      await store.dispatch('getTableData', clickedColumns.value)
        console.log(clickedColumns.value,'clicked cols')
        store.dispatch('setCompareDays', clickedColumns.value)
    },
     {deep: true})
    return {
      series,
      chartOptions,
      clickHandler
    };
  },
};
</script>

<style>
</style>
