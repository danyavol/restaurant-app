<script>
import Table from './Table';


export default {
    components: {
        Table
    },
    props: {
        config: Array,
        orders: Array,
        selectedDate: Object
    },
    emits: ['userOrdersUpdate'],
    data() {
        return {
            filteredOrders: [],
            tables: [],
            userOrder: []
        }
    },
    methods: {
        onChangeTableStatus(data) {
            if (data.selected) {
                this.userOrder.push(data.tableId);
            } else {
                for(let i = 0; i < this.userOrder.length; i++)
                    if (this.userOrder[i] == data.tableId) 
                        this.userOrder.splice(i, 1);    
            }
            this.$emit('userOrdersUpdate', this.userOrder);
        },
        filterOrders() {
            const newFilteredOrders = [];
            this.orders.forEach(order => {
                if (!(order.toTime < this.selectedDate.fromTime || order.fromTime > this.selectedDate.toTime))
                    newFilteredOrders.push(order);
            });
            this.filteredOrders = newFilteredOrders;
        },
        recalculateTables() {
            const newTables = [];
            for(let table of this.config) {
                const ordersList = [];
                for (let order of this.filteredOrders) {
                    if (order.tableId == table.id) {
                        ordersList.push(order);
                    }
                }
                newTables.push({...table, orders: ordersList});
            }
            this.tables = newTables;
        }
    },
    watch: {
        selectedDate() {
            this.userOrder = [];
            this.$emit('userOrdersUpdate', this.userOrder);
            this.filterOrders()
            this.recalculateTables();
        }
    }
    
}
</script>

<template>
    <div class="tables-container" v-if="selectedDate">
        
        <Table 
            v-for="table of tables" :key="table.id"
            :ordered="table.orders.length != 0" 
            :number="table.id" 
            :seats="table.seats"
            :selected="userOrder.includes(table.id)"
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