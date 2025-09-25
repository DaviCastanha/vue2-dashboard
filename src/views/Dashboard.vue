<template>
    <div class="dashboard-texts">
        <h1>&#9888; Por favor, leia!</h1>
        <p>O endpoint trabalhado no projeto foi o <a href="https://vue2-dashboard.onrender.com/products" target="_blank">'/products'</a>, que foi hospedado no site <b>Render</b>.</p>
        <p>Para visualizar a tabela de produtos e ser capaz de interagir, 
            é necessário <strong>aguardar até 50 segundos</strong>
            para que o Render hospede o backend devidamente.
        </p>

        <p></p>


    </div> 
</template>

<style scoped>
    .dashboard-texts {
        display: flex;
        flex-direction: column;
        align-items: center ;
    }
    h1 {
        color: rgb(159, 0, 0);
        text-align: center;
        margin-bottom: 20px;
    }
    p {
        color: #3F3F46;
        margin-left: 30px;
        margin-bottom: 10px;
        max-width: 80%;
        font-size: 20px;
    }
</style>