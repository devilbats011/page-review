<template>
  <main class="main-container">
    <ul class="review_ul" style="margin-top: 1rem">
      <li class="">Gallery</li>
      <li>></li>
      <li class="">Rate Building Review</li>
    </ul>
    <article class="main">
      <h3>Review KL Residencies</h3>
      <!-- <form> -->
      <label> Name </label>
      <input type="text" placeholder="name" v-model="name" />

      <label> Title </label>
      <input type="text" placeholder="This place is cool" v-model="tittle" />

      <label>Comment</label>
      <textarea
        v-model="comment"
        id="txtid"
        name="txtname"
        rows="4"
        cols="50"
        maxlength="200"
      > {comment} </textarea>
      <hr class="detail-hr my-1" style="margin-bottom: 1rem" />
      <section class="grid-container my-1">
        <h3 class="my-1">Rate Review:</h3>
        <p>Interior / Units:</p>
        <Stars v-on:getNumber="setInterior" />
        <p>Cleanliness:</p>
        <Stars v-on:getNumber="setClealiness" />
        <p>Facilities:</p>
        <Stars v-on:getNumber="setFacilities" />
        <p>Common Areas:</p>
        <Stars v-on:getNumber="setCommon_areas" />
        <p>Transport:</p>
        <Stars v-on:getNumber="setTransport" />
      </section>
      <button @click="publishReview">Publish My Review</button>
      <!-- </form> -->
    </article>
  </main>
</template>
<script>
import Stars from "@/components/RateReviewStars";
import axios from "axios";

export default {
  name: "RateReview",
  components: { Stars },
  // props: {
  //   name: String,
  //   clealiness: Number,
  // },
  data: function () {
    return {
      name: "",
      clealiness: 0,
      facilities: 0,
      common_areas: 0,
      interior: 0,
      transport: 0,
      tittle: "",
      comment: "",
      overall: 0,
    };
  },
  methods: {
    setOverall(){
        this.overall = (this.clealiness + this.common_areas + this.interior + this.facilities + this.transport) / 5
    },
    setClealiness(set){
      this.clealiness = set
      console.log("c: ",this.clealiness)
      this.setOverall()
    },
    setCommon_areas(set){
      this.common_areas = set
      console.log("cc: ",this.common_areas)
      this.setOverall()
    },
    setInterior(set){
     this.interior = set
     console.log("int: ",this.interior)
     this.setOverall()
    },
    setFacilities(set){
      this.facilities = set
      console.log("f: ",this.facilities)
      this.setOverall()
    },
    setTransport(set){
      this.transport = set
      console.log('transport: ',this.transport)
      this.setOverall()

    },
    publishReview: function () {
      axios({
        method: "post",
        url: "http://localhost:3000/reviews",
        data: {
          name: this.name,
          clealiness: this.clealiness,
          common_areas: this.common_areas,
          facilities: this.facilities,
          interior: this.interior,
          overall: this.overall,
          transport: this.transport,
          tittle: this.tittle,
          comment: this.comment,
        },
      });
    },
  },
  mounted() {
    axios.get("http://localhost:3000/reviews").then(function (response) {
      // handle success
      console.log(response);
    });
    // this.publishReview();
  },
};
</script>
  <!-- <v-icon icon="phone" /> -->

<style scoped lang="scss">
label {
  display: block;
  margin: 0.5rem 0;
}

.main {
  padding: 1rem 0;
}
</style>
