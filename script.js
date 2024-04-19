document.addEventListener('DOMContentLoaded', function() {
  var count = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 21; // Inizializza il contatore da 21 o da localStorage se presente
  var counterDisplay = document.getElementById('counterDisplay');
  var incrementBtn = document.getElementById('incrementBtn');
  var informazioniLink = document.getElementById('informazioniLink');
  var curiositaLink = document.getElementById('curiositaLink');
  var altroLink = document.getElementById('altroLink');
  var statisticheLink = document.getElementById('statisticheLink');
  var informazioniSection = document.getElementById('informazioni');
  var curiositaSection = document.getElementById('curiosita');
  var altroSection = document.getElementById('altro');
  var statisticheSection = document.getElementById('statistiche');

  counterDisplay.textContent = count;

  incrementBtn.addEventListener('click', function() {
    count++;
    counterDisplay.textContent = count;
    localStorage.setItem("counter", count);
  });

  informazioniLink.addEventListener('click', function(e) {
    e.preventDefault();
    toggleSection(informazioniSection);
  });

  curiositaLink.addEventListener('click', function(e) {
    e.preventDefault();
    toggleSection(curiositaSection);
  });

  altroLink.addEventListener('click', function(e) {
    e.preventDefault();
    toggleSection(altroSection);
  });

  statisticheLink.addEventListener('click', function(e) {
    e.preventDefault();
    toggleSection(statisticheSection);
    // Aggiungi qui il codice per generare il grafico
    var funChart = document.getElementById('funChart').getContext('2d');
    var myFunChart = new Chart(funChart, {
      type: 'pie',
      data: {
        labels: ['Divertente', 'Molto divertente', 'Estremamente divertente'],
        datasets: [{
          label: 'Livello di divertimento',
          data: [30, 50, 20],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          }
        }
      }
    });
  });

  function toggleSection(section) {
    informazioniSection.classList.remove('active');
    curiositaSection.classList.remove('active');
    altroSection.classList.remove('active');
    statisticheSection.classList.remove('active');

    setTimeout(function() {
      informazioniSection.classList.add('hidden');
      curiositaSection.classList.add('hidden');
      altroSection.classList.add('hidden');
      statisticheSection.classList.add('hidden');

      section.classList.remove('hidden');
      setTimeout(function() {
        section.classList.add('active');
      }, 50);
    }, 300); // 300ms corrisponde al tempo di transizione delle animazioni
  }
});