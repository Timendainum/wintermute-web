module.exports = (app) => {
	"use strict";

	app.get("/status", (req, res) => {
		res.send({
			message: "hello"
		})
	});

	app.post("/register", (req, res) => {
		res.send({
			message: `Hello ${req.body.email}, your user was registered!`,
			email: `${req.body.email}`
		});
	});
};
