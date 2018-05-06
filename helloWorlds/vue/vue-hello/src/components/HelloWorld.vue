<template>
  <div class="the-div">
    <h1>{{ msg }}</h1>
    <h2>the state is: {{ storeState }}</h2>
    <button type="button" name="button" v-on:click="changeState">plus</button>
    <subComp msg="this is the subDiv"/>
  </div>
</template>

<script>
import subComp from './subComp.vue'
export default {
  name: 'HelloWorld',
  components: {
    subComp
  },
  props: {
    msg: String
  },
  computed: {
    storeState () {
      return Number(this.$store.state.whatever)
    },
  },
  methods: {
    changeState () {
      this.$store.commit('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.the-div {
  text-align: center;
  border: 5px solid goldenrod
}
</style>
