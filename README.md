# aizen

## 開発環境

### URL

- http://localhost:3000 :アプリが見れる
- http://localhost:80 :APIサーバー
- http://localhost:80/redoc :APIドキュメント

### server

[この辺のファイル](https://skys-project.slack.com/archives/C0370SEMY2D/p1648908030470519) おいて

```bash
$ cd server/python
$ IS_DEV=true docker-compose up --build -d
```

で起動するやで

### client

```bash
$ cd client
$ yarn install
$ yarn dev
```

で起動するやで
push とかコミット前に

```bash
$ yarn typecheck
$ yarn fix
```

すれば変なコード書いてないかチェックしてくれるやで
