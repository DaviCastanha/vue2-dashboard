<template>
    <div class="login-container">
        <div class="login-form">
            <h1>Login</h1>
            <form>
                <div class="form-fields">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                </div>
                <a href="#" class="recover-password">Recover Password</a>
                <div class="form-buttons">
                    <button type="submit" class="apply-button">Sign In</button>
                    <button type="button" class="cancel-button" @click="cancel">Cancelar</button>
                </div>
                <a href="#" class="sign-up">I don't have an account</a>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    methods: {
        cancel() {
            this.$router.push('/products'); 
        },
    },
};
</script>

<style scoped>

.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
}


.login-form {
    background: #fff;
    padding: 32px;
    border-radius: 8px;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 16px; 
    box-sizing: border-box;
    text-align: center;
}

/* Título */
.login-form h1 {
    font-size: 24px;
    color: #888599;
    margin-bottom: 8px;
    font-family: 'Montserrat', sans-serif;
}

/* Inputs */
input {
    width: 100%;
    height: 43px;
    padding: 16px 24px;
    border: 1px solid #E1E5FE;
    font-size: 14px;
    color: #888599;
    background-color: #EEF1FF;
    box-sizing: border-box;
    border-radius: 4px;
}

input::placeholder {
    color: #888599;
}

.form-fields {
    display: flex;
    flex-direction: column;
    gap: 24px; 
}

.recover-password {
    font-size: 14px;
    color: #624DE3;
    text-decoration: underline;
    font-weight: 500;
    margin: 6px 0 12px 0;
    display: block;
    text-align: right;
}


.form-buttons {
    display: flex;
    gap: 16px; 
    justify-content: center;
    margin-bottom: 16px;
}

/* Botão Cancelar */
.cancel-button {
    width: 264px;
    height: 42px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid #D0D5DD;
    background-color: #FFFFFF;
    color: #888599;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Botão Sign In */
.apply-button {
    width: 264px;
    height: 42px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid #624DE3;
    background-color: #624DE3;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Texto de sign-up */
.sign-up {
    font-size: 14px;
    color: #624DE3;
    text-decoration: underline;
    font-weight: 500;
    display: block;
    text-align: center;
}
</style>