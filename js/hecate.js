var scenario = 1;
var musicOn = true;
var faith;
var pressure;
var outThere;
var anticipation;
var heartOfMachine;
var battleTheme;
var crazySpace;
var darkIntro;
var alarm;
var explosion;



function loadCurrentScenario() {
    "use strict";
    preloadMusic();
    if (window.location.hash != "") {
        var id = "" + window.location.hash;
        id = id.slice(1, id.length);
        scenario = getNormalScenarioId(id);
        startGame();
    }
}

function preloadMusic() {
    "use strict";
    $("#content").append('<audio id="OutThere" class="music" preload loop> <source src="music/OutThere.mp3" type="audio/mpeg"></audio>');
    $("#content").append('<audio id="Faith" class="music" preload loop> <source src="music/Faith.mp3" type="audio/mpeg"></audio>');
    $("#content").append('<audio id="Pressure" class="music" preload loop> <source src="music/Pressure.mp3" type="audio/mpeg"></audio>');
    $("#content").append('<audio id="Alarm" class="music" preload> <source src="music/Alarm.mp3" type="audio/mpeg"></audio>');
    $("#content").append('<audio id="Explosion" class="music" preload> <source src="music/Explosion.mp3" type="audio/mpeg"></audio>');
    $("#content").append('<audio id="Anticipation" class="music" preload loop> <source src="music/Anticipation.mp3" type="audio/mpeg"></audio>');
    $("#content").append('<audio id="HeartOfMachine" class="music" preload loop> <source src="music/HeartOfMachine.mp3" type="audio/mpeg"></audio>');
    $("#content").append('<audio id="BattleTheme" class="music" preload loop> <source src="music/BattleTheme.mp3" type="audio/mpeg"></audio>');
    $("#content").append('<audio id="CrazySpace" class="music" preload loop> <source src="music/CrazySpace.mp3" type="audio/mpeg"></audio>');
    $("#content").append('<audio id="DarkIntro" class="music" preload loop> <source src="music/DarkIntro.mp3" type="audio/mpeg"></audio>');
    outThere = $("#OutThere")[0];
    faith = $("#Faith")[0];
    pressure = $("#Pressure")[0];
    alarm = $("#Alarm")[0];
    explosion = $("#Explosion")[0];
    anticipation = $("#Anticipation")[0];
    heartOfMachine = $("#HeartOfMachine")[0];
    battleTheme = $("#BattleTheme")[0];
    crazySpace = $("#CrazySpace")[0];
    darkIntro = $("#DarkIntro")[0];
}

function toggleMusic() {
    "use strict";
    if (musicOn == true) {
        musicOn = false;
        faith.pause();
        pressure.pause();
        outThere.pause();
        anticipation.pause();
        heartOfMachine.pause();
        battleTheme.pause();
        crazySpace.pause();
        darkIntro.pause();
        $("#toggleButton").text("Turn Music On");
    } else {
        musicOn = true;
        playSongsOnLoad();
        $("#toggleButton").text("Turn Music Off");
    }
}

function startGame() {
    "use strict";
    var id = getHashedScenarioId();
    window.location.hash = id;
    $("#startMenu").addClass("hidden");
    $("#scenarioText").append(scenarios[scenario]);
    createButtons();
    playSongsOnLoad();
    $("#content").removeClass("hidden");
    $("#musicToggle").removeClass("hidden");
}

function showNextScenario() {
    "use strict";
    scenario++;
    var id = getHashedScenarioId();
    window.location.hash = id;
    $("#scenarioText").text("");
    $("#buttons").text("");
    $("#scenarioText").append(scenarios[scenario]);
    createButtons();
    playSongs();
}

function createButtons() {
    "use strict";
    switch(scenario) {
        case 10:
            $("#buttons").append('<a onClick="makeChoice(1)" class="btn btn-default">Reveal the weapon</a><span style="padding-left:20px">');
            $("#buttons").append('<a onClick="makeChoice(2)" class="btn btn-default">Hide the weapon</a>');
            break;
        case 1021:
            $("#buttons").append('<a onClick="makeChoice(3)" class="btn btn-default">Initiate a coup</a><span style="padding-left:20px">');
            $("#buttons").append('<a onClick="makeChoice(4)" class="btn btn-default">Aim for a peaceful agreement');
            break;
        case 2020:
            $("#buttons").append('<a onClick="makeChoice(5)" class="btn btn-default">Attack Hecate</a><span style="padding-left:20px">');
            $("#buttons").append('<a onClick="makeChoice(6)" class="btn btn-default">Aim for a peaceful agreement');
            break;
        case 6001:
            $("#buttons").append('<a onClick="makeChoice(7)" class="btn btn-default">Attack Hecate</a><span style="padding-left:20px">');
            $("#buttons").append('<a onClick="makeChoice(8)" class="btn btn-default">Aim for a peaceful agreement');
            break;
        case 3013:
            // no buttons
            break;
        case 4017:
            // no buttons
            break;
        case 5012:
            // no buttons
            break;
        case 7014:
            // no buttons
            break;
        default:
            $("#buttons").append('<a onClick="showNextScenario()" class="btn btn-default">Next</a>');
            break;
    }
}

