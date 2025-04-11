<template>
    <header class="topbar">
        <input v-model="search" placeholder="Type to search" />
    </header>
</template>
<script>
export default { data: () => ({ search: '' }), watch: { search(val) { this.$emit('search', val) } } }
</script>
<style scoped>
.topbar {
    padding: 8px 16px;
    background: #fff;
    border-bottom: 1px solid #ddd;
}

.topbar input {
    width: 100%;
    padding: 8px;
}</style>