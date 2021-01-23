<template>

    <div  class="navbar-menu  is-active" style="background-color: #008575">
        <div class="navbar-start">
            <div class="navbar-item">
                <div class=" field ">
                    <p class="control has-icons-left">
                        <input class="input " type="text" placeholder="Search">
                        <span class="icon is-left">
                            <i class="fas fa-search" ></i>
                        </span>
                    </p>
                </div>    
            </div>    
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="mr-5 " >
                            <span class="icon  has-text-dark is-size-5 texto">
                        <i class="fas fa-bell"></i>
                        </span>                                     
                    </a>
                    <a class="ml-2 mr-3 ">
                        <span class="icon  has-text-dark is-size-3 texto">
                        <i class="fas fa-user-circle "></i>
                        </span>
                    </a>
                </div>
            </div>
        </div> 
    </div>
    
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
.texto:hover{
    /* background-color: #C6C3C2; */
    box-shadow: 0 12px 18px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    border: none; 
}
</style>