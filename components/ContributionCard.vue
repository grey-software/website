<template>
    <div class="card-frame">
        <span class="card">
            <h3 class="card-heading">
                <a class="avatar-frame">
                    <img src="https://avatars0.githubusercontent.com/u/19757203?s=60&v=4" class="avatar"/>
                
                
                </a>

                <span class="f5 text-normal text-gray-light float-right">
                
                
                
                
                </span>


                <a class="username-tag">

                
                
                
                
                </a>

                <span class="f6 d-block text-gray-light">
                    <span class="cmeta">
                        <span class="link-gray text-normal">
                        
                        </span>

                        <span class="text-green text-normal">


                        </span>

                        <span class="text-red text-normal">
                        
                        
                        </span>
                    
                    
                    
                    </span>
                
                
                
                </span>
            
            
            
            </h3>
        </span>

    
    
    
    
    </div>



</template>



<script>
export default {
    props: {
        user:{
            type: Object


        }
    }

}


</script>

<style scoped>

    .card-frame {
        background-color: white;
        border-color: silver;
        border-width: 1px;
        padding-right: 8px;
        margin-top: 8px;
        float: left;
        width: 100px;
        height: 70px;

    }

    .card {
        display: block;
        background-color: #fff;
        border: 1px solid #e1e4e8;
        border-radius: 6px;


    }

    .card-heading {
        line-height: 1.25;
        padding: 8px;
        border-bottom: 1px solid




    }

    .avatar-frame {
        display: inline-block;
        margin-right: 8px;
        float: left;
        text-decoration: none





    }

    .avatar {
        display: inline-block;
        overflow: hidden;
        line-height: 1;
        vertical-align: middle;


    }

    .username-tag {
        font-weight: 400;


    }









</style>