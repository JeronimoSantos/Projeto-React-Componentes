
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="https://www.instagram.com/jeronimo_santos_oficial/" target="_blank">
                    <img src="/imagens/instagram.png" alt="redesocial instagram" title='Instagram' />
                </a>
            </li>
            <li>
                <a href="https://github.com/JeronimoSantos" target="_blank">
                    <img src="/imagens/github.png" alt="repositorio github"  title='GitHub'/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/jeronimo-s-rodrigues-dev/" target="_blank">
                    <img src="/imagens/linkedin.png" alt="redesocial proficional linkedin" title='Linkedin' />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imagens/logo.png" alt="logo do site" />
       </section>
       <section>
        <p>
            Desenvolvido por Jerônimo S.Rodrigues.
        </p>
       </section>
    </footer>)
}

export default Rodape