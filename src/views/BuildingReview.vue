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
          class=""
        >
          <article style="height: 60%" class="check">
            <img
              src="@/assets/sample-table-bottle.jpg"
              alt="@/assets/sample-table-bottle.jpg"
              style="width: 100%; height: 100%"
            />
          </article>
          <article style="height: 40%">
            <ul style="padding: 0; list-style: none">
              <li>
                <strong>Address: </strong> D-1-8, Pusat Perdagangan Kuchai, Off,
                Jalan Kuchai Lama, 58200 Kuala Lumpur, Wilayah Persekutuan.
              </li>
              <li><strong>Review: </strong> Very Positive</li>
              <li><strong>Reaction: </strong> Very Good</li>
              <li><strong>Agent: </strong> Annie Leong</li>
            </ul>
          </article>
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
        style="position: relative; padding: 2rem; display: flex"
      >
        <img
          src="@/assets/agent.jpg"
          alt="@/assets/agent.jpg"
          class="check"
          style="height: 230px; width: 230px"
        />
        <section style="padding:0rem 1rem">
          <p><strong> Syarikat: </strong> Jann Properties Sbn Bhd</p>
          <p><strong> Agent Name: </strong> Annie Leong </p>
          <div style="border:1px solid black;display:flex;padding:1rem">
          <p style="padding-right:12px" ><strong> Contact: </strong> +6011-333-669 </p>
          <button> + I'm Interested </button>

          </div>

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
