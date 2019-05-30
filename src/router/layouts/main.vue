<script>
import NavBar from '@components/nav-bar'

export default {
  components: { NavBar },
}
</script>

<template>
  <div :class="$style.container">
    <NavBar />
    <div class="list-group" :class="$style.leftMenu">
      <baseLink name="home" class="list-group-item" exact="active"
        ><i class="fa fa-home"></i> <span>Home</span></baseLink
      >
      <baseLink name="sampleForm" class="list-group-item" active-class="active"
        ><i class="fa fa-credit-card"></i> <span>Sample Form</span></baseLink
      >
      <baseLink name="search" class="list-group-item" active-class="active"
        ><i class="fa fa-question-circle"></i> <span>Search</span></baseLink
      >
    </div>
    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';

.container {
  margin: 0 auto;
}

.leftMenu {
  float: left;
  padding-top: 20px;
  margin: auto;
}
.lead {
  right: 0;
  left: 0;
  padding-top: 10%;
  margin: auto;
}
.content {
  margin: auto 250px;
}
</style>
