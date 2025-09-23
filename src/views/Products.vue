<template>
    <div class="products-table-container">
        <!-- Dropdown de entradas -->
        <div class="header-controls">
            <div class="entries-control">
                <span>Show</span>
                <select class="dropdown" v-model.number="perPage">
                    <option :value="5">5</option>
                    <option :value="7">7</option>
                    <option :value="10">10</option>
                </select>
                <span>entries</span>
            </div>
            <!-- Add Customer button -->
            <button class="add-customer-button" @click="openForm()">
                <span class="add-icon">+</span> Add Customer
            </button>
        </div>

        <!-- Tabela de produtos/clientes -->
        <table>
            <thead>
                <tr>
                    <th class="id-column">Tracking ID</th>
                    <th>Product</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Payment Mode</th>
                    <th>Status</th>
                    <th class="action-column">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in paginatedList" :key="item.id" class="product-line">
                    <td class="id-line">{{ item.trackingId }}</td>
                    <td>
                        <img :src="imagesMap[item.product] || '/default-icon.png'" alt="" style="
                            width: 20px;
                            height: 20px;
                            margin-right: 8px;
                            vertical-align: middle;
                        " />
                        {{ item.product }}
                    </td>
                    <td>{{ item.customer }}</td>
                    <td>{{ formatDateToBr(item.date) }}</td>
                    <td>
                        ${{
                            Number(item.amount).toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })
                        }}
                    </td>
                    <td>{{ item.paymentMode }}</td>
                    <td>
                        <span :class="['status-tag', item.status.toLowerCase()]">
                            {{ item.status }}
                        </span>
                    </td>
                    <td class="button-cell">
                        <div class="icon-container">
                            <button @click="openForm(item)" class="edit-button">
                                <svg class="icon edit-icon" version="1.0" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="#624DE3"
                                        stroke="none">
                                        <path
                                            d="M1025 1251 c-16 -10 -159 -149 -317 -307 l-287 -289 -35 -131 c-40 -144 -43 -172 -22 -180 8 -3 78 13 157 34 l142 40 299 299 c316 315 328 331 314 405 -7 40 -65 112 -107 133 -39 21 -108 19 -144 -4z m139 -71 c44 -39 58 -77 41 -116 -6 -16 -20 -35 -29 -43 -15 -13 -25 -7 -92 60 l-75 74 31 28 c41 36 80 35 124 -3z m-281 -452 l-233 -233 -75 75 -75 75 232 232 233 233 75 -75 75 -75 -232 -232z m-303 -259 c0 -7 -59 -27 -132 -44 l-27 -7 20 69 c11 37 22 74 25 82 3 10 21 -2 59 -39 30 -30 55 -58 55 -61z" />
                                        <path
                                            d="M95 1136 c-41 -18 -83 -69 -90 -109 -3 -18 -5 -233 -3 -478 l3 -446 27 -35 c53 -69 55 -69 595 -66 471 3 482 3 510 24 15 11 38 36 50 54 22 31 23 43 23 205 0 182 -7 210 -43 182 -13 -10 -17 -39 -19 -180 l-3 -169 -28 -24 -28 -24 -480 0 c-325 0 -487 3 -501 11 -45 24 -48 52 -48 494 0 447 2 469 52 497 15 9 77 15 188 18 l165 5 0 25 0 25 -170 2 c-124 2 -178 -1 -200 -11z" />
                                    </g>
                                </svg>
                            </button>
                            <button @click="openConfirm(item)" class="delete-button">
                                <svg class="icon delete-icon" version="1.0" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="#A30D11"
                                        stroke="none">
                                        <path
                                            d="M452 1214 c-19 -13 -22 -24 -22 -80 l0 -64 -113 0 c-86 0 -118 -4 -135 -16 -27 -18 -29 -55 -4 -77 17 -15 64 -17 464 -17 418 0 446 1 461 18 23 26 21 58 -5 76 -17 12 -49 16 -135 16 l-113 0 0 64 c0 94 -4 96 -210 96 -134 0 -170 -3 -188 -16z m298 -119 l0 -25 -110 0 -110 0 0 25 0 25 110 0 110 0 0 -25z" />
                                        <path
                                            d="M229 889 c-20 -20 -20 -28 -17 -352 l3 -332 28 -47 c18 -31 44 -57 75 -75 l47 -28 275 0 275 0 47 28 c31 18 57 44 75 75 l28 47 3 319 c2 176 1 330 -3 343 -9 36 -48 50 -80 29 l-25 -16 0 -326 0 -326 -34 -34 -34 -34 -252 0 -252 0 -34 34 -34 34 0 325 c0 325 0 326 -22 341 -30 21 -44 20 -69 -5z" />
                                        <path
                                            d="M497 782 c-15 -16 -17 -47 -17 -224 0 -186 2 -206 18 -221 26 -23 58 -21 76 5 13 19 16 57 16 218 0 161 -3 199 -16 218 -18 27 -55 29 -77 4z" />
                                        <path
                                            d="M706 778 c-13 -19 -16 -57 -16 -218 0 -161 3 -199 16 -218 18 -27 55 -29 77 -4 15 16 17 47 17 224 0 186 -2 206 -18 221 -26 23 -58 21 -76 -5z" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Paginação -->
        <div class="pagination">
            <button class="pagination-link" @click="prev" :disabled="page === 1">
                Previous
            </button>
            <div class="pagination-pages">
                <button v-for="p in maxPage" :key="p" @click="page = p"
                    :class="['pagination-page', { active: page === p }]">
                    {{ p }}
                </button>
            </div>
            <button class="pagination-link" @click="next" :disabled="page >= maxPage">
                Next
            </button>
        </div>

        <!-- Modais -->
        <ModalForm v-if="showForm" :item="current" @saved="reload" @close="showForm = false" />
        <ConfirmDialog v-if="showConfirm" @confirm="remove" @cancel="showConfirm = false" />
    </div>
