<template>
    <div>
        <button @click="openForm()">+ Add Customer</button>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Mode</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in paged" :key="item.id">
                    <td>{{ item.trackingId }}</td>
                    <td>{{ item.product }}</td>
                    <td>{{ item.customer }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.amount }}</td>
                    <td>{{ item.paymentMode }}</td>
                    <td>{{ item.status }}</td>
                    <td>
                        <button @click="openForm(item)">✏️</button>
                        <button @click="openConfirm(item)">🗑️</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="pagination">
            <button @click="prev" :disabled="page === 1">Prev</button>
            <span>{{ page }}</span>
            <button @click="next" :disabled="page >= maxPage">Next</button>
        </div>

        <ModalForm v-if="showForm" :item="current" @saved="reload" @close="showForm = false" />
        <ConfirmDialog v-if="showConfirm" @confirm="remove" @cancel="showConfirm = false" />
    </div>
</template>
  
<script>
import axios from 'axios'
import ModalForm from './ModalForm.vue'
import ConfirmDialog from './ConfirmDialog.vue'
export default {
    components: { ModalForm, ConfirmDialog },
    data: () => ({ list: [], page: 1, perPage: 5, showForm: false, showConfirm: false, current: null }),
    computed: {
        maxPage() { return Math.ceil(this.list.length / this.perPage) },
        paged() { const start = (this.page - 1) * this.perPage; return this.list.slice(start, start + this.perPage) }
    },
    created() { this.reload() },
    methods: {
        reload() { axios.get('http://localhost:3000/products').then(r => this.list = r.data) },
        prev() { this.page-- }, next() { this.page++ },
        openForm(item) { this.current = item ? { ...item } : null; this.showForm = true },
        openConfirm(item) { this.current = item; this.showConfirm = true },
        remove() {
            axios.delete(`http://localhost:3000/products/${this.current.id}`)
            .then(() => { this.reload(); this.showConfirm = false })
        }
    }
}
</script>
<style scoped>table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 8px;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.pagination {
    margin: 8px 0;
}

button {
    margin-right: 4px;
    padding: 4px 8px;
    cursor: pointer;
}</style>