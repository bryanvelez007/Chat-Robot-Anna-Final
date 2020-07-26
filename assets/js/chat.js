onload = function() {
    if ('speechSynthesis' in window) with(speechSynthesis) {
        let mic = document.getElementById("mic");
        let chatareamain = document.querySelector('.chatarea-main');
        let chatareaouter = document.querySelector('.chatarea-outer');

        /* $(".chat_body").animate({
             scrollTop: $('.chat_body')[0].scrollHeight
         }, 1000);*/

        let empleados = {
            "usuarios": {},
            "imagenes": ""
        };

        let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        let intro = ["Un gusto conocerte, soy Violette, estoy para servirte.", "¿Que tal?, Yo soy Violette, espero tus órdenes.", "Hola, mí nombre es Violette, ¿que deseas hacer hoy?", "Buen día, soy un robot llamado Violette programado para cumplir tus necesidades laborales."];
        let help = ["¿Cómo puedo ayudarte?", "¿Que deseas hacer el día de hoy?"];
        let greetings = ["Estoy felíz de poderte ayudar hoy, en que te puedo servir.", "Excelente, espero que tu también lo estés.", "Estoy muy bien, gracias por preguntar, ¿En que te puedo ayudar el día de hoy."];
        let hobbies = ["Yo amo ayudar a los demás", "Me gusta hacer amigos como tu.", "Me gusta cocinar en mis tiempos libres."];
        let thank = ["Es todo un placer.", "Me encanta ayudar.", "Soy felíz ayudante.", "Ni lo menciones."];
        let closing = ['Bien, cuidate.', 'Que te vaya muy bien.', 'Chao chao, nos vemos luego.', "Acá estoy por si necesitas algo más."];
        let plantilla = ['Acá tienes.', 'Por supuesto.', 'Claro que si.'];
        let hacer = ['Esperando a cumplir tus ordenes.', 'Aprendiendo más para poderte ser más útil.'];
        let funciones = ['Mí función principal es darte plantillas.', 'Solo tengo la funcion de suministrate plantillas.'];
        let nombre = ['Me llamo Violette, estoy para servirte.', 'Violette para servirte.'];
        let fundadores = ["Fui creada el 19 de julio del 2020 por Bryan Vélez y Andrés Gutiérrez.", "Mis creadores son Bryan Vélez y Andrés Gutiérrez."]

        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth() + 1;
        var yyyy = hoy.getFullYear();
        //dia de hoy
        //console.log(dias[hoy.getDay()] + " " + dd + " de " + meses[mm - 1] + " del " + yyyy);

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        //showusermsg
        //showchatbotmsg

        //chatarea-inner user
        //chatarea-inner chatbot
        function showusermsg(usermsg) {
            let output = '';
            output += `<div class="chatarea-inner user">${usermsg}</div>`;
            chatareaouter.innerHTML += output;

            return chatareaouter;

        }

        function showchatbotmsg(chatbotmsg, image, description) {
            let output = '';
            output += `<div class="chatarea-inner chatbot">${chatbotmsg}${image}${description}</div>`;
            chatareaouter.innerHTML += output;

            return chatareaouter;

        }
        //chatbotvoice("ana");
        $("i.zmdi.zmdi-mail-send").click(function() {
            var mensaje = $("#chatSend").val()
            showusermsg(mensaje);
            chatbotvoice(mensaje.toLowerCase());
            $("#chatSend").val("");
        });

        $("#chatSend").on('keyup', function(e) {
            var keycode = e.keyCode || e.which;
            if (keycode == 13) {
                var mensaje = $("#chatSend").val()
                showusermsg(mensaje);
                chatbotvoice(mensaje.toLowerCase());
                $("#chatSend").val("");
            }
        });

        const voices = window.speechSynthesis.getVoices();
        const speech = new SpeechSynthesisUtterance();
        window.speechSynthesis.onvoiceschanged = function() {

            console.log(window.speechSynthesis.getVoices());
        };
        speech.lang = "es-US";

        function chatbotvoice(message) {

            if (message.includes('hola')) {
                let finalresult = intro[Math.floor(Math.random() * intro.length)];
                llamarVoz(speech, speech.text = finalresult);
            } else if (message.includes('novia')) {
                speech.text = "Me gustas…. pero solo como amigo.";
                llamarVoz(speech, speech.text);
            } else if (message.includes('estuvo') && message.includes('dia')) {
                speech.text = "Super duper";
                llamarVoz(speech, speech.text);
            } else if (message.includes('casada')) {
                speech.text = "Estoy felizmente soltera.";
                llamarVoz(speech, speech.text);
            } else if (message.includes('soy tu padre')) {
                speech.text = "Noooooooooooooooo. Eso no es cierto. Eso es imposible.";
                llamarVoz(speech, speech.text);
            } else if (message.includes('objetivo')) {
                speech.text = "Buscar el Santo Grial.";
                llamarVoz(speech, speech.text);
            } else if (message.includes('hermosa')) {
                speech.text = "Yo no me veo nada mal, ¿tú qué opinas?";
                llamarVoz(speech, speech.text);
            } else if (message.includes('espejo') | message.includes('espejito')) {
                speech.text = "¿Blancanieves?,¿eres tu ?";
                llamarVoz(speech, speech.text);
            } else if (message.includes('años')) {
                speech.text = "Creo, que eso ahora no es tan importante!";
                llamarVoz(speech, speech.text);
            } else if (message.includes('enojate')) {
                speech.text = "Déjame ver si puedo enojarme....... RAYOS ,Creo que no puedo hacerlo ";
                llamarVoz(speech, speech.text);
            } else if (message.includes('Morse')) {
                speech.text = "Da-dit, da-da, dit, dit, dit. Eso significa que sí.";
                llamarVoz(speech, speech.text);
            } else if (message.includes('numero') | message.includes('número') && message.includes('contar')) {
                speech.text = "No lo sé. Lo intentaría, pero estarías muy aburrido para cuando termine";
                llamarVoz(speech, speech.text);
            } else if (message.includes('papaterra')) {
                $.ajax({
                    type: "GET",
                    url: "https://raw.githubusercontent.com/andrespro00/ApiChatBot/master/api",
                    success: function(response) {
                        imagenDescripcion(JSON.parse(response).Personas.Ana.imagen, JSON.parse(response).Personas.Ana.Descripcion, plantilla, message);
                    }
                });

            } else if (message.includes('carlos')) {
                $.ajax({
                    type: "GET",
                    url: "https://raw.githubusercontent.com/andrespro00/ApiChatBot/master/api",
                    success: function(response) {
                        imagenDescripcion(JSON.parse(response).Personas.Carlos.imagen, JSON.parse(response).Personas.Carlos.Descripcion, plantilla, message);
                    }
                });
            } else if (message.includes('hoy') || message.includes('actual')) {
                let finalresult = "Hoy es " + dias[hoy.getDay()] + " " + dd + " de " + meses[mm - 1] + " del " + yyyy;
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if (message.includes('mañana')) {
                var today = new Date();
                var miliseconds = 24 * 60 * 60 * 1000;
                var tomorrow = new Date(today.getTime() + miliseconds);
                let finalresult = "Mañana será " + dias[tomorrow.getDay()] + " " + tomorrow.getDate() + " de " + meses[tomorrow.getMonth()] + " del " + tomorrow.getFullYear();
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if (message.includes('ayer')) {
                var today = new Date();
                var miliseconds = 24 * 60 * 60 * 1000;
                var yesterday = new Date(today.getTime() - miliseconds);
                let finalresult = "Ayer fue " + dias[yesterday.getDay()] + " " + yesterday.getDate() + " de " + meses[yesterday.getMonth()] + " del " + yesterday.getFullYear();
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if (message.includes('creador') || message.includes('creadores') || message.includes('dueños') || message.includes('fundador')) {
                let finalresult = fundadores[Math.floor(Math.random() * fundadores.length)];
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if (message.includes('funcion')) {
                let finalresult = funciones[Math.floor(Math.random() * funciones.length)];
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if (message.includes('nombre')) {
                let finalresult = nombre[Math.floor(Math.random() * nombre.length)];
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if (message.includes('haces')) {
                let finalresult = hacer[Math.floor(Math.random() * hacer.length)];
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if (message.includes("eres") || message.includes("que es")) {
                let finalresult = intro[Math.floor(Math.random() * intro.length)];
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if (message.includes('Bien') || /bien/gi.test(message.includes('estes bien')) || /excelente/gi.test(message.includes("estes excelente"))) {
                let finalresult = help[Math.floor(Math.random() * help.length)];
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if (message.includes('Cómo está') || /esta/gi.test(message.includes('como estas'))) {
                let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if (message.includes('ti') || /ti/gi.test(message.includes("sobre ti")) || /algo/gi.test(message.includes("algo sobre"))) {
                let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if (message.includes('gracias') || /gracias/gi.test(message.includes("gracias"))) {
                let finalresult = thank[Math.floor(Math.random() * thank.length)];
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if (message.includes('chao') || /luego/gi.test(message.includes("hasta luego")) || /bye/gi.test(message.includes("Bye"))) {
                let finalresult = closing[Math.floor(Math.random() * closing.length)];
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if (message.includes('ayuda') || /ayudar/gi.test(message.includes('necesito ayuda'))) {
                let finalresult = help[Math.floor(Math.random() * help.length)];
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if ((message.includes('plantilla') && message.includes("myworksday"))) {
                let finalresult = plantilla[Math.floor(Math.random() * plantilla.length)];
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if ((message.includes('plantilla') && message.includes("workable"))) {
                let finalresult = plantilla[Math.floor(Math.random() * plantilla.length)];
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            }
            /*else if (!message.includes("papaterra") || !message.includes("carlos ")) {
                console.log("ENTRO DIFERENTE PAPATERRA");
                window.speechSynthesis.speak(speech);
                chatareamain.appendChild(showchatbotmsg(speech.text, "", ""));
                scrollDiv();
            }*/
            else {
                speech.text = "Oh! creo que aun no eh aprendido lo suficiente para responderte :\( ";
                window.speechSynthesis.speak(speech);
                chatareamain.appendChild(showchatbotmsg(speech.text, "", ""));
                scrollDiv();
            }

        }

        function llamarVoz(spech, textoSpeech) {
            window.speechSynthesis.speak(spech);
            chatareamain.appendChild(showchatbotmsg(textoSpeech, "", ""));
            scrollDiv();

        }

        function imagenDescripcion(UrlImagen, Descripcion, template, mensaje) {
            console.log("ENTRO METODO IMAGENDESCRIPCION");
            image = `<br><img src="${UrlImagen}" alt="" style="width: 130px;height: 100px;border-radius: 20px;"<br>`;
            description = `<span id="descspan" style="text-align: justify;">"${Descripcion}"</span><br>`;
            let finalresult = template[Math.floor(Math.random() * template.length)];
            speech.text = finalresult;
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text, image, description));
            speech.text = ` la descripción de ${mensaje} es: ` + Descripcion;
            window.speechSynthesis.speak(speech);
            scrollDiv();
        }

        recognition.onresult = function(e) {
            let resultIndex = e.resultIndex;
            let transcript = e.results[resultIndex][0].transcript;
            chatareamain.appendChild(showusermsg(transcript));
            chatbotvoice(transcript.toLowerCase());
            console.log(typeof(transcript));
        }
        recognition.onend = function() {
            mic.style.background = "#ff3b3b";
        }
        mic.addEventListener("click", function() {
            mic.style.background = '#39c81f';


            recognition.start();
            console.log("Activated");
        })

        function scrollDiv() {
            document.querySelector('#finalscroll').scrollIntoView();
        }
    }
    else { /* speech synthesis not supported */
        msg = document.createElement('h5');
        msg.textContent = "Detected no support for Speech Synthesis";
        msg.style.textAlign = 'center';
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
        msg.style.marginTop = msg.style.marginBottom = 0;
        document.body.insertBefore(msg, document.querySelector('div'));
    }

}