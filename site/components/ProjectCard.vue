<template>
  <div class="ProjectCard">
    <div class="card">
      <b-col>
        <li>
          <img src="../assets/PhotoTest.png"/>
        </li>

        <li>
          <div class="text">
            <div class="status"> STATUS </div>
            <div class="title"> Toonin </div>
            <p class="description"> Toonin is technology that allows you to share or stream audio and video over the web in real time.
            </p>

          </div>
        </li>

        <li>
          <fa-icon :icon="['fab', 'github']"/>
        </li>
      </b-col>



    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  * {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .ProjectCard {
    width: 800px;
    height: 350px;
    border-color: white;

  }

  .card {
    /*border: none;*/
    background-color: #BEAA7F;

  }

  .card img {
    width: 340px;
    height: 350px;
    float: left;
    overflow: hidden;
    padding: 0 0 0 0;
    border-radius: 30px 0 0 30px;

  }

  .text {
    padding: 40px 0px 0px 380px;
    color: white;
  }
  .text .status {
    letter-spacing: 2px;
    font-size: 12px;
    font-weight: bold;
  }

  .text .description {
    font-size: 16px;
  }

  .text .title {
    font-size: 50px;
    font-weight: bolder;
  }
  fa-icon {
    color: white;
    float: right;
  }
</style>

