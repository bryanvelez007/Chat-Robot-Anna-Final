onload = function() {
    if ('speechSynthesis' in window) with(speechSynthesis) {
        const synth = window.speechSynthesis;
        var es_chrome = navigator.userAgent.toLowerCase().indexOf('edg') > -1;
        let mic = document.getElementById("mic");
        let chatareamain = document.querySelector('.chatarea-main');
        let chatareaouter = document.querySelector('.chatarea-outer');
        let load = document.querySelector("#loading");
        var i = 0;
        /* $(".chat_body").animate({
                scrollTop: $('.chat_body')[0].scrollHeight
            }, 1000);*/
        let scanid = [{
            "title": "https://www.relx.com/",
            "empcode": "relx",
            "scanid": 631
        }, {
            "title": "https://www.amag.ch/de.html",
            "empcode": "amag",
            "scanid": 677
        }, {
            "title": "http://www.rona.ca/fr",
            "empcode": "rona",
            "scanid": 340
        }];
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
        let empresas = ["fitzii",
            "zenapply",
            "wizehire",
            "applicantpro",
            "smartsearch",
            "recruiteze.com",
            "hiringthing",
            "zoho recruit",
            "gohire",
            "hirehive",
            "jobsoid",
            "successfactors",
            "comeet",
            "freshworks",
            "webhr",
            "ismartrecruit",
            "apploi",
            "ceipal",
            "talentnest",
            "smartrecruiters",
            "traitset",
            "talentnow",
            "zenploy",
            "jazzhr",
            "catsone",
            "eddyhr",
            "talent pool builder",
            "jobdiva",
            "hirebridge",
            "clinch talent",
            "hoopshr",
            "gothire",
            "staffing future",
            "better team",
            "breezyhr",
            "conrep",
            "jxt",
            "resume mantra",
            "raven ridge group - pcrecruiters",
            "softunik",
            "acquiretm",
            "hireology",
            "trackerrms",
            "recruitcrm",
            "nextal",
            "grit seed",
            "cbizsoft",
            "beetween",
            "talentlyft",
            "crelate talent",
            "tranformify",
            "rise people",
            "talentvine",
            "recruitbpm",
            "logicmelon - appoint group",
            "rezoomo",
            "recooty",
            "talentadmin",
            "jobtrain",
            "aira",
            "on apply",
            "idibu",
            "happymonday",
            "careerplug",
            "jobscore",
            "manatal",
            "fountain",
            "cvviz",
            "myjoblist",
            "acosta",
            "cgi",
            "randstad us",
            "randstad ca",
            "tenstreet",
            "youcruit",
            "nextal",
            "ceipal",
            "hoops hr",
            "beetween",
            "talentvine",
            "risepeople",
            "recruitbpm",
            "gigroup ch",
            "logicmelon - appoint group",
            "recruitbpm",
            "rezoomo",
            "recooty",
            "talentadmin",
            "jobtrain",
            "betterteam",
            "smartrecruiter",
            "bullhorn",
            "aira",
            "arca24 it",
            "arca24",
            "ali spa",
            "zenploy",
            "careerplug",
            "happymonday.com",
            "top echelon",
        ]
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



        var myDiv = document.querySelectorAll("div.chatarea-inner.chatbot")[i];
        var altura = myDiv.clientHeight

        if (altura == 62) {
            document.querySelectorAll('img.img_robot')[i].style.marginTop = '22px';
        }

        if (altura == 40) {
            document.querySelectorAll('img.img_robot')[i].style.marginTop = '2px';
        }

        if (altura == 84) {
            document.querySelectorAll('img.img_robot')[i].style.marginTop = '44px';
        }

        if (altura == 162) {
            document.querySelectorAll('img.img_robot')[i].style.marginTop = '122px';
        }



        function showchatbotmsgimg(chatbotmsg, image, description) {
            i = i + 1;
            let output = '';
            output += `<div class="messages">
        <img class="img_robot" src="assets/images/ana.jpg" alt="anna robot">
        <div class="chatarea-inner chatbot" style="text-align: justify;">${chatbotmsg}${image}${description}</div>
    </div>`;
            chatareaouter.innerHTML += output;
            var myDiv = document.querySelectorAll("div.chatarea-inner.chatbot")[i];
            var altura = myDiv.clientHeight


            if (altura == 62) {
                document.querySelectorAll('img.img_robot')[i].style.marginTop = '22px';
            }

            if (altura == 40) {
                document.querySelectorAll('img.img_robot')[i].style.marginTop = '2px';
            }

            if (altura == 84) {
                document.querySelectorAll('img.img_robot')[i].style.marginTop = '44px';
            }
            if (altura == 162) {
                document.querySelectorAll('img.img_robot')[i].style.marginTop = '122px';
            }

            return chatareaouter;

        }

        function showchatbotmsg(description, msg) {
            i = i + 1;
            let output = '';
            output += `<div class="messages">
        <img class="img_robot" src="assets/images/ana.jpg" alt="anna robot">
        <div class="chatarea-inner chatbot" style="text-align: justify;">${description}${msg}</div>
    </div>`;
            chatareaouter.innerHTML += output;
            var myDiv = document.querySelectorAll("div.chatarea-inner.chatbot")[i];
            var altura = myDiv.clientHeight


            if (altura == 62) {
                document.querySelectorAll('img.img_robot')[i].style.marginTop = '22px';
            }

            if (altura == 40) {
                document.querySelectorAll('img.img_robot')[i].style.marginTop = '2px';
            }

            if (altura == 84) {
                document.querySelectorAll('img.img_robot')[i].style.marginTop = '44px';
            }
            if (altura == 162) {
                document.querySelectorAll('img.img_robot')[i].style.marginTop = '122px';
            }

            return chatareaouter;
        }
        //chatbotvoice("ana");
        $("i.zmdi.zmdi-mail-send").click(function() {
            var mensaje = $("#chatSend").val()
            showusermsg(mensaje);
            chatbotvoice(mensaje.toLowerCase());
            $("#chatSend").val("");
        });
        $("div.fabs>a.fab:not(.is-visible)").click(function() {
            $("#chatSend").focus();
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
        const speech = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        speech.rate = 1.0;
        if (!es_chrome) {
            window.speechSynthesis.onvoiceschanged = function() {
                voices = window.speechSynthesis.getVoices();
                // console.log(window.speechSynthesis.getVoices());
                speech.voice = voices[7];
            };
        } else {
            window.speechSynthesis.onvoiceschanged = function() {
                voices = window.speechSynthesis.getVoices();
                //  console.log(window.speechSynthesis.getVoices());
                speech.voice = voices[13];
            };
        }

        function chatbotvoice(message) {
            // console.log("Esto es el mensaje: " + message);
            speech.text = "";
            if (message.includes('hola')) {
                let finalresult = intro[Math.floor(Math.random() * intro.length)];
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if ((message.includes("bryan") && message.includes("nota")) || (message.includes("bryan") && message.includes("qa"))) {
                $.ajax({
                    type: "GET",
                    url: "https://raw.githubusercontent.com/andrespro00/ApiChatBot/master/api",
                    success: function(response) {
                        notaqa(JSON.parse(response).bryan.nota, JSON.parse(response).bryan.nombre);
                    }
                });
            } else if ((message.includes("diego tong") && message.includes("nota")) || (message.includes("diego tong") && message.includes("qa"))) {
                $.ajax({
                    type: "GET",
                    url: "https://raw.githubusercontent.com/andrespro00/ApiChatBot/master/api",
                    success: function(response) {
                        notaqa(JSON.parse(response).diego.nota, JSON.parse(response).diego.nombre);
                    }
                });
            } else if ((message.includes("rudy") && message.includes("nota")) || (message.includes("rudy") && message.includes("qa")) || (message.includes("andrés") && message.includes("nota")) || (message.includes("andres") && message.includes("qa"))) {
                $.ajax({
                    type: "GET",
                    url: "https://raw.githubusercontent.com/andrespro00/ApiChatBot/master/api",
                    success: function(response) {
                        notaqa(JSON.parse(response).rudy.nota, JSON.parse(response).rudy.nombre);
                    }
                });
            } else if ((message.includes("sara") && message.includes("nota")) || (message.includes("sara") && message.includes("qa"))) {
                $.ajax({
                    type: "GET",
                    url: "https://raw.githubusercontent.com/andrespro00/ApiChatBot/master/api",
                    success: function(response) {
                        notaqa(JSON.parse(response).sara.nota, JSON.parse(response).sara.nombre);
                    }
                });
            } else if ((message.includes("yamel") && message.includes("nota")) || (message.includes("yamel") && message.includes("qa")) || (message.includes("andrés") && message.includes("nota")) || (message.includes("andres") && message.includes("qa"))) {
                $.ajax({
                    type: "GET",
                    url: "https://raw.githubusercontent.com/andrespro00/ApiChatBot/master/api",
                    success: function(response) {
                        notaqa(JSON.parse(response).yamel.nota, JSON.parse(response).yamel.nombre);
                    }
                });
            } else if ((message.includes("daniel") && message.includes("nota")) || (message.includes("daniel") && message.includes("qa")) || (message.includes("andrés") && message.includes("nota")) || (message.includes("andres") && message.includes("qa"))) {
                $.ajax({
                    type: "GET",
                    url: "https://raw.githubusercontent.com/andrespro00/ApiChatBot/master/api",
                    success: function(response) {
                        notaqa(JSON.parse(response).daniel.nota, JSON.parse(response).daniel.nombre);
                    }
                });
            }
            /***************************************************DESCRIPCIONES */
            else if (message.includes("bryan") && (message.includes("descripcion") || message.includes("sobre"))) {
                $.ajax({
                    type: "GET",
                    url: "https://raw.githubusercontent.com/andrespro00/ApiChatBot/master/api",
                    success: function(response) {
                        imagenDescripcion(JSON.parse(response).bryan.url, JSON.parse(response).bryan.descripcion, JSON.parse(response).bryan.nombre);
                    }
                });
            } else if (message.includes("diego tong") && (message.includes("descripcion") || message.includes("sobre"))) {
                $.ajax({
                    type: "GET",
                    url: "https://raw.githubusercontent.com/andrespro00/ApiChatBot/master/api",
                    success: function(response) {
                        imagenDescripcion(JSON.parse(response).diego.url, JSON.parse(response).diego.descripcion, JSON.parse(response).diego.nombre);
                    }
                });
            } else if (message.includes("rudy") && (message.includes("descripcion") || message.includes("sobre"))) {
                $.ajax({
                    type: "GET",
                    url: "https://raw.githubusercontent.com/andrespro00/ApiChatBot/master/api",
                    success: function(response) {
                        imagenDescripcion(JSON.parse(response).rudy.url, JSON.parse(response).rudy.descripcion, JSON.parse(response).rudy.nombre);
                    }
                });
            } else if (message.includes("sara") && (message.includes("descripcion") || message.includes("sobre"))) {
                $.ajax({
                    type: "GET",
                    url: "https://raw.githubusercontent.com/andrespro00/ApiChatBot/master/api",
                    success: function(response) {
                        imagenDescripcion(JSON.parse(response).sara.url, JSON.parse(response).sara.descripcion, JSON.parse(response).sara.nombre);
                    }
                });
            } else if (message.includes("yamel") && (message.includes("descripcion") || message.includes("sobre"))) {
                $.ajax({
                    type: "GET",
                    url: "https://raw.githubusercontent.com/andrespro00/ApiChatBot/master/api",
                    success: function(response) {
                        imagenDescripcion(JSON.parse(response).yamel.url, JSON.parse(response).yamel.descripcion, JSON.parse(response).yamel.nombre);
                    }
                });
            } else if (message.includes("daniel") && (message.includes("descripcion") || message.includes("sobre"))) {
                $.ajax({
                    type: "GET",
                    url: "https://raw.githubusercontent.com/andrespro00/ApiChatBot/master/api",
                    success: function(response) {
                        imagenDescripcion(JSON.parse(response).daniel.url, JSON.parse(response).daniel.descripcion, JSON.parse(response).daniel.nombre);
                    }
                });
            } else if (message.includes("ana") && (message.includes("descripcion") || message.includes("sobre"))) {
                $.ajax({
                    type: "GET",
                    url: "https://raw.githubusercontent.com/andrespro00/ApiChatBot/master/api",
                    success: function(response) {
                        imagenDescripcion(JSON.parse(response).ana.url, JSON.parse(response).ana.descripcion, JSON.parse(response).ana.nombre);
                    }
                });
            } else if (message.includes("andres") && (message.includes("descripcion") || message.includes("sobre"))) {
                $.ajax({
                    type: "GET",
                    url: "https://raw.githubusercontent.com/andrespro00/ApiChatBot/master/api",
                    success: function(response) {
                        imagenDescripcion(JSON.parse(response).andres.url, JSON.parse(response).andres.descripcion, JSON.parse(response).andres.nombre);
                    }
                });
            } else if (message.includes("indexado") || message.includes("indexada")) {
                var sw = false;
                for (var i = 0; i <= scanid.length - 1; i++) {
                    if (message.includes(scanid[i].title) || message.includes(scanid[i].empcode)) {
                        speech.text = `La empresa ${scanid[i].empcode} ya se encuentra indexada, está en el scanid: ${scanid[i].scanid}`;
                        llamarVoz(speech, speech.text);
                        sw = true;
                        break;
                    }
                };
                if (!sw) {
                    speech.text = `El sitio no se encuentra indexado`;
                    llamarVoz(speech, speech.text);
                }
            } else if (message.includes("indexar") || message.includes("indexable")) {
                var sw = false;
                for (var i = 0; i <= empresas.length - 1; i++) {
                    if (message.includes(empresas[i])) {
                        speech.text = `El sitio ${empresas[i]} no se puede indexar`;
                        llamarVoz(speech, speech.text);
                        sw = true;
                        break;
                    }
                };
                if (!sw) {
                    speech.text = `El sitio se puede indexar`;
                    llamarVoz(speech, speech.text);
                }
            } else if (message.includes("blacklist") || message.includes("lista") || message.includes("no indexables")) {
                templates("blacklist");
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
            } else if (message.includes('espejo') || message.includes('espejito')) {
                speech.text = "¿Blancanieves?,¿eres tu ?";
                llamarVoz(speech, speech.text);
            } else if (message.includes('años') || message.includes('edad')) {
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
            } else if (message.includes('Bien') || message.includes('estes bien') || message.includes("estes excelente")) {
                let finalresult = help[Math.floor(Math.random() * help.length)];
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if (message.includes('como esta') || /esta/gi.test(message.includes('esta'))) {
                let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
                speech.text = finalresult;
                llamarVoz(speech, speech.text);
            } else if (message.includes('sobre ti')) {
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
            } else if (message.includes('plantilla') && (message.includes("myworkday") || message.includes("my workday") || message.includes("worda") || message.includes("uorday"))) {
                templates("myworkday");
            } else if (message.includes('plantilla') && (message.includes("workable") || message.includes("worcab") || message.includes("uorcab"))) {
                templates("workable");
            } else {
                speech.text = "Oh! creo que aun no he aprendido lo suficiente para responderte";
                synth.speak(speech);
                chatareamain.appendChild(showchatbotmsg(speech.text + " 😞", "", ""));
                scrollDiv();
            }

        }

        function llamarVoz(spech, textoSpeech) {
            synth.speak(spech);
            chatareamain.appendChild(showchatbotmsg(textoSpeech, "", ""));
            scrollDiv();
        }

        function imagenDescripcion(UrlImagen, Descripcion, mensaje) {
            let image = `<br><img src="${UrlImagen}" alt="" style="width: 130px;height: 120px;border-radius: 50%;margin-top: 10px;margin-bottom: 10px;"<br>`;
            let description = `<span id="descspan" style="text-align: justify;">"${Descripcion}"</span><br>`;
            let finalresult = plantilla[Math.floor(Math.random() * plantilla.length)];
            speech.text = finalresult;
            synth.speak(speech);
            chatareamain.appendChild(showchatbotmsgimg(speech.text, image, description));
            speech.text = ` la descripción de ${mensaje} es: ` + Descripcion;
            window.speechSynthesis.speak(speech);
            scrollDiv();
        }

        function templates(nameTemplate) {
            let finalresult = plantilla[Math.floor(Math.random() * plantilla.length)];
            speech.text = finalresult;
            synth.speak(speech);
            let description = `<span id=descspan style=text-align: justify; > ` + speech.text + "</span><br>";
            let msg = `<a href="assets/templates/${nameTemplate}.txt" download>Descargar ${nameTemplate}</a>`;
            chatareamain.appendChild(showchatbotmsg(description, msg));
            speech.text = `Acá tienes la plantilla ${nameTemplate}`;
            synth.speak(speech);
            description = `<span id=descspan style=text-align: justify; > ` + speech.text + "</span><br>";
            chatareamain.appendChild(showchatbotmsg(description, ""));
            scrollDiv();
        }

        function notaqa(qa, persona) {
            let finalresult = plantilla[Math.floor(Math.random() * plantilla.length)];
            speech.text = finalresult;
            synth.speak(speech);
            let description = `<span id=descspan style=text-align: justify; > ` + speech.text + "</span><br>";
            let msg = `<span id=descspan style=text-align: justify; > ` + `La nota de ${persona} es: ${qa}` + "</span><br>";
            chatareamain.appendChild(showchatbotmsg(description, msg));
            speech.text = `la nota de ${persona} es: ${qa}`;
            synth.speak(speech);
            scrollDiv();
        }
        recognition.onresult = function(e) {
            let resultIndex = e.resultIndex;
            let transcript = e.results[resultIndex][0].transcript;
            transcript = transcript.toLowerCase();
            transcript = transcript.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            chatareamain.appendChild(showusermsg(transcript));
            chatbotvoice(transcript);
        }
        recognition.onend = function() {
            mic.style.visibility = 'visible';
            load.style.visibility = 'hidden';
        }
        mic.addEventListener("click", function() {
            mic.style.visibility = 'hidden';
            load.style.visibility = 'visible';
            // mic.style.background = '#39c81f';
            recognition.start();

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