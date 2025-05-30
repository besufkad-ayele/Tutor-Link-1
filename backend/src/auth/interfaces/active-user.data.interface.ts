import { Role } from "../authentication/enums/roles-type-enum";

export interface ActiveUserData {
	/**
	 * The "subject" of the token. The value of this property is the user ID
	 * that granted this token
	 */
	sub: number;
	/**
	 * The subject's (user) email.
	 */
	email: string;
	/**
	 * The unique identifier for the refresh token
	 */
	refreshTokenId?: string;
	/**
	 *  The subject's (user) role.
	 */
	role: Role;
	// Add any other properties that might be in your JWT payload
}
