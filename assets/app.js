document
  .getElementById("searchForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();

    const city = document.getElementById("cityInput").value;
    fetch(`weather.php?city=${city}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert("Erro ao buscar dados de clima.");
        } else {
          document.getElementById("temp").textContent = data.temp_c;
          document.getElementById("condition").textContent =
            data.condition.text;
          document.getElementById("humidity").textContent = data.humidity;
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  });
