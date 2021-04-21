<template>
  <main class="main-container">
    <ul class="review_ul" style="margin-top: 1rem">
      <li class="">Gallery</li>
    </ul>
    <article class="main">
      <figure>
        <h3>KL Gateway Residence</h3>
        <router-link to="/building">
          <img src="@/assets/kl-1.jpg" alt="@/assets/kl-1.jpg" />
        </router-link>
      </figure>
      <figure>
        <h3>Palmville Resort Condominium</h3>
        <router-link to="/building">
          <img src="@/assets/pal-resort.jpg" alt="@/assets/..." />
        </router-link>
      </figure>
      <figure>
        <h3>Novum Bangsar South</h3>
        <router-link to="/building">
          <img src="@/assets/bangsar-south.jpg" alt="@/assets/..." />
        </router-link>
        |
      </figure>
    </article>
  </main>
</template>
<script>
export default {};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color: red;
figure {
  text-align: center;
}
img {
  cursor: pointer;
  height: 300px;
  width: 500px;
}
</style>
