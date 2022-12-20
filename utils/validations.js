export function isValidHexaCode(str) {
  // Regex to check valid
  // hexadecimalColor_code
  let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

  // if str
  // is empty return false
  if (str == null) {
    return false;
  }

  // Return true if the str
  // matched the ReGex
  if (regex.test(str) == true) {
    return true;
  } else {
    return false;
  }
}

// Function to check validity
// of the color code
export function isValidRGB(R, G, B) {
  if (R < 0 || R > 255) return false;
  else if (G < 0 || G > 255) return false;
  else if (B < 0 || B > 255) return false;
  else return true;
}
