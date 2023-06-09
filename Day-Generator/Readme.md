## プロンプトの説明
2枚のPNG画像（背景透過）と3種類のテキストを重ね合わせて、
ブラウザで表示可能にするコードを生成します。
※プロンプトは自由に改変いただいても構いません。もちろん、商用利用も可能です！

今日の日付を取得し、画像の上に表示しますので、Javascriptを改修することで
ブラウザ上で動く時計として拡張させることも可能です。

また、このアウトプットをIPFSへ保存することで、動的に絵柄の変わるNFTにも
応用ができます。


【出力レイヤー構成】
─ Text2
┣ Text1
┣ img2
┣ img1
┣ Text3
┣ Background

【出力物】
・HTML
・CSS
・javascript

## アウトプット例
【出力レイヤー構成】
─ Text2：Hello Worldにて白色で表示します
┣ Text1：今日の日付を「年月日形式」にて黄色で表示します
┣ img2：1600 × 1600サイズのpng画像をご用意ください（img2.png）
┣ img1：1600 × 1600サイズのpng画像をご用意ください（img1.png）
┣ Text3：縦書きで「拝啓」と白色で表示します
┣ Background：青色のベタ塗りです

【出力物】
・HTML
・CSS
・javascript

※まれにHTMLとCSSのみになることがありますが、「Javascriptも追加して」とオーダーを追加することで解決できます
※ご利用には、コードエディタ（テキストエディタ）が必要です

## プロンプト

あなたはプロのプログラマです。HTMLとCSS、場合によってはJavascriptを使って、Webページを作成することができます。

以下の条件でHTMLとCSSを作成し、ブラウザで表示ができるようにしてください。

#条件
・フォルダ構成
　img1、img2、HTML、CSSは同じ階層にある
・レイヤ構成
　上から順に、Text2＞Text1＞img2＞img1＞Text3>Backgroundとする
　レイヤ構成は、z-indexを用いてCSSに定義
・画像のサイズ：1600×1600、表示サイズを画像サイズに合わせる

・img1：png、img2：png
・Text2：Hello World（カラーコード：#DDDDDD、サイズ 20、フォント「Arial Black」）
・Text1：今日の日付を取得し表示（カラーコード：#FFD700、サイズ 10、フォント「Arial Black」）
・Text3は、縦書き。 拝啓 という文字を表示する（カラーコード：#DDDDDD、サイズ 30、フォント「HiraMinProN-W6」）
・テキストの位置：viewport単位（vw、vh）により定義
・Backgroundは、カラーコード #000080
・ max-width:100%;height:auto;　を適用
・コードは、HTMLとCSSに分けて記述する

## プロンプトの使い方の説明

【使い方】
出力されるコードが、まれにHTMLとCSSのみになることがあります。
その場合は、追加の質問として、「Javascriptも追加して」とオーダーを追加することで解決できます。

１. 出力されるHTMLコードを、「index.html」という名前で保存してください。
２. 出力されるCSSコードを、「style.css」という名前で保存してください。
３. 出力されるJavascriptを、「script.js」という名前で保存してください。
４. 1600 × 1600サイズのpng画像を用意して、「img1.png」という名前で保存してください。
５. 1600 × 1600サイズのpng画像を用意して、「img2.png」という名前で保存してください。（img2はimg1の上に重なります）
６. 「１〜５」で用意したファイルを、１つのフォルダに格納します。（全て同じ階層に並べてください）
７. 「index.html」をブラウザで開くと完成です。

## カスタマイズのポイント
・テキストの大きさを変えるには？
「style.css」をコードエディタで開いて、「#text1」または「#text2」の「font-size:」の数字を変更し、上書き保存してください。

（例）
#text1 {
position: absolute;
top: 50vh;
left: 50vw;
font-family: 'Arial Black', sans-serif;
font-size: 10px;
color: #FFD700;
z-index: 4;
}

※上記の「font-size: 10px;」を「font-size: 50px;」と変更すると、大きくなります。

・テキストの位置を変えるには？
「style.css」をコードエディタで開いて、「#text1」または「#text2」の「top:」「left:」の数字を変更し、上書き保存してください。

（例）
#text2 {
position: absolute;
top: 40vh;
left: 40vw;
font-family: 'Arial Black', sans-serif;
font-size: 20px;
color: #DDDDDD;
z-index: 5;
}

※上記の「top: 40vh;」を「top: 80vh;」と変更すると、下に移動します。
※上記の「left: 40vw;」を「left: 60vw;」と変更すると、右に移動します。

・テキストの色を変えるには？
「style.css」をコードエディタで開いて、「#text1」または「#text2」の「color: #DDDDDD;」のカラーコード（ #DDDDDD）を変更し、上書き保存してください。

※カラーコードは、「CSS カラーコード」と検索するとわかると思います。