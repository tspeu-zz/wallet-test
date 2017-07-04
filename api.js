/*https://developers.coinbase.com/docs/wallet/guides/bitcoin-wallet*/
var Client = require('coinbase');
var cliente = new Client({
	'apiKey': 'apiKey',
	'apiSecret': 'secretKey',
	'version': 'YYYY-MM-DD'
});

cliente.getAccount('primary', function(err, primaryAccount){
// Generate a new bitcoin address for the account from previous steps:
	account.createAddress(null. function(err, address){
// Send coins to the new account from your primary account:
		primaryAccount.sendMoney({
			'to': address.address,
			'amount': '0.01',
			'currency': 'BTC',
			'description': 'For bein awsome!'},
				function(err, tx){
					console.log(tx);
				});
	});	
});
//Now you can check your primary account balance. Notice how the balance changed?

cliente.getAccount(primaryAccount.id, function(err,acct){
	console.log(acct.name +' : '+ acct.balance.amount + ' ' + acct.balance.currency);	
});

/*you’ve learned how to:

Create a bitcoin wallet
Authenticate with the Coinbase API
Set appropriate permissions
Send bitcoin programmatically
Retrieve data from your bitcoin wallet*/