function makeChoice(choice) {
    "use strict";
    switch(choice) {
        case 1:
            scenario = 999;
            showNextScenario();
            break;
        case 2:
            scenario = 1999;
            showNextScenario();
            break;
        case 3:
            scenario = 2999;
            showNextScenario();
            break;
        case 4:
            scenario = 3999;
            showNextScenario();
            break;
        case 5:
            scenario = 4999;
            showNextScenario();
            break;
        case 6:
            scenario = 5999;
            showNextScenario();
            break;
        case 7:
            scenario = 4999;
            showNextScenario();
            break;
        case 8:
            scenario = 6999;
            showNextScenario();
            break;
    }
}

function playSongsOnLoad() {
    "use strict";
    if (scenario == 1) {
        outThere.play();
    } else if (scenario >= 2 && scenario <= 9) {
        faith.play();
    } else if (scenario == 10) {
        pressure.play();
    } else if (scenario == 1021) {
        pressure.play();
    } else if (scenario == 2020) {
        pressure.play();
    } else if (scenario >= 1000 && scenario <= 1007) {
        outThere.play();
    } else if (scenario >= 2000 && scenario <= 2007) {
        outThere.play();
    } else if (scenario >= 1008 && scenario <= 1017) {
        anticipation.play();
    } else if (scenario >= 2008 && scenario <= 2019) {
        anticipation.play();
    } else if (scenario >= 1018 && scenario <= 1020) {
        heartOfMachine.play();
    } else if (scenario >= 3000 && scenario <= 3009) {
        battleTheme.play();
    } else if (scenario >= 4000 && scenario <= 4012) {
        anticipation.play();
    } else if (scenario >= 5000 && scenario <= 5007) {
        battleTheme.play();
    } else if (scenario >= 7000 && scenario <= 7011) {
        anticipation.play();
    } else if (scenario == 6000) {
        anticipation.play();
    } else if (scenario == 6001) {
        pressure.play();
    } else if (scenario >= 3010 && scenario <= 3013) {
        crazySpace.play();
    } else if (scenario >= 4013 && scenario <= 4016) {
        crazySpace.play();
    } else if (scenario >= 5008 && scenario <= 5012) {
        crazySpace.play();
    } else if (scenario >= 7012 && scenario <= 7014) {
        darkIntro.play();
    }
}

function playSongs() {
    "use strict";
    if (musicOn == false) {
        return;
    }
    switch(scenario) {
        case 1:
            outThere.play();
            break;
        case 2:
            outThere.pause();
            outThere.currentTime = 0;
            faith.play();
            break;
        case 10:
            faith.pause();
            pressure.play();
            break;
        case 1021:
            heartOfMachine.pause();
            pressure.play();
            break;
        case 2020:
            anticipation.pause();
            anticipation.currentTime = 0;
            pressure.play();
            break;
        case 1000:
            pressure.pause();
            pressure.currentTime = 0;
            outThere.play();
            break;
        case 2000:
            pressure.pause();
            pressure.currentTime = 0;
            outThere.play();
            break;
        case 1008:
            outThere.pause();
            alarm.play();
            anticipation.play();
            break;
        case 2008:
            outThere.pause();
            alarm.play();
            anticipation.play();
            break;
        case 1018:
            anticipation.pause();
            anticipation.currentTime = 0;
            heartOfMachine.play();
            break;
        case 3000:
            pressure.pause();
            battleTheme.play();
            break;
        case 3001:
            alarm.play();
            break;
        case 3004:
            explosion.play();
            break;
        case 4000:
            pressure.pause();
            anticipation.play();
            break;
        case 5000:
            pressure.pause();
            battleTheme.play();
            break;
        case 7000:
            pressure.pause();
            anticipation.play();
            break;
        case 6000:
            pressure.pause();
            pressure.currentTime = 0;
            anticipation.play();
            break;
        case 6001:
            anticipation.pause();
            anticipation.currentTime = 0;
            pressure.play();
            break;
        case 3010:
            battleTheme.pause();
            crazySpace.play();
            break;
        case 4013:
            anticipation.pause();
            crazySpace.play();
            break;
        case 5008:
            battleTheme.pause();
            crazySpace.play();
            break;
        case 7012:
            anticipation.pause();
            darkIntro.play();
            break;
    }
}

function getHashedScenarioId() {
    "use strict";
    var newIdNumber = (scenario * 32239863) - 432;
    var newIdLetters = "";
    var characters = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < characters.length; i++) {
        if (newIdNumber % i == 0 || newIdNumber % i == 1) {
            newIdLetters += characters.charAt(i);
        }
    }
    return "" + newIdNumber + newIdLetters;
}

function getNormalScenarioId(id) {
    "use strict";
    return (parseInt(id) + 432) / 32239863;
}