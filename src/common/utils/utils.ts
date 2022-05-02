import {jiraConfig} from '../../configs';

export const getEncodeString = (...args: string[]) => {
	return Buffer.from(unescape(encodeURIComponent(args.join(':')))).toString('base64');
};

export const getEncodedToken = () => {
	return `Basic ${getEncodeString(jiraConfig.email, jiraConfig.token)}`;
};
