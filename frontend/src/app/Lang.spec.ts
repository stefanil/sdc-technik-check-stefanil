import {LANGUAGE_CODE_DEFAULT, LANGUAGE_CODE_GERMAN, LANGUAGE_CODE_ENGLISH, extractLanguageCode} from "./Lang";

describe("extractLanguageCode", () => {
    it("should return default language when lang is not provided", () => {
        expect(extractLanguageCode(undefined)).toEqual(LANGUAGE_CODE_DEFAULT);
        expect(extractLanguageCode("")).toEqual(LANGUAGE_CODE_DEFAULT);
        expect(extractLanguageCode("-")).toEqual(LANGUAGE_CODE_DEFAULT);
    });
    it("should return default language when invalid lang is provided", () => {
        expect(extractLanguageCode("xx")).toEqual(LANGUAGE_CODE_DEFAULT);
        expect(extractLanguageCode("-xx")).toEqual(LANGUAGE_CODE_DEFAULT);
        expect(extractLanguageCode("xx-")).toEqual(LANGUAGE_CODE_DEFAULT);
        expect(extractLanguageCode("xx-yy")).toEqual(LANGUAGE_CODE_DEFAULT);
    });
    it("should return correct lang of lang", () => {
        expect(extractLanguageCode("de")).toEqual(LANGUAGE_CODE_GERMAN);
        expect(extractLanguageCode("en")).toEqual(LANGUAGE_CODE_ENGLISH);
    });
    it("should return correct lang of locale", () => {
        expect(extractLanguageCode("de-de")).toEqual(LANGUAGE_CODE_GERMAN);
        expect(extractLanguageCode("en-us")).toEqual(LANGUAGE_CODE_ENGLISH);
    });

});
