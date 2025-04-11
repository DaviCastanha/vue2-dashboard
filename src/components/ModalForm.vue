<template>
    <div class="overlay">
        <form @submit.prevent="save">
            <h3>{{ item && item.id ? 'Edit' : 'Add' }} Product</h3>
            <div>
                <label>Product:<input v-model="form.product" /></label>
            </div>
            <div>
                <label>Customer:<input v-model="form.customer" /></label>
            </div>
            <div>
                <label>Date:<input v-model="form.date" /></label>
            </div>
            <div>
                <label>Amount:<input type="number" v-model.number="form.amount" /></label>
            </div>
            <div>
                <label>Mode:<input v-model="form.paymentMode" /></label>
            </div>
            <div>
                <label>Status:<input v-model="form.status" /></label>
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
                amount: 0,
                paymentMode: '',
                status: '',
            };
    },
    methods: {
        save() {
            const req = this.form.id
                ? axios.put(`http://localhost:3000/products/${this.form.id}`, this.form)
                : axios.post('http://localhost:3000/products', this.form);
            req.then(() => {
                this.$emit('saved');
                this.$emit('close');
            });
        },
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
