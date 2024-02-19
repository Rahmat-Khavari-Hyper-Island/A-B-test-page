// Randomly choose Variation A or B
const variation = Math.random() < 0.5 ? 'A' : 'B';

// Function to display content based on variation
function displayContent(variation) {
  const dynamicSection = document.getElementById('dynamic-section');
  if (variation === 'A') {
    dynamicSection.innerHTML = `
    <br>
    <h2>this is 'A' dynamic Section</h2>
    <br>
    <p>This is the dynamic section of the A variation of the website. The background color for this section should be 'Light Blue'.</p>
    `;
    dynamicSection.style.backgroundColor = 'lightblue';
  } else {
    dynamicSection.innerHTML = `
    <br>
    <h2>this is 'B' dynamic Section</h2>
    <br>
    <p>This is the dynamic section of the A variation of the website. The background color for this section should be 'Darksea Green'.</p>
    `;
    dynamicSection.style.backgroundColor = 'darkseagreen';
  }
}

// Track CTA click event
document.getElementById('cta-button').addEventListener('click', function () {
  const eventData = {
    variation: variation,
    timestamp: new Date().toISOString(),
  };

  // Log event to console
  console.log('CTA Clicked:', eventData);
});

// Display content based on variation
displayContent(variation);
