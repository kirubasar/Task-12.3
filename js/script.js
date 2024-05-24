document.addEventListener('DOMContentLoaded', function () {
  const row = document.getElementById('dogFacts');
  for(let i = 0; i <30; i++) {
  fetch("https://dog-api.kinduff.com/api/facts")
    .then((response) => response.json())
    .then((data) => {
     const col = document.createElement('div')
      col.className = 'col-sm-12 col-lg-4 mb-3';
      const card = document.createElement('div')
      card.className = 'card border-success';
      const cardHeader = document.createElement('div')
      cardHeader.className ='card-header bg-transparent border-success';
      cardHeader.textContent= `Facts -${i+1}`
      const cardBody = document.createElement('div')
      cardBody.className = 'card-body text-success';
      const cardText = document.createElement('div')
      cardText.className = 'card-text';
      cardText.textContent = `${data.facts}`;
      const cardFooder = document.createElement('div')
      cardFooder.className='card-footer bg-transparent border-success';
      cardFooder.textContent=`Success: ${data.success}`;
      //Append card text to card body
      cardBody.appendChild(cardText);
      
      //append card body and card header to card
      card.appendChild(cardHeader)
      card.appendChild(cardBody);
      card.appendChild(cardFooder);
      
      //Append card to column and column to row
      col.appendChild(card);
      row.appendChild(col);
  })
  .catch((error) => console.error(error));
  };
  });