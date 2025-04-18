<template>
    <div class="overlay">
        <form @submit.prevent="save" class="modal">
            <div class="form-fields">
                <div class="form-group">
                    <label for="status">Status:</label>
                    <select id="status" v-model="form.status">
                        <option value="Delivered">Delivered</option>
                        <option value="Canceled">Canceled</option>
                        <option value="Process">Process</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="product">Product:</label>
                    <input id="product" v-model="form.product" placeholder="Hat" />
                </div>
                <div class="form-group">
                    <label for="customer">Customer:</label>
                    <input id="customer" v-model="form.customer" placeholder="Matt Dickerson" />
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="date">Date:</label>
                        <input id="date" v-model="form.date" type="date" />
                    </div>
                    <div class="form-group">
                        <label for="amount">Amount:</label>
                        <input id="amount" type="number" v-model.number="form.amount" placeholder="$4.95" step="0.01" min="0" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="paymentMode">Mode:</label>
                    <input id="paymentMode" v-model="form.paymentMode" placeholder="Transfer Bank" />
                </div>
            </div>
            <div class="form-buttons">
                <button type="button" class="cancel-button" @click="$emit('close')">Cancel</button>
                <button type="submit" class="apply-button">Apply</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ['item'],
    data: () => ({
        form: {}
    }),
    created() {
        this.form = this.item
            ? { ...this.item }
            : {
                product: '',
                customer: '',
                date: '',
                amount: null,
                paymentMode: '',
                status: 'Delivered',
            };
    },
    methods: {
        save() {
            if (!this.form.id) {
                this.form.trackingId = `#${Math.floor(10000 + Math.random() * 90000)}`;
            }
            if (!this.isValidDate(this.form.date)) {
                alert('Data inválida. Use o formato DD/MM/AAAA.');
                return;
            }

            // Adiciona um timestamp para ordenar no servidor ou cliente
            this.form.createdAt = new Date().toISOString();

            const req = this.form.id
                ? axios.put(`http://localhost:3000/products/${this.form.id}`, this.form)
                : axios.post('http://localhost:3000/products', this.form);

            req.then(() => {
                this.$emit('saved');
                this.$emit('close');
            });
        },
        isValidDate(dateStr) {
            const [year, month, day] = dateStr.split('-').map(Number);
            const date = new Date(year, month - 1, day);
            return (
                date &&
                date.getFullYear() === year &&
                date.getMonth() === month - 1 &&
                date.getDate() === day
            );
        }
    },
};
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3); /* Fundo translúcido */
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    background: var(--primary-bg);
    padding: 32px;
    border-radius: 8px;
    width: 615px;
    height: 588px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    box-sizing: border-box;
    color: var(--table-text);
    border: 1px solid var(--accent);
}

.form-fields {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.form-row {
    display: flex;
    gap: 16px;
}

.form-row > div {
    flex: 1;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

select#status {
    appearance: none;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%23888599" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>');
    background-repeat: no-repeat;
    background-position: right 24px center;
    background-size: 16px;
    padding-top: 12px;
}

input, select {
    width: auto;
    height: 43px;
    padding: 16px 24px;
    border: 1px solid var(--input-bg); /* Borda do input */
    font-size: 14px;
    color: var(--input-text); /* Texto do input */
    background-color: var(--neutral-bg); /* Fundo do input */
    box-sizing: border-box;
    border-radius: 8px;
}

input::placeholder {
    color: var(--input-text); /* Placeholder */
}

label {
    color: var(--input-text); /* Texto do label */
    font-size: 14px;
    font-weight: 500;
}

.form-buttons {
    display: flex;
    gap: 24px;
    justify-content: center;
}

button {
    width: 264px;
    height: 56px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

button.cancel-button {
    background-color: var(--primary-bg); /* Fundo do botão de cancelar */
    border: 1px solid var(--light-btn-border); /* Borda */
    color: var(--input-text); /* Texto */
}

button.apply-button {
    background-color: var(--primary-btn-bg); /* Fundo do botão de aplicar */
    border: 1px solid var(--primary-btn-bg); /* Borda */
    color: var(--primary-bg); /* Texto */
}
</style>