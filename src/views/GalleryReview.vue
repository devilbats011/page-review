<template>
  <main class="main-container">
    <ul class="review_ul" style="margin-top: 1rem">
      <li class="">Gallery</li>
    </ul>
    <article class="main">

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
figure {
  text-align: center;
  margin:2rem auto;
  width:fit-content;
}
img {
  cursor: pointer;
  height: 300px;
  width: 500px;
}
</style>
