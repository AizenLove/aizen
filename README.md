# aizen (client)

## 開発環境セットアップ

- node v16.15.1
- yarn v3

が必要なので準備してネ

```bash
$ yarn install
```

## 開発サーバーを建てる

```bash
$ yarn dev
```

で開発サーバーが建つよ
URL: http://localhost:3000

※ サーバーサイドは別リポジトリで管理している、現状では開発環境でも本番のAPIを叩いてるのでサーバーサイドのサーバーを建てる必要はなし

## コンポーネント管理

```bash
$ yarn storybook
```

で storybook が見れるよ、コンポーネント追加したら story もセットで置いてあると嬉しい

## linter にかける

```bash
$ yarn typecheck # 型チェック
$ yarn lint      # eslint, stylelint, prettier
$ yarn fix       # 自動修正かけたいなら fix
```

## テスト

コンポーネントのテストは書いてないけどロジックのテストは一部書いてる

```bash
$ yarn test
```
