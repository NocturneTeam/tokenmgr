module.exports = class {
  tokens = [];

  /**
   * Create a token.
   * @param {number} length Length of the token.
   * @param {{allUpperCase: boolean, allLowerCase: boolean, avoidNumbers: boolean}} options Token-gen options.
   */
  create(
    length = 64,
    options = {
      allLowerCase: false,
      allUpperCase: false,
      avoidNumbers: false,
    }
  ) {
    if (!length || !options) return false;
    let output = "";
    let chars = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];

    if (options.avoidNumbers) {
      chars = chars.slice(0, chars.length - 10);
    }

    try {
      for (let i = 0; i < length; i++) {
        if (options.allLowerCase) {
          output +=
            chars[Math.floor(Math.random() * chars.length)].toLowerCase();
        } else if (options.allUpperCase) {
          output +=
            chars[Math.floor(Math.random() * chars.length)].toUpperCase();
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      return output;
    }
  }

  /**
   * Store a token and assign it to a name.
   * @param {string} name Name of the token.
   * @param {string} token Token to store.
   */
  store(name, token) {
    this.tokens[name] = token;
  }

  /**
   * Unstore a token.
   * @param {string} name Name of the token.
   */
  del(name) {
    this.tokens[name] = null;
  }

  /**
   * Get a token.
   * @param {string} name Name of the token.
   */
  get(name) {
    return this.tokens[name];
  }
};
