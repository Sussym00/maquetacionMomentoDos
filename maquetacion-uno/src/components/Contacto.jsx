export default function Contacto() {
    return (
        <section>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Servicios</li>
                    <li>Acerca</li>
                    <li>Cerrar Sesion</li>
                </ul>
            </nav>
            <h2>Contactanos</h2>
            <p>
            ¿Tienes preguntas? Escribenos y con gusto te atenderemos.
            </p>
            <input type="text" placeholder="Tu nombre" />
            <input type="email" placeholder="Tu correo" />
            <button>Enviar Mensaje</button>
        </section>

    );
}