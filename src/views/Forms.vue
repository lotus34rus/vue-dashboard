<template>
  <div class="row">
    <TextInput />
    <Select />
    <Checkboxes />
    <Range />
 
  </div>
</template>

<script>
import TextInput from "@/components/form/TextInput"
import Select from "@/components/form/Select"
import Checkboxes from "@/components/form/Checkboxes"
import Range from "@/components/form/Range"




export default {
  data() {
    return {
      select: null,
    };
  },

  components: {
      TextInput, Select, Checkboxes, Range
  },
  mounted() {
    M.updateTextFields();
  },
};
</script>

<style lang="scss">
form {
  margin-top: 40px;
}
</style>