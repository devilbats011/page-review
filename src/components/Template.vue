<template>
<p class="eg" >{{eg}}</p>
</template>

<script>
export default {
  name: "Template",
  props: {
    eg: String,
  },
};
</script>

<style scoped lang="scss" >
$clr: red;

.eg {
color: $clr
}
</style>