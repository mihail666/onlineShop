<template>
  <div class="shop-select">
    <p class="title btn" @click="areOptionsVisible =! areOptionsVisible">
      Select
    </p>
    <div class="options btn" v-if="areOptionsVisible">
      <p v-for="option in options" :key="option.value">
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "shop-select",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    selectOptions(options) {
      this.$emit('select', options)
    }

  }
}
</script>

<style>
.shop-select {
  
  width: 200px;
  position: relative;
  cursor: pointer;
  padding-bottom: 50px;
}

.title {
  display: block;
  justify-content: end;
  border: solid 1px #000;
  margin: 8px;
  
}

.shop-select p {
  margin: 10px;
}

.options {
  display: block;
  background: #ffffff;
  position: absolute;
  left: 0px;
  width: 50%;
  z-index: 1;

}

.options p:hover {
  background: #e7e7e7;
}
</style>