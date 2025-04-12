<template>
    <div>
        <!-- Dropdown de entradas -->
        <div class="entries-control">
            <label>
                Show
                <select v-model.number="perPage">
                    <option :value="5">5</option>
                    <option :value="10">10</option>
                    <option :value="50">50</option>
                </select>
                entries
            </label>
        </div>

        <!-- Botão de adicionar -->
        <button @click="openForm()">+ Add Customer</button>

        <!-- Tabela de produtos/clientes -->
        <table>
            <thead>
                <tr>
                    <th>Tracking ID</th>
                    <th>Product</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Payment Mode</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in paginatedList" :key="item.id">
                    <td>{{ item.trackingId }}</td>
                    <td>
                        <img :src="imagesMap[item.product] || '/default-icon.png'" alt=""
                            style="width: 20px; height: 20px; margin-right: 8px; vertical-align: middle;" />
                        {{ item.product }}
                    </td>

                    <td>{{ item.customer }}</td>
                    <td>{{ item.date }}</td>
                    <td>${{ Number(item.amount).toLocaleString('en-US', {
                        minimumFractionDigits: 2, maximumFractionDigits: 2
                    }) }}</td>
                    <td>{{ item.paymentMode }}</td>
                    <td>
                        <span :class="['status-tag', item.status.toLowerCase()]">
                            {{ item.status }}
                        </span>
                    </td>
                    <td>
                        <button @click="openForm(item)">✏️</button>
                        <button @click="openConfirm(item)">🗑️</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Paginação -->
        <div class="pagination">
            <button @click="prev" :disabled="page === 1">Prev</button>
            <span>Page {{ page }} / {{ maxPage }}</span>
            <button @click="next" :disabled="page >= maxPage">Next</button>
        </div>

        <!-- 5) Modais -->
        <ModalForm v-if="showForm" :item="current" @saved="reload" @close="showForm = false" />
        <ConfirmDialog v-if="showConfirm" @confirm="remove" @cancel="showConfirm = false" />
    </div>
</template>
  
<script>
import axios from 'axios'
import ModalForm from './ModalForm.vue'
import ConfirmDialog from './ConfirmDialog.vue'

export default {
    props: ['searchTerm'],
    components: { ModalForm, ConfirmDialog },
    data: () => ({
        list: [],
        page: 1,
        perPage: 5,
        showForm: false,
        imagesMap: {},
        showConfirm: false,
        current: null
    }),
    computed: {
        // filteredProducts() {
        //     if (!this.searchTerm) return this.products;
        //     const term = this.searchTerm.toLowerCase();
        //     return this.products.filter(p =>
        //         Object.values(p).some(val =>
        //             String(val).toLowerCase().includes(term)
        //         )
        //     );
        // },
        // paginatedProducts() {
        //     const start = (this.currentPage - 1) * this.perPage;
        //     return this.filteredProducts.slice(start, start + this.perPage);
        // },
        filteredList() {
            const term = this.searchTerm.trim().toLowerCase()
            if (!term) return this.list
            return this.list.filter(item =>
                Object.values(item).some(val =>
                    String(val).toLowerCase().includes(term)
                )
            )
        },
        maxPage() {
            return Math.ceil(this.filteredList.length / this.perPage)
        },
        paginatedList() {
            const start = (this.page - 1) * this.perPage
            return this.filteredList.slice(start, start + this.perPage)
        }
    },
    created() {
        this.reload()
        // this.fetchProducts();
        this.loadImages();
    },
    methods: {
        reload() {
            axios.get('http://localhost:3000/products').then(r => this.list = r.data)
        },
        prev() {
            this.page = Math.max(1, this.page - 1)
        },
        next() {
            this.page = Math.min(this.maxPage, this.page + 1)
        },
        openForm(item) {
            this.current = item ? { ...item } : null
            this.showForm = true
        },
        openConfirm(item) {
            this.current = item
            this.showConfirm = true
        },
        remove() {
            axios.delete(`http://localhost:3000/products/${this.current.id}`)
                .then(() => {
                    this.reload()
                    this.showConfirm = false
                })
        },
        fetchProducts() {
            axios.get('http://localhost:3000/products')
                .then(res => {
                    this.products = res.data;
                });
        },
        loadImages() {
            fetch('/data/productImages.json')
                .then(res => res.json())
                .then(data => {
                    this.imagesMap = data;
                });
        }
    },
}

</script>
  
<style scoped>
.entries-control {
    margin-bottom: 8px;
}

button {
    margin: 4px 0;
    padding: 6px 12px;
    cursor: pointer;
}

table {
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
    margin: 12px 0;
    display: flex;
    align-items: center;
}

.pagination span {
    margin: 0 8px;
}

.status-tag {
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 0.85rem;
    color: white;
    text-transform: capitalize;
    display: inline-block;
}

.status-tag.delivered {
    background-color: #4caf50;
    /* verde */
}

.status-tag.process {
    background-color: #ff9800;
    /* laranja */
}

.status-tag.canceled {
    background-color: #f44336;
    /* vermelho */
}
</style>
  