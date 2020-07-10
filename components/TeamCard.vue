<template>
  <div class="card neu-dark" style="width: 16rem; height: 26rem;">
    <div class="card-inner">
      <div class="circle"></div>
      <div class="card-body">
        <p class="card-text">Design</p>
        <h5 class="card-title">Nina Ricci</h5>

        <b-row class="icon">
          <b-col><fa-icon :icon="['fas', 'envelope']" class="fa-lg"></fa-icon></b-col>
          <b-col><fa-icon :icon="['fab', 'discord']" class="fa-lg"></fa-icon></b-col>
          <b-col><fa-icon :icon="['fab', 'linkedin']" class="fa-lg"></fa-icon></b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card{
    margin: 20px 120px;
    color: white;
    border-radius:5%;

  }
  .neu-dark {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.9),
    -10px -10px 22px rgba(255, 255, 255, 0.1);

  }

  .card-body{
    text-align: center;
    margin: 20px;
    transform: translate(0,-60px);

  }
  .card-title {
    font-weight: 700;
    font-size: 25px;
    margin: 0;
    padding: 10px 0 30px 0;
  }
  .card-text{
    color: lightslategrey;
    font-size: 16px;
    margin: 0;
  }

  .circle {
    border:5px solid;
    height:250px;
    width:250px;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    transform: scale(0.6);
  }

  .icon {
    padding: 0 0px;
  }
</style>