</template>

<script>
import axios from 'axios';
import ModalForm from '../components/ModalForm.vue';
import ConfirmDialog from '../components/ConfirmDialog.vue';
import { EventBus } from '@/eventBus';

export default {
    components: { ModalForm, ConfirmDialog },
    data: () => ({
        list: [],
        page: 1,
        perPage: 10,
        showForm: false,
        imagesMap: {},
        showConfirm: false,
        current: null,
        searchTerm: '',
    }),
    computed: {
        filteredList() {
            const term = this.searchTerm.trim().toLowerCase();
            if (!term) return this.list;
            return this.list.filter((item) =>
                Object.values(item).some((val) =>
                    String(val).toLowerCase().includes(term)
                )
            );
        },
        maxPage() {
            return Math.ceil(this.filteredList.length / this.perPage);
        },
        paginatedList() {
            const start = (this.page - 1) * this.perPage;
            return this.filteredList.slice(start, start + this.perPage);
        },
    },
    created() {
        this.reload();
        // this.fetchProducts();
        this.loadImages();

        // Ouve o evento do Event Bus
        EventBus.$on('search-updated', (searchTerm) => {
            this.searchTerm = searchTerm;
        });
    },
    methods: {
        reload() {
            axios
                .get('http://localhost:3000/products')
                .then((r) => (this.list = r.data));
        },
        prev() {
            this.page = Math.max(1, this.page - 1);
        },
        next() {
            this.page = Math.min(this.maxPage, this.page + 1);
        },
        openForm(item) {
            this.current = item ? { ...item } : null;
            this.showForm = true;
        },
        openConfirm(item) {
            this.current = item;
            this.showConfirm = true;
        },
        remove() {
            axios
                .delete(`http://localhost:3000/products/${this.current.id}`)
                .then(() => {
                    this.reload();
                    this.showConfirm = false;
                });
        },
        fetchProducts() {
            axios.get('http://localhost:3000/products').then((res) => {
                this.products = res.data;
            });
        },
        loadImages() {
            fetch('/data/productImages.json')
                .then((res) => res.json())
                .then((data) => {
                    this.imagesMap = data;
                });
        },
        formatDateToBr(date) {
            const [year, month, day] = date.split('-');
            return `${day}/${month}/${year}`;
        },
    },
};
</script>

