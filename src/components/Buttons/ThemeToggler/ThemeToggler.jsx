import React from "react";
import { useTheme } from '../../../Context/ThemeContext'
import ReactSwitch from "react-switch";
import styled from "styled-components";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<Switch
			checked={theme === "Dark"}
			onChange={toggleTheme}
			checkedIcon={false}
			uncheckedIcon={false}
			offColor="#ccc"
			onColor="#333"
		/>
	)
}

export default ThemeToggle

const Switch = styled(ReactSwitch)`
margin: 20px;
`;

