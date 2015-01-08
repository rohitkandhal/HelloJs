var name = 'rk',
	obj = {
		name: 'asit',
		whoIam: function() {
			var name = 'karan';

			console.log(this.name);

			setTimeout(function(){
				console.log(this.name);
			}, 100);
		}
	};

obj.whoIam();

// asit, rk