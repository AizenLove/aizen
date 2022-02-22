from gensim.models.doc2vec import Doc2Vec
from janome.tokenizer import Tokenizer
from sklearn.metrics.pairwise import cosine_similarity
from numpy import argmax
# !!!必要な部分だけ持ってくると良いかも

class Aizen():

    # コンストラクタ
    def __init__(self, model_pass, list_pass):
        Aizen.split_word = Tokenizer(wakati=True)
        Aizen.model = Doc2Vec.load(model_pass)
        
        Aizen.id_list = []
        with open(list_pass,'r') as f:
            Aizen.id_list = f.read().split(',')
        Aizen.document_vec = [self.model.dv[video_id] for video_id in self.id_list]

        #self.access_key = access_key

    
    @classmethod
    def predict_sim_content(cls,document,iter_num):
        input = [word for word in cls.split_word.tokenize(document)]
        search_vec = cls.model.infer_vector(input,epochs=iter_num)
        cos_sim = cosine_similarity([search_vec],cls.document_vec)[0]

        return cls.id_list[argmax(cos_sim)]