import React, { useState } from 'react'

function LanguageTranslator() {
    const countries = {
        "en-GB": "English",
        "hi-IN": "Hindi",
        "gu-IN": "Gujarati",
        "kn-IN": "Kannada",
        "pa-IN": "Panjabi",
        "te-IN": "Telugu",
        "bn-IN": "Bengali",
        "ta-LK": "Tamil",
        // "am-ET": "Amharic",
        "ar-SA": "Arabic",
        // "be-BY": "Bielarus",
        // "bem-ZM": "Bemba",
        // "bi-VU": "Bislama",
        // "bjs-BB": "Bajan",
        "bo-CN": "Tibetan",
        // "br-FR": "Breton",
        // "bs-BA": "Bosnian",
        // "ca-ES": "Catalan",
        // "cop-EG": "Coptic",
        // "cs-CZ": "Czech",
        // "cy-GB": "Welsh",
        // "da-DK": "Danish",
        // "dz-BT": "Dzongkha",
        "de-DE": "German",
        "dv-MV": "Maldivian",
        "el-GR": "Greek",
        "es-ES": "Spanish",
        // "et-EE": "Estonian",
        // "eu-ES": "Basque",
        "fa-IR": "Persian",
        "fi-FI": "Finnish",
        // "fn-FNG": "Fanagalo",
        // "fo-FO": "Faroese",
        "fr-FR": "French",
        // "gl-ES": "Galician",
        // "ha-NE": "Hausa",
        // "he-IL": "Hebrew",
        // "hr-HR": "Croatian",
        // "hu-HU": "Hungarian",
        "id-ID": "Indonesian",
        "is-IS": "Icelandic",
        "it-IT": "Italian",
        "ja-JP": "Japanese",
        // "kk-KZ": "Kazakh",
        // "km-KM": "Khmer",
        "ko-KR": "Korean",
        "ku-TR": "Kurdish",
        // "ky-KG": "Kyrgyz",
        "la-VA": "Latin",
        // "lo-LA": "Lao",
        // "lv-LV": "Latvian",
        // "men-SL": "Mende",
        // "mg-MG": "Malagasy",
        // "mi-NZ": "Maori",
        "ms-MY": "Malay",
        // "mt-MT": "Maltese",
        // "my-MM": "Burmese",
        "ne-NP": "Nepali",
        // "niu-NU": "Niuean",
        "nl-NL": "Dutch",
        // "no-NO": "Norwegian",
        // "ny-MW": "Nyanja",
        "ur-PK": "Pakistani",
        // "pau-PW": "Palauan",
        // "ps-PK": "Pashto",
        // "pis-SB": "Pijin",
        // "pl-PL": "Polish",
        "pt-PT": "Portuguese",
        // "rn-BI": "Kirundi",
        "ro-RO": "Romanian",
        "ru-RU": "Russian",
        // "sg-CF": "Sango",
        // "si-LK": "Sinhala",
        // "sk-SK": "Slovak",
        // "sm-WS": "Samoan",
        // "sn-ZW": "Shona",
        // "so-SO": "Somali",
        // "sq-AL": "Albanian",
        "sr-RS": "Serbian",
        "sv-SE": "Swedish",
        // "sw-SZ": "Swahili",
        // "tet-TL": "Tetum",
        // "tg-TJ": "Tajik",
        "th-TH": "Thai",
        // "ti-TI": "Tigrinya",
        // "tk-TM": "Turkmen",
        // "tl-PH": "Tagalog",
        // "tn-BW": "Tswana",
        // "to-TO": "Tongan",
        "tr-TR": "Turkish",
        "uk-UA": "Ukrainian",
        // "uz-UZ": "Uzbek",
        "vi-VN": "Vietnamese",
        // "wo-SN": "Wolof",
        // "xh-ZA": "Xhosa",
        // "yi-YD": "Yiddish",
        "zu-ZA": "Zulu"
    }
    const keys = Object.keys(countries);

    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const [currentLang, setCurrentLang] = useState("en-GB");
    const [translateLang, setTranslateLang] = useState("hi-IN");

    const translateText = () => {
        // console.log(currentLang+" "+inputText+" "+translateLang)
        if(inputText===""){
            alert("Please write something!")
        }else{
            fetch(`https://api.mymemory.translated.net/get?q=${inputText}!&langpair=${currentLang}|${translateLang}&de=${process.env.REACT_APP_EMAIL}`)
            .then(async(res) => 
                await res.json()
            ).then((data) => {
                console.log(data.responseData.translatedText);
                setOutputText(data.responseData.translatedText);
            })
        }
    }

    const swapLanguage = () => {
        let tempLang = currentLang
        setCurrentLang(translateLang)
        setTranslateLang(tempLang)
        console.log("current lang : "+currentLang)
        console.log("translate lang : "+translateLang) 

        const tempText = inputText
        setInputText(outputText)
        setOutputText(tempText)
    }

    const refereshPage = () => {
        setInputText("")
        setOutputText("")
        setCurrentLang("en-GB")
        setTranslateLang("hi-IN")
    }

    return (
        <>
            <i className="fa-solid fa-arrows-rotate refersh-icon" onClick={()=>refereshPage()}></i>
            <div className='center'>
                <div className='box'>

                    <div className='languageOption'>
                        <select className='languateSelect' onChange={(e) => setCurrentLang(e.target.value)}>
                            {/* <option defaultValue={currentLang} value={currentLang}>{countries[currentLang]}</option> */}
                            <>
                            {
                                keys.map((key) => (
                                    key === currentLang ?
                                    <option selected value={key} key={key}>{countries[key]}</option>
                                    :
                                    <option value={key} key={key}>{countries[key]}</option>
                                ))
                            }
                            </>
                        </select>
                        <i className="fa-solid fa-arrow-right-arrow-left" onClick={()=>swapLanguage()} style={{cursor:"pointer"}}></i>
                        <select className='languateSelect' onChange={(e) => setTranslateLang(e.target.value)}>
                            {/* <option defaultValue={translateLang} value={translateLang}>{countries[translateLang]}</option> */}
                            <>
                            {
                                keys.map((key) => (
                                    key === translateLang ?
                                    <option selected value={key} key={key}>{countries[key] }</option>
                                    :
                                    <option value={key} key={key}>{countries[key]}</option>
                                ))
                            }
                            </>
                        </select>
                    </div>

                    <div className='textareaBox'>
                        <textarea className='textarea input-text' placeholder='Enter Your Text Here' value={inputText} onChange={(e) => setInputText(e.target.value)}></textarea>
                        <textarea className='textarea output-text' placeholder='Translation' value={outputText} onChange={(e) => setOutputText(e.target.value)}></textarea>
                    </div>

                    <div className='translateBtn'>
                            <button onClick={()=>translateText()}>Translate Text</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LanguageTranslator