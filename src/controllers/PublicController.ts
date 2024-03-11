import { Request, Response } from 'express';

class PublicController {
	index(request: Request, response: Response) {
		response.render('public-index');
	}

	login(request: Request, response: Response) {
		// response.setHeader('Content-Type', 'application/json');
		response.render('login', { error: false });
	}

	logout(request: Request, response: Response) {
		delete request.cookies.token;
		response.redirect('/login');
	}
}

export default new PublicController();
