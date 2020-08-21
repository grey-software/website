<template>
    <div class="main-card ml-5 mb-4 mr-5" :elevation="6">

        <div class="header mt-2 mb-4 ml-1">
            <img class="logo justify-start mt-3 mr-2" src="../assets/logo.png"/>
            <div class="status d-flex align-items-center g-section-info">: <span
                :style="statusColor"
                class="status-dot"
              ></span>{{statusName}}</div>
        </div>

        <div class="name mb-3 ml-3">
            <h5 class="project-heading">{{name}}</h5>




        </div>

        <div class="description mb-3 ml-3">
            <p>{{description}}</p>




        </div>

        <div class="calls-to-action d-flex ml-3 mb-3">

            <a class="call mr-2 mb-2" :href="repo">

                <div class="d-flex justify-content-center feature-icon-container align-items-center">
                    <img
                    class="feature-icon ml-1"
                    src="../assets/img/github-logo.png"
                    />
                    <p class="button-tag ml-1">Repository</p>

                </div>


            </a>

            <a class="call mr-2 mb-2" :href="demo">
                <div class="d-flex justify-content-center feature-icon-container align-items-center">
                    <img
                    class="smaller-feature-icon ml-2"
                    src="../assets/img/play-button.png"
                    />
                    <p class="button-tag ml-2 align-center">Demo</p>
                </div>


            </a>

            <a class="call mr-2" :href="trailer">
                <div class="d-flex justify-content-center feature-icon-container align-items-center">
                    <img
                    class="smaller-feature-icon ml-2"
                    src="../assets/img/video-button.png"
                    />
                    <p class="button-tag ml-2 align-center">Trailer</p>
                </div>
                


            </a>




        </div>


    
    
    
    </div>
    


</template>


<script>
export default { 
  props: {
      name: String,
      logo: String,
      description: String,
      repo: String,
      demo: String,
      trailer: String,
      statusName: String,
      statusColor: String
    
    }
};
</script>






<style scoped>

.header{
    display: flex;
    flex-direction: row;
    align-items: center;



}

.status{
    flex: 4;


}

.main-card{
    display: flex;
    width: 40%;
    border-color: grey;
    border-radius: 10px;
    border-width: 1px;
    justify-content: flex-start;
    align-content: flex-start;
    background-color: black;
    flex-direction: column;
    
    
    



}

.main-card:hover{
    box-shadow: -5px -5px hsl(69, 88%, 43%)



}

.logo{
    flex: 1;
    width: 10%;
    height: 10%;




}

.name{
    flex: 2;



}

.project-heading{
    font-size: 32px;
    line-height: 1.2;


}

.description{
    flex: 8;
    font-size: 18px;
    line-height: 1.2;
    
    



}

.button-tag{
    flex: 3;
    font-size: 18px;
    line-height: 1.2;
    color: black;
    font-style: italic;



}

.callsToAction{
    flex: 2;
    flex-direction: row;
    justify-content: flex-start;
    align-content: flex-start;
    



}

.call{
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    align-content: center;
    flex: 2;
    width: 40%;


}



.feature-icon-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background: var(--color-gold);
  fill: #ffffff;
}

.feature-icon {
  width: 55px;
  height: 55px;
}

.smaller-feature-icon {
  flex: 1;  
  width: 45px;
  height: 45px;
}




</style>