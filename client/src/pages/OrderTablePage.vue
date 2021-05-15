<template>
    <p>Order table</p>
    <TableList :config="tablesConfig" :orders="tablesOrders" />
    
</template>

<script>
import TableList from '@/components/orderTable/TableList';

export default {
    components: {
        TableList
    },
    data() {
        return {
            tablesConfig: this.getTablesConfig(),
            tablesOrders: this.getTablesOrders()
        }
    },
    methods: {
        getTablesConfig() {
            return [
                { id: 1, seats: 2 },
                { id: 2, seats: 2 },
                { id: 3, seats: 3 },
                { id: 4, seats: 4 },
                { id: 5, seats: 4 },
                { id: 6, seats: 4 },
                { id: 7, seats: 6 },
                { id: 8, seats: 6 },
                { id: 9, seats: 6 },
                { id: 10, seats: 1 },
                { id: 11, seats: 1 },
                { id: 12, seats: 1 }
            ]
        },
        getTablesOrders () {
            return [
                { id: 1, tableId: 1, fromTime: 1562342234, toTime: 12323421 }
            ]
        }
    }
}
</script>