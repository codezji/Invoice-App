function addItem() {
    const itemsDiv = document.getElementById('items');
    itemsDiv.insertAdjacentHTML('beforeend', `
      <input type="text" class="itemDesc" placeholder="Item Description" required>
      <input type="number" class="itemAmount" placeholder="Amount" required>
    `);
  }
  
  document.getElementById('invoiceForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const today = new Date();
    const invoiceNum = 'INV-' + today.getFullYear() + '-' + Math.floor(Math.random() * 10000);
  
    document.getElementById('invoiceNumber').textContent = invoiceNum;
    document.getElementById('invoiceDate').textContent = today.toLocaleDateString();
  
    document.getElementById('sellerInfo').innerHTML = `
      ${document.getElementById('sellerName').value}<br>
      ${document.getElementById('sellerAddress').value}
    `;
  
    document.getElementById('clientInfo').innerHTML = `
      ${document.getElementById('clientCompany').value}<br>
      ${document.getElementById('clientAddress').value}
    `;
  
    document.getElementById('bankInfo').innerHTML = `
      Bank: ${document.getElementById('bankName').value}<br>
      IFSC: ${document.getElementById('bankIFSC').value}
    `;
  
    const descs = document.getElementsByClassName('itemDesc');
    const amts = document.getElementsByClassName('itemAmount');
    const table = document.getElementById('invoiceTable');
    table.innerHTML = `
      <tr>
        <th>Description</th>
        <th>Amount</th>
      </tr>
    `;
  
    let total = 0;
    for (let i = 0; i < descs.length; i++) {
      const desc = descs[i].value;
      const amt = parseFloat(amts[i].value) || 0;
      total += amt;
  
      table.innerHTML += `
        <tr>
          <td>${desc}</td>
          <td>₹${amt.toFixed(2)}</td>
        </tr>
      `;
    }
  
    document.getElementById('totalAmount').textContent = total.toFixed(2);
    document.getElementById('invoiceNotes').textContent = document.getElementById('notes').value;
  
    document.getElementById('invoice').classList.remove('hidden');
  });
  