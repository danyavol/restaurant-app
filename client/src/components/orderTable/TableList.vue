<script>
import Table from './Table';

export default {
    components: {
        Table
    },
    methods: {
        onChangeTableStatus(data) {
            console.log('order table', data);
        }
    }
}
</script>

<template>
    <Table :ordered="false" :number="5" :seats="6" @changeTableStatus="onChangeTableStatus" />
</template>