# webフレームワークのインポート
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# モデルを扱うための自作ツール
from recommend_video import Aizen
from response import QueryBetaResponse, WarmUpResponse

# firebaseにアクセスする関連
from firebase_admin import initialize_app
from firebase_admin import credentials # 認証
from firebase_admin import db          # realtime database(以下db)との接続

app = FastAPI()

"""
いずれはここに購入したドメインを記す。
当面はヤリマンセキュリティ
origins = [
]
"""


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], #　ヤリマンセキュリティ
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

aizen = Aizen("./data/doc2vec.model", "./data/video_id_list.txt")
print("model import done.")

# 認証情報の読み込み
cred = credentials.Certificate('./data/aizen-f96b7-43b1fadd870e.json')

initialize_app(cred, {
    'databaseURL': 'https://aizen-f96b7-default-rtdb.asia-southeast1.firebasedatabase.app/',
    'databaseAuthVariableOverride': {
        'uid': 'my-service-worker'
    }
})

"""
db.reference()に所望のデータのパスを入れるとjsonが返ってくる
AVのデータは /resource/video 以下にidを付与して格納
"""

base_pass = "/resource/video/"

print("db connect done.")

# 検索
@app.get("/query-beta/", response_model=QueryBetaResponse)
def read_item(user_req: str, iter_num: int = 40) -> QueryBetaResponse:
    rec_id = aizen.predict_sim_content(user_req, iter_num)
    res_data = db.reference(base_pass + rec_id).get()
    return QueryBetaResponse(**res_data)


# インスタンスをとりあえず叩き起こす時に使う
@app.get("/warm_up/", response_model=WarmUpResponse)
def wake_up() -> WarmUpResponse:
    return WarmUpResponse(**{"alive": True})