<style scoped>
.header-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 93px;
    width: 100%;
    margin: 0;
    padding: 0 24px;
    box-sizing: border-box;
}

.entries-control {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    color: var(--primary-text);
}

.entries-control span {
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
}

.dropdown {
    background-color: #E0E0E0; /* Fundo do dropdown */
    width: 43px;
    height: 31px;
    border: none;
    border-radius: 8px;
    padding: 0 5px 0 9px;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    /* Tirei a setinha do dropdown original aqui */
    appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, #9E9E9E 50%),
        linear-gradient(-45deg, transparent 50%, #9E9E9E 50%);
    background-position: right 9px center, right 5px center;
    background-size: 5px 5px;
    background-repeat: no-repeat;
}

.dropdown select {
    background-color: #E0E0E0;
    width: 43px;
    height: 31px;
    border: none;
    border-radius: 8px;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
}

.add-customer-button {
    background-color: #624DE3; /* Fundo do botão */
    color: #FFFFFF; /* Texto do botão */
    width: 163px;
    height: 48px;
    border: none;
    border-radius: 8px;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    cursor: pointer;
}

.add-customer-button .add-icon {
    font-size: 16px;
    margin-right: 0.5px;
}

.add-customer-button:hover {
    animation: dissolve 300ms ease-out;
}

@keyframes dissolve {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.action-column, .id-column, .id-line {
    text-align: center;
    vertical-align: middle;
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

table th,
table td {
    border: none;
    padding: 8px;
    text-align: left;
}

thead {
    border-bottom: none;
}

tbody tr {
    border-bottom: none;
}

.products-table-container {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--primary-bg); /* Fundo da tabela */
}

.product-line {
    background-color: var(--secondary-bg); /* Fundo alternado */
    color: var(--primary-text);
}

.product-line:nth-child(even) {
    background-color: var(--primary-bg); /* Fundo de linhas pares */
    color: var(--primary-text);
}

th,
td {
    border: 1px solid var(--table-text); /* Borda das células */
    padding: 8px;
    text-align: left;
}

thead {
    border-bottom: none;
}

tbody tr {
    border-bottom: none;
}
tr{
    color: var(--primary-text);
}

.button-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
}

.icon-container {
    display: flex;
    align-items: center;
    gap: 16px;
}

.icon-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
}

.icon-button img {
    width: 24px;
    height: 24px;
}

.edit-button,
.delete-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
}

.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 16px;
}

.pagination-pages {
    display: flex;
    gap: 12px;
}

.pagination-page {
    width: 31px;
    height: 31px;
    background-color: var(--accent); /* Fundo do botão de paginação */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    color: var(--light-text); /* Texto do botão */
    display: flex;
    align-items: center;
    justify-content: center;
}

.pagination-page.active {
    background-color: var(--primary-btn-bg); /* Fundo do botão ativo */
    color: var(--primary-bg); /* Texto do botão ativo */
}

.pagination-link {
    background: none;
    border: none;
    color: var(--light-text); /* Texto do link */
    cursor: pointer;
    text-decoration: none;
    padding: 0;
    font-size: 12px;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0%;
}

.pagination-link:hover:not(:disabled) {
    text-decoration: underline;
}

.pagination-link:disabled {
    cursor: not-allowed;
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
    background-color: var(--delivered-bg); /* Fundo do status */
    color: var(--delivered-text); /* Texto do status */
}

.status-tag.process {
    background-color: var(--process-bg); /* Fundo do status */
    color: var(--process-text); /* Texto do status */
}

.status-tag.canceled {
    background-color: var(--canceled-bg); /* Fundo do status */
    color: var(--canceled-text); /* Texto do status */
}

.table {
    background-color: var(--primary-bg); /* Fundo da tabela */
    color: var(--table-text); /* Texto */
    border: 1px solid var(--accent); /* Borda */
}

.table-header {
    background-color: var(--neutral-bg); /* Fundo do cabeçalho */
    color: var(--table-text); /* Texto do cabeçalho */
}

.table-row:hover {
    background-color: var(--input-bg); /* Fundo da linha no hover */
}
</style>
