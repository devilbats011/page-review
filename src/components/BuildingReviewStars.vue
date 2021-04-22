<template>
  <div class="star-group" ref="ref_star_group">
    <v-icon icon="star" style="color: grey" />
    <v-icon icon="star" style="color: grey" />
    <v-icon icon="star" style="color: grey" />
    <v-icon icon="star" style="color: grey" />
    <v-icon icon="star" style="color: grey" />
  </div>
</template>

<script>
export default {
  name: "BuildingReviewStars",
  props: ['rate',"test"],
  mounted() {
    console.log(this.rate,this.test,"OVERALLL STARS!")
    
    if(this.rate != undefined){
        let temp = Array.from(this.$refs.ref_star_group.children);
        // console.log(this.rate,"ratee")
        const roundedRate = Math.round(this.rate)
        for (let index = 0; index < roundedRate; index++) {
          // console.log(temp[index],"temp-index!")
          temp[index].style.color = "orange";
        }
      }
    },
};
</script>

<style scoped lang="scss" >
.star-group {
  display: inline-block;
}
svg {
  margin: 0 0.3rem;
}
</style>