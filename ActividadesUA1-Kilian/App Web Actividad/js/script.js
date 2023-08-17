$(document).ready(function () {
    
    document.querySelector('.acc1').addEventListener('click', function(){
        let darkmode = document.querySelector('body')
        darkmode.classList.toggle("darkmode")
    })
    $('#contenido').html(`
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

    `);
    $('#acc').on('click', function () { 
   
    $('#contenido').html(`
    <div class="contenido_form">
    <h2>Login</h2>
    <form id="form_acceder">
        <label for="user">
            Usuario: <input type="text" id="user" name="user">
        </label>
        <label for="pass">
            Contraseña: <input type="password" id="pass" name="pass">
        </label>
        <input id='enviar' type="submit" value="Enviar">
    </form>
    <p id="verificar"></p>
</div>`);
$("#form_acceder").submit(function (e) { 
    e.preventDefault();

    var user = $("#user").val()
    var pass = $("#pass").val()

   
    if (user === "" || pass === "") {
        $('#verificar').html("Campos vacíos");
        }else if (user !== root.user || pass !== root.pass) {
        $('#verificar').html("Usuario no encontrado");
        }else{
        $('#verificar').html("");
        $("#usuario").html(`<p>Usuario: ${user}</p>`)
        $("#user_info").html(`<p>Info: ${root.info}</p>`)
        $("#profeinfo").html(`<p>Profesor: ${root.profeinfo}</p>`)
        $("#logro").html(`<p>Logros: ${root.logros}</p>`)
        $("#confi").html(`<p>Accesibilidad</p>`)
        }
        
});
        $('footer').addClass('active');
    
    
    
    });
    $('#registro').on('click', function(){
        $('#contenido').html(`
        <div class="contenido_form2">
        <h2>Registro</h2>
        <form action="https://reqres.in/api/users" method="POST" id="formulario">
            <label for="codigo">
                Código:<input type="number" id="codigo" name="codigo">
            </label>
            <label for="nombre">
                Nombre: <input type="text" id="nombre" name="nombre">
            </label>
            <label for="Apellidos">
                Apellidos: <input type="text" id="Apellidos" name="apellidos">
            </label>
            <label for="Correo">
               Correo: <input type="email" id="Correo" name="correo">
            </label>
            <label for="Edad">
                Edad: <input type="number" id="Edad" name="edad">
            </label>
            <label for="Foto">
                foto: <input type="file" id="Foto" name="foto"> 
            </label>
            <input type="submit" value="Enviar">
        </form>
    </div>
        `);
    })
    $('#curso').on('click', function () {
        $('#contenido').html(`
        <h2>CURSOS</h2>
        <div class="grip_contenedor">
        <div>
            <img src="media/1687300553_c_html.png" alt="" class='imagen'>
        </div>
        <div>
            <img src="media/css.png" alt="" class='imagen'>
        </div>
        <div>
            <img src="media/Course-Image-1.png" alt="" class='imagen'>
        </div>
        <div>
            <img class='imagen' src="media/CURSO-JAVASCRIPT-GRATIS-FACIALIX.jpg" alt="">
        </div>
    </div>
        `);
        
    });
    $('#info').on('click', function () {
        $('#contenido').html(`
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
    
        `);
    });
        $('#contacto').on('click', function () {
            $('.contendido_contacto').toggleClass('active');
        });
        $('.cerrar').on('click', function () {
            $('.contendido_contacto').toggleClass('active');
        });

    $('.comotal').accordion({
        collapsible: true,
        active: false,
        icons:{header:"ui-icon-caret-1-s", activeHeader:"ui-icon-caret-1-n"},
        animate: 500,
        // event: "mouseover"
    })
    // $('.comotal').on('mouseleave', function() {
    //     $('.comotal').accordion("option", "active", false);
    // })
    
    const root = {
        user: 'Admin',
        pass: '123456',
        info: 'Usuario administrador',
        profeinfo: 'Root',
        logros: 'El Poder'
    }

});