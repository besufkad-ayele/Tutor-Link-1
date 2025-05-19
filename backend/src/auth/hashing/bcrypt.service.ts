import { Injectable } from "@nestjs/common";
import { HashingService } from "./hashing.service";
import * as bcrypt from "bcryptjs";

@Injectable()
export class BcryptService implements HashingService {
	private readonly saltRounds = 10;

	async hash(data: string): Promise<string> {
		return bcrypt.hash(data, this.saltRounds);
	}

	async compare(data: string, encrypted: string): Promise<boolean> {
		return bcrypt.compare(data, encrypted);
	}
}
