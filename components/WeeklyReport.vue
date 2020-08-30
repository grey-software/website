<template>
    <div class="d-flex container mt-5">
        <div class="d-flex overview-header">
            <h5 class="table-header ml-3">Overview</h5>
            <h5 class="table-date ml-3">{{startDate}} - {{endDate}}</h5>
        
        
        
        </div>


        <div class="d-flex pr-section">
            <div class="d-flex detail-box">
                <div class="d-flex img-container">
                    <img src="../assets/icons/merge-pr.svg" class="mb-2 mr-1"/>
                    <h4 class="mb-1">{{mergePR}}</h4>
                </div>
                <p>Merged Pull Requests</p>

            </div>   

            <div class="d-flex detail-box">
                <div class="d-flex img-container">
                    <img src="../assets/icons/merge-open-pr.svg" class="mb-2 mr-1"/>
                    <h4 class="mb-1">{{mergeOpenPR}}</h4>
                </div>
                <p>Open Pull Requests</p>

            </div> 

            <div class="d-flex detail-box">
                <div class="d-flex img-container">
                    <img src="../assets/icons/closed-issues.svg" class="mb-2 mr-1"/>
                    <h4 class="mb-1">{{closedIssues}}</h4>
                </div>
                <p>Closed Issues</p>
            </div> 

            <div class="d-flex detail-box">
                <div class="d-flex img-container">
                    <img src="../assets/icons/new-issues.svg" class="mb-2 mr-1"/>
                    <h4 class="mb-1">{{newIssues}}</h4>
                </div>
                <p>New Issues</p>
            </div>      
        
        
        </div>


        <div class="d-flex branches-section">
            <div class="d-flex branches-title">
                <div class="d-flex title">
                    <h5 class="mt-2 mb-2">Master</h5>
                
                
                </div>

            
            </div>

            <div class="d-flex branches-info">

                <div class="d-flex detail-box">
                    <h5 class="mt-2 mb-2">{{authors}} Authors</h5>

                </div>   

                <div class="d-flex detail-box">
                    <h5 class="mt-2 mb-2">{{commitsToMaster}} Commits</h5>

                </div> 

                <div class="d-flex detail-box">
                    <h5 class="mt-2 mb-2">{{totalAdditions}} Additions</h5>
                </div> 

                <div class="d-flex detail-box">
                    <h5 class="mt-2 mb-2">{{deletions}} Deletions</h5>
                </div> 
            
            </div>
        
        
        </div>
    
    
    
    </div>




    
</template>


<script>
export default {
    props: {
        mergePR: {
            type: String,
            default: "0"
        },

        mergePR: {
            type: String,
            default: "0"
        },

        mergeOpenPR: {
            type: String,
            default: "0"
        },

        newIssues: {
            type: String,
            default: "0"
        },

        closedIssues: {
            type: String,
            default: "0"
        },

        commitsToMaster: {
            type: String,
            default: "0"
        },

        totalAdditions: {
            type: String,
            default: "0"
        },

        deletions: {
            type: String,
            default: "0"
        },

        authors: {
            type: String,
            default: "0"
        },

        startDate: {
            type: String,
            default: "August 22, 2020"
        },

        endDate: {
            type: String,
            default: "August 29, 2020"
        },
        
    }



}
</script>


<style scoped>



.container{
    flex-direction: column;
    border-color: grey;




}

.overview-header{
    background-color: grey;
    flex: 1;
    border-color: grey;
    border-width: 2px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    height: 40px;
    align-items: center;
    flex-direction: row;




}

.table-header{
    color: black;
    flex: 7


}

.table-date{
    color: black;
    flex: 2;
    font-style: italic;


}

.pr-section{
    flex: 3;
    flex-direction: row;
    border-color: grey;
    height: 80px;
    



}

.detail-box{
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-width: 2px;
    border-color: grey;
    height: 100%;


}

.img-container{
    flex-direction: row;


}


.branches-section{
    flex: 3;
    flex-direction: column;
    border-color: grey;



}

.branches-title{
    flex-direction: row;
    

}

.title{
    flex: 1;
    justify-content: center;
    align-items: center;
    border-color: grey;
    border-width: 2px
    



}

div.imgicon {
    filter: brightness(0) invert(1);
}




</style>