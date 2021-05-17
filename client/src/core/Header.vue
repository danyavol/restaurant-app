<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <span class="navbar-brand">Restaurant app</span>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>   
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :class="currentRoute == 'Home' ? 'nav-link active' : 'nav-link'" to="/">Главная</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="currentRoute == 'OrderTable' ? 'nav-link active' : 'nav-link'" to="/order">Забронировать столик</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="currentRoute == 'Contacts' ? 'nav-link active' : 'nav-link'" to="/contacts">Контакты</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    nav {
        background-color: #c6f6d5;
        box-shadow: 0 5px 10px rgba( 0 0 0 / .15);
    }
</style>

<script>
export default {
    data() {
        return {
            currentRoute: null,
            dropdownOpened: false,
        };
    },
    watch: {
        $route(to) {
            this.currentRoute = to.name;
        },
    },
    methods: {
        navigate(url) {
            this.dropdownOpened = false;
            this.$router.push(url);
        },
    },
};
</script>