const { launch } = require("qawolf");
const selectors = require("../selectors/register");

describe('register', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "http://aa024f0666f7045c295848cca93924ff-1745345070.us-east-1.elb.amazonaws.com:443/" });
  });

  afterAll(() => browser.close());
  
  it('can click "Register" link', async () => {
    await browser.click(selectors[0]);
  });
  
  it('can click "name" input', async () => {
    await browser.click(selectors[1]);
  });
  
  it('can type into "name" input', async () => {
    await browser.type(selectors[2], "Ben");
  });
  
  it("can Tab", async () => {
    await browser.type(selectors[3], "↓Tab↑Tab");
  });
  
  it('can type into "email" input', async () => {
    await browser.type(selectors[4], "ben@rmit.edu.au");
  });
  
  it("can Tab", async () => {
    await browser.type(selectors[5], "↓Tab↑Tab");
  });
  
  it('can type into "password" input', async () => {
    await browser.type(selectors[6], "1234");
  });
  
  it("can Tab", async () => {
    await browser.type(selectors[7], "↓Tab↑Tab");
  });
  
  it('can type into "password2" input', async () => {
    await browser.type(selectors[8], "1234");
  });
  
  it('can click "Submit" button', async () => {
    await browser.click(selectors[9]);
  });
});