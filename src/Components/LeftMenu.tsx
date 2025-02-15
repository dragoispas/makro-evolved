import { FlexBox } from "../styledComponents";
import Button from "./Button";
import { ReactComponent as DashboardIcon } from '../icons/dashboard_2.svg';
import { ReactComponent as ChartIcon } from '../icons/chart_3.svg';
import { ReactComponent as FoodsIcon } from '../icons/foods_2.svg';
import { ReactComponent as ProfileIcon } from '../icons/profile_2.svg';
import { ReactComponent as DiaryIcon } from '../icons/diary.svg';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const Sidebar = styled.div`
    position: fixed;
    height: 100vh;
    border-right: 1px solid lightgrey;
    padding: 0px 16px;
    

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .links-container {
        margin-top: 100px;
    }

    .profile-link {
        margin-bottom: 20px;
    }
`;


function LeftMenu() {
    return (
        <Sidebar >
            <FlexBox column justify="center" gap="xs" className="links-container">
                <NavLink to="./Dashboard">
                    {({ isActive }) => <Button Icon={DashboardIcon} selected={isActive} />}
                </NavLink>
                <NavLink to="./Diary">
                    {({ isActive }) => <Button Icon={DiaryIcon} selected={isActive} />}
                </NavLink>
                <NavLink to="./Foods">
                    {({ isActive }) => <Button Icon={FoodsIcon} selected={isActive} />}
                </NavLink>
                <NavLink to="./Trends">
                    {({ isActive }) => <Button Icon={ChartIcon} selected={isActive} />}
                </NavLink>
            </FlexBox>
            <NavLink to="./Profile" className="profile-link">
                {({ isActive }) => <Button Icon={ProfileIcon} selected={isActive} />}
            </NavLink>
        </Sidebar>
    );
}

export default LeftMenu;
