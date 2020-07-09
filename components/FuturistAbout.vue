<template>
  <div>
    <hr/>
    <div class="about">

      <div class="heading">
        <h1 class="title">What We <span style="color: #2BACF9">Do?</span></h1>
        <p class="sub-title">
          The Futurist foundation is an organization working to guide the future in a net positive direction by allowing the public to propose,
          fund, and work on the themes and technologies of the future.
        </p>
      </div>


      <div class="container">
        <div class="row row-cols-3">
          <div class="col">
            <div class="icon" style="color:#6F75FF" >
              <span class="fa-stack fa-2x">
                <fa-icon :icon="['fas', 'user-friends']" class="fa-stack-2x fa-lg" style="color: #6F75FF"></fa-icon>
                <div class="circle fa-stack-2x"></div>
              </span>
            </div>

            <div class="text-box">
              <h5 class="sub-heading">Innovate</h5>
              <p class="sub-heading-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            </div>
          </div>

          <div class="col">
            <div class="icon" style="color:#6FFFA6" >
             <span class="fa-stack fa-2x">
                <fa-icon :icon="['fas', 'dollar-sign']" class="fa-stack-2x fa-lg" style="color: #6FFFA6"></fa-icon>
                <div class="circle fa-stack-2x"></div>
              </span>
            </div>

            <div class="text-box">
              <h5 class="sub-heading">Inspire</h5>
              <p class="sub-heading-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            </div>
          </div>

          <div class="col">
            <div class="icon" style="color:#FAB74A">
              <span class="fa-stack fa-2x">
                <fa-icon :icon="['fas', 'chalkboard-teacher']" class="fa-stack-2x fa-lg" style="color:#FAB74A"></fa-icon>
                <div class="circle fa-stack-2x"></div>
              </span>
            </div>

            <div class="text-box">
              <h5 class="sub-heading">Teaching</h5>
              <p class="sub-heading-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            </div>
          </div>

        </div>
      </div>


    </div>

    <div class="about">
      <div class="container">
        <div class="row row-cols-2">
          <div class="col">
            <img src="../assets/world-map.png"/>
          </div>
          <div class="col">
            <h1 class="title" style="text-align: left"> Tech of <br/>the <span style="color: #2BACF9">Future.</span></h1>
            <p class="desc" >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Foinshgt instajfe  nonumy eirmod tempor.
            </p>

            <div class="sub-box" style="text-align: left;">
              <div class="row row-cols-2">
                <div class="col">
                  <fa-icon :icon="['fas', 'globe']" class="fa-3x" style="color: #6F75FF"></fa-icon>
                  <h5 class="title">Crowdsourcing</h5>
                  <p class="desc">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Foinshgt instajfe  nonumy eirmod tempor.
                  </p>
                </div>

                <div class="col">
                  <fa-icon :icon="['fas', 'users']" class="fa-3x" style="color:#6FFFA6" ></fa-icon>
                  <h5 class="title">Futurist Community</h5>
                  <p class="desc" >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Foinshgt instajfe  nonumy eirmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .about {
    color: white;
    margin: 0 120px;
    padding: 40px 0px ;
    text-align: center;
  }
  hr {
    background-color: #FA8A01;
    height: 5px;
    border: 0;
    width: 150px;
  }
  .heading {
    padding: 0 0 120px ;
  }

  .title {
    font-weight: 700;
    font-family: var(--font-heading);
    color: var(--color-text-dark);
    letter-spacing: -0.025em;
    font-size: 70px;
    z-index: 1000;
    padding: 0 0 20px 0;
  }

  .sub-title {
    margin: 0 120px;
    padding-bottom: 40px;
    color: lightslategrey;
  }

  .circle {
    border:5px solid;
    height:300px;
    width:310px;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    transform: translate(-100px) scale(0.8);
  }

  .sub-heading {
    font-weight: 700;
    font-size: 26px;
  }
  .sub-heading-text {
    color: lightslategrey;
  }
  .desc {
    text-align: left;
    color: lightslategrey;
    font-size: 13px;
  }
  .sub-box {
    padding: 40px 0;
  }
  .sub-box .title {
    font-size: 20px;
    font-weight: 600;
    padding: 20px 0 0;
  }

  .sub-box .desc {
    padding: 0;
  }

  .col img {
    height: 600px;
    width: 700px;
    text-align: left;
    transform: translate(-120px, -80px);
  }

  .text-box{
    padding: 120px 0;
  }



</style>
