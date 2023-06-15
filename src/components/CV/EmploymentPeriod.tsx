type EmploymentPeriodProps = {
	startDate: Date;
	endDate?: Date;
};
export function EmploymentPeriod({ startDate, endDate }: EmploymentPeriodProps) {
	return (
		<h4 className="text-lg font-bold">
			{startDate.toLocaleDateString("en-GB", {
				month: "long",
				year: "numeric",
			})}{" "}
			-{" "}
			{endDate
				? endDate.toLocaleDateString("en-GB", {
					month: "long",
					year: "numeric",
				})
				: "Present"}
		</h4>
	);
}
