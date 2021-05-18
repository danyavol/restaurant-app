<script>
import TableList from '@/components/orderTable/TableList';
import httpService from '@/service/httpService'
import Calendar from '@/components/Calendar'
import axios from 'axios'

export default {
    components: {
        TableList, Calendar
    },
    data() {
        return {
            tablesConfig: null,
            orders: null,

            dateRange: null,
            customerName: null,
            phoneNumber: null,
            userOrders: []
        }
    },
    async mounted() {
        this.tablesConfig = await httpService.getConfig();
        this.orders = await httpService.getOrders();
    },
    methods: {
        onDateRangeUpdate(dateRange) {
            this.dateRange = {
                fromTime: dateRange.start,
                toTime: dateRange.end
            };
        },
        onUserOrdersUpdate(userOrder) {
            this.userOrders = userOrder;
        },
        sendOrder() {
            for (let order of this.userOrders) {
                const data = {
                    tableId: order,
                    fromTime: this.dateRange.fromTime,
                    toTime: this.dateRange.toTime,
                    customerName: this.customerName,
                    phoneNumber: this.phoneNumber
                };
                axios.post(process.env.VUE_APP_SERVER_URL+'order', data);
            }
        }
    }
}
</script>

<template>

    <section class="formGroup">
        <Calendar @dateRangeUpdate="onDateRangeUpdate"/>

        <div class="inputs">
            <div class="mb-3">
                <label class="form-label">Имя и фамилия</label>
                <input type="text" class="form-control" v-model="customerName" placeholder="Иван Иванов">
            </div>
            <div class="mb-3">
                <label class="form-label">Номер телефона</label>
                <input type="text" class="form-control" v-model="phoneNumber" placeholder="+375 (29) 123-45-67">
            </div>
            <div class="flex-grow"></div>
            <button type="button" class="btn btn-primary" :disabled="!(customerName && phoneNumber && dateRange && userOrders.length)" @click="sendOrder">Отправить заказ</button>
        </div>
    </section>

    <section class="restaurantTables">
        <TableList v-if="tablesConfig && orders" :config="tablesConfig" :orders="orders" :selectedDate="dateRange" @userOrdersUpdate="onUserOrdersUpdate" />
    </section>
    
    
</template>

<style scoped>
    .formGroup {
        display: flex;
        justify-content: flex-start;
        gap: 10px;
        margin-top: 20px;
        padding: 20px;
        background: #feebc8;
        border-radius: 20px 20px 0 0 ;
    }

    /* --orange-300: #fbd38d */

    .inputs {
        background: white;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid rgb(203, 213, 224);
        display: flex;
        flex-direction: column;
    }

    .flex-grow {
        flex-grow: 1;
    }

    .restaurantTables {
        padding: 20px 40px;
        background: #fbd38d;
        border-radius: 0 0 20px 20px;
    }
</style>

