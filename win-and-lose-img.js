function showImage() {
    // Hitta elementet där du vill visa bilden, eller skapa ett nytt
    let imageElement = document.createElement('img');
    imageElement.src = win-img.jpg; // Sätt din bilds URL här
    document.body.appendChild(imageElement); // Lägg till bilden i dokumentet
  
    // Ta bort bilden efter 2 sekunder
    setTimeout(function() {
      document.body.removeChild(imageElement);
    }, 2000);
  }