<template>
    <div class="column is-narrow has-background-white" width="200px" style="width: 240px;">
        <div>
            <img id="img" src="../assets/logotipo-PuWiC.png">
        </div>
        <aside>
            <ul class="menu-list">
                <li>
                    <a href="" class="texto"> 
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-table has-text-black"></i>
                            </span>
                            <span> Tablero</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="" class="texto">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-map-marked-alt has-text-black"></i>
                            </span>
                            <span> Mapa</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="" class="texto">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-user-friends has-text-black"></i>
                            </span>
                            <span> Anunciantes</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="" class="texto">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-bullhorn has-text-black"></i>
                            </span>
                            <span> Anuncios</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="" class="texto">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-eye has-text-black"></i>
                            </span>
                            <span> Impresiones</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="" class="texto">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-wifi has-text-black"></i>
                            </span>
                            <span> Puntos WiFi</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="" class="texto">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-cog has-text-black"></i>
                            </span>
                            <span> Sistema</span>
                        </span>
                    </a>
                </li>
            </ul>
        </aside>
    </div>
        
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style scoped>
.texto:hover{
    box-shadow: 0 12px 18px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    border: none; 
}
</style>