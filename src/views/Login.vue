<template>
    <div class="section container" >  
        <div>
            <img id="img" src="../assets/logotipo-PuWiC.png" >
        </div>
        <div class="field  has-addons has-addons-centered " >
    
          <div class="control">

                    <p class="button ">
            
                        <span class="icon is-small is-left" >

                            <i class="fas fa-user"></i>
                                                
                        </span>

                    </p>
            </div>
            <div class="control">

                <input class="input " type="text" name="userName" placeholder="Username">
                  
            </div>

        </div>
        <div class="field has-addons has-addons-centered " >
         
            <div class="control  has-icons-left has-icons-right mobile">
                <input class="input pl-6" placeholder="Password" :type="passwordFieldType" v-model="password">
                    <span class="icon is-small is-left" >
                         
                         <i  class="fas fa-lock"></i>
                                                        
                    </span>
      
            </div>
                
            <div class="control">

                <button class="button " type="password" @click="switchVisibility">
          
                     <span class="icon is-small is-right" >
                         
                               <i class="fas fa-eye"></i>
                                              
                    </span>

                </button>
            </div>       
        </div>
                  
        <div class="field ">
            <div class="control has-text-centered ">
                <!-- <a href="/Menu"  class="button has-text-weight-bold" id="button1" >               
                    <span>Ingresar</span>
                </a> -->
                <router-link to="/Home" class="button has-text-weight-bold" id="button1">
                    <span>Ingresar</span>
                </router-link>
            </div>
        </div>
    </div>
            
</template>

<script>
export default {
      name: 'Login' ,
      
      data:()=>({
          password: '',
          passwordFieldType: 'password'

      })
      ,
      methods: {
         switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    }
  }

}
</script>


<style scoped lang="scss">

@import "bulma/sass/utilities/initial-variables";
@import "bulma/sass/utilities/functions";


$primary: yellow;
$button-color: white;
$button-background-color: #008575;

.input{

        width:18.1rem;

}
.button{
    color:  #123044 ;
    
}
#button1{
    background: $button-background-color;
    color: $button-color;
    width:20.5rem;
}

@media screen and (max-width: 370px) {
    #button1{
    width: 90%;
  }
}

#img{
    display: block;
    height: 8rem;
    margin: auto;
    width: auto;   
}

</style>