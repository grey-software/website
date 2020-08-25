<template>
    <div class="d-flex main-insights-card mt-2">
        <span class="img-box ml-2 mr-2">
            <img class="avatar mt-1" src="https://avatars0.githubusercontent.com/u/19757203?s=60&v=4" />


        </span>

        <div class="d-flex card-details">
            <div class="name-container">   
                <a style="color:#0cb0c9">
                    ArsalaBangash
                
                
                </a>


            </div>

            <div class="d-flex insights-container">
                <div class="commits mr-2">
                    <p class="activity-text" style="color:black" >34 commits</p>

                </div>

                <div class="additions" >
                    <p class="activity-text" style="color:green">1000 ++</p>

                </div>

                <div class="deletions">
                    <p class="activity-text"  style="color:red">1000 --</p>

                </div>
            
            
            
            </div>



        </div>




    </div>

    
</template>



<script>
export default {
    props:{
        avatar: String,
        name: String,
        commits: String,
        additions: String,
        deletions: String



    }


    
}
</script>


<style scoped>

.main-insights-card{
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-color: grey;
    border-width: 2px;
    border-radius: 5px;
    width: 400px;
    height: 50px;
    background-color: white;



}

.card-details{
    flex: 9;
    flex-direction: column;
    height: 100%;



}

.img-box{
    flex : 1;
    align-items: center;
    justify-items: center;
    height: 100%;



}

.avatar{
    border-radius: 50%;


}

.name-container{
    flex: 2




}

.insights-container{
    flex-direction: row;
    flex: 2;



}

.commits{
    flex: 1



}

.additions{
    flex: 1



}


.deletions{
    flex: 2



}

.activity-text{
    font-size: 14px;


}


</style>