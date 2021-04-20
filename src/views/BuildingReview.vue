<template>
  <main class="main-container">
    <ul class="review_ul">
      <li class="">Gallery</li>
      <li>></li>
      <li class="">Building Review ( KL Residencies )</li>
    </ul>
    <section class="main">
      <div style="float: left; border: 1px solid green; padding: 0.1rem 0.6rem">
        KL Residencies
      </div>
      <div style="float: right">?ask a question ^Share</div>
      <div style="clear: both"></div>
      <div style="margin: 1.2rem 0"></div>

      <article style="display: flex; height: 350px; postion: relative">
        <section style="width: 60%; position: relative" class="check">
          <img
            src="@/assets/sample-room-1.jpg"
            alt="@/assets/sample-room-1.jpg"
            style="width: 100%; height: 100%"
          />
        </section>
        <section
          style="width: 40%; position: relative; padding: 0rem 0rem 0 1rem"
        >
          <div style="height: 60%" class="check">
            <img
              src="@/assets/sample-table-bottle.jpg"
              alt="@/assets/sample-table-bottle.jpg"
              style="width: 100%; height: 100%"
            />
          </div>
          <div style="height: 40%">
            <ul style="padding: 0; list-style: none">
              <li>
                <strong>Address: </strong> D-1-8, Pusat Perdagangan Kuchai, Off,
                Jalan Kuchai Lama, 58200 Kuala Lumpur, Wilayah Persekutuan.
              </li>
              <li><strong>Overall Review: </strong> ⭐ ⭐ ⭐ ⭐ ⭐</li>
              <li>
                <strong>Overall Rating: </strong> Average 5/5 | Overwhelming
                Positive
              </li>
              <!-- <li><strong>Agent: </strong>Bella Astillah</li> -->
            </ul>
          </div>
        </section>
      </article>
      <article
        class="check"
        style="margin: 1rem 0; display: flex; padding: 0.5rem 0rem"
      >
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
          RM 2000 ~ RM4000
        </div>
      </article>
      <article
        class="check"
        style="
          position: relative;
          padding: 2rem 1rem 2rem 0.4rem;
          display: flex;
        "
      >
        <section style="width: 60%; display: flex">
          <img
            src="@/assets/agent.jpg"
            alt="@/assets/agent.jpg"
            class="check"
            style="height: 230px; width: 230px; margin-right: 1rem"
          />
          <div style="padding: 0 4px">
            <p><strong> Syarikat: </strong> Jann Properties Sbn Bhd</p>
            <p><strong> Agent Name: </strong> Bella Astillah</p>
            <p><strong> Email: </strong> bella@astillah.my</p>
            <p style="padding-right: 12px; font-size: 15px">
              <strong> Contact: </strong> +6011-333-669
            </p>
            <div style="margin: 0.5rem 0">
              <button class="btn">+ Follow Me</button>
              <div class="divider"></div>
              <button class="btn">@ Whatsapp</button>
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
          <label class="my-_5">Name</label>
          <input type="text" placeholder="name" />
          <label class="my-_5">Phone Number</label>
          <input type="text" placeholder="+1234567890" />
          <label class="my-_5">Email</label>
          <input type="email" placeholder="score@yahoo.my" />
          <div style="margin: 1rem 0">
            <button style="padding: 0.4rem 0.6rem">+ I'm Interested</button>
          </div>
        </section>
      </article>
      <article class="check" style="margin: 1rem 0; padding: 1rem 0.4rem">
        <h5><span> Detail </span> <v-icon icon="angle-double-down" /></h5>
        <hr class="detail-hr" />
        <section class="detail-section">
          <div class="detail-section-item">
            <div>Type</div>
            <div>Service Residence For Sale</div>
            <hr />
          </div>
          <div class="detail-section-item">
            <div>Tenure</div>
            <div>Freehold</div>
            <hr />
          </div>
          <div class="detail-section-item">
            <div>Floor Size</div>
            <div>808 sqft</div>
            <hr />
          </div>
          <div class="detail-section-item">
            <div>Furnishing</div>
            <div>Fully Furnished</div>
            <hr />
          </div>
          <div class="detail-section-item">
            <div>PSF</div>
            <div>RM 434.27 psf</div>
            <hr />
          </div>
          <div class="detail-section-item">
            <div>Listing ID</div>
            <div>32691299</div>
            <hr />
          </div>
        </section>
      </article>

      <article class="check" style="margin: 1rem 0; padding: 1rem 0.4rem">
        <h5><span> Description </span><v-icon icon="angle-double-down" /></h5>
        <hr class="detail-hr" />
        <section style="padding: 2rem 0">
          <p>
            Lorem ipsum dolor sit amet Praesent sapien massa, convallis a
            pellentesque nec, egestas non nisi. Curabitur non nulla sit amet
            nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui
            posuere blandit.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            magna justo, lacinia eget consectetur sed, convallis at tellus. Sed
            porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat.
          </p>
        </section>
      </article>

      <article class="check" style="padding: 1rem 0.4rem">
        <h5><span> Reviews </span><v-icon icon="angle-double-down" /></h5>
        <hr class="detail-hr" />
        <section style="padding: 2rem 0">
          <section class="grid-container">
            <h3>Overall Review:</h3>
            <div style="transform: translateY(-4px)">
              ⭐ ⭐ ⭐ ⭐ ⭐ , Average 4/5 | Positive
            </div>
            <hr class="detail-hr" style="margin-bottom: 1rem" />
            <p>Interior / Units:</p>
            <div>⭐ ⭐ ⭐ ⭐ ⭐</div>
            <p>Cleanliness:</p>
            <div>⭐ ⭐ ⭐ ⭐</div>
            <p>Facilities:</p>
            <div>⭐ ⭐ ⭐</div>
            <p>Common Areas:</p>
            <div>⭐ ⭐</div>
            <p>Transport:</p>
            <div>⭐</div>
          </section>
          <br /><br />
          <section>
            <label for="filters">Filters: </label>
            <select name="filter" id="filters">
              <option value="">Top Match</option>
              <option value="recent">Recent</option>
            </select>
          </section>
          <section style="margin: 2rem 0">
            <div style="display: flex">
              <img
                src="@/assets/agent.jpg"
                alt="agent.jpg"
                class="review-avatar"
              />
              <p style="line-height: 1.4; margin-left: 1rem">Sonja</p>
            </div>
            <div class="review-grid-container">
              <div class="review-grid-item-1" style="margin: 10px 0 16px 0">
                <!--  &star; &starf;  -->
                ⭐ ⭐ ⭐ ⭐ ⭐
                <h3 style="position: relative; top: 3px; margin: 0 1rem">
                  Overall 5/5
                </h3>
              </div>
              <div class="review-grid-item-1">
                ⭐ ⭐ ⭐ ⭐ ⭐
                <p style="position: relative; top: 3px; margin: 0 1rem">
                  Interior / Units
                </p>
              </div>
              <div class="review-grid-item-1">
                ⭐ ⭐ ⭐ ⭐ ⭐
                <p style="position: relative; top: 3px; margin: 0 1rem">
                  Cleanliness
                </p>
              </div>
              <div class="review-grid-item-1">
                ⭐ ⭐ ⭐ ⭐ ⭐
                <p style="position: relative; top: 3px; margin: 0 1rem">
                  Common Areas
                </p>
              </div>
              <div class="review-grid-item-1">
                ⭐ ⭐ ⭐ ⭐ ⭐
                <p style="position: relative; top: 3px; margin: 0 1rem">
                  Transport
                </p>
              </div>
            </div>
            <div style="margin: 0.5rem 0;padding-right:2rem;font-size:14px" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quis lorem ut libero malesuada feugiat. Curabitur non nulla sit
              amet nisl tempus convallis quis ac lectus.
            </div>
            <p style="font-size: smaller">Reviewed on December 26, 2020</p>
            <p>People found this helpful</p>

            <div style="margin: 0.5rem 0; display: flex">
              <button class="btn" style="padding: 0 2rem">Helpful</button>
              <hr class="divider" style="transform: translateY(0px)" />
              <p style="cursor: pointer">Report Abuse</p>
            </div>
          </section>
          <section style="text-align:center;transform:translateY(26px)" >
            <button> Load More Reviews</button>
          </section>
        </section>
      </article>
    </section>
  </main>
</template>
<script>
export default {};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color: red;

.review-avatar {
  border: 1px solid #000;
  border-radius: 200px;
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
}

.review-grid {
  &-container {
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
      transform: translateY(3px);
    }
    & > hr {
      grid-column: 1 / span 2;
    }
  }
}

.btn {
  cursor: pointer;
  padding: 0.4rem 0.8rem;
  margin: 0.4rem 0;
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
