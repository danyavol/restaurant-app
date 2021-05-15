<script>
import Table from './Table';
import { DatePicker } from 'v-calendar';

export default {
    components: {
        Table,
        DatePicker
    },
    props: {
        config: Array,
        orders: Array
    },
    data() {
        return {
            calendar: null,
            selectedDate: {},
            calendarConfig: {
                mode: "dateTime",
                masks: { weekdays: 'WW' },
                'min-date': new Date(),
                'max-date': this.getMaxDate(),
                'model-config': {
                    timeAdjust: '00:00:00',
                },
                'is-range': true,
                'is24hr': true,
                'minute-increment': 10,
                'is-required': true
            },
        }
    },
    mounted() {
        this.calendar = this.$refs.calendar;
    },
    methods: {
        getMaxDate() {
            let now = new Date();
            let twoWeeks = 1000 * 60 * 60 * 24 * 7 * 4;
            return new Date(now.getTime() + twoWeeks);
        },
        onChangeTableStatus(data) {
            console.log('order table', data);
        }
    },
    watch: {
        selectedDate() {
            console.log('selectedDate', this.selectedDate);
        }
    }
}
</script>

<template>
    <DatePicker v-model="selectedDate" v-bind="calendarConfig" />
    
    <Table :ordered="false" :number="5" :seats="6" @changeTableStatus="onChangeTableStatus" />
</template>