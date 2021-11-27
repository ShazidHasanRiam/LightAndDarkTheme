const rewire = require("rewire");
const script = rewire("./script");
const switchTheme = script.__get__("switchTheme");
// @ponicode
describe("switchTheme", () => {
  test("0", () => {
    let result = switchTheme({ target: { checked: true } });
    expect(result).toMatchSnapshot();
  });

  test("1", () => {
    let result = switchTheme({ target: { checked: false } });
    expect(result).toMatchSnapshot();
  });

  test("2", () => {
    let result = switchTheme(undefined);
    expect(result).toMatchSnapshot();
  });
});
