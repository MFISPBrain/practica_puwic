<template>
    <div class="container">
        <div class="column">
            <div class="columns">
                <div class="column is-4">
                    <!-- Buscador -->
                    <div class=" field ">
                        <p class="control has-icons-left">
                            <input class="input " type="text" placeholder="Search">
                            <span class="icon is-left">
                                <i class="fas fa-search" ></i>
                            </span>
                        </p>
                    </div>  
                </div>

                <div class="column ">
                    <div class="buttons is-justify-content-flex-end">
                        <button class="button has-background-info has-text-white">Filtrar</button>
                        <button class="button">[]</button>
                        <button class="button">[X]</button>
                        <button class="button has-background-link has-text-white">Nuevo usuario</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="column">
            <table class="table" style="width: 100%">
                <thead>
                    <tr>
                    <th>[]</th>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Usuario</th>
                    <th>Comentario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="usuario in usuarios" :key="usuario.id">
                        <td>[]</td>
                        <td>{{usuario.id}}</td>
                        <td>{{usuario.nombre}}</td>
                        <td v-if="usuario.estado">activo</td>
                        <td v-else>inactivo</td>
                        <td>{{usuario.usuario}}</td>
                        <td>{{usuario.comentario}}</td>
                    </tr>       
                    <tr>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {

    data: () => ({
        usuarios: [
            {id: '1', nombre: 'Mauricio Ferreyra', estado: true, usuario: 'Mauri', comentario: 'un comentario'},
            {id: '2', nombre: 'Emanuel Fleita', estado: true, usuario: 'Ema', comentario: 'otro comentario'},
            {id: '3', nombre: 'Luis Rizzoli', estado: true, usuario: 'Luis', comentario: 'comentario'}
        ]
    })

}
</script>

<style>

</style>