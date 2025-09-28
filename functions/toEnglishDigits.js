const toEnglishDigits = (str, isMobile = true) => {
  if (!str) {
    return str;
  }
  const persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
  const arabicNumbers = ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '٠'];
  const englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  let string = str
    .split('')
    .map(
      (c) =>
        englishNumbers[persianNumbers.indexOf(c)] ||
        englishNumbers[arabicNumbers.indexOf(c)] ||
        c
    )
    .join('');

  if (isMobile) {
    if (string[0] != '0') {
      string = '0' + string;
    }
  }

  return string;
};

export default toEnglishDigits;
