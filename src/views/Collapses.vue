<template>
  <div class="row">
    <div class="s12">
      <div class="card">
        <div class="card-header">
          <h5>Collapsible</h5>
        </div>
        <p>Collapsibles are accordion elements that expand when clicked on. They allow you to hide content that is not immediately relevant to the user.</p>

        <ul class="collapsible" ref="collapsible">
          <li>
            <div class="collapsible-header">
              <i class="material-icons">filter_drama</i>First
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">place</i>Second
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">whatshot</i>Third
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Collapses",
  data() {
    return {
      collapses: null,
    };
  },
  mounted() {
    this.collapses = M.Collapsible.init(this.$refs.collapsible, {
      inDuration: 0,
      outDuration: 0,
    });
  },
};
</script>



<style lang="scss" scoped>
</style>