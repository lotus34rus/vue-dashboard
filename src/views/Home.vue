<template>
  <div>
    <div class="row">
      <CardChartComponent />
    </div>

    <div class="row">
      <div class="col s12">
        <LineChartComponent />
      </div>
    </div>
  </div>
</template>

<script>
import LineChartComponent from "@/components/charts/LineChartComponent";
import CardChartComponent from "@/components/charts/CardChartComponent";

export default {
  name: "Home",
  components: {
    LineChartComponent,
    CardChartComponent,
  },

};
</script>
