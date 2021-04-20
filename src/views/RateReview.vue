<template>
  <main class="main-container">
    <ul class="review_ul" style="margin-top: 1rem">
      <li class="">Gallery</li>
      <li>></li>
      <li class="">Rate Building Review</li>
    </ul>
    <article class="main">
        <h3>Review KL Residencies</h3>
      <form>
        <label> Name </label>
        <input type="text" placeholder="name" />

        <label> Title </label>
        <input type="text" placeholder="title" />


        <label>Comment</label>
        <textarea id="txtid" name="txtname" rows="4" cols="50" maxlength="200" ></textarea>
          <hr class="detail-hr my-1" style="margin-bottom: 1rem" />
        <section class="grid-container my-1 ">
          <h3 class="my-1">Rate Review:</h3>
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
        <button type="submit">Publish My Review</button>
      </form>
    </article>
  </main>
</template>
<script>
export default {
  // name: "RateReview",
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
  <!-- <a href="#"> anchor </a> -->
  <!-- <v-icon icon="phone" />
      <v-icon icon="pills" />
      <v-icon icon="bolt" style="font-size: 3rem" /> -->
<style scoped lang="scss">
label {
  display: block;
  margin: 0.5rem 0;
}

.main{
  padding:1rem 0;
}
</style>
