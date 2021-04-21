<template>
  <main class="main-container">
    <ul class="review_ul" style="margin-top: 1rem">
      <li class="">Gallery</li>
    </ul>
    <article class="main">
      <!-- <figure>
        <h3>KL Gateway Residence</h3>
        <router-link to="/building/KL Gateway Residence">
          <img src="@/assets/kl-1.jpg" alt="@/assets/kl-1.jpg" />
        </router-link>
      </figure>
      <figure>
        <h3>Palmville Resort Condominium</h3>
        <router-link to="/building">
          <img src="@/assets/pal-resort.jpg" alt="@/assets/..." />
        </router-link>
      </figure>
      :src="'@/assets/'+building.pic"
      :src="require('@/assets/'+building.test)"
       -->

      <figure v-for="(building, key) in payload" :key="key" >
        <h3>{{building.name}}</h3>
        <router-link :to="'/building/'+ `${building.name}/${building.id_building}/${building.id_review}`">
          <img  :src="require('@/assets/'+building.pic)" :alt="building.pic" />
        </router-link>
      </figure>
    </article>
  </main>
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      payload: [],
    };
  },
  async mounted() {

     this.payload = await axios.get("http://localhost:3000/gallery").then(function (response) {
      // handle success
      console.log(response.data);
      return response.data;
    });
    

    // this.publishReview();
  },
};
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
