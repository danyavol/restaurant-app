<script>
export default {
    props: {
        ordered: Boolean,
        number: Number,
        seats: Number
    },
    emits: ['changeTableStatus'],
    data() {
        return {
            selected: false
        }
    },
    methods: {
        selectTable() {
            if (this.ordered) return;

            this.selected = !this.selected;
            const data = {
                number: this.number, 
                selected: this.selected
            };
            this.$emit('changeTableStatus', data);
        }
    }
}
</script>

<template>
    <div class="tableItem" 
        :class="{'bg-danger': ordered, 'bg-success': !ordered && !selected, 'bg-primary': selected}" 
        @click="selectTable()"
    >
        <div>№ <strong>{{number}}</strong></div>
        <div>Мест <strong>{{seats}}</strong></div>
    </div>
</template>

<style scoped>
    .tableItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 70px;
        border-radius: 10px;
        border: 1px solid black;
        color: white;
        cursor: pointer;
        user-select: none;
    }
</style>