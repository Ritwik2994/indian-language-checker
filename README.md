# What is **Indian Language Checker** ?

It checks whether the language is Indian or not

# Installation

`npm i indian-language-checker`

or

`yarn add indian-language-checker`

Then...

```javascript
import { isIND } from 'rlt-checker';

console.log(isIND('hin')); //true
```

## Options

**rlt-checker** contains 4 functions:

- `isIND(langCode:string)` - _langCode_ is required.
- `listINDLangCodes()`
- `listINDLanguages()`
- `listINDLangCodesAndCountries()`
