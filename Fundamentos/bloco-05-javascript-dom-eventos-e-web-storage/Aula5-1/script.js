const header = document.querySelector('#header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTask = document.getElementsByClassName('emergency-tasks')[0];
emergencyTask.style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyTasksHeaders.length; i += 1) {
    emergencyTasksHeaders[i].style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergencyTask = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTask.style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergencyTaskHeader = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergencyTaskHeader.length; i += 1) {
    noEmergencyTaskHeader[i].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';