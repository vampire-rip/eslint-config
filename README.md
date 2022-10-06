eslint config for vampire project(react-ts based on xo)

## How to use

```
pnpm install -D @vampire.rip/eslint-config
```

then create `.eslintrc` at desired location with:

```js
{
  "root": true,
  "extends": ["@vampire.rip"]
}
```

then create `.prettierrc` at desired location with:

```json
{
  "$schema": "http://json.schemastore.org/prettierrc",
  "semi": true,
  "singleQuote": true,
  "arrowParens": "always",
  "trailingComma": "all",
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 120,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "bracketSpacing": true,
  "endOfLine": "lf",
  "vueIndentScriptAndStyle": false
}
```

That's all.

## FAQ

### Overrides some existing rule

```jsonc
{
  "overrides": [
    {
      "files": ["**/*.{ts,tsx,mts,mtsx}"],
      // your rules here
      "rules": {}
    }
  ]
}
```

### It complains about `parserOptions.project` has been set for ...

If add these files to `tsconfig.json` is not possible, create a new file `tsconfig-eslint.json`:

```jsonc
{
  "extends": "./tsconfig.json",
  // complaining files here:
  "include": [""]
}
```

change `.eslintrc`:

```jsonc
{
  "overrides": [
    {
      // complaining files here:
      "files": [""],
      "parserOptions": {
        "project": "./tsconfig-eslint.json"
      }
    }
  ]
}
```

Then it should be ok.
