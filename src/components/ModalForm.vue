<template>
    <div class="overlay">
        <form @submit.prevent="save">
            <div>
                <label>Status:<input v-model="form.status" placeholder="Delivered" /></label>
            </div>
            <div>
                <label>Product:<input v-model="form.product" placeholder="Hat" /></label>
            </div>
            <div>
                <label>Customer:<input v-model="form.customer" placeholder="Matt Dickerson" /></label>
            </div>
            <div>
                <label>Date:<input v-mask="'##/##/####'" v-model="form.date" placeholder="DD/MM/YYYY" /></label>
            </div>
            <div>
                <label>Amount:
                    <input type="number" v-model.number="form.amount" placeholder="$4.95" step="0.01" min="0" /></label>
            </div>
            <div>
                <label>Mode:<input v-model="form.paymentMode" placeholder="Transfer Bank" /></label>
            </div>
            <button type="button" @click="$emit('close')">Cancel</button>
            <button type="submit">Apply</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props: ['item'],
    data: () => ({ form: {} }),
    created() {
        this.form = this.item
            ? { ...this.item }
            : {
                product: '',
                customer: '',
                date: '',
                amount: null,
                paymentMode: '',
                status: '',
            };
    },
    methods: {
        save() {
            // se for criação, atribui trackingId
            if (!this.form.id) {
                this.form.trackingId = `#${Math.floor(10000 + Math.random() * 90000)}`;
            }
            if (!this.isValidDate(this.form.date)) {
                alert('Data inválida. Use o formato DD/MM/AAAA.');
                return;
            }


            const req = this.form.id
                ? axios.put(`http://localhost:3000/products/${this.form.id}`, this.form)
                : axios.post('http://localhost:3000/products', this.form);

            req.then(() => {
                this.$emit('saved');
                this.$emit('close');
            });
        },
        isValidDate(dateStr) {
            const [day, month, year] = dateStr.split('/').map(Number);
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
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
}

form {
    background: #fff;
    padding: 16px;
    border-radius: 4px;
    width: 300px;
}

form div {
    margin-bottom: 8px;
}

input {
    width: 100%;
    padding: 4px;
}

button {
    margin-right: 8px;
    padding: 6px 12px;
}
</style>
