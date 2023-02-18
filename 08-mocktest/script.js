let issuedBooks = [];
const forma = document.querySelector('form');
forma.addEventListener('submit', function(event) {
  event.preventDefault();
  const bookName = document.querySelector('#book-name').value;
  const issuedTo = document.querySelector('#issued-to').value;
  const id = issuedBooks.length + 1;
  const issuedTime = new Date().toLocaleString();
  const status = 'not returned';
  issuedBooks.push({id, bookName, issuedTo, issuedTime, status});
  renderTable();
});


function renderTable() {
  const table = document.querySelector('#issued-books');
  table.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Book Name</th>
      <th>Issued To</th>
      <th>Issued Time</th>
      <th>Status</th>
    </tr>
  `;
  for (const book of issuedBooks) {
    const row = document.createElement('tr');
    const statusCell = document.createElement('td');
    const statusSelect = document.createElement('select');
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    statusSelect.addEventListener('change', function(event) {
      book.status = event.target.value;
      if (book.status === 'returned') {
        statusCell.style.color = 'green';
      } else {
        statusCell.style.color = 'red';
      }
    });
    option1.value = 'not returned';
    option1.textContent = 'Not returned';
    option2.value = 'returned';
    option2.textContent = 'Returned';
    statusSelect.appendChild(option1);
    statusSelect.appendChild(option2);
    statusSelect.value = book.status;
    statusCell.appendChild(statusSelect);
    row.innerHTML = `
      <td>${book.id}</td>
      <td>${book.bookName}</td>
      <td>${book.issuedTo}</td>
      <td>${book.issuedTime}</td>
    `;
    row.appendChild(statusCell);
    if (book.status === 'returned') {
      statusCell.style.color = 'green';
    } else {
      statusCell.style.color = 'red';
    }
    table.appendChild(row);
  }
}



