document.querySelector('#form').addEventListener('submit', (e) => {
	e.preventDefault();
	let codigo = document.getElementById('codigo').value;
	let senha = document.getElementById('senha').value;
	fetch('/sessions', {
		method: 'POST',
		headers: {
			// Authorization: `Bearer ${jwt}`,
			'Content-type': 'application/json',
		},

		body: JSON.stringify({
			codigo,
			senha,
		}),
	})
		.then((resp) => {
			if (!resp.ok) return resp.json();
			return resp.json();
		})
		.then((data) => {
			if (data.error) {
				document.querySelector('#message').style.display = 'block';
				document.querySelector('#message').innerHTML = data.error;
			} else {
				document.querySelector('#message').style.display = 'none';

				var req = new XMLHttpRequest();
				req.open('get', '/', true);
				req.setRequestHeader('Authorization', 'Bearer ' + data.token);
				window.location.href = '/';
			}
		})
		.catch((e) => {
			console.log(e);
		});
});
