import { FlexBox, ButtonBase } from "../styledComponents";
import Button from "./Button";
import { ReactComponent as DashboardIcon } from '../icons/dashboard_2.svg';
import { ReactComponent as ChartIcon } from '../icons/chart_3.svg';
import { ReactComponent as FoodsIcon } from '../icons/foods_2.svg';
import { ReactComponent as ProfileIcon } from '../icons/profile_2.svg';
import { ReactComponent as DiaryIcon } from '../icons/diary.svg';
import { ReactComponent as MenuIcon } from '../icons/menu.svg';
import { NavLink } from "react-router-dom";

function LeftMenu() {
    return (
        <FlexBox column width='80px' height='100vh' align='center' justify='space-between' style={{ borderRight: "1px solid lightgrey" }}>
            <FlexBox column align='center' gap='xl' style={{ paddingTop: "5px" }}>
                <FlexBox align='center' justify='center' height='70px' width='100%'>
                    {/* <ButtonBase><MenuIcon width="35px" height="35px" fill='black' stroke='black'></MenuIcon></ButtonBase> */}
                </FlexBox>
                <FlexBox column justify='center' gap="xs">
                    <NavLink to="./Dashboard">{({ isActive }) => (<Button Icon={DashboardIcon} selected={isActive} />)}</NavLink>
                    <NavLink to="./Diary">{({ isActive }) => (<Button Icon={DiaryIcon} selected={isActive} />)}</NavLink>
                    <NavLink to="./Foods">{({ isActive }) => (<Button Icon={FoodsIcon} selected={isActive} />)}</NavLink>
                    <NavLink to="./Trends">{({ isActive }) => (<Button Icon={ChartIcon} selected={isActive} />)}</NavLink>
                </FlexBox>

            </FlexBox>
            <FlexBox column align='center' style={{ marginBottom: "10px" }}>
                <NavLink to="Profile">{({ isActive }) => (<Button Icon={ProfileIcon} selected={isActive} />)}</NavLink>
            </FlexBox>
        </FlexBox>
    )
}

export default LeftMenu;