const { launch } = require("qawolf");
const selectors = require("../selectors/register");

describe('register', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "http://a8e92f0d68ff64c7ea384f3528710128-1249166493.us-east-1.elb.amazonaws.com:443/" });
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