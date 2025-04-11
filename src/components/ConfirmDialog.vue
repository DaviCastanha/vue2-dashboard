<template>
    <div class="overlay">
        <div class="dialog">
            <p>Are you sure you want to delete?</p>
            <button @click="$emit('cancel')">Cancel</button>
            <button @click="$emit('confirm')">Delete</button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'ConfirmDialog',
});
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
}

.dialog {
    background: #fff;
    padding: 16px;
    border-radius: 4px;
}

button {
    margin-right: 8px;
    padding: 6px 12px;
}
</style>
