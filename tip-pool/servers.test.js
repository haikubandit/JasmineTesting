describe('Servers test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		serverNameInput.value = 'Alice';
	});

	it('should add a new server to allServers on submitServerInfo()', function() {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
	});

	it('should create table row element and pass to appendTd function with input value', function() {
		allServers = { server1: { serverName: 'Alice' } };
		updateServerTable();

		expect(serverTbody.querySelectorAll('tr').length).toEqual(1);
	});

	afterEach(function() {
		// teardown logic
		serverNameInput.value = '';
		allServers = {};
		serverTbody.innerHTML = '';
	});
});
