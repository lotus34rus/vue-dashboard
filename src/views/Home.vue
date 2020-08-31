<template>
  <div>
      Main page

      <div class="big-chart">
        <LineChart />
      </div>
  </div>
</template>

<script>
import LineChart from '@/components/charts/LineChart'

export default {
  name: 'Home',
  components: {
    LineChart
  }
}
</script>


<style lang="scss" scoped>
  .big-chart{
    height: 300px; 
  }
</style>
