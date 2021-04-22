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
      <label> Name* </label>
      <input type="text" placeholder="name" v-model="name" />
      <p class="red-required">{{ requiredName }}</p>
      <label> Title* </label>
      <input type="text" placeholder="This place is cool" v-model="tittle" />
      <p class="red-required">{{ requiredTittle }}</p>
      <label>Comment</label>
      <textarea
        v-model="comment"
        id="txtid"
        name="txtname"
        rows="4"
        cols="50"
        maxlength="200"
      >
 {comment} </textarea
      >
      <p class="red-required">{{ requiredComment }}</p>
      <hr class="detail-hr my-1" style="margin-bottom: 1rem" />
      <section class="grid-container my-1">
        <h3 class="my-1">Rate Review:</h3>
        <div class="star-rate-group">
          <p class="star-label">Interior / Units*:</p>
          <Stars v-on:getNumber="setInterior" />
          <p class="red-required">{{ requiredInterior }}</p>
        </div>

        <div class="star-rate-group">
          <p class="star-label">Cleanliness*:</p>
          <Stars v-on:getNumber="setClealiness" />
          <p class="red-required">{{ requiredClealiness }}</p>
        </div>
        <div class="star-rate-group">
          <p class="star-label">Facilities*:</p>
          <Stars v-on:getNumber="setFacilities" />
          <p class="red-required">{{ requiredFacilities }}</p>
        </div>
        <div class="star-rate-group">
          <p class="star-label">Common Areas*:</p>
          <Stars v-on:getNumber="setCommon_areas" />
          <p class="red-required">{{ requiredCommon_area }}</p>
        </div>
        <div class="star-rate-group">
          <p class="star-label">Transport*:</p>
          <Stars v-on:getNumber="setTransport" />
          <p class="red-required">{{ requiredTransport }}</p>
        </div>
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
      requiredName: "",
      requiredTittle: "",
      requiredComment: "",
      requiredClealiness: "",
      requiredFacilities: "",
      requiredCommon_area: "",
      requiredInterior: "",
      requiredTransport: "",

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
    setOverall() {
      this.overall =
        (this.clealiness +
          this.common_areas +
          this.interior +
          this.facilities +
          this.transport) /
        5;
    },
    setClealiness(set) {
      this.clealiness = set;
      console.log("c: ", this.clealiness);
      this.setOverall();
    },
    setCommon_areas(set) {
      this.common_areas = set;
      console.log("cc: ", this.common_areas);
      this.setOverall();
    },
    setInterior(set) {
      this.interior = set;
      console.log("int: ", this.interior);
      this.setOverall();
    },
    setFacilities(set) {
      this.facilities = set;
      console.log("f: ", this.facilities);
      this.setOverall();
    },
    setTransport(set) {
      this.transport = set;
      console.log("transport: ", this.transport);
      this.setOverall();
    },
    validateInputs(toPost) {

      this.requiredName = ""
      this.requiredTittle = ""
      this.requiredComment = ""
      this.requiredClealiness = ""
      this.requiredFacilities = ""
      this.requiredCommon_area = ""
      this.requiredInterior = ""
      this.requiredTransport = ""

      if (this.name == "") {
        toPost = false;
        this.requiredName = "Name cannot be Empty.";
      }
      if (this.tittle == "") {
        toPost = false;
        this.requiredTittle = "Tittle cannot be Empty";
      }

      if (this.clealiness == "") {
        toPost = false;
        this.requiredClealiness = "Stars rating required";
      }
      if (this.common_areas == "") {
        toPost = false;
        this.requiredCommon_area = "Stars rating required";
      }

      if (this.facilities == "") {
        toPost = false;
        this.requiredFacilities = "Stars rating required";
      }
      if (this.interior == "") {
        toPost = false;
        this.requiredInterior = "Stars rating required";
      }
      if (this.transport == "") {
        toPost = false;
        this.requiredTransport = "Stars rating required";
      }
      return toPost;
    },
    publishReview: function () {
      let toPost = true;
      toPost = this.validateInputs(toPost);
      if (toPost) {
        axios({
          method: "post",
          url:
            "http://localhost:3000/reviews_people?id_building=" +
            this.$route.params.b,
          data: {
            id_building: this.$route.params.b,
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
        })
          .then(() => {
            this.$router.push({
              path: `/redirect-review/${this.$route.params.n}/${this.$route.params.b}/${this.$route.params.r}`,
            });
          })
          .catch(() => {
            alert("problem");
          });
      }
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
.star-rate-group{
  margin-bottom:1rem;
}
.star-label {
  margin: 0.4rem 0;
}
.red-required {
  color: crimson;
  font-size: 14px;
  padding: 0;
  margin: 0.2rem 0 0.6rem 0;
}
label {
  display: block;
  margin: 0.5rem 0;
}

.main {
  padding: 1rem 0;
}
</style>
