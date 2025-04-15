<template>
    <div class="dashboard-layout">
        <Topbar />
        <div class="main-area">
            <Sidebar />
            <router-view />
        </div>
    </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
import Topbar from '@/components/Topbar.vue'
import Products from '@/views/Products.vue'

export default {
    components: {
        Sidebar,
        Topbar,
        Products,
    }
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