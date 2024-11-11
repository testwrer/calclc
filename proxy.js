let validCode = '1234';

function checkCode() {
  let codeInput = document.getElementById('code').value;
  if (codeInput === validCode) {
    document.getElementById('url').style.display = 'block';
    document.getElementById('goBtn').style.display = 'inline-block';
  } else {
    document.getElementById('url').style.display = 'none';
    document.getElementById('goBtn').style.display = 'none';
  }
}

function proxySite() {
  let urlInput = document.getElementById('url').value;
  if (urlInput && isValidUrl(urlInput)) {
    let proxyUrl = `https://v2.uv0.dev/${urlInput}`;
    document.getElementById('proxyFrame').src = proxyUrl;
    document.getElementById('proxyContainer').style.display = 'block';
  }
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

function startProxy() {
  let url = document.getElementById('url').value;
  if (url && isValidUrl(url)) {
    let proxyUrl = `https://v2.uv0.dev/${url}`;
    document.getElementById('proxyFrame').src = proxyUrl;
    document.getElementById('proxyContainer').style.display = 'block';
  }
}
