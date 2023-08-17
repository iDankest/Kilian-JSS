window.addEventListener("load", function(){
    document.querySelector('.acc1').addEventListener('click', function(){
        let darkmode = document.querySelector('body')
        darkmode.classList.toggle("darkmode")
    });
    let contenido = document.querySelector("#contenido");
    contenido.innerHTML = `
    <h1>¡Bienvenidos a CursosExcelencia!</h1>
    <p>En CursosExcelencia, nos enorgullece ser tu puerta de entrada al conocimiento y al crecimiento personal. Somos una plataforma educativa dedicada a brindarte cursos de alta calidad que te permitirán desarrollar nuevas habilidades, expandir tus horizontes y alcanzar tus metas
    Nuestra misión es proporcionarte acceso a un mundo de aprendizaje en línea, donde podrás explorar una amplia gama de temas emocionantes y relevantes. Ya sea que estés buscando mejorar tus habilidades profesionales, profundizar en tus pasiones o simplemente ampliar tu perspectiva, tenemos el curso perfecto para ti.</p>
    <h3>En CursosExcelencia, nos comprometemos a ofrecerte:</h3>
    <ol>
        <li>Excelencia Académica: Nuestros cursos son desarrollados por expertos en cada campo, asegurando que recibas contenidos actualizados y fundamentados en las últimas investigaciones y mejores prácticas</li>
        <li>Variedad de Contenidos: Desde cursos técnicos y profesionales hasta temas creativos y de desarrollo personal, nuestra amplia gama de cursos te brinda la libertad de elegir según tus intereses y objetivos.</li>
        <li>Flexibilidad: Reconocemos que tu tiempo es valioso. Por eso, nuestros cursos en línea te permiten aprender a tu propio ritmo, adaptándose a tu horario y estilo de vida.</li>
        <li>Interacción y Colaboración: Aunque estés aprendiendo en línea, no estás solo. Nuestra plataforma fomenta la interacción con instructores y compañeros estudiantes, lo que te brinda oportunidades para colaborar, hacer preguntas y aprender juntos.</li>
        <li>Experiencia Intuitiva: Navegar y participar en nuestros cursos es sencillo y accesible, incluso si eres nuevo en el aprendizaje en línea. Estamos aquí para apoyarte en cada paso del camino.</li>
    </ol>
    <p>Nos enorgullecemos de ser un catalizador para tu crecimiento personal y profesional. Nuestro compromiso es proporcionarte las herramientas y el conocimiento que necesitas para alcanzar tus metas y desbloquear todo tu potencial. Únete a nosotros en este emocionante viaje de aprendizaje y descubrimiento en CursosExcelencia.</p>

    <h3>¡Tu éxito comienza aquí!

    Equipo CursosExcelencia</h3>
    `
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, números, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 dígitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 números.
    }

    const root = {
        user: 'Admin',
        pass: '123456'
    }

    document.querySelector('#acc').addEventListener('click', function(){
        contenido.innerHTML = `
        <div class="contenido_form">
    <h2>Login</h2>
    <form id="form_acceder">
        <label for="user">
            Usuario: <input type="text" id="user" name="user">
        </label>
        <label for="pass">
            Contraseña: <input type="password" id="pass" name="pass">
        </label>
        <input id="enviar" type="submit" value="Enviar">
    </form>
    <p id="verificar"></p>
    </div>
        `
    })
        var user, pass;
        user = document.querySelector('[name=user]')
        pass = document.querySelector('[name=pass]')
        valid = document.querySelector("#verificar")
    document.querySelector('.contenido_form').addEventListener('submit', function(e){
        e = preventDefault();
        let entrar = false;
        let aviso = ""
      /*   if (user === "" || pass === "") {
            alert("campos vacíos")
        }else if (user !== root.user || pass !== root.pass){
            alert('usuario o contraseña no validos')
        }else{
            alert('bienvenido')
        } */
        if(!expresiones.usuario.test(user.value)){
            aviso +=`El nombre no es valido <br>`
            entrar = true
        }if(entrar){
            valid.innerHTML = aviso
        }
    })
});