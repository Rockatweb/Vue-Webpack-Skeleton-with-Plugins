<template>
    <div class="navigation">
        <a href="" class="logo">
            <img src="" />
        </a>

        <nav id="tabs">
            <li class="index" :class="($route.path === '/') ? 'current' : ''">
                <a href="">Startseite</a>
            </li>
            <li class="login" :class="($route.path === '/map') ? 'current' : ''">
                <a href="map">Map</a>
            </li>
        </nav>
    </div>
</template>