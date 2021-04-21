<template>
  <div ref="review">
    <v-icon icon="star" class="grey" @click="handleStar(1)" />
    <v-icon icon="star" class="grey" @click="handleStar(2)" />
    <v-icon icon="star" class="grey" @click="handleStar(3)" />
    <v-icon icon="star" class="grey" @click="handleStar(4)" />
    <v-icon icon="star" class="grey" @click="handleStar(5)" />
  </div>
</template>

<script>
export default {
  name: "RateReviewStars",
  data: function () {
    return {
      number: 0
    };
  },
  methods: {
    // manipulate  color of the star
    handleStar: function (number) {
      const parent = this.$refs.review
      this.$emit('getNumber', number)
      // console.log(number,this.$refs.review)
      this.turnAllGrey(parent)
      
      for (let index = 0; index < number; index++) {
        parent.children[index].style.color = "orange"
      }
    
    },
    turnAllGrey: function (parent) {
      for (let index = 0; index < 5; index++) {
        parent.children[index].style.color = "grey"
      }
    },

  },
};
</script>

<style scoped lang="scss" >
.grey {
  color:grey;
}
svg {
  cursor: pointer;
  margin: 0 0.3rem;
}

</style>