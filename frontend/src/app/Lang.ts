export const LANGUAGE_CODE_GERMAN: string = "de";
export const LANGUAGE_CODE_ENGLISH: string = "en";
export const LANGUAGE_CODE_DEFAULT: string = LANGUAGE_CODE_ENGLISH;

export const getLang = () => {
    const queryLang = getLangFromQuery();
    const localStorageLang = localStorage.getItem("lang");
    if (queryLang) {
        localStorage.setItem("lang", queryLang);
    }
    const systemLang = window.navigator.language;
    const localeOrLang = queryLang || localStorageLang || systemLang || LANGUAGE_CODE_DEFAULT;

    return extractLanguageCode(localeOrLang);
};

const getLangFromQuery = () => {
    const queryRegex = /[?&](\w+)=(\w+)/g;
    const query = window.location.search;
    let match = queryRegex.exec(query);
    let queryLang;
    while (match != null && !queryLang) {
        if (match[1] === "lang") {
            queryLang = match[2];
        } else {
            match = queryRegex.exec(query);
        }
    }
    return queryLang;
};

export const extractLanguageCode = (localeOrLang: string) => {
    const langAndCountry = localeOrLang && localeOrLang.split("-");
    if (langAndCountry && langAndCountry.length > 0 && langAndCountry[0].length === 2) {
        if (langAndCountry[0] === LANGUAGE_CODE_GERMAN) {
            return LANGUAGE_CODE_GERMAN;
        }
    }
    return LANGUAGE_CODE_DEFAULT;
};
