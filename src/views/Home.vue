<template>
    <div class="columns has-background-white-ter">

        <Menu/>
        <div class="column pl-0">

            <Navbar/>

            <!-- Pasos de ruta en la que esta parada -->
            <div class="column has-background-white mt-2">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="#">Menu</a></li>
                        <li class="is-active"><a href="#" aria-current="page">Tablero</a></li>
                    </ul>
                </nav>
            </div>

            <div class="column ">
                <div class="field is-grouped is-justify-content-space-evenly">
                    <button class="button is-info is-outlined p-6">Nuevo Anunciante</button>
                    <button class="button is-info is-outlined p-6">Cargar Pago</button>
                    <button class="button is-info is-outlined p-6">Nuevo Punto WiFi</button>
                </div>
            </div>

            <div class="column">
                <div class="columns is-mobile">
                    <div class="column">
                        <div class="column box p-0" style="height:240px">
                            <div class="has-background-grey-lighter pt-2" style="border-radius: 6px 6px 0px 0px">
                                <p class="bd-notification is-info pl-3">Puntos que no tienen impresiones hace 6hs</p>
                            </div>
                            <hr class="my-0 pt-1" >
                        </div>

                        <div class="column box p-0" style="height:240px">
                            <div class="has-background-grey-lighter pt-2" style="border-radius: 6px 6px 0px 0px">
                                <p class="bd-notification is-info pl-3">Cobrado este mes</p>
                            </div>
                            <hr class="my-0 pt-1">
                        </div>   
                    </div>
                    <div class="column box p-0 my-3 mr-3">
                        <div class="has-background-grey-lighter pt-2" style="border-radius: 6px 6px 0px 0px">
                            <p class="bd-notification is-info pl-3">Total impresiones por dia</p>
                        </div>
                        <hr class="my-0 pt-1">
                    </div>
                </div>
            </div>

        </div>
    </div>
    
</template>

<script>
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'

export default {
    components: {
        Menu,
        Navbar    
    }
}
</script>

<style scoped>
.texto:hover{
    background-color: #C6C3C2;
}
</style>