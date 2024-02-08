'use client'

import { NewSkill } from "@/db/queries/Skill";
import { insertSkill } from "./actions"

type Props = {
	newSkill: NewSkill
}

export default async function InsertNewSkill({ newSkill }: Props) {

	const handleSubmit = () => {
		const res = insertSkill(newSkill)
		console.log(res)
	}

	return (
		<form action={handleSubmit}>
			<button type="submit">
				Insert New Skill
			</button>
		</form>
	)
}