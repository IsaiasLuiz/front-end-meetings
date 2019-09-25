const conveter = {
	frontToApi(meeting) {
		return {
			title: meeting.meetingTitle,
			date: meeting.meetingDate,
			author: meeting.meetingAuthor,
			description: meeting.meetingDescription
		};
	},
	apiTofront(meeting) {
		return {
			meetingTitle: meeting.title,
			meetingDate: meeting.date,
			meetingAuthor: meeting.author,
			meetingDescription: meeting.description
		};
	}
};

export default conveter;
