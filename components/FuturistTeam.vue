<template>
  <!--Carousel Wrapper-->
  <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

    <!--Controls-->
    <div class="controls-top">
      <a class="btn-floating" href="#multi-item-example" data-slide="prev"><fa-icon :icon="['fas', 'chevron-right']"></fa-icon></a>
      <a class="btn-floating" href="#multi-item-example" data-slide="next"><i
        class="fas fa-chevron-right"></i></a>
    </div>
    <!--/.Controls-->

    <!--Indicators-->
    <ol class="carousel-indicators">
      <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
      <li data-target="#multi-item-example" data-slide-to="1"></li>

    </ol>
    <!--/.Indicators-->

    <!--Slides-->
    <div class="carousel-inner" role="listbox">

      <!--First slide-->
      <div class="carousel-item active">

        <div class="col-md-3" style="float:left">
            <TeamCard/>

          </div>
        </div>


      </div>
      <!--/.First slide-->
    </div>
    <!--/.Slides-->

  </div>
  <!--/.Carousel Wrapper-->
</template>

<script>
  import TeamCard from "@/components/TeamCard";

  export default {
    components: {
      TeamCard
    }
  }
</script>
