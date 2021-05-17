<script>
import Table from './Table';


export default {
    components: {
        Table
    },
    props: {
        config: Array,
        orders: Array
    },
    data() {
        return {
            tables: [],
        }
    },
    mounted() {
        const newTables = [];
        for(let table of this.config) {
            const ordersList = [];
            for (let order of this.orders) {
                if (order.tableId == table.id) {
                    ordersList.push(order);
                }
            }
            newTables.push({...table, orders: ordersList});
        }
        this.tables = newTables;
    },
    methods: {
        onChangeTableStatus(data) {
            console.log('order table', data);
        }
    },
    
}
</script>

<template>
    <div class="tables-container">
        <Table 
            v-for="table of tables" :key="table.id"
            :ordered="table.orders.length != 0" 
            :number="table.id" 
            :seats="table.seats" 
            @changeTableStatus="onChangeTableStatus" 
        />
    </div>
</template>

<style scoped>   
    .tables-container {
        margin: auto;
        max-width: 390px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
</style>