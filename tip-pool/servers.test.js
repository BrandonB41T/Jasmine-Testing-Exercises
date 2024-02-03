describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add new server on submitServerInfo() if name input is an empty string', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should generate no empty table rows on updateServeTable()', function () {
    submitServerInfo();

    let tds = document.querySelectorAll('#serverTable tbody tr td');
    expect(tds.length).toEqual(2);
    expect(tds[0].innerText).not.toEqual('');
    expect(tds[1].innerText).not.toEqual('');
  })

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
