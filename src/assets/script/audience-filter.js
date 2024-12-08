document.addEventListener("DOMContentLoaded", function () {
  // Magdagdag ng event listener sa filter button
  document.querySelector('.event-filter').addEventListener('click', function () {
    // Kuhanin ang value ng search input
    const searchTerm = document.querySelector('.event-select').value.toLowerCase();

    // Kuhanin ang lahat ng rows sa report table
    const tableRows = document.querySelectorAll('.report-table tbody tr');

    // I-loop ang bawat row sa table
    tableRows.forEach((row) => {
      // Kunin ang text content ng bawat cell ng row
      const rowData = Array.from(row.cells).map(cell => cell.textContent.toLowerCase()).join(" ");

      // I-check kung ang search term ay nasa row data
      if (rowData.includes(searchTerm)) {
        row.style.display = ""; // Ipakita ang row kung tumutugma
      } else {
        row.style.display = "none"; // Itago ang row kung hindi tumutugma
      }
    });
  });
});

/* di pa gumagana sa vue */
