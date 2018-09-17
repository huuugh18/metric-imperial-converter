const url = new URL('./api/convert', window.location);

function convertData (event) {
  event.preventDefault();
  let input = document.getElementById('convertField');
  let params = {};
  params[input.name] = encodeURIComponent(input.value);
  url.search = new URLSearchParams(params);
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let result = document.getElementById('result');
    let jsonResult = document.getElementById('jsonResult');
    result.innerHtml = data.string;
    jsonResult.innerHtml = JSON.stringify(data);
  })
  .catch(error => console.error(error));
}

let convert = document.getElementById('convert');
convert.addEventListener('submit', convertData);
