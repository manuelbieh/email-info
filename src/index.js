module.exports = {

	parse(email) {

		let tld;
		let provider;
		let division;

		let mail = email.split('@');
		let host = mail[1].split('.');
		
		if(!host || host.length < 2) {
			throw new Error('Invalid email address');
		}

		[
			tld, 
			provider, 
			division
		] = [
			host[host.length-1], 
			host[host.length-2], 
			host[host.length-3]
		];

		console.log(provider, tld);

	}

};

