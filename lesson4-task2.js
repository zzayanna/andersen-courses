const urls = [
  'Request string #1',
  'Request string #2',
  'Request string #3',
  'Request string #4',
  'Request string #5'
]

function request(url) {
  return new Promise((res, rej) => {
    const delayTime = Math.floor(Math.random() * 10000) + 1;
    setTimeout(() => res(url), delayTime);
  })
}

async function kindaPromiseAll(urls) {
  const resolvedUrls = [];
  try {
    for (let i = 0; i < urls.length; i++) {
      const resolvedUrl = await request(urls[i]);
      resolvedUrls.push(resolvedUrl);
    }
    return resolvedUrls;
  } catch (err) {
    console.error(err);
  }
}

kindaPromiseAll(urls);