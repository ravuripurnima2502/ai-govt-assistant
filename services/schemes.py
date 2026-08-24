SCHEMES=[
{"id":"myscheme","name":"myScheme","category":"All","summary":"Official Government of India scheme discovery platform. Use it to explore schemes based on your profile.","source":"https://www.myscheme.gov.in/"},
{"id":"pm-kisan","name":"PM-KISAN","category":"Farmers","summary":"Official portal for Pradhan Mantri Kisan Samman Nidhi. Check current eligibility, status and application information on the official portal.","source":"https://pmkisan.gov.in/"},
{"id":"ayushman","name":"Ayushman Bharat PM-JAY","category":"Healthcare","summary":"Official portal for Pradhan Mantri Jan Arogya Yojana. Check beneficiary eligibility and services on the official portal.","source":"https://pmjay.gov.in/"},
{"id":"ujjwala","name":"PM Ujjwala Yojana","category":"Women","summary":"Official PMUY portal. Check current eligibility, benefits and application guidance on the official portal.","source":"https://www.pmuy.gov.in/"},
{"id":"scholarships","name":"National Scholarship Portal","category":"Education","summary":"Government scholarship platform for participating schemes. Eligibility, documents and dates differ by scheme.","source":"https://scholarships.gov.in/"},
{"id":"pmay","name":"PMAY – Pradhan Mantri Awas Yojana","category":"Housing","summary":"Official housing programme information. Applicable components and eligibility depend on scheme and location.","source":"https://pmaymis.gov.in/"},
]

def search_schemes(q="",category="All"):
    q=q.lower()
    return [s for s in SCHEMES if (category=="All" or s["category"]==category) and (not q or q in (s["name"]+" "+s["summary"]+" "+s["category"]).lower())]

def get_scheme(i): return next((s for s in SCHEMES if s["id"]==i),None)

def recommend_schemes(age,income,state,occupation,need):
    occ=occupation.lower(); need_l=need.lower(); results=[]
    def add(sid,reason):
        s=next(x for x in SCHEMES if x["id"]==sid); results.append({**s,"match_reason":reason})
    if "farmer" in occ: add("pm-kisan","Your selected occupation is Farmer.")
    if "student" in occ or "education" in need_l or age<=25 and need_l=="education": add("scholarships","Your profile indicates an education/student need.")
    if "health" in need_l: add("ayushman","You selected Healthcare support.")
    if "woman" in occ: add("ujjwala","You selected Woman as your profile category.")
    if "housing" in need_l: add("pmay","You selected Housing support.")
    if "financial" in need_l or "employment" in need_l: add("myscheme","myScheme is useful for finding additional central/state schemes matching income and profile conditions.")
    if not results: add("myscheme","myScheme can search a broader set of central and state schemes using your profile.")
    seen=set(); out=[]
    for r in results:
        if r["id"] not in seen: out.append(r);seen.add(r["id"])
    return out[:5]
