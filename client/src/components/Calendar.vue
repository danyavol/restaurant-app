<script>
import { DatePicker } from 'v-calendar';

export default {
    components: { DatePicker },
    emits: ['dateRangeUpdate'],
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
                    type: 'number'
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
        }
    },
    watch: {
        selectedDate() {
            this.$emit('dateRangeUpdate', this.selectedDate);
        }
    }
}
</script>

<template>
    <DatePicker v-model="selectedDate" v-bind="calendarConfig" />
</template>