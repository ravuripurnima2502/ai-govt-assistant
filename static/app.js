const $=id=>document.getElementById(id);const go=id=>$(id).scrollIntoView({behavior:"smooth"});
async function api(url,opt={}){const r=await fetch(url,opt);const d=await r.json();if(!r.ok)throw Error(d.error||"Request failed");return d}

const I18N={
English:{tagline:"Government services, simplified.",navSchemes:"Schemes",navDocuments:"Documents",navComplaints:"Complaints",navFaq:"FAQs",eyebrow:"🇮🇳 CITIZEN-FIRST DIGITAL ASSISTANCE",hero1:"Government services,",hero2:"made simple.",heroText:"Find schemes, understand documents, translate public information, raise complaints and get careful answers — with official government links.",findSchemeBtn:"Find My Scheme",documentBtn:"Understand a Document",speakQuestion:"Speak a question",listen:"Listen",card1:"Scheme Agent",card1s:"Personalised scheme discovery",card2:"Document AI",card2s:"Read, simplify and translate",card3:"Complaint Assistant",card3s:"Create a formal letter",card4:"Govt FAQs",card4s:"Ask and listen to answers",agentEyebrow:"PERSONALISED SCHEME AGENT",agentTitle:"Tell us about yourself.",agentText:"We will show schemes that may be relevant to your profile. This is a preliminary match, not a final eligibility decision.",openMyScheme:"Open myScheme ↗",name:"Name",age:"Age",income:"Annual family income",incomeLow:"Below ₹2.5 lakh",incomeMid:"₹2.5–5 lakh",incomeHigh:"Above ₹5 lakh",incomeUnknown:"Prefer not to say",state:"State",occupation:"I am",need:"I need support for",findMatches:"Find Relevant Schemes",matches:"POTENTIAL MATCHES",resultTitle:"Your scheme results",resultEmpty:"Enter your details and choose what you need. We will show relevant official schemes here.",officialSources:"OFFICIAL SOURCES",schemeLibrary:"Government Scheme Library",all:"All",education:"Education",healthcare:"Healthcare",women:"Women",farmers:"Farmers",housing:"Housing",docEyebrow:"AI DOCUMENT ASSISTANT",docTitle:"Understand your document",docText:"Upload a PDF, DOCX, TXT or image. The app reads it and explains important information in your selected language.",summarize:"Summarize with AI",read:"Read aloud",docPlaceholder:"Your document result will appear here.",languageEyebrow:"LANGUAGE ACCESS",translateTitle:"Translate & speak",translateTextInfo:"Use your voice or type. The complete interface also changes when you select a language.",questionPlaceholder:"Type or speak your text...",translate:"Translate",voiceOutput:"Voice output",translationPlaceholder:"Translation will appear here.",complaintEyebrow:"OFFICIAL HAND-OFF",complaintTitle:"AI Complaint Assistant",complaintText:"Describe the issue → generate a formal letter → copy/download it → submit through the official portal.",namePlaceholder:"Your name (optional)",statePlaceholder:"State",category:"Category",location:"Location",locationPlaceholder:"Area / locality",problem:"Problem",problemPlaceholder:"Describe your problem clearly...",generateLetter:"Generate Complaint Letter",generatedLetter:"GENERATED LETTER",letterPlaceholder:"Your formal complaint letter will appear here.",copy:"Copy",download:"Download",faqEyebrow:"CAREFUL ANSWERS",faqTitle:"Government FAQ Assistant",faqText:"Ask in your language. AI answers carefully and tells you when official verification is needed.",faqPlaceholder:"Ask a government-service question...",askAi:"Ask AI",faqPlaceholderResult:"Your answer will appear here.",footer:"Citizen assistance, not a government department. Always verify important information on official government portals."},
Telugu:{tagline:"ప్రభుత్వ సేవలను సులభంగా అర్థం చేసుకోండి.",navSchemes:"పథకాలు",navDocuments:"పత్రాలు",navComplaints:"ఫిర్యాదులు",navFaq:"ప్రశ్నలు",eyebrow:"🇮🇳 పౌరుల కోసం డిజిటల్ సహాయం",hero1:"ప్రభుత్వ సేవలు,",hero2:"ఇక సులభంగా.",heroText:"ప్రభుత్వ పథకాలను కనుగొనండి, పత్రాలను అర్థం చేసుకోండి, సమాచారం అనువదించండి, ఫిర్యాదులను సిద్ధం చేయండి మరియు అధికారిక లింకులతో సమాధానాలు పొందండి.",findSchemeBtn:"నా పథకాలను కనుగొను",documentBtn:"పత్రాన్ని అర్థం చేసుకోండి",speakQuestion:"ప్రశ్నను మాట్లాడండి",listen:"వినండి",card1:"పథక సహాయకుడు",card1s:"మీ వివరాల ఆధారంగా పథకాలు",card2:"పత్రాల AI",card2s:"చదవండి, సులభం చేయండి",card3:"ఫిర్యాదు సహాయకుడు",card3s:"అధికారిక లేఖ తయారు చేయండి",card4:"ప్రభుత్వ ప్రశ్నలు",card4s:"ప్రశ్నలు అడగండి",agentEyebrow:"వ్యక్తిగత పథక సహాయకుడు",agentTitle:"మీ గురించి చెప్పండి.",agentText:"మీ వివరాలకు సరిపడే అవకాశం ఉన్న పథకాలను చూపిస్తాం. ఇది ప్రాథమిక సరిపోలిక మాత్రమే.",openMyScheme:"myScheme తెరవండి ↗",name:"పేరు",age:"వయస్సు",income:"వార్షిక కుటుంబ ఆదాయం",incomeLow:"₹2.5 లక్షల కంటే తక్కువ",incomeMid:"₹2.5–5 లక్షలు",incomeHigh:"₹5 లక్షలకు పైగా",incomeUnknown:"చెప్పకూడదని ఉంది",state:"రాష్ట్రం",occupation:"నేను",need:"నాకు సహాయం కావాల్సింది",findMatches:"సంబంధిత పథకాలను కనుగొను",matches:"సంభావ్య సరిపోలికలు",resultTitle:"మీ పథకాల ఫలితాలు",resultEmpty:"మీ వివరాలను నమోదు చేసి అవసరాన్ని ఎంచుకోండి.",officialSources:"అధికారిక వనరులు",schemeLibrary:"ప్రభుత్వ పథకాల లైబ్రరీ",all:"అన్నీ",education:"విద్య",healthcare:"ఆరోగ్యం",women:"మహిళలు",farmers:"రైతులు",housing:"ఇల్లు",docEyebrow:"AI పత్ర సహాయకుడు",docTitle:"మీ పత్రాన్ని అర్థం చేసుకోండి",docText:"PDF, DOCX, TXT లేదా చిత్రాన్ని అప్‌లోడ్ చేయండి. ఎంచుకున్న భాషలో ముఖ్యమైన విషయాలను వివరిస్తుంది.",summarize:"AIతో సారాంశం",read:"వినండి",docPlaceholder:"పత్ర ఫలితం ఇక్కడ కనిపిస్తుంది.",languageEyebrow:"భాషా సహాయం",translateTitle:"అనువదించండి & వినండి",translateTextInfo:"మాట్లాడండి లేదా టైప్ చేయండి. భాషను మార్చితే మొత్తం UI కూడా మారుతుంది.",questionPlaceholder:"మీ వాక్యాన్ని టైప్ చేయండి లేదా మాట్లాడండి...",translate:"అనువదించండి",voiceOutput:"వాయిస్ అవుట్‌పుట్",translationPlaceholder:"అనువాదం ఇక్కడ కనిపిస్తుంది.",complaintEyebrow:"అధికారిక సమర్పణ",complaintTitle:"AI ఫిర్యాదు సహాయకుడు",complaintText:"సమస్యను వివరించండి → అధికారిక లేఖ తయారు చేయండి → కాపీ/డౌన్‌లోడ్ చేయండి → అధికారిక పోర్టల్‌లో సమర్పించండి.",namePlaceholder:"మీ పేరు (ఐచ్చికం)",statePlaceholder:"రాష్ట్రం",category:"వర్గం",location:"ప్రాంతం",locationPlaceholder:"ప్రాంతం / ప్రాంతీయ స్థలం",problem:"సమస్య",problemPlaceholder:"మీ సమస్యను స్పష్టంగా వివరించండి...",generateLetter:"ఫిర్యాదు లేఖ తయారు చేయండి",generatedLetter:"తయారైన లేఖ",letterPlaceholder:"మీ అధికారిక ఫిర్యాదు లేఖ ఇక్కడ కనిపిస్తుంది.",copy:"కాపీ",download:"డౌన్‌లోడ్",faqEyebrow:"జాగ్రత్తగా సమాధానాలు",faqTitle:"ప్రభుత్వ FAQ సహాయకుడు",faqText:"మీ భాషలో ప్రశ్న అడగండి. అవసరమైనప్పుడు అధికారిక ధృవీకరణను సూచిస్తుంది.",faqPlaceholder:"ప్రభుత్వ సేవ గురించి ప్రశ్న అడగండి...",askAi:"AIని అడగండి",faqPlaceholderResult:"సమాధానం ఇక్కడ కనిపిస్తుంది.",footer:"ఇది పౌర సహాయక సేవ మాత్రమే; ప్రభుత్వ శాఖ కాదు. ముఖ్యమైన సమాచారాన్ని అధికారిక పోర్టల్స్‌లో ధృవీకరించండి."},
Hindi:{tagline:"सरकारी सेवाएं, आसान भाषा में।",navSchemes:"योजनाएं",navDocuments:"दस्तावेज़",navComplaints:"शिकायतें",navFaq:"सामान्य प्रश्न",eyebrow:"🇮🇳 नागरिकों के लिए डिजिटल सहायता",hero1:"सरकारी सेवाएं,",hero2:"अब आसान।",heroText:"योजनाएं खोजें, दस्तावेज़ समझें, जानकारी का अनुवाद करें, शिकायत तैयार करें और आधिकारिक लिंक के साथ उत्तर पाएं।",findSchemeBtn:"मेरी योजना खोजें",documentBtn:"दस्तावेज़ समझें",speakQuestion:"प्रश्न बोलें",listen:"सुनें",card1:"योजना सहायक",card1s:"आपकी जानकारी के आधार पर",card2:"दस्तावेज़ AI",card2s:"पढ़ें और आसान करें",card3:"शिकायत सहायक",card3s:"औपचारिक पत्र बनाएं",card4:"सरकारी FAQ",card4s:"प्रश्न पूछें",agentEyebrow:"व्यक्तिगत योजना सहायक",agentTitle:"अपने बारे में बताएं।",agentText:"हम आपके प्रोफ़ाइल के अनुसार संभावित योजनाएं दिखाएंगे। यह अंतिम पात्रता निर्णय नहीं है।",openMyScheme:"myScheme खोलें ↗",name:"नाम",age:"उम्र",income:"वार्षिक पारिवारिक आय",incomeLow:"₹2.5 लाख से कम",incomeMid:"₹2.5–5 लाख",incomeHigh:"₹5 लाख से अधिक",incomeUnknown:"न बताना पसंद है",state:"राज्य",occupation:"मैं हूँ",need:"मुझे सहायता चाहिए",findMatches:"संबंधित योजनाएं खोजें",matches:"संभावित योजनाएं",resultTitle:"आपके परिणाम",resultEmpty:"अपनी जानकारी भरें और जरूरत चुनें।",officialSources:"आधिकारिक स्रोत",schemeLibrary:"सरकारी योजना लाइब्रेरी",all:"सभी",education:"शिक्षा",healthcare:"स्वास्थ्य",women:"महिलाएं",farmers:"किसान",housing:"आवास",docEyebrow:"AI दस्तावेज़ सहायक",docTitle:"दस्तावेज़ समझें",docText:"PDF, DOCX, TXT या चित्र अपलोड करें। चुनी गई भाषा में महत्वपूर्ण जानकारी समझाई जाएगी।",summarize:"AI से सारांश",read:"सुनें",docPlaceholder:"दस्तावेज़ का परिणाम यहां आएगा।",languageEyebrow:"भाषा सहायता",translateTitle:"अनुवाद और आवाज़",translateTextInfo:"बोलें या टाइप करें। भाषा बदलने पर पूरा UI भी बदलता है।",questionPlaceholder:"अपना पाठ टाइप या बोलें...",translate:"अनुवाद करें",voiceOutput:"आवाज़ आउटपुट",translationPlaceholder:"अनुवाद यहां आएगा।",complaintEyebrow:"आधिकारिक प्रक्रिया",complaintTitle:"AI शिकायत सहायक",complaintText:"समस्या बताएं → औपचारिक पत्र बनाएं → कॉपी/डाउनलोड करें → आधिकारिक पोर्टल पर जमा करें।",namePlaceholder:"आपका नाम (वैकल्पिक)",statePlaceholder:"राज्य",category:"श्रेणी",location:"स्थान",locationPlaceholder:"क्षेत्र / स्थान",problem:"समस्या",problemPlaceholder:"अपनी समस्या स्पष्ट रूप से बताएं...",generateLetter:"शिकायत पत्र बनाएं",generatedLetter:"तैयार पत्र",letterPlaceholder:"आपका शिकायत पत्र यहां आएगा।",copy:"कॉपी",download:"डाउनलोड",faqEyebrow:"सावधानी से उत्तर",faqTitle:"सरकारी FAQ सहायक",faqText:"अपनी भाषा में प्रश्न पूछें। जरूरत होने पर आधिकारिक सत्यापन की सलाह दी जाएगी।",faqPlaceholder:"सरकारी सेवा से संबंधित प्रश्न पूछें...",askAi:"AI से पूछें",faqPlaceholderResult:"उत्तर यहां आएगा।",footer:"यह नागरिक सहायता सेवा है, सरकारी विभाग नहीं। महत्वपूर्ण जानकारी आधिकारिक पोर्टल पर सत्यापित करें।"},
Tamil:{tagline:"அரசு சேவைகள், எளிமையாக.",navSchemes:"திட்டங்கள்",navDocuments:"ஆவணங்கள்",navComplaints:"புகார்கள்",navFaq:"கேள்விகள்",eyebrow:"🇮🇳 குடிமக்கள் டிஜிட்டல் உதவி",hero1:"அரசு சேவைகள்,",hero2:"எளிமையாக.",heroText:"திட்டங்களை கண்டறியுங்கள், ஆவணங்களை புரிந்துகொள்ளுங்கள், தகவலை மொழிபெயர்க்குங்கள், புகார்களை தயார் செய்யுங்கள் மற்றும் அதிகாரப்பூர்வ இணைப்புகளுடன் பதில்களை பெறுங்கள்.",findSchemeBtn:"என் திட்டங்களை கண்டறி",documentBtn:"ஆவணத்தை புரிந்துகொள்",speakQuestion:"கேள்வியை பேசுங்கள்",listen:"கேளுங்கள்",card1:"திட்ட உதவியாளர்",card1s:"உங்கள் விவரங்களுக்கு ஏற்ப",card2:"ஆவண AI",card2s:"படித்து எளிமைப்படுத்து",card3:"புகார் உதவியாளர்",card3s:"முறையான கடிதம்",card4:"அரசு FAQ",card4s:"கேள்வி கேளுங்கள்",agentEyebrow:"தனிப்பட்ட திட்ட உதவியாளர்",agentTitle:"உங்களைப் பற்றி சொல்லுங்கள்.",agentText:"உங்கள் சுயவிவரத்திற்கு பொருந்தக்கூடிய திட்டங்களை காட்டுகிறோம். இது ஆரம்ப பொருத்தம் மட்டுமே.",openMyScheme:"myScheme திறக்கவும் ↗",name:"பெயர்",age:"வயது",income:"ஆண்டு குடும்ப வருமானம்",incomeLow:"₹2.5 லட்சத்திற்கு கீழ்",incomeMid:"₹2.5–5 லட்சம்",incomeHigh:"₹5 லட்சத்திற்கு மேல்",incomeUnknown:"சொல்ல விரும்பவில்லை",state:"மாநிலம்",occupation:"நான்",need:"எனக்கு உதவி",findMatches:"பொருத்தமான திட்டங்களை கண்டறி",matches:"சாத்தியமான பொருத்தங்கள்",resultTitle:"உங்கள் திட்ட முடிவுகள்",resultEmpty:"விவரங்களை உள்ளிட்டு தேவையை தேர்ந்தெடுக்கவும்.",officialSources:"அதிகாரப்பூர்வ ஆதாரங்கள்",schemeLibrary:"அரசு திட்ட நூலகம்",all:"அனைத்தும்",education:"கல்வி",healthcare:"சுகாதாரம்",women:"பெண்கள்",farmers:"விவசாயிகள்",housing:"வீடு",docEyebrow:"AI ஆவண உதவியாளர்",docTitle:"உங்கள் ஆவணத்தை புரிந்துகொள்ளுங்கள்",docText:"PDF, DOCX, TXT அல்லது படத்தை பதிவேற்றுங்கள். தேர்ந்தெடுத்த மொழியில் முக்கிய தகவல்கள் விளக்கப்படும்.",summarize:"AI சுருக்கம்",read:"கேளுங்கள்",docPlaceholder:"ஆவண முடிவு இங்கே வரும்.",languageEyebrow:"மொழி அணுகல்",translateTitle:"மொழிபெயர்ப்பு & குரல்",translateTextInfo:"பேசவும் அல்லது தட்டச்சு செய்யவும். மொழியை மாற்றினால் முழு UI மாறும்.",questionPlaceholder:"உங்கள் உரையை தட்டச்சு செய்யவும் அல்லது பேசவும்...",translate:"மொழிபெயர்",voiceOutput:"குரல் வெளியீடு",translationPlaceholder:"மொழிபெயர்ப்பு இங்கே வரும்.",complaintEyebrow:"அதிகாரப்பூர்வ சமர்ப்பிப்பு",complaintTitle:"AI புகார் உதவியாளர்",complaintText:"சிக்கலை விவரிக்கவும் → கடிதம் உருவாக்கவும் → நகலெடுக்கவும்/பதிவிறக்கவும் → அதிகாரப்பூர்வ தளத்தில் சமர்ப்பிக்கவும்.",namePlaceholder:"உங்கள் பெயர் (விருப்பம்)",statePlaceholder:"மாநிலம்",category:"வகை",location:"இடம்",locationPlaceholder:"பகுதி / இடம்",problem:"சிக்கல்",problemPlaceholder:"உங்கள் சிக்கலை தெளிவாக விவரிக்கவும்...",generateLetter:"புகார் கடிதம் உருவாக்கு",generatedLetter:"உருவாக்கப்பட்ட கடிதம்",letterPlaceholder:"உங்கள் கடிதம் இங்கே வரும்.",copy:"நகலெடு",download:"பதிவிறக்கு",faqEyebrow:"கவனமான பதில்கள்",faqTitle:"அரசு FAQ உதவியாளர்",faqText:"உங்கள் மொழியில் கேளுங்கள். தேவையானபோது அதிகாரப்பூர்வ சரிபார்ப்பை தெரிவிக்கும்.",faqPlaceholder:"அரசு சேவை தொடர்பான கேள்வி கேளுங்கள்...",askAi:"AIயிடம் கேள்",faqPlaceholderResult:"பதில் இங்கே வரும்.",footer:"இது குடிமக்கள் உதவி சேவை மட்டுமே; அரசு துறை அல்ல. முக்கிய தகவல்களை அதிகாரப்பூர்வ தளங்களில் சரிபார்க்கவும்."},
Kannada:{tagline:"ಸರ್ಕಾರಿ ಸೇವೆಗಳು, ಸರಳವಾಗಿ.",navSchemes:"ಯೋಜನೆಗಳು",navDocuments:"ದಾಖಲೆಗಳು",navComplaints:"ದೂರುಗಳು",navFaq:"ಪ್ರಶ್ನೆಗಳು",eyebrow:"🇮🇳 ನಾಗರಿಕರಿಗಾಗಿ ಡಿಜಿಟಲ್ ಸಹಾಯ",hero1:"ಸರ್ಕಾರಿ ಸೇವೆಗಳು,",hero2:"ಸರಳವಾಗಿ.",heroText:"ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ, ದಾಖಲೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಮಾಹಿತಿಯನ್ನು ಭಾಷಾಂತರಿಸಿ, ದೂರುಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಿ ಮತ್ತು ಅಧಿಕೃತ ಲಿಂಕ್‌ಗಳೊಂದಿಗೆ ಉತ್ತರ ಪಡೆಯಿರಿ.",findSchemeBtn:"ನನ್ನ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ",documentBtn:"ದಾಖಲೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ",speakQuestion:"ಪ್ರಶ್ನೆಯನ್ನು ಮಾತನಾಡಿ",listen:"ಕೇಳಿ",card1:"ಯೋಜನೆ ಸಹಾಯಕ",card1s:"ನಿಮ್ಮ ವಿವರಗಳ ಆಧಾರದಲ್ಲಿ",card2:"ದಾಖಲೆ AI",card2s:"ಓದಿ ಮತ್ತು ಸರಳಗೊಳಿಸಿ",card3:"ದೂರು ಸಹಾಯಕ",card3s:"ಔಪಚಾರಿಕ ಪತ್ರ",card4:"ಸರ್ಕಾರಿ FAQ",card4s:"ಪ್ರಶ್ನೆ ಕೇಳಿ",agentEyebrow:"ವೈಯಕ್ತಿಕ ಯೋಜನೆ ಸಹಾಯಕ",agentTitle:"ನಿಮ್ಮ ಬಗ್ಗೆ ಹೇಳಿ.",agentText:"ನಿಮ್ಮ ಪ್ರೊಫೈಲ್‌ಗೆ ಸಂಬಂಧಿಸಿದ ಯೋಜನೆಗಳನ್ನು ತೋರಿಸುತ್ತೇವೆ. ಇದು ಪ್ರಾಥಮಿಕ ಹೊಂದಾಣಿಕೆ ಮಾತ್ರ.",openMyScheme:"myScheme ತೆರೆಯಿರಿ ↗",name:"ಹೆಸರು",age:"ವಯಸ್ಸು",income:"ವಾರ್ಷಿಕ ಕುಟುಂಬ ಆದಾಯ",incomeLow:"₹2.5 ಲಕ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ",incomeMid:"₹2.5–5 ಲಕ್ಷ",incomeHigh:"₹5 ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚು",incomeUnknown:"ಹೇಳಲು ಇಷ್ಟವಿಲ್ಲ",state:"ರಾಜ್ಯ",occupation:"ನಾನು",need:"ನನಗೆ ಸಹಾಯ ಬೇಕು",findMatches:"ಸಂಬಂಧಿತ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ",matches:"ಸಂಭಾವ್ಯ ಹೊಂದಾಣಿಕೆಗಳು",resultTitle:"ನಿಮ್ಮ ಯೋಜನೆ ಫಲಿತಾಂಶಗಳು",resultEmpty:"ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ ಮತ್ತು ಅಗತ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",officialSources:"ಅಧಿಕೃತ ಮೂಲಗಳು",schemeLibrary:"ಸರ್ಕಾರಿ ಯೋಜನೆ ಗ್ರಂಥಾಲಯ",all:"ಎಲ್ಲಾ",education:"ಶಿಕ್ಷಣ",healthcare:"ಆರೋಗ್ಯ",women:"ಮಹಿಳೆಯರು",farmers:"ರೈತರು",housing:"ವಸತಿ",docEyebrow:"AI ದಾಖಲೆ ಸಹಾಯಕ",docTitle:"ನಿಮ್ಮ ದಾಖಲೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ",docText:"PDF, DOCX, TXT ಅಥವಾ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. ಆಯ್ಕೆ ಮಾಡಿದ ಭಾಷೆಯಲ್ಲಿ ಮುಖ್ಯ ಮಾಹಿತಿಯನ್ನು ವಿವರಿಸುತ್ತದೆ.",summarize:"AI ಸಾರಾಂಶ",read:"ಕೇಳಿ",docPlaceholder:"ದಾಖಲೆ ಫಲಿತಾಂಶ ಇಲ್ಲಿ ಬರುತ್ತದೆ.",languageEyebrow:"ಭಾಷಾ ಸಹಾಯ",translateTitle:"ಭಾಷಾಂತರಿಸಿ ಮತ್ತು ಕೇಳಿ",translateTextInfo:"ಮಾತನಾಡಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ. ಭಾಷೆ ಬದಲಿಸಿದರೆ ಸಂಪೂರ್ಣ UI ಬದಲಾಗುತ್ತದೆ.",questionPlaceholder:"ನಿಮ್ಮ ಪಠ್ಯವನ್ನು ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಮಾತನಾಡಿ...",translate:"ಭಾಷಾಂತರಿಸಿ",voiceOutput:"ಧ್ವನಿ ಔಟ್‌ಪುಟ್",translationPlaceholder:"ಭಾಷಾಂತರ ಇಲ್ಲಿ ಬರುತ್ತದೆ.",complaintEyebrow:"ಅಧಿಕೃತ ಸಲ್ಲಿಕೆ",complaintTitle:"AI ದೂರು ಸಹಾಯಕ",complaintText:"ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ → ಔಪಚಾರಿಕ ಪತ್ರ ರಚಿಸಿ → ನಕಲಿಸಿ/ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ → ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಸಲ್ಲಿಸಿ.",namePlaceholder:"ನಿಮ್ಮ ಹೆಸರು (ಐಚ್ಛಿಕ)",statePlaceholder:"ರಾಜ್ಯ",category:"ವರ್ಗ",location:"ಸ್ಥಳ",locationPlaceholder:"ಪ್ರದೇಶ / ಸ್ಥಳ",problem:"ಸಮಸ್ಯೆ",problemPlaceholder:"ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ವಿವರಿಸಿ...",generateLetter:"ದೂರು ಪತ್ರ ರಚಿಸಿ",generatedLetter:"ರಚಿಸಿದ ಪತ್ರ",letterPlaceholder:"ನಿಮ್ಮ ಪತ್ರ ಇಲ್ಲಿ ಬರುತ್ತದೆ.",copy:"ನಕಲಿಸಿ",download:"ಡೌನ್‌ಲೋಡ್",faqEyebrow:"ಎಚ್ಚರಿಕೆಯ ಉತ್ತರಗಳು",faqTitle:"ಸರ್ಕಾರಿ FAQ ಸಹಾಯಕ",faqText:"ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಪ್ರಶ್ನೆ ಕೇಳಿ. ಅಗತ್ಯವಿದ್ದರೆ ಅಧಿಕೃತ ಪರಿಶೀಲನೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ.",faqPlaceholder:"ಸರ್ಕಾರಿ ಸೇವೆಯ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ...",askAi:"AI ಕೇಳಿ",faqPlaceholderResult:"ಉತ್ತರ ಇಲ್ಲಿ ಬರುತ್ತದೆ.",footer:"ಇದು ನಾಗರಿಕ ಸಹಾಯ ಸೇವೆ ಮಾತ್ರ; ಸರ್ಕಾರಿ ಇಲಾಖೆ ಅಲ್ಲ. ಪ್ರಮುಖ ಮಾಹಿತಿಯನ್ನು ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗಳಲ್ಲಿ ಪರಿಶೀಲಿಸಿ."}
};
const voiceLang={English:"en-IN",Telugu:"te-IN",Hindi:"hi-IN",Tamil:"ta-IN",Kannada:"kn-IN"};
function translateSelectOptions(lang){
 const maps={
  Telugu:{profileOccupation:["విద్యార్థి","రైతు","మహిళ","ఉద్యోగం కోసం చూస్తున్నవారు","వృద్ధులు","సాధారణ పౌరుడు"],profileNeed:["విద్య","ఆరోగ్యం","ఇల్లు","ఉపాధి","ఆర్థిక సహాయం","ఇతర"],category:["సాధారణ","రోడ్లు","నీరు","విద్యుత్","మునిసిపాలిటీ","రవాణా","వినియోగదారు","సైబర్ నేరం"],target:["తెలుగు","ఇంగ్లీష్","హిందీ","తమిళం","కన్నడ"]},
  Hindi:{profileOccupation:["छात्र","किसान","महिला","नौकरी खोजने वाला","वरिष्ठ नागरिक","सामान्य नागरिक"],profileNeed:["शिक्षा","स्वास्थ्य","आवास","रोजगार","वित्तीय सहायता","अन्य"],category:["सामान्य","सड़क","पानी","बिजली","नगरपालिका","परिवहन","उपभोक्ता","साइबर अपराध"],target:["तेलुगु","अंग्रेज़ी","हिन्दी","तमिल","कन्नड़"]},
  Tamil:{profileOccupation:["மாணவர்","விவசாயி","பெண்","வேலை தேடுபவர்","மூத்த குடிமகன்","பொதுமகன்"],profileNeed:["கல்வி","சுகாதாரம்","வீடு","வேலைவாய்ப்பு","நிதி உதவி","மற்றவை"],category:["பொது","சாலைகள்","நீர்","மின்சாரம்","நகராட்சி","போக்குவரத்து","நுகர்வோர்","சைபர் குற்றம்"],target:["தெலுங்கு","ஆங்கிலம்","இந்தி","தமிழ்","கன்னடம்"]},
  Kannada:{profileOccupation:["ವಿದ್ಯಾರ್ಥಿ","ರೈತ","ಮಹಿಳೆ","ಉದ್ಯೋಗ ಹುಡುಕುವವರು","ಹಿರಿಯ ನಾಗರಿಕ","ಸಾಮಾನ್ಯ ನಾಗರಿಕ"],profileNeed:["ಶಿಕ್ಷಣ","ಆರೋಗ್ಯ","ವಸತಿ","ಉದ್ಯೋಗ","ಆರ್ಥಿಕ ಸಹಾಯ","ಇತರೆ"],category:["ಸಾಮಾನ್ಯ","ರಸ್ತೆಗಳು","ನೀರು","ವಿದ್ಯುತ್","ಪುರಸಭೆ","ಸಾರಿಗೆ","ಗ್ರಾಹಕ","ಸೈಬರ್ ಅಪರಾಧ"],target:["ತೆಲುಗು","ಇಂಗ್ಲಿಷ್","ಹಿಂದಿ","ತಮಿಳು","ಕನ್ನಡ"]}
 };
 const english={profileOccupation:["Student","Farmer","Woman","Job seeker","Senior citizen","General citizen"],profileNeed:["Education","Healthcare","Housing","Employment","Financial support","Other"],category:["General","Roads","Water","Electricity","Municipality","Transport","Consumer","Cyber Crime"],target:["Telugu","English","Hindi","Tamil","Kannada"]};
 const m=maps[lang]||english;
 ["profileOccupation","profileNeed","category","target"].forEach(id=>{const el=$(id);if(!el)return;const values=english[id];[...el.options].forEach((o,i)=>{o.value=values[i];o.textContent=m[id][i]});});
}
function applyLanguage(lang){const d=I18N[lang]||I18N.English;translateSelectOptions(lang);document.documentElement.lang=voiceLang[lang].split('-')[0];document.querySelectorAll('[data-i18n]').forEach(el=>{let k=el.dataset.i18n;if(d[k])el.textContent=d[k]});document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{let k=el.dataset.i18nPlaceholder;if(d[k])el.placeholder=d[k]});document.title=lang==='English'?'AI Govt Assistant':'AI Govt Assistant';renderSchemes(currentCategory);}
$('lang').addEventListener('change',e=>{applyLanguage(e.target.value);});

