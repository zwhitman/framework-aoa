<template>
  <div class="the-sub-div">
    <h1>{{ msg }} with {{ storeState }}</h1>
  </div>
</template>

<script>
export default {
  name: 'SubComp',
  props: {
    msg: String
  },
  computed: {
    storeState () {
      return Number(this.$store.state.whatever)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.the-sub-div {
  text-align: center;
  background-color: black;
  color: white;
}
</style>
