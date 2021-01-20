<template>



 <div class="block" >  


              <div>
                        <img id="img" src="../assets/logotipo-PuWiC.png" >
               </div>
              <div class="field  has-addons has-addons-centered " >
                      <p class="control has-icons-left has-icons-right ">

                                <input class="input "   type="text" name="userName" placeholder="Username">
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
                            <div class="control is-mobile">
                                        <button class="button" id="button1" >
                                           <span class="icon is-small">
                                              <i class="fas fa-check"></i>
                                            </span>
                                            <span>Ingresar</span>
                                        </button>
                           </div>
               </div> 
    </div>

</template>



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


// .left, .right {
//   float: left;
//   width: 20%; /* The width is 20%, by default */
// }

// .main {
//   float: left;
//   width: 60%; /* The width is 60%, by default */
// }

// /* Use a media query to add a breakpoint at 800px: */
 @media screen and (max-width: 320px) {
  #img,#button1 {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
}







#centrar{

  align-items: center;
}

</style>