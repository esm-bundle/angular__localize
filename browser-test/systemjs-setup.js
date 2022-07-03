document.head.appendChild(
  Object.assign(document.createElement("script"), {
    type: "systemjs-importmap",
    textContent: `
      {
        "imports": {
          "rxjs": "https://cdn.jsdelivr.net/npm/@esm-bundle/rxjs/system/es2015/rxjs.min.js",
          "rxjs/operators": "https://cdn.jsdelivr.net/npm/@esm-bundle/rxjs/system/es2015/rxjs-operators.min.js",
          "@angular/compiler": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__compiler/system/es2015/ivy/angular-compiler.min.js",
          "@angular/localize": "/base/system/es2015/ivy/angular-localize.min.js"
        }
      }`,
  })
);
