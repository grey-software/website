<template>
    <div class="d-flex main-insights-card">
        <span class="img-box mr-2">
            <p>Avatar</p>


        </span>

        <div class="d-flex card-details">
            <div class="name-container">   
                <a>
                    ArsalaBangash
                
                
                </a>


            </div>

            <div class="d-flex insights-container">
                <div class="commits">

                </div>

                <div class="additions">

                </div>

                <div class="deletions">

                </div>
            
            
            
            </div>



        </div>




    </div>

    
</template>



<script>
export default {
    
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
    width: 200px;
    height: 50px;



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

.name-container{
    flex: 2




}

.insights-container{
    flex-direction: row;
    flex: 2;



}

.additions{



}


.deletions{


    
}


</style>