<template>
    <nav class="sidebar">
        <div class="sidebar-sections">
            <!--  Dashboard -->
            <div class="section-item">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>Dashboard</span>
            </div>

            <!-- Seção Analytics -->
            <div class="section-title">ANALYTICS</div>
            <div class="section-item">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="6" y1="20" x2="6" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="18" y1="20" x2="18" y2="14"></line>
                </svg>
                <span>Performance</span>
            </div>
            <div class="section-item">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>Hotjar</span>
            </div>
            <!-- Seção Support -->
            <div class="section-title">ANALYTICS</div>
            <div class="section-item">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 3v18h18"></path>
                    <path d="M9 9l3 3-3 3"></path>
                </svg>
                <span>Performance</span>
            </div>
            <div class="section-item">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="6" y1="20" x2="6" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="18" y1="20" x2="18" y2="14"></line>
                </svg>
                <span>Hotjar</span>
            </div>
            <!-- Seção Shop -->
            <div class="section-title">ANALYTICS</div>
            <div class="section-item">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 3v18h18"></path>
                    <path d="M9 9l3 3-3 3"></path>
                </svg>
                <span>Performance</span>
            </div>
            <div class="section-item">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>Hotjar</span>
            </div>
        </div>

        <!-- Segundo container: Settings e Login -->
        <div class="sidebar-footer">
            <div class="footer-item">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                </svg>
                <span>Settings</span>
            </div>
            <div class="footer-item">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
                <span>Login</span>
            </div>
        </div>
    </nav>
</template>
  
<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - var(64px));
    width: 216px;
    padding: 24px;
    background-color: #f9f9f9;
}

.sidebar-sections {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.section-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #18181B;
}

.section-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #A1A1AA;
    margin-bottom: 8px;
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
}

.icon {
    flex-shrink: 0;
}
</style>