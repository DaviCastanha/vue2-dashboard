<template>
    <div class="dashboard-layout">
        <Topbar @search="searchTerm = $event" />
        <div class="main-area">
            <Sidebar />
            <!-- <ProductsTable  :search-term="searchTerm" /> -->
            <component 
                :is="currentComponent" 
                :search-term="searchTerm" 
            />
        </div>
    </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
import Topbar from '@/components/Topbar.vue'
import ProductsTable from '@/components/ProductsTable.vue'
import Login from '@/views/Login.vue'

export default {
    components: {
        Sidebar,
        Topbar,
        ProductsTable,
        Login
    },
    data: () => ({
        searchTerm: '',
    }),
    computed: {
        // Computa qual componente deve ser renderizado com base na rota atual
        currentComponent() {
            const route = this.$route.path;
            if (route === '/login') {
                return 'Login';
            }
            return 'ProductsTable'; // Padrão
        },
    },
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