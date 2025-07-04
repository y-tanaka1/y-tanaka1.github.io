const basicData = `
japanese,chinese,pronunciation
村田です。私は日本人です。,我叫村田。我是日本人。,Wǒ jiào Cúntián. Wǒ shì Rìběnrén.
観光で来ました。,我来旅游的。,Wǒ lái lǚyóu de.
北京まで行きます。,我要去北京。,Wǒ yào qù Běijīng.
アリペイで払います。,我用支付宝付款。,Wǒ yòng Zhīfùbǎo fùkuǎn.
現金で払います。,我用现金付款。,Wǒ yòng xiànjīn fùkuǎn.
現金は使えますか？,可以用现金吗？,Kěyǐ yòng xiànjīn ma?
アリペイは使えますか？,可以用支付宝吗？,Kěyǐ yòng Zhīfùbǎo ma?
10時に予約した村田です。,我是预约了10点的村田。,Wǒ shì yùyuē le shí diǎn de Cúntián.
お会計お願いします。,请结账。,Qǐng jiézhàng.
すみません、注文をお願いします。,服务员我要点菜。,Fúwùyuán wǒ yào diǎncài.
これください。,我要这个。,Wǒ yào zhège.
これを2つください。,这个我要两个。,Zhège wǒ yào liǎng ge.
水をください。,请给我水。,Qǐng gěi wǒ shuǐ.
辛さ控えめでお願いします。,请做得不太辣。,Qǐng zuò de bú tài là.
これは辛いですか？,这个辣吗？,Zhège là ma?
この中で辛くないものはどれですか？,这个里面哪个不辣？,Zhège lǐmiàn nǎge bú là?
お尋ねしても良いですか？,我可以问一下吗？,Wǒ kěyǐ wèn yīxià ma?
もう一度言ってください。,请再说一遍。,Qǐng zài shuō yí biàn.
使い方が分かりません。,我不会用。,Wǒ bú huì yòng.
ちょっと待ってください。,请等一下。,Qǐng děng yíxià.
これの使い方を教えてください。,请教我怎么用这个。,Qǐng jiào wǒ zěnme yòng zhège.
美味しかったです。,很好吃。,Hěn hǎochī.
これはいくらですか？,这个多少钱？,Zhège duōshǎo qián?
トイレはどこですか？,厕所在哪儿？,Cèsuǒ zài nǎr?
ここは北京ですか？,这是北京吗？,Zhè shì Běijīng ma?
英語は話せますか？,你会说英语吗？,Nǐ huì shuō Yīngyǔ ma?
問題ありません。,没问题。,Méi wèntí.
理解しました。,我明白了。,Wǒ míngbái le.
`;

const yesNoData = `
situation, yes, no, note, filename 
你是日本人吗？（あなたは日本人ですか）,是（shì）,不是（bú shì）,「是」は“～です”の肯定／否定,是不是
你有钱吗？（お金を持っていますか）,有（yǒu）,没有（méi yǒu）,有＝持っている、没有＝持っていない,有没有
你喜欢中国菜吗？（中華料理は好きですか）,喜欢（xǐhuān）,不喜欢（bù xǐhuān）,「好き」かどうか、好みによる表現,喜欢不喜欢
你去学校吗？（学校に行きますか）,去（qù）,不去（bú qù）,動詞を繰り返す形が自然,去不去
你听得懂吗？（聞いて理解できますか）,听得懂（tīng de dǒng）,听不懂（tīng bù dǒng）,「〜できる／できない」も動詞で表す,听得懂听不懂
可以吗？（いいですか／許可されますか）,可以（kě yǐ）,不可以（bù kě yǐ）,許可・可能の是非,可以不可以
要不要…？（～が要りますか？）,要（yào）,不要（bú yào）,欲しい／いらない,要不要
会说中文吗？（中国語話せますか？）,会（huì）,不会（bú huì）,能力や知識に関するYes/No,会不会

`;
