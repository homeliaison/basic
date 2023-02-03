const Basic = function () {
  const Mother = require(process.cwd() + "/apps/mother.js");
  this.mother = new Mother();
}

Basic.prototype.basicConnect = async function () {
  try {
    const BasicLounge = require(process.cwd() + "/apps/basicLounge/basicLounge.js");
    const app = new BasicLounge();
    await app.basicConnect();
  } catch (e) {
    console.log(e);
  }
}

// EXE --------------------------------------------------------------------------------------

const robot = new Basic();
const MENU = {
  basic: async function () {
    try {
      await robot.basicConnect();
    } catch (e) {
      console.log(e);
    }
  }
};
let launchingFunc;

launchingFunc = MENU[process.argv[2]];
if (launchingFunc !== undefined) {
  launchingFunc().catch((err) => { console.log(err); });
} else {
  console.log("invalid menu");
}
