<template>
    <div class="main-card">

        <div class="mb-4 ml-2">
            <img class="logo justify-start" src="../assets/logo.png"/>
        </div>

        <div class="name mb-3 ml-3">
            <h5>Material Math</h5>




        </div>

        <div class="description mb-3 ml-3">
            <p>The spiritial successor to Boltz on Android, Material Math brings unlimited 
            mental math practice in a fun, beautiful interface to the web!</p>




        </div>

        <div class="calls-to-action ml-3 mb-3">

            <div class="call mr-2 mb-2">
                <img class="img-icon mt-2 mb-2" src="../assets/img/github-logo.png"/>
                <p class="ml-2 mt-3 align-center">Github Repository</p>


            </div>

            <div class="call mr-2">
                <p class="ml-2">Demo</p>


            </div>




        </div>


    
    
    
    </div>
    


</template>


<script>
export default { 
  props: {
    project: {
      name: String,
      logo: String,
      description: String,
      repo: String,
      githubLink: String
    }
  }
};
</script>






<style scoped>

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

.logo{
    width: 15%;
    flex: 2;




}

.name{
    flex: 2;



}

.description{
    flex: 8;



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
    border-color: lightblue;
    border-width: 3px;
    align-content: center;
    flex: 2;
    width: 40%;


}

.img-icon{
    width: 20%;
    height: 20%;



}




</style>