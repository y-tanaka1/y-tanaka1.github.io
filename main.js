// CSVパース
function parseCSV(text) {
  const [headerLine, ...lines] = text.trim().split("\n");
  const headers = headerLine.split(",");
  return lines.map((line) =>
    Object.fromEntries(
      line.split(",").map((v, i) => [headers[i].trim(), v.trim()])
    )
  );
}

// 再生処理を共通化
function attachAudioEvents(audioId, playId) {
  const audio = document.getElementById(audioId);
  const playButton = document.getElementById(playId);
  playButton.addEventListener("click", () => audio.play());
  audio.addEventListener(
    "play",
    () => (playButton.src = "materials/volume-up-fill.svg")
  );
  audio.addEventListener(
    "ended",
    () => (playButton.src = "materials/volume-off-fill.svg")
  );
}

// 表示共通化
function renderData(containerSelector, els, getCode) {
  const container = document.querySelector(containerSelector);
  els.forEach((el, index) => {
    const { html, audioId, playId } = getCode(el, index);
    container.insertAdjacentHTML("beforeend", html);
    setTimeout(() => attachAudioEvents(audioId, playId), 0);
  });
}

// 表示用：basicデータ
renderData(".array", parseCSV(basicData), (el, i) => {
  const { japanese, chinese, pronunciation } = el;
  const audioId = `audio-${i}`,
    playId = `play-${i}`;
  return {
    html: `
      <h3>${japanese}</h3>
      <ul><li>
        <span class="inline-content">
          <span class="chinese-text">${chinese}</span>
          <audio id="${audioId}" src="audio/${chinese}.mp3" controls></audio>
          <img src="materials/volume-off-fill.svg" width="28" height="28" id="${playId}" class="play-button" />
        </span>
      </li>
      <li>${pronunciation}</li></ul>`,
    audioId,
    playId,
  };
});

// 表示用：yesNoデータ
renderData(".para", parseCSV(yesNoData), (el, i) => {
  const { situation, yes, no, note, filename } = el;
  const audioId = `audio-p-${i}`,
    playId = `play-p-${i}`;
  return {
    html: `
      <h3>${situation}</h3>
      <ul><li>
        <span class="inline-content">
          <span class="chinese-text">${yes}</span>
          <span class="chinese-text">${no}</span>
          <audio id="${audioId}" src="audio/${filename}.mp3" controls></audio>
          <img src="materials/volume-off-fill.svg" width="28" height="28" id="${playId}" class="play-button" />
        </span>
      </li><br>
      <li>${note}</li></ul>`,
    audioId,
    playId,
  };
});
