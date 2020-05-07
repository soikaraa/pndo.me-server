import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class Metadata {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({type: "varchar", unique: true, nullable: false})
	file_id!: string;

	@Column({type: "varchar", nullable: false})
	sha256!: string;

	@Column({type: "varchar", nullable: false})
	md5!: string;

	@Column({type: "varchar", nullable: false})
	filename!: string;

	@Column({type: "varchar", nullable: false})
	type!: string;

	@Column({type: "varchar", nullable: true})
	owner!: string;

	@Column({type: "boolean", nullable: false})
	protected!: boolean;

	@Column({type: "boolean", nullable: false})
	hidden!: boolean;

	@Column({type: "int", nullable: false, default: 0})
	downloads!: number;

	@Column({type: "int", nullable: false, default: 0})
	views!: number;

	@Column({type: "int", nullable: false})
	bytes!: number;

	@Column({type: "date", nullable: true})
	uploaded?: Date;

	@Column({type: "date", nullable: true})
	expires!: Date;
}