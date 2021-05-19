<template>
    <div class="sss">
        <Header />
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
import Header from "./core/Header";

export default {
    name: "App",
    components: {
        Header,
    },
};
</script>

<style>
    html, body, #app {
        height: 100%;
    }
    .sss {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    main {
        flex-grow: 1;
    }
</style>