let currentCategory='All';
async function loadSchemes(cat='All'){currentCategory=cat;try{let d=await api('/api/schemes?'+new URLSearchParams({category:cat}));$('schemeGrid').innerHTML=d.map(s=>`<article class="scheme"><small>${s.category}</small><h3>${s.name}</h3><p>${s.summary}</p><a target="_blank" rel="noopener" href="${s.source}">Official source ↗</a></article>`).join('')}catch(e){$('schemeGrid').innerHTML=`<div class="panel">${e.message}</div>`}}
function renderSchemes(cat){loadSchemes(cat)}
document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');loadSchemes(b.dataset.c)});

async function findMySchemes(){

    const body = {

        name: $('profileName').value.trim(),

        age: $('profileAge').value,

        income: $('profileIncome').value,

        state: $('profileState').value.trim(),

        occupation: $('profileOccupation').value,

        need: $('profileNeed').value,

        language: $('lang').value

    };


    if(!body.age){

        alert('Please enter your age.');

        return;
    }


    $('schemeResults').innerHTML = `
        <div class="empty-result">
            Finding relevant government schemes...
        </div>
    `;


    try{

        const d = await api(
            '/api/scheme-agent',
            {
                method:'POST',

                headers:{
                    'Content-Type':'application/json'
                },

                body:JSON.stringify(body)
            }
        );


        if(!d.schemes || d.schemes.length === 0){

            $('schemeResults').innerHTML = `
                <div class="empty-result">
                    No matching schemes were found based on the
                    current information. Please check the official
                    myScheme portal.
                </div>
            `;

            return;
        }


        $('schemeResults').innerHTML =

            d.schemes.map(s => `

                <article class="match-card">

                    <h4>
                        ${s.name}
                    </h4>

                    <div class="match-meta">

                        ${s.category}
                        ·
                        ${s.match_reason || ''}

                    </div>

                    <p>
                        ${s.summary}
                    </p>

                    <a
                        target="_blank"
                        rel="noopener"
                        href="${s.source}"
                    >
                        Open Official Source ↗
                    </a>

                </article>

            `).join('')

            +

            `<p class="muted">

                ${d.disclaimer || ''}

            </p>`;


    }catch(e){

        $('schemeResults').innerHTML = `

            <div class="empty-result">

                ${e.message}

            </div>

        `;
    }
}
async function summarize(){let f=$('file').files[0];if(!f)return alert('Choose a document or image.');let fd=new FormData();fd.append('file',f);fd.append('language',$('lang').value);$('summary').textContent='Analyzing...';try{$('summary').textContent=(await api('/api/ai/summarize',{method:'POST',body:fd})).result}catch(e){$('summary').textContent=e.message}}
async function translate(){let t=$('question').value.trim();if(!t)return alert('Enter or speak text.');$('translation').textContent='Translating...';try{$('translation').textContent=(await api('/api/ai/translate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:t,target:$('target').value})})).result}catch(e){$('translation').textContent=e.message}}
async function draftComplaint(){let body={name:$('name').value,state:$('state').value,category:$('category').value,location:$('location').value,description:$('description').value,language:$('lang').value};if(!body.description)return alert('Describe the complaint.');$('letter').textContent='Preparing formal letter...';$('portal').innerHTML='';try{let d=await api('/api/complaints/draft',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});$('letter').textContent=d.letter;$('portal').innerHTML=`<div class="match-card"><h4>${d.portal.name}</h4><p>${d.portal.note}</p><a class="official-link" target="_blank" rel="noopener" href="${d.portal.url}">Open Official Submission Portal ↗</a></div>`}catch(e){$('letter').textContent=e.message}}
async function askFaq(){let q=$('faqQ').value.trim();if(!q)return alert('Ask a question.');$('faqA').textContent='Checking...';try{$('faqA').textContent=(await api('/api/ai/faq',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:q,language:$('lang').value,state:$('profileState').value||$('state').value})})).result}catch(e){$('faqA').textContent=e.message}}
function copyLetter(){navigator.clipboard.writeText($('letter').textContent).then(()=>alert('Complaint letter copied.')).catch(()=>alert('Copy failed. Please select and copy the letter manually.'))}
function downloadLetter(){const blob=new Blob([$('letter').textContent],{type:'text/plain;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='government-complaint-letter.txt';a.click();URL.revokeObjectURL(a.href)}
function speak(id){let text=$(id).innerText||$(id).textContent;if(!text||text.length<2)return;if(!('speechSynthesis'in window))return alert('Voice output is not supported here.');let u=new SpeechSynthesisUtterance(text);u.lang=voiceLang[$('lang').value]||'en-IN';u.rate=.95;speechSynthesis.cancel();speechSynthesis.speak(u)}
function voiceTo(id){let SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR)return alert('Use Chrome or Edge for voice input.');let r=new SR();r.lang=voiceLang[$('lang').value]||'en-IN';r.interimResults=false;r.maxAlternatives=1;r.onstart=()=>{};r.onresult=e=>{$(id).value+=($(id).value?' ':'')+e.results[0][0].transcript;};r.onerror=e=>alert('Voice error: '+e.error);r.start()}
function togglePageVoice(){if(speechSynthesis.speaking){speechSynthesis.cancel();return}const ids=['heroCopyText','schemeResults','summary','translation','letter','faqA'];let text=ids.map(id=>$(id)?.innerText||'').filter(Boolean).join('. ');speakText(text)}
function speakText(text){if(!text)return;let u=new SpeechSynthesisUtterance(text);u.lang=voiceLang[$('lang').value]||'en-IN';speechSynthesis.cancel();speechSynthesis.speak(u)}

window.addEventListener("DOMContentLoaded", () => {
    const selectedLanguage = $("lang").value || "English";

    applyLanguage(selectedLanguage);
    loadSchemes("All");
});