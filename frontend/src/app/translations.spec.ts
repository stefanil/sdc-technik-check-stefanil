import {i18n} from "./translations";
import * as _ from "lodash";

describe("translations", () => {

    it("de and en should contain the same keys", () => {
        expect(
            _(Object.keys(i18n.translations.en))
                .difference(Object.keys(i18n.translations.de))
                .value()
                .length === 0
        ).toBeTruthy();
    });

});
