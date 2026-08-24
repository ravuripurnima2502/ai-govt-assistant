
PORTALS={
 "General":("CPGRAMS – Centralized Public Grievance Redress and Monitoring System","https://pgportal.gov.in/"),
 "Roads":("CPGRAMS – public grievance portal","https://pgportal.gov.in/"),
 "Water":("CPGRAMS – public grievance portal","https://pgportal.gov.in/"),
 "Electricity":("CPGRAMS – public grievance portal","https://pgportal.gov.in/"),
 "Municipality":("CPGRAMS – public grievance portal","https://pgportal.gov.in/"),
 "Transport":("CPGRAMS – public grievance portal","https://pgportal.gov.in/"),
 "Consumer":("National Consumer Helpline","https://consumerhelpline.gov.in/"),
 "Cyber Crime":("National Cyber Crime Reporting Portal","https://cybercrime.gov.in/"),
}
CATEGORIES=set(PORTALS)|{"Police","Other"}

def validate_category(c): return c in CATEGORIES

def get_portal(category,state=""):
    return {"name":PORTALS.get(category,PORTALS["General"])[0],
            "url":PORTALS.get(category,PORTALS["General"])[1],
            "note":"This link opens the official portal. Your letter is not automatically submitted by this app."}
