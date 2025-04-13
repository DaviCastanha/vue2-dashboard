<template>
    <div class="login-container">
        <h2>Login</h2>
        <button @click="$router.push('/products')">Entrar</button>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'Login',
});
</script>

<style scoped>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

button {
    padding: 8px 16px;
    cursor: pointer;
}
</style>


<template>
    <div class="dashboard-layout">
        <Sidebar />
        <div class="main-area">
            <Topbar />
            <ProductsTable />
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Topbar from '@/components/Topbar.vue';
import ProductsTable from '@/components/ProductsTable.vue';
export default { components: { Sidebar, Topbar, ProductsTable } };
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
