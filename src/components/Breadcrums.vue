<template>

    <div class="column has-background-white mt-2">
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                
                <li v-for="item in items" :key="item.path">
                    <router-link :to="item.path"> {{item.meta.value}} </router-link>
                </li>

            </ul>
        </nav>
    </div>

</template>

<script>

export default {
    name: 'Breadcrumbs',

    data: () => ({
        items: [],
    }),

    watch: {
        $route(){
            this.getRoute()
        }
    },

    methods: {
        getRoute() {
            this.items = this.$route.matched;
            console.log(this.$route)
        },
    },

    created() {
        this.getRoute();
    }
}
</script>

<style>

</style>