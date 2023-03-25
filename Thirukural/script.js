function getKural(){
  const kuralNumber = document.getElementById('kural-number').value;
  const apiUrl = `https://api-thirukkural.vercel.app/api?num=${kuralNumber}`;
  fetch(apiUrl)
  .then((response)=> response.json())
  .then(data => {
    const kuralContainer = document.getElementById('kural-container');
    kuralContainer.innerHTML = `
    <h1>${data.line1}</h1> 
    <h1>${data.line2}</h1>`;
  })
  .catch(error => {
    console.log(error);
    const kuralContainer = document.getElementById('kural-container');
    kuralContainer.innerHTML = `<h1>திருக்குறள் (அல்லது குறள்) என்பது 133 அத்தியாயங்களாக அமைக்கப்பட்ட 1330 தமிழ் ஜோடிகளின் தொகுப்பாகும்.
    </h1>
    <h1>அதில் 1 முதல் 1330 வரை மட்டுமே தேர்ந்தெடுக்கவும்.</h1>`
  });
}
getKural();


