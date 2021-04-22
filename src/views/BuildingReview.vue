<template>
  <main class="main-container">
    <ul class="review_ul">
      <li class="">Gallery</li>
      <li>></li>
      <li class="">{{ $route.params.n }}</li>
    </ul>
    <section class="main">
      <!-- {{ $route.params.n }}{{ $route.params.b }} -->
      <section class="checkx">
        <div
          style="
            float: left;
            border: 1px solid green;
            padding: 0.3rem 0.6rem;
            margin: 0.6rem 0.5rem 0.5rem 0rem;
          "
        >
          {{ payload_building.type }}
          <!-- {{ require('@/assets/'+payload_building.extra_pic[0])}} -->
        </div>
        <div style="float: right">
          <router-link
            :to="'/rate/' + `${$route.params.n}/${id_building}/${id_review}`"
            ><button class="btn text-grey">
              <v-icon icon="thumbs-up" /> Give Review
            </button>
          </router-link>
          &nbsp;
          <button class="btn text-grey"><v-icon icon="plus" /> Share</button>
        </div>
        <div style="clear: both"></div>
      </section>
      <div style="margin: 1.2rem 0"></div>

      <article style="display: flex; height: 350px; postion: relative">
        <section style="width: 60%; position: relative" class="check">
          <img
            :src="require('@/assets/' + payload_building.extra_pic[0])"
            alt="@/assets/..."
            style="width: 100%; height: 100%"
          />
        </section>
        <section
          style="width: 40%; position: relative; padding: 0rem 0rem 0 1rem"
        >
          <div style="height: 60%" class="check">
            <img
              :src="
                payload_building.extra_pic[1] == undefined
                  ? require('@/assets/' + payload_building.extra_pic[0])
                  : require('@/assets/' + payload_building.extra_pic[1])
              "
              alt="@/assets/sample-table-bottle.jpg"
              style="width: 100%; height: 100%"
            />
          </div>
          <div style="height: 40%">
            <ul style="padding: 0; list-style: none" v-if="reviewOverallisReady">
              <li style="font-size: 14px !important;line-height:1.3">
                <strong>Address: </strong> {{ payload_building.address }}
              </li>
              <!-- <li><strong>Overall Review: </strong> <Stars /></li> -->
              <li style="font-size: 16px !important; font-style: italic; ">
                <strong>Overall Rating: </strong><span style="letter-spacing: 1px;">Average {{ overall }}/5 | {{ setReaction(overall) }}</span>
              </li>
              <!-- <li><strong>Agent: </strong>Bella Astillah</li> -->
            </ul>
            <!-- <h3 v-else >Loading ..</h3> -->
          </div>
        </section>
      </article>
      <article class="sales-price">
        <!-- padding: 0.1rem 0.6rem; -->
        <div
          style="
            font-weight: 600;
            font-size: 1.2rem;
            width: 60%;
            padding-left: 0.4rem;
          "
        >
          Sales Price
        </div>
        <div
          style="
            font-weight: 600;
            font-size: 1.2rem;
            width: 40%;
            padding-left: 1rem;
          "
        >
          {{ payload_building.sales_price }}
        </div>
      </article>
      <article
        class="checkx"
        style="
          position: relative;
          padding: 2rem 1rem 2rem 0.4rem;
          display: flex;
        "
      >
        <section style="width: 60%; display: flex">
          <img
            :src="
              payload_building.agent_pic == undefined
                ? none
                : require('@/assets/' + payload_building.agent_pic)
            "
            :alt="payload_building.agent_pic"
            class="check"
            style="height: 230px; width: 230px; margin-right: 1rem"
          />
          <div style="padding: 0 4px">
            <p><strong> Syarikat: </strong> {{ payload_building.syarikat }}</p>
            <p>
              <strong> Agent Name: </strong> {{ payload_building.agent_name }}
            </p>
            <p><strong> Email: </strong>{{ payload_building.agent_email }}</p>
            <p style="padding-right: 12px; font-size: 15px">
              <strong> Contact: </strong> {{ payload_building.agent_contact }}
            </p>
            <div style="margin: 0.5rem 0">
              <button class="btn text-grey" style="transform: translateY(-3px)">
                <v-icon icon="plus" style="margin-right: 5px; " />
                <div style="display: inline-block; margin: 0.2rem 0;">
                  Follow Me
                </div>
              </button>
              <!-- <div class="divider"></div> -->
              <button class="btn" style="">
                <Whatapp />
                <div style="transform: translateY(-3px); display: inline-block;margin-left:5px;">
                  Whatsapp
                </div>
              </button>
            </div>

            <!-- 
            <div
              style="
                border: 1px solid black;
                display: flex;
                padding: 1rem;
                margin-bottom: 4px;
                overflow: visible;
                
              "
            >
              
            </div> -->
          </div>
        </section>
        <section
          style="
            padding: 0rem 1rem;
            text-align: justify;
            display: flex;
            flex-direction: column;
            margin: 0;
          "
        >
          <label class="my-_5" >Name</label>
          <input type="text" style="padding:0.4rem" placeholder="name" />
          <label class="my-_5">Phone Number</label>
          <input type="text" style="padding:0.4rem" placeholder="+1234567890" />
          <label class="my-_5" >Email</label>
          <input type="email" style="padding:0.4rem" placeholder="score@yahoo.my" />
          <div style="margin: 1rem 0">
            <button style="padding: 0.6rem 0.6rem" class="btn">
              I'm Interested !
            </button>
          </div>
        </section>
      </article>
      <article class="check" style="margin: 1rem 0; padding: 1rem 0.4rem">
        <h5><span> Detail </span> <v-icon icon="angle-double-down" /></h5>
        <hr class="detail-hr" />
        <!-- -->
        <section class="detail-section">
          <div class="detail-section-item">
            <div>Type</div>
            <div>{{ payload_building.detail.type }}</div>
            <hr />
          </div>
          <div class="detail-section-item">
            <div>Tenure</div>
            <div>{{ payload_building.detail.tenure }}</div>
            <hr />
          </div>
          <div class="detail-section-item">
            <div>Floor Size</div>
            <div>{{ payload_building.detail.floor_size }}</div>
            <hr />
          </div>
          <div class="detail-section-item">
            <div>Furnishing</div>
            <div>{{ payload_building.detail.furnishing }}</div>
            <hr />
          </div>
          <div class="detail-section-item">
            <div>PSF</div>
            <div>{{ payload_building.detail.psf }}</div>
            <hr />
          </div>
          <div class="detail-section-item">
            <div>Listing ID</div>
            <div>{{ payload_building.detail.listing_id }}</div>
            <hr />
          </div>
        </section>
      </article>

      <article class="check" style="margin: 1rem 0; padding: 1rem 0.4rem">
        <h5><span> Description </span><v-icon icon="angle-double-down" /></h5>
        <hr class="detail-hr" />
        <section style="padding: 2rem 0">
          <p>
            {{ payload_building.description }}
          </p>
        </section>
      </article>

      <article class="check-x" style="padding: 1rem 0.4rem">
        <h5><span> Reviews </span><v-icon icon="angle-double-down" /></h5>
        <hr class="detail-hr" />
        <section style="padding: 2rem 0">
          <section class="grid-container" v-if="reviewOverallisReady">
            <h3>Overall Review:</h3>
            <div style="transform: translateY(-0px)">
              
              <Stars :rate="overall" :test="`OVERALL`" /><span>
                Average {{ overall }}/5 |
                {{ payload_reviews.reaction }} 
              </span>
            </div>
            <hr class="detail-hr" style="margin-bottom: 1rem" />
            <p>Interior / Units:</p>
            <Stars :rate="sumInterior" />
            <p>Cleanliness:</p>
            <Stars :rate="sumClean" />
            <p>Facilities:</p>
            <Stars :rate="sumFacilities" />
            <p>Common Areas:</p>
            <Stars :rate="sumCommonAreas"  />
            <p>Transport :</p>
            <Stars  :rate="sumTransport" />
          </section>
            <h3 v-else >LOADING ..</h3>
            
          <hr class="detail-hr my-1" />
          <section style="margin:0 0.4rem">
            <label for="filters">Filters: </label>
            <select name="filter" id="filters">
              <option value="">Top Match</option>
              <option value="recent">Recent</option>
            </select>
          </section>
          <section
            style="margin: 2rem 0"
            v-for="(review, key) in payload_reviews_people"
            :key="key"
          >
            <div style="display: flex;margin:0 0.4rem">
              <img
                src="@/assets/user-icon.png"
                alt="user-avatar"
                class="review-avatar"
              />
              <p style="line-height: 1.4; margin-left: 1rem;text-transform:capitalize;">
                {{ review.name }}
              </p>
            </div>
            <div class="review-grid-container">
              <div class="review-grid-item-1" style="margin: 10px 0 16px 0">
                <Stars :rate="review.overall" />
                <p style="position: relative; top: 0px; margin: 0 1rem;text-transform:capitalize;font-size:13px;"> overall {{ review.overall }}/5 </p>
                <h3
                  style="position: relative; top: -2px; margin: 0 .3rem;text-transform:capitalize;"
                >
                  {{ review.tittle }}
                </h3>
              </div>
              <div class="review-grid-item-1">
                <Stars :rate='review.interior' />
                <p style="position: relative; top: 0px; margin: 0 1rem">
                  Interior / Units
                </p>
              </div>
              <div class="review-grid-item-1">
                <Stars :rate='review.clealiness' />
                <p style="position: relative; top: 0px; margin: 0 1rem">
                  Cleanliness
                </p>
              </div>
              <div class="review-grid-item-1">
                <Stars :rate='review.common_areas' />
                <p style="position: relative; top: 0px; margin: 0 1rem">
                  Common Areas
                </p>
              </div>
              <div class="review-grid-item-1">
                <Stars :rate='review.transport' />
                <p style="position: relative; top: 0px; margin: 0 1rem">
                  Transport
                </p>
              </div>
            </div>
            <section style="margin: 0.5rem 0.4rem;">
              <div style="padding-right: 2rem; font-size: 16px;" class="first-letter">
                {{ review.comment }}
              </div>
              <!-- <p style="">Reviewed on December 26, 2020</p> -->
              <p style="font-size: 14px">Does this review helpful?</p>
              <div style="display: flex">
                <button
                  class="btn"
                  style="padding: 0.3rem 2rem; transform: translateY(-4px)"
                >
                  Helpful
                </button>
                <hr class="divider" style="transform: translateY(0px)" />
                <p style="cursor: pointer; font-size: 14px" class="text-grey">
                  Report Abuse
                </p>
              </div>
            </section>
          </section>
          <!-- <section style="text-align: center; transform: translateY(26px)">
            <button>Load More Reviews</button>
          </section> -->
        </section>
      </article>
    </section>
  </main>
