export interface Password {
	id:       number;
	password: string;
	name:     string;
	uri:      string;
	notes:    string;
}

export interface Auth {
	id:				number;
	email:		string;
	name:			string;
	passwords?: Password[];
}