<template>
    <header class="topbar">
        <!-- Logo/Name -->
        <div class="logo-container">
            <img src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo.svg" alt="Logo" />
        </div>
        <!-- Search -->
        <div class="search-container">
            <div class="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099zm-5.442.656a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
                </svg>
            </div>
            <input v-model="search" placeholder="Type to search" @input="updateSearch" />
        </div>
        <!-- Actions -->
        <div class="actions-container">
            <!-- Dark/light -->
            <div class="icon darklight">
                <label class="switch">
                    <input type="checkbox" @change="toggleDarkMode" :checked="isDarkMode" />
                    <span class="slider"></span>
                </label>
            </div>
            <!-- Messages -->
            <div class="icon envelope">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="18" height="14" rx="2" ry="2"></rect>
                    <path d="M22 6l-10 7L2 6"></path>
                </svg>
                <div class="notification-badge">2</div>
            </div>
            <!-- Notification -->
            <div class="icon bell">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            </div>
            <!-- Profile Pic -->
            <div class="profile-pic">
                <img src="/assets/profilepic.png" alt="Profile Picture" />
            </div>
        </div>
    </header>
</template>
  
<script>
import { EventBus } from '@/eventBus';

export default {
    data: () => ({
        search: '',
        isDarkMode: false, // Estado para controlar o tema
    }),
    methods: {
        updateSearch() {
            EventBus.$emit('search-updated', this.search); // Emite o evento com o valor do campo de busca
        },
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode; // Alterna o estado do tema
            const html = document.documentElement; // Seleciona o elemento <html>
            if (this.isDarkMode) {
                html.classList.add('dark-mode'); // Adiciona a classe para o tema escuro
            } else {
                html.classList.remove('dark-mode'); // Remove a classe para o tema claro
            }
        },
    },
};
</script>
  
<style scoped>
.topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background-color: var(--primary-bg); /* Fundo da topbar */
    border-bottom: 1px solid var(--accent); /* Linha inferior */
    color: var(--table-text); /* Texto */
}

/* Primeira Divisão: Logo */
.logo-container img {
    height: auto;
    margin: 16px 0 15px 24px;
}
.dark-mode .logo-container img {
    filter: brightness(0) invert(1); /* Aplica o filtro no dark mode */
}
/* Segunda Divisão: Input de Busca */
.search-container {
    display: flex;
    align-items: center;
    position: relative;
    max-width: 900px;
    flex: 1;
}

.search-container input {
    width: 100%;
    max-width: 900px;
    padding: 10px 10px 10px 40px;
    border: 1px solid var(--input-bg); /* Borda */
    background-color: var(--neutral-bg); /* Fundo do input */
    color: var(--input-text); /* Texto */
    border-radius: 10px;
}

.search-icon {
    position: absolute;
    left: 16px;
    top: 11px;
    color: var(--input-text); /* Cor do ícone de busca */
}

/* Terceira Divisão: Ícones e Foto de Perfil */
.actions-container {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-right: 60px;
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 28px;
    cursor: pointer;
    color: #3F3F46;
}

.envelope {
    position: relative;
    color: var(--primary-text);
}
.bell{
    color: var(--primary-text);
}

.notification-badge {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #4F46E5;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile-pic img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
}

/* Estilo do Switch */
.switch {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 20px;
    color: #3F3F46;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--accent); /* Fundo do slider */
    transition: 0.4s;
    border-radius: 20px;
}

.slider:before {
    position: absolute;
    content: '';
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: #A1A1AA; /* Botão do slider */
    transition: 0.4s;
    border-radius: 50%;
}

input:checked + .slider {
    background-color: var(--primary-btn-bg); /* Cor do slider ativado */
}

input:checked + .slider:before {
    transform: translateX(14px);
}
</style>