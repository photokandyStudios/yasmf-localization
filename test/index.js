"use strict";
/* globals describe, it */

import Localization from "../src/index.js";
let currentLocale = require("locale2");
if (!currentLocale) { currentLocale = "en"; }

require("should");

describe("Localization", () => {
    describe("Loading Locale", () => {
        let L = new Localization();
        it("Should be " + currentLocale, (done) => {
            L.loadLocale().then( (r) => {
                r.should.be.equal(currentLocale);
                done();
            }).catch( (err) => done(err));
        });
    });
    describe("Simple Translation", () => {
        let L = new Localization();
        it("Should return phrase for key", (done) => {
            L.loadLocale().then( () => {
                              L.loadTranslations(require("./localization/root/messages.json"));
                              let lookup = L.T("key");

                              lookup.should.be.equal("phrase");
                              done();
                          })
             .catch( (err) => done(err));
        });
    });
    describe("Interpolated Translation", () => {
        let L = new Localization();
        it("Should return hello, Kerri for key2", (done) => {
            L.loadLocale().then( () => {
                              L.loadTranslations(require("./localization/root/messages.json"));
                              let lookup = L.T("key2", {name:"Kerri"});

                              lookup.should.be.equal("hello, Kerri");
                              done();
                          })
             .catch( (err) => done(err));
        });
    });
});
