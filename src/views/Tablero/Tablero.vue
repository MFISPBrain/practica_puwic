<template>
    <div class="column ">
        <div class="field is-grouped is-justify-content-space-evenly">
            
            <router-link to=""> 
                <button class="button is-info is-outlined p-6">Nuevo Anunciante</button>
            </router-link>
            <router-link :to="{name: 'CargarPagos'}">
                <button class="button is-info is-outlined p-6">Cargar Pago</button>
            </router-link>
            
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

</template>

<script>
export default {

}
</script>

<style>

</style>