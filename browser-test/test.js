describe("@esm-bundle/angular__localize", () => {
  describe("@angular/localize", () => {
    ["es2015", "es2020"].forEach((ecma) => {
      it(`can load the System.register ${ecma} bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-localize.js`
        );
        expect(m.loadTranslations).toBeDefined();
      });

      it(`can load the System.register ${ecma} prod bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-localize.min.js`
        );
        expect(m.loadTranslations).toBeDefined();
      });
    });
  });

  describe("@angular/localize/init", () => {
    ["es2015", "es2020"].forEach((ecma) => {
      it(`can load the System.register ${ecma} bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-init.js`
        );
        expect(m.$localize).toBeDefined();
      });

      it(`can load the System.register ${ecma} prod bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-init.min.js`
        );
        expect(m.$localize).toBeDefined();
      });
    });
  });
});
