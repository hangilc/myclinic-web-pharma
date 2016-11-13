"use strict";

var web = require("myclinic-web");

var subs = [
	{
		name: "pharma",
		module: require("myclinic-pharma"),
		configKey: "pharma"
	}
];

web.cmd.runFromCommand(subs, 9002);
