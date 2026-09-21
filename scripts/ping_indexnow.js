const KEY = 'd7a4b89f3c2e105684a1bc92e47f5a89';
const HOST = 'www.reelsgrab.net';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URL_LIST = [
  `https://${HOST}`,
  `https://${HOST}/youtube-to-mp3`,
  `https://${HOST}/youtube-to-mp4`,
  `https://${HOST}/instagram-reels-download`,
  `https://${HOST}/facebook-reels-download`,
  `https://${HOST}/facebook-video-download`,
  `https://${HOST}/facebook-private-video-download`,
  `https://${HOST}/reels-to-mp3`,
  `https://${HOST}/bulk-reels-downloader`,
  `https://${HOST}/es/youtube-a-mp3`,
  `https://${HOST}/es/youtube-a-mp4`,
  `https://${HOST}/es/descargar-videos-facebook`,
  `https://${HOST}/es/descargar-reels-instagram`,
  `https://${HOST}/es/descargar-reels-facebook`,
  `https://${HOST}/pt/youtube-para-mp3`,
  `https://${HOST}/pt/youtube-para-mp4`,
  `https://${HOST}/pt/baixar-video-facebook`,
  `https://${HOST}/pt/baixar-reels-instagram`,
  `https://${HOST}/blog`,
  `https://${HOST}/blog/how-to-download-instagram-reels`,
  `https://${HOST}/blog/download-reels-without-watermark`,
  `https://${HOST}/blog/fix-reels-no-sound`,
  `https://${HOST}/blog/download-reels-iphone`,
  `https://${HOST}/blog/snapsave-alternative`,
  `https://${HOST}/blog/fdown-alternative`,
  `https://${HOST}/privacy-policy`,
  `https://${HOST}/terms-of-use`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
  `https://${HOST}/dmca`,
];

async function submitIndexNow() {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST,
  };

  console.log(`Submitting ${URL_LIST.length} URLs to IndexNow (Bing, Yandex, Seznam)...`);

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    console.log(`IndexNow Response Status: ${res.status}`);
    if (res.status === 200) {
      console.log('Successfully submitted to IndexNow (200 OK)!');
    } else if (res.status === 202) {
      console.log('Accepted by IndexNow (202 Accepted) - In processing queue.');
    } else {
      console.log('Response body:', await res.text());
    }
  } catch (err) {
    console.error('Error submitting to IndexNow:', err.message);
  }
}

submitIndexNow();
