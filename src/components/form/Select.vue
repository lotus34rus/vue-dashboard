<template>
  <div>
    <div class="s12">
      <div class="card">
        <div class="card-header">
          <h5>Select</h5>
        </div>
        <p>
          Select allows user input through specified options. Make sure you wrap it in a .input-field for proper alignment with other text fields. Remember that this is a
          jQuery plugin so make sure you initialize this in your document ready.
        </p>
        <form class="s12">
          <div class="input-field">
            <select ref="select">
              <option value disabled selected>Choose your option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Materialize Select</label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    mounted() {
        this.select = M.FormSelect.init(this.$refs.select, {});     
    },
}
</script>