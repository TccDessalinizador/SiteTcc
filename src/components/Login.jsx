import "../index.css"

export function Login() {
    return (
        <div>
            <img src="../assets/logo tcc-black 1.png" alt="" />

            <form action="">
                <label class>Login</label>
                <input type="email" placeholder="Email ou telefone" required />

                <label>Senha</label>
                <input type="email" placeholder="Insira a senha" required />

                {/* Falta o toggle aqui */}
                <p>Lembre-me</p>

                <button>Login</button>

                <div id="ancoras">
                    <a href="#">Esqueceu a senha?</a>

                    <p>Não tem uma conta? <a href="#">Registre-se</a></p>
                </div>
                
            </form>
        </div>
    )
}