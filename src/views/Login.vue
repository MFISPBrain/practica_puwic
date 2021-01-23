<template>
    <div class="section container" >  
        <div>
            <img id="img" src="../assets/logotipo-PuWiC.png" >
        </div>
        <div class="field  has-addons has-addons-centered " >
            <p class="control has-icons-left has-icons-right ">
                <input class="input " type="text" name="userName" placeholder="Username">
                <span class="icon is-small is-left" >

                    <i class="fas fa-user"></i>
                </span>                  
            </p>
        </div>
        <div class="field has-addons has-addons-centered " >
            <div class="control has-icons-left has-icons-right "  >
                <input class="input is-success " type="password" placeholder="Password">
                <span class="icon is-small is-left " >
                <i class="fas fa-lock"></i>
                </span>
                <span class="icon is-small is-right">
                <i class="fas fa-eye"></i>
                </span>
            </div>
        </div>
        <div class="field ">
            <div class="control has-text-centered ">
            <button class="button has-text-weight-bold" id="button1" >               
                <span>Ingresar</span>
            </button>
            </div>
        </div>
    </div>
            
</template>

<script>
export default {
      name: 'Login' ,
}
</script>


<style scoped lang="scss">

@import "bulma/sass/utilities/initial-variables";
@import "bulma/sass/utilities/functions";



 $primary: yellow;
$button-color: white;
$button-background-color: #008575;


#button1{
    background: $button-background-color;
    color: $button-color;
    width:20.5rem;
}

$dimensions:  24 32 48 64 96 125 ;
$size-1: 1rem;

#img{
    display: block;
    height: 8rem;
    margin: auto;
    width: auto;   
}

</style>