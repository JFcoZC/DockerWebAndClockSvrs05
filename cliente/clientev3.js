/**
*Jose Francisco Zeron Cabrera
*154678
*
*Client file.
*
*File that contents functions that are call by the client when it loads the html file.
*/

/**
*Hacer las acciones cuando el HTML haya sido cargado por el cliente
*/
$(document).ready()
{
	dibujarReloj();
	//cargarHoraCliente();
	//obtenerHoraMiServidor();

	//setDate('clientClock', new Date());
	setInterval(cargarHoraCliente, 1000);
	setInterval(obtenerHoraMiServidor, 1000);

}//Fin funcion Ready
//--------------FUNCIONES----------
/**
*Get hour acccording given time of the client and pass the time to function that
*makes the animation of the clock
*/
function cargarHoraCliente()
{
	/*GET CLIENT HOUR*/
	var date = new Date();
	$('#clientHour').text("Client time: "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());

	/*SET CLIENT HOUR IN CLOCKS*/
	setDate('clientClock', date);
	/*Aniamte text every NEW minute*/
	animateHour('#clientHour', date);

}//Fin funcion cargarHoraCliente
//----------------------------------
/**
*Get hour of local server on JSON format in case of success. In case of error print
*on console that was an error.
*
*/
function obtenerHoraMiServidor()
{
	$.ajax({
		url: 'http://127.0.0.1:3000/serverTime',
		type: 'GET',
		dataType:"json",
		contentType:"application/json",
		cache: false,
		timeout: function()
		{
			console.log("Process completed!");
		},
		success:function(response){
			//console.log("Exito!");
			//console.log(response);
			setHoraMiServidor(response);
		},
		error:function(xhr,status, error){
			console.log("Error!");
			console.log(error.message);
		},

	});

}//Fin funcion cargarHoraMiServidor
//----------------------------------
/**
*
* Set hour for h1 of the server given the current time.
* Set animation analog clock of server and little digital.
* Animate h1 every new minute
*
*@param {long} miliseconds - current time expressed in miliseconds
*/
function setHoraMiServidor(miliseconds)
{
	/**Convert miliseconds of object to date */
	var date = new Date(miliseconds.data);
	//console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
	$('#serverHour').text("Server time: "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());

	/*SET CLIENT HOUR IN CLOCKS*/
	setDate('serverClock', date);
	/*Aniamte text every NEW minute*/
	animateHour('#serverHour', date);

}//Fin funcion setHoraMiServidor
//----------------------------------
/**
*
*Insert diviions in HTML file that are required for the analog and digital clock
*/
function dibujarReloj()
{
	$(".clock").append('<div class="horaHandler"></div><div class="minuteHandler"></div><div class="secondHandler"></div><div class="centro"></div><div class="tiempo"></div><div class="fecha"></div>');
	//$(".clock").append('');

}//FIn funcion dibujarReloj
//----------------------------------
/**
*Given the minutes, seconds and current hour calculate the degrees to
*update the hands of the clock. Also update small digital clock.
*
*@param {string} clockId - id of div of class clock
*@param {Date} currtime
*/
function setDate(clockId, curtime)
{
	var secondMan = $("#"+clockId).find(".secondHandler");
	var minuteMan = $("#"+clockId+" .minuteHandler");
	var horaMan = $("#"+clockId+" .horaHandler");
	var time = $("#"+clockId+" .tiempo");
	var fecha = $("#"+clockId+" .fecha");
    
    var second = curtime.getSeconds();
    var secondDeg = ((second / 60) * 360) + 360; 
    secondMan.css('transform', 'rotate('+secondDeg+'deg)');
    
    var minute = curtime.getMinutes();
    var minuteDeg = ((minute / 60) * 360); 
    minuteMan.css('transform', 'rotate('+minuteDeg+'deg)');

    var hour = curtime.getHours();
    var hourDeg = ((hour / 12 ) * 360 ); 
    horaMan.css('transform', 'rotate('+hourDeg+'deg)');
    
    time.html('<span>' + '<strong>' + hour + '</strong>' + ' : ' + minute + ' : ' + '<small>' + second +'</small>'+ '</span>');
    fecha.html('<span><small>'+curtime.getDate()+'/'+(curtime.getMonth()+1)+'/'+curtime.getFullYear()+'</small></span>');

}//Fin funcion setDate
//----------------------------------
/**
*
*Given a date, verify the start of a new minute in order to call an animation for
*the <h1> elements.
*@param {string} hourId - id of h1 elemenet
*@param {Date} currtime -
*
*/
function animateHour(hourId, curtime)
{
	if(curtime.getSeconds() < 2)
	{
		animateCss(hourId,'heartBeat');

	}//Fin if	

}//Fin function animateHour
//----------------------------------
/**
*
*Function from the library of Animate.css to add and then remove a class of the
*Animate.css file in order to provide the effect of call an animation.
*
*@param {string} element - id or class name of an element in dom
*@param {string} animationName - name of class in Animate.css
*@param {function} callback - function that can be executed after executing the animation
*/
function animateCss(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)
    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}//Fin funcion animateCss