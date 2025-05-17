const csvData = `
japanese,chinese,pronunciation
村田です。私は日本人です。,我叫村田。我是日本人。,ウォ ジャオ ツンティエン。ウォ シー リーベンレン。
観光で来ました。,我来旅游的。,ウォ ライ リューヨウ ダ。
北京まで行きます。,我要去北京。,ウォ ヤオ チュゥ ベイジン。
アリペイで払います。,我用支付宝付款。,ウォ ヨン ジーフーバオ フークァン。
現金で払います。,我用现金付款。,ウォ ヨン シェンジン フークァン。
現金は使えますか？,可以用现金吗？,クァーイ ヨン シェンジン マ？
アリペイは使えますか？,可以用支付宝吗？,クァーイ ヨン ジーフーバオ マ？
10時に予約した村田です。,我是预约了10点的村田。,ウォ シー ユーユエ ラ シー ディエン ダ ツンティエン。
お会計お願いします。,请结账。,チン ジエジャン。
すみません、注文をお願いします。,服务员，我要点菜。,フーウーユエン、ウォ ヤオ ディエンツァイ。
これください。,我要这个。,ウォ ヤオ ジェガ。
これを2つください。,这个我要两个。,ジェガ ウォ ヤオ リャンガ。
水をください。,请给我水。,チン ゲイ ウォ シュイ。
辛さ控えめでお願いします。,请做得不太辣。,チン ヅオ ダ ブー タイ ラ。
これは辛いですか？,这个辣吗？,ジェガ ラ マ？
お尋ねしても良いですか？,我可以问一下吗？,ウォ クァーイ ウェン イーシャー マ？
もう一度言ってください。,请再说一遍。,チン ザイ シュオ イービエン。
使い方が分かりません。,我不会用。,ウォ ブ フェイ ヨン。
ちょっと待ってください。,请等一下。,チン ドン イーシャー。
これの使い方を教えてください。,请教我怎么用这个。,チン ジャオ ウォ ゼンマ ヨン ジェガ。
美味しかったです。,很好吃。,ヘン ハオ チー。
これはいくらですか？,这个多少钱？,ジェガ ドゥオシャオ チェン？
トイレはどこですか？,厕所在哪儿？,ツァスオ ザイ ナーアル？
ここは北京ですか？,这是北京吗？,ジェ シー ベイジン マ？
英語は話せますか？,你会说英语吗？,ニー フェイ シュオ インユー マ？
問題ありません。,没问题。,メイ ウェンティー。
理解しました。,我明白了。,ウォ ミンバイ ラ。
`;
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

const data = parseCSV(csvData);
dataArray(data);

// 表示
function dataArray(els) {
  const array = document.querySelector(".array");

  els.forEach((el, index) => {
    const { japanese, chinese, pronunciation } = el;

    const audioId = `audio-${index}`;
    const playId = `play-${index}`;

    const code =
      `<h2>${japanese}</h2>` +
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
