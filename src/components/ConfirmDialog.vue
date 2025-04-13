<template>
    <div class="overlay">
        <div class="modalframe">
            <!-- Dialog -->
            <div class="dialog">
                <!-- Icone -->
                <div class="icon-wrapper">
                    <div class="outer-circle">
                        <div class="inner-circle">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-5a1 1 0 011 1v5a1 1 0 11-2 0V8a1 1 0 011-1zm0 8a1 1 0 100 2h.01a1 1 0 100-2H12z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Texto -->
                <div class="text-content">
                    <p class="title">Delete Order</p>
                    <p class="subtitle">
                        Are you sure you want to delete this order?
                    </p>
                    <span class="description">This action cannot be undone.</span>
                </div>
            </div>

            <!-- Botões -->
            <div class="button-group">
                <button @click="$emit('cancel')" class="cancel-button">Cancel</button>
                <button @click="$emit('confirm')" class="delete-button">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'ConfirmDialog',
});
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

.modalframe {
    width: 400px ;
    background: #fff;
    border-radius: 12px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px; /* Espaço entre o dialog e os botões */
}

.dialog {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    width: 100%;
}

.icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.outer-circle {
    width: 48px;
    height: 48px;
    background-color: #fef3f2;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inner-circle {
    width: 32px;
    height: 32px;
    background-color: #fee4e2;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    width: 24px;
    height: 24px;
    color: #d32f2f;
}
.icon path {
    fill: currentColor;
}

.text-content {
    text-align: left;
}

.title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #101828;
    margin-bottom: 16px;
}

.subtitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: #667085;
}

.description {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: #667085;
}

.button-group {
    display: flex;
    gap: 24px;
    
}

button {
    width: 156px;
    height: auto;
    gap: 8px;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid; 
    border-color: #D0D5DD; 
    padding: 16px 24px 16px 24px;
    font-family: 'Montserrat', sans-serif;


}

.cancel-button {
    background: #ffffff;
    color: #344054;
    font-size: 16px;
    font-weight: 500;
}

.delete-button {
    background: #d32f2f;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
}
</style>