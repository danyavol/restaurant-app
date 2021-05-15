<template>
    <Header />
    <main>
        <router-view />
    </main>
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
</style>
