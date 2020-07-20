<template>
  <div class="row col-md-3 justify-content-center card-container">
      <div class="row justify-content-center align-items-center">
          <div class="row justify-content-center feature-icon align-content-center m-5">
            <fa-icon :icon="['fab', 'github']" style="font-size:60px;" />
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        icon: String
    }
}
</script>

<style>
.card-container {
    border-radius: 7px;
    background: var(--bg);
    box-shadow: 0 3px 4px 0 #888888, 0 5px 7px 0 #888888;
}
.feature-icon {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: var(--color-gold);
}
</style>