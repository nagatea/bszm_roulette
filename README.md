# bszm_roulette
情報理工学院バスゼミの余興用アプリ


## 仕様
* ブラウザで動くビンゴ用ルーレットアプリ
* ただしビンゴで使うのは番号ではなく特定のワード
* 画面に出たワードの履歴を表示させる
* 出たワードに関連したなにか(メモなど)も一緒に表示されるようにしてほしい
* 台本の都合があるので、指定の順番でワードが出るようにしてほしい
  * つまりランダムで出すように見せて実際には指定の順番でしか出ない
* トラブルが起きても即再開できるような仕様にしてほしい

## メモ
* CSVでデータ管理
* 初回アクセス時にインポート(外部アクセスされても結果が分からないように)
* データはLocalStorageで保持
* idで管理し、idを指定するとその時点からルーレットが再開できるようにする

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).