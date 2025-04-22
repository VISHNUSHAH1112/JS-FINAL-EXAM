fetch("https://api.rootnet.in/covid19-in/stats/latest")
  .then( response => response.json())
  .then( data => {
    const statesData = data.data.regional;
    const table = document.querySelector("#table");

    statesData.forEach((state, index) => {
      const row = document.createElement("tr");

      const totalCases =
        state.confirmedCasesIndian + state.confirmedCasesForeign;

      row.innerHTML = `
      <td>${index + 1}</td>
      <td>${state.loc}</td>
      <td>${state.confirmedCasesIndian}</td>
      <td>${state.confirmedCasesForeign}</td>
      <td>${state.discharged}</td>
      <td>${state.deaths}</td>
      <td>${totalCases}</td>
    `;

      table.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
  