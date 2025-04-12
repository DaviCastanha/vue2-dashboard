<template>
    <div class="dashboard-layout">
        <Sidebar />
        <div class="main-area">
            <Topbar @search="searchTerm = $event" />
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
}

.main-area {
    flex: 1;
    padding: 16px;
}
</style>