import { StyleSheet } from 'react-native'

export const colors = {
	textPrimary: '#FFF4CE',
	bg: '#320001',
	drawerBg: '#FFFCF2',
	accent: '#CE3C00',
}

export default StyleSheet.create({
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		color: colors.textPrimary,
	},
	container: {
		paddingHorizontal: 20,
		paddingTop: 78,
		flex: 1,
		alignItems: 'center',
		backgroundColor: colors.bg,
	},
	input: {
		width: '100%',
		color: colors.bg,
		backgroundColor: colors.drawerBg,
		padding: 10,
		borderRadius: 10,
	},
	btn: {
		backgroundColor: colors.accent,
		paddingHorizontal: 40,
		paddingVertical: 10,
		borderRadius: 10,
	},
	btnText: {
		color: colors.textPrimary,
		fontWeight: 'bold',
	},
})
