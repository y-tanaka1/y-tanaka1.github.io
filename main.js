// データの読み込み
function parseCSV(text) {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",");
  return lines.slice(1).map((line) => {
    const values = line.split(",");
    let obj = {};
    headers.forEach((h, i) => {
      obj[h.trim()] = values[i].trim();
    });
    return obj;
  });
}

const basic = parseCSV(basicData);
const yesNo = parseCSV(yesNoData);
dataArray(basic);
dataParallel(yesNo);

// 表示
function dataArray(els) {
  const array = document.querySelector(".array");

  els.forEach((el, index) => {
    const { japanese, chinese, pronunciation } = el;

    const audioId = `audio-${index}`;
    const playId = `play-${index}`;

    const code =
      `<h3>${japanese}</h3>` +
      "<ul><li>" +
      `<span class="inline-content">` +
      `<span class="chinese-text">${chinese}</span>` +
      `<audio id="${audioId}" src="audio/${chinese}.mp3" controls></audio>` +
      `<img src="materials/volume-off-fill.svg" width="28" height="28" id="${playId}" class="play-button" />` +
      "</span></li>" +
      `<li>${pronunciation}</li></ul>`;

    array.insertAdjacentHTML("beforeend", code);

    setTimeout(() => {
      const audio = document.getElementById(audioId);
      const playButton = document.getElementById(playId);
      playButton.addEventListener("click", () => {
        audio.play();
      });
      audio.addEventListener("play", () => {
        playButton.src = "materials/volume-up-fill.svg";
      });
      audio.addEventListener("ended", () => {
        playButton.src = "materials/volume-off-fill.svg";
      });
    }, 0);
  });
}

// 表示
function dataParallel(els) {
  const para = document.querySelector(".para");

  els.forEach((el, index) => {
    const { situation, yes, no, note, filename } = el;

    const audioId = `audio-p-${index}`;
    const playId = `play-p-${index}`;

    const code =
      `<h3>${situation}</h3>` +
      "<ul><li>" +
      `<span class="inline-content">` +
      `<span class="chinese-text">${yes}</span>` +
      `<span class="chinese-text">${no}</span>` +
      `<audio id="${audioId}" src="audio/${filename}.mp3" controls></audio>` +
      `<img src="materials/volume-off-fill.svg" width="28" height="28" id="${playId}" class="play-button" />` +
      "</span></li><br>" +
      `<li>${note}</li></ul>`;

    para.insertAdjacentHTML("beforeend", code);

    setTimeout(() => {
      const audio = document.getElementById(audioId);
      const playButton = document.getElementById(playId);
      playButton.addEventListener("click", () => {
        audio.play();
      });
      audio.addEventListener("play", () => {
        playButton.src = "materials/volume-up-fill.svg";
      });
      audio.addEventListener("ended", () => {
        playButton.src = "materials/volume-off-fill.svg";
      });
    }, 0);
  });
}
