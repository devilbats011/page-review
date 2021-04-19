<template>
  <main id="page-container">
    <nav class="main-container">
      <router-link to="/gallery"> Gallery Of Building </router-link> |
      <router-link to="/building"> Overall Review Of Building </router-link> |
      <router-link to="/rate"> Tenant Rate A Review Of Building </router-link>
    </nav>
    <article id="content-wrap">
      <router-view />
    </article>
    <footer id="footer">
      <p>Jann Properties @ 2021</p>

    </footer>
  </main>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  font-size: 1rem;
}

.size-16 {
  font-size: 1rem;
}
ul {
  padding: 0px;
}

a {
  text-decoration: none;
}

a:hover {
  color: initial;
  text-decoration: none;
  cursor: pointer;
}

#page-container {
  position: relative;

  min-height: 97vh;
}

.main-container {
  margin: 8px 10% 0px;
}

$footerHeight: 2.5rem; /* Footer height */

#content-wrap {
  padding-bottom: $footerHeight;
}

#footer {
  height: $footerHeight;
  flex-direction: column;
  position: absolute;
  border-top: 1px solid #000;
  bottom: -13px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

// 100-900
.heavy {
  font-weight: 900;
}

.review_ul {
  display: flex;
  list-style: none;
  & li:nth-of-type(odd) {
    font-weight: 300;
  }
  & li:nth-of-type(even) {
    padding: 0 5px;
    transform: translateY(1px);
  }
}
</style>
