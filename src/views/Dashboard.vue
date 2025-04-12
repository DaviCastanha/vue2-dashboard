<template>
    <div class="dashboard-layout">
        <Topbar @search="searchTerm = $event" />
        <div class="main-area">
            <Sidebar />
            <ProductsTable :search-term="searchTerm" />
        </div>
    </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
import Topbar from '@/components/Topbar.vue'
import ProductsTable from '@/components/ProductsTable.vue'
export default {
    components: {
        Sidebar,
        Topbar,
        ProductsTable
    },
    data: () => ({
        searchTerm: ''
    })
}
</script>
<style scoped>
.dashboard-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.main-area {
    display: flex;
    flex: 1;
}
</style>