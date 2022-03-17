<template>
  <nav class="filter-nav">
    <button @click="filterBy('all')" :class="{ active: current === 'all' }">
      All
    </button>
    <button
      @click="filterBy('complete')"
      :class="{ active: current === 'complete' }"
    >
      Complete
    </button>
    <button
      @click="filterBy('uncomplete')"
      :class="{ active: current === 'uncomplete' }"
    >
      UnComplete
    </button>
  </nav>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    filterBy(value) {
      this.$emit("filterValue", value);
    },
  },
};
</script>

<style scoped lang="css" src="@/assets/filterNav.css"></style>