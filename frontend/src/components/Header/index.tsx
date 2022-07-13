import logo from '../../assets/img/Logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="nomeEmpresa-logo-container">
                <img src={logo} alt="Delicias em Familia" />
                <h1>Delícias em Família</h1>
                <p>Desenvolvido por

                    <a href="https://www.instagram.com/delicias.em.familia.brueedu/">@delicias.em.familia.brueedu.ig</a>
                </p>
            </div>
        </header>

    )
}

export default Header