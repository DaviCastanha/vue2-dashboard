<template>
    <nav class="sidebar">
        <div class="sidebar-sections">
            <!--  Dashboard -->
            <div class="section-item" @click="handleClick" >
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>Dashboard</span>
            </div>

            <!-- Seção Analytics -->
            <div class="section-title">ANALYTICS</div>
            <div class="section-item" @click="handleClick" >
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="6" y1="20" x2="6" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="18" y1="20" x2="18" y2="14"></line>
                </svg>
                <span>Performance</span>
            </div>
            <div class="section-item" @click="handleClick" >
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2v6"></path>
                    <path d="M5.2 10.2a7 7 0 0 1 13.6 0"></path>
                    <path d="M8.5 13.5a3 3 0 0 1 7 0"></path>
                    <path d="M12 22v-6"></path>
                    <path d="M12 16l-3 3"></path>
                    <path d="M12 16l3 3"></path>
                </svg>
                <span>Hotjar</span>
                <div class="badge-new">NEW</div>
            </div>
            <!-- Seção Support -->
            <div class="section-title">SUPPORT</div>
            <div class="section-item   ticket-section" @click="handleClick">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="6" y1="20" x2="6" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="18" y1="20" x2="18" y2="14"></line>
                </svg>
                <span>Tickets</span>
                <div class="badge">15</div>
            </div>
            <div class="section-item" @click="handleClick" >
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M5.5 21a7.5 7.5 0 0 1 13 0"></path>
                </svg>
                <span>Agents</span>
            </div>
            <div class="section-item" @click="handleClick" >
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M2 21a7 7 0 0 1 14 0"></path>
                    <circle cx="17" cy="10" r="3"></circle>
                    <path d="M17 21v-1a5 5 0 0 0-4-4.9"></path>
                </svg>
                <span>Customers</span>
            </div>
            <!-- Seção Shop -->
            <div class="section-title">SHOP</div>
            <div class="section-item" @click="handleClick" >
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h5l2 3h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>
                </svg>
                <span>Products</span>
            </div>
            <div class="section-item" @click="handleClick" >
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span>Orders</span>
            </div>
            <div class="section-item" @click="handleClick">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="17" x2="9" y2="12"></line>
                    <line x1="15" y1="17" x2="15" y2="10"></line>
                    <line x1="12" y1="17" x2="12" y2="14"></line>
                </svg>
                <span>Reports</span>
            </div>
        </div>

        <!-- Segundo container: Settings e Login -->
        <div class="sidebar-footer">
            <div class="footer-item" @click="handleClick">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                </svg>
                <span>Settings</span>
            </div>
            <div class="footer-item"  @click="redirectToLogin">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
                <span>Logout</span>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    methods: {
        handleClick(event) {
            const element = event.currentTarget;
            const sectionName = element.querySelector('span').textContent;
            window.alert(`Redirecionado para a rota ${sectionName}`);
            console.log(`Redirecionado para a rota ${sectionName}`);
        },
        redirectToLogin() {
            window.location.href = '/login';
        }
    }
};
</script>
  
<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - var(64px));
    width: 216px;
    min-width: 216px;
    padding: 24px;
    background-color: #f9f9f9;
}

.sidebar-sections {
    display: flex;
    flex-direction: column;
}

.section-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    gap: 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #18181B;
    margin-bottom: 23px;
}

.section-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #A1A1AA;
    margin-bottom: 29px;
}

.sidebar-footer {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    margin-top: auto;
}

.footer-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #18181B;
    cursor: pointer;
}
.footer-item span, .section-item span {
    transition: color 0.3s ease, transform 0.3s ease; /* Animação suave para cor e transformação */
}

.footer-item:hover span, .section-item:hover span {
    color: #4F46E5; /* Altere para a cor desejada no hover */
    transform: scale(1.1); /* Aumenta levemente o texto no hover */
}

.footer-item:hover, .section-item:hover {
    cursor: pointer; /* Garante que o cursor seja uma mãozinha no hover */
}

.icon {
    flex-shrink: 0;
}

.section-item {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Alinha os itens à esquerda */
    position: relative;
    gap: 12px; /* Espaçamento entre o ícone e o texto */
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #18181B;
    margin-bottom: 23px;
}

.section-item .badge {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    background-color: #624DE3;
    color: #FFFFFF;
    font-size: 11px;
    border-radius: 50%;
    margin-left: auto;
    /* Empurra a badge para o final */
}
.section-item .badge-new {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 18px;
    background-color: #EEF1FF;
    color: #4F46E5;
    font-size: 10px;
    border: 1px solid #4F46E5;
    border-radius: 35.71px;
    margin-left: auto; /* Empurra a badge para o final */
}
</style>