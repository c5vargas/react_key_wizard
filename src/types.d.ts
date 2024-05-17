export interface Password {
	id:       number|string;
	password: string;
	name:     string;
	username: string;
	uri:      string;
	notes:    string;
}

export interface Auth {
	id:				number;
	email:		string;
	name:			string;
	passwords?: Password[];
}