</template>
<script>
import Stars from "@/components/BuildingReviewStars";
import axios from "axios";
import Whatapp from "@/components/Whatapp";

export default {
  components: { Stars, Whatapp },
  data: function () {
    return {
      reviewOverallisReady: false,
      id_building: this.$route.params.b,
      id_review: this.$route.params.r,
      payload_building: { extra_pic: ["no_picture.png"], detail: {} },
      payload_reviews: {},
      payload_reviews_people: [],
      sumClean: 0,
      sumFacilities: 0,
      sumInterior: 0,
      sumTransport: 0,
      sumCommonAreas: 0,
      overall:0
    };
  },
  methods: {
    setReaction(num){
        const roundedNum = Math.round(num)
        let reactionText = ""
        switch (roundedNum) {
          case 1:
            reactionText = "Poor"
            break;
          case 2:
            reactionText = "Okey"
            break;
          case 3:
            reactionText = "Positive"
            break;
          case 4:
            reactionText = "Very Positive"
            break;
          case 5:
            reactionText = "Overwhelming Positive"
            break;
          default:
            break;
        }
        return reactionText
    },
    setSumAndTotalReviews(array_payload){
      // console.log("Array->" ,array_payload,array_payload[0].clealiness,array_payload.length)
      const TempReviews = array_payload
      let tempSumClean = 0
      let tempSumFacilities = 0
      let TempSumInterior = 0
      let TempSumTransport = 0
      let TempSumCommonAreas = 0
      let totalReview = TempReviews.length*(25)
      TempReviews.map((r)=>{
         tempSumClean += r.clealiness
         tempSumFacilities += r.facilities
         TempSumInterior += r.interior
         TempSumTransport += r.transport
         TempSumCommonAreas += r.common_areas
      })
      let sumOfEverything = tempSumClean + tempSumFacilities + TempSumInterior + TempSumTransport + TempSumCommonAreas
      // console.log(tempSumClean,tempSumFacilities,TempSumInterior,TempSumTransport,TempSumCommonAreas,sumOfEverything,"sum!")//betul dh
      // console.log(totalReview,"totalREV")
      let tempoverall = (Math.round(sumOfEverything) / totalReview)*5
      tempoverall = Math.round(tempoverall)
      const rowSum =  TempReviews.length*5
      console.log(rowSum,tempSumClean,'??',tempSumClean/rowSum*5,"rowSUm")
      this.sumClean = Math.round((tempSumClean/rowSum)*5)
      this.sumFacilities = Math.round((tempSumFacilities/rowSum)*5)
      this.sumInterior = Math.round((TempSumInterior/rowSum)*5)
      this.sumTransport = Math.round((TempSumTransport/rowSum)*5)
      this.sumCommonAreas = Math.round((TempSumCommonAreas/rowSum)*5)
      this.overall = tempoverall
      // console.log(this.overall,"overalll??")
      
      return true;

    },
  },
  async mounted() {
    this.payload_building = await axios
      .get(`http://localhost:3000/building/${this.id_building}`)
      .then(function (response) {
        // handle success
        // console.log(response.data);
        return response.data;
      });

    this.payload_reviews = await axios
      .get(`http://localhost:3000/reviews/${this.id_review}`)
      .then(function (response) {
        // handle success
        // console.log(response.data);
        return response.data;
      });

    this.payload_reviews_people = await axios
      .get(
        `http://localhost:3000/reviews_people?id_building=${this.id_building}`
      )
      .then(function (response) {
        // handle success
        console.log(response.data);
        return response.data;
      });

      this.reviewOverallisReady = this.setSumAndTotalReviews(this.payload_reviews_people)

  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color: red;

.first-letter::first-letter  {
    text-transform:capitalize;    
}
.review-avatar {
  border: 1px solid #000;
  border-radius: 200px;
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
}

.review-grid {
  &-container {
    grid-row-gap: 0.3rem;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 100px auto;
    & > h3 {
      margin-bottom: 1rem;
    }
    & > div {
      transform: translateY(-4px);
    }
    & > hr {
      grid-column: 1 / span 2;
    }
  }
  &-item-1 {
    display: flex;
    grid-column: 1 / span 2;
  }
}

.sales-price {
  margin: 1.2rem 0 0rem 0;
  display: flex;
  padding: 0.5rem 0;
  border: 1px solid black;
  // background-color: #717879;
  // color: whitesmoke;
  font-style: italic;
  border-radius: 3px;
}

.grid {
  &-container {
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 120px auto;
    & > h3 {
      margin-bottom: 1rem;
    }
    & > div {
      transform: translateY(0.5rem);
    }
    & > hr {
      grid-column: 1 / span 2;
    }
  }
}

.btn {
  background-color: #e2e1df;
  border: 0px solid #000;
  cursor: pointer;
  padding: 0.4rem 0.8rem;
  margin: 0.5rem 0.5rem 0.5rem 0rem;
}

.divider {
  width: 1px;
  height: 2.2rem;
  background: grey;
  display: inline-block;
  margin: 0 0.4rem;
  transform: translateY(12px);
}

h5 {
  & > * {
    cursor: pointer;
  }
  & > span {
    font-size: 1.2rem;
  }
  & svg {
    font-size: 14px;
  }
}

.detail {
  &-hr {
    margin-right: 1rem;
  }
  &-section {
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;

    & > .detail-section-item {
      margin: 1rem 0;
      width: 50%;
      & > hr {
        margin-right: 1rem;
      }
      & > div {
        margin: 0.4rem 0;
      }
    }
  }
}

p {
  margin: 0.5rem 0rem;
}
.main {
  border: 0px solid #000;
}
ul > li {
  margin: 0.5rem 0;
}
.check {
  border: 1px solid #000;
}
</style>
