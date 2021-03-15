
//Huidig dag
var day = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("dag").innerHTML = days[day.getDay()];


//huidige maand plus hoeveelste dag van de maand
var maanden = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
document.getElementById('datum').innerHTML = maanden[day.getMonth()] + ' ' + day.getDate();



//functie voor de digitale klok
function klokLoopt() {

	var clock = document.getElementById('clock');
	var time  = getCurrentTime(new Date());

	clock.innerHTML = time['hours'] + ':' +  time['minutes'] + ':' + time['seconds'];
}

//huidige tijd plus 0 als getallen lager dan 10 zijn
function getCurrentTime(date) {
	var time = new Date();

	time['seconds'] = date.getSeconds();
	time['minutes'] = date.getMinutes();
	time['hours']   = date.getHours();

	if (time['hours'] < 10) {
		time['hours'] = '0' + time['hours'];
	}

	if (time['minutes'] < 10) {
		time['minutes'] = '0' + time['minutes'];
	}

	if (time['seconds'] < 10) {
		time['seconds'] = '0' + time['seconds'];
	}

	return time;

}

//eerste 30 sec alleen de maan laten zijn en laatste 30 sec alleen de zon
	function showSun(){

		time= new Date();

		var remove = document.getElementById("sun");
		var s = time.getSeconds();

		if (s < 30) {
			remove.style.display = "none";
			} else {
			remove.style.display = "block";
			}

		var remove = document.getElementById("moon");

		if (s > 30) {
			remove.style.display = "none";
			} else {
			remove.style.display = "block";
			}

	}

//Laat de verschillende fases van de dag zien
function fases(){

	var date = new Date();
	var h = date.getHours();

	var fases = document.getElementById('fases');

	if(h >= 6 && h <= 12){
		fases.innerHTML = 'Morning';
	}

	if(h >= 12 && h < 18){
		fases.innerHTML = 'Afternoon';
	}

	if(h >= 18 && h <= 23) {
		fases.innerHTML = 'Evening';
	}

	if(h >= 0 && h < 6) {
		fases.innerHTML = 'Midnight';
	}


}


klokLoopt();
showSun();
fases();
setInterval(klokLoopt, 1000);
setInterval(showSun, 1000);