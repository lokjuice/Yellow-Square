const logoBreef = (state = {
	id: 1,
	count: 0,
	files: [],
	logoInfo: {
		name: '',
		description: '',
		website: '',
		helpInfo: '',
	},
	contacts: {
		phone: '',
		name: '',
		telegram: '',
		email: '',
	},
	colors: {
		red: false,
		green: false,
		purple: false,
		orange: false,
		cian: false,
		black: false,
		yellow: false,
		blue: false,
	},
		polzunki: {
			first: '8',
			second: '8',
			third: '8',
			fourth: '8',
			fifth: '8',
		},
}, { type, payload }) => {
  switch(type) {
		case "NEXTID": return { ...state, id: state.id + 1 };
		case "PREVID": return { ...state, id: state.id - 1 };
		case "SETPOLZUNKIINFO": return {
			...state,
			polzunki: { ...state.polzunki, ...payload },
		};
		case "SETCOUNTINFO": return {
			...state,
			count: payload,
		}
		case "SETCOLORINFO": return {
			...state,
			colors: { ...state.colors, ...payload },
		}
		case "SETCONTACTSINFO": return {
			...state,
			contacts: { ...state.contacts, ...payload },
		}
		case "SETFILESINFO": return {
			...state,
			files: [...payload, ...state.files],
		}
		case "SETLOGOINFOINFO": return {
			...state,
			logoInfo: { ...state.logoInfo, ...payload},
		}
		default: return state;
	}
}
export default logoBreef;