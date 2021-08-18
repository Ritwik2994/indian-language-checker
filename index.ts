//List of LangCodes and Languages that were spoken in India
const indLanguageList = {
    hin: 'Hindi',
    pun: 'Punjabi',
    mah: 'Marathi',
    tm: 'Tamil',
    te: 'Telegu',
    mal: 'Malayalam',
    ben: 'Bengali',
    kan: 'Kannada',
    guj: 'Gujarati',
    mai: 'Maithli',
    bhoj: 'Bhojpuri',
    har: 'Haryanvi',
  };
  
  const isIND = (langCode: string) => indLanguageList.hasOwnProperty(langCode);
  
  const listINDLangCodes = () => Object.keys(indLanguageList);
  
  const listINDLanguages = () => Object.values(indLanguageList);
  
  const listINDLangCodesAndCountries = () => indLanguageList;
  
  module.exports = {
    isIND: isIND,
    listINDLangCodes: listINDLangCodes,
    listINDLanguages: listINDLanguages,
    listINDLangCodesAndCountries: listINDLangCodesAndCountries,
  };