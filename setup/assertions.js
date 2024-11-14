(async () => {
    const chai = await import('chai');

    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should;
})();
