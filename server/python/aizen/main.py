# webフレームワークのインポート
from fastapi import FastAPI

# モデルを扱うための自作ツール
from recommend_video import Aizen

# firebaseにアクセスする関連
from firebase_admin import initialize_app
from firebase_admin import credentials # 認証
from firebase_admin import db          # realtime database(以下db)との接続

app = FastAPI()
aizen = Aizen("./data/doc2vec.model", "./data/video_id_list.txt")
print("model import done.")

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

@app.get("/query-beta/")
def read_item(user_req: str, iter_num: int = 40):
    rec_id = aizen.predict_sim_content(user_req, iter_num)

    return db.reference(base_pass + rec_id).get()