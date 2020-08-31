<template>
  <div class="line-chart">
    <line-chart :chartdata="chartdata" :options="options" class="chart-big"></line-chart>
  </div>
</template>


<script>
import LineChart from "@/utils/LineChart.js";

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      chartdata: {
        labels: ["January", "February", "January", "February","January", "February","January", "February"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 20, 43,54,4,32,43,13],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>

<style lang="scss">
.line-chart {
  canvas {
    height: 100% !important;
  }
}

.chart-big {
  height: 300px;
}
</style>
