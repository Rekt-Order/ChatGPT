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