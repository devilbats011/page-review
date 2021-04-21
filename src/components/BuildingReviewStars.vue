<template>
  <div class="star-group">
    <v-icon icon="star" style="color:orange" /> 
    <v-icon icon="star" style="color:orange" /> 
    <v-icon icon="star" style="color:orange" /> 
    <v-icon icon="star" style="color: orange"/>
    <v-icon icon="star" style="color: orange"/>
  </div>
</template>

<script>
export default {
  name: "BuildingReviewStars",
};
</script>

<style scoped lang="scss" >
$clr: red;
.star-group {
  display:inline-block;
}
svg {
  margin:0 .3rem;
}
.eg {
  color: $clr;
}
</style>