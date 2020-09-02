<template>
  <div class="big-chart chart card">
    <div class="chart__header">
      <div class="chart__title">
        <h2 class="chart__title-name">Traffic</h2>
        <div class="chart__title-date">November 2020</div>
      </div>

      <div class="chart__btns">
        <a class="waves-effect waves-light btn active">Day</a>
        <a class="waves-effect waves-light btn">Month</a>
        <a class="waves-effect waves-light btn">Year</a>
      </div>
    </div>

    <div class="line-chart">
      <line-chart :chartdata="chartdata" :options="options" class="chart-big"></line-chart>
    </div>
    <div class="chart-progress">
      <ChartProgressBar :percent = '40' color = '#ff0000' bar-title = 'Visits' :count = "29.701" />
      <ChartProgressBar :percent = '70' color = '#ff00ff' bar-title = 'Leads' :count = "9.025" />
      <ChartProgressBar :percent = '45' color = '#ff430ff' bar-title = 'Unigue' :count = "10.025" />
      <ChartProgressBar :percent = '12' color = '#f313ff' bar-title = 'New' :count = "5.025" />

    </div>
  </div>
</template>


<script>
import LineChart from "@/utils/LineChart.js";
import ChartProgressBar from "@/components/progress/ChartProgressBar";

export default {
  components: {
    LineChart,
    ChartProgressBar,
  },
  data() {
    return {
      chartdata: {
        labels: ["January", "February", "Mart", "April", "May", "June", "Jule"],
        datasets: [
          {
            label: "Data set 1",
            backgroundColor: "transparent",
            data: [40, 20, 43, 54, 4, 32, 43],
            borderColor: "rgba(255, 99, 132, 1)",
          },

          {
            label: "Data set 2",
            backgroundColor: "transparent",
            data: [10, 20, 33, 34, 23, 12, 43],
            borderColor: "rgba(54, 162, 235, 1)",
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>

<style lang="scss">
.chart-progress {
  display: flex;
  margin-top: 40px;
}
.line-chart {
  border-bottom: 1px solid #d8dbe0;
  padding-bottom: 30px;
  canvas {
    height: 100% !important;
  }
}
.chart__header {
  display: flex;
  justify-content: space-between;
}
.chart__btns {
  a.btn {
    box-shadow: none;
    border: 0;
    border-radius: 0;
    z-index: 1;
  }
  .active{
    background-color: #498882;
  }
}
.chart-big {
  height: 300px;
}

.card {
  background: white;
  padding: 1.25rem;
}
.chart__title {
  &-name {
    font-size: 21px;
    color: #3c4b64;
    margin-bottom: 0;
    margin-top: 0;
  }
  &-date {
    color: #768192 !important;
    font-size: 11px;
    margin-bottom: 20px;
  }
}
</style>
