<template>
    <div class="columns has-background-white-ter" style="height: 700px">

        <Menu/>
        <div class="column pl-0">

            <Navbar/>

            <Breadcrums/>

            <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import Breadcrums from '../components/Breadcrums'

export default {
    components: {
        Menu,
        Navbar,
        Breadcrums
    }
}
</script>

<style scoped>
.texto:hover{
    background-color: #C6C3C2;
}
</style>