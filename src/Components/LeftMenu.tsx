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
        <FlexBox column height='100vh' align='center' justify='space-between' style={{ position: "fixed", borderRight: "1px solid lightgrey", padding: "0px 15px 0px 15px" }}>
            <FlexBox column align='center' gap='xl'>
                <FlexBox align='center' justify='center' height='70px' width='100%'>
                    {/* <ButtonBase><MenuIcon width="35px" height="35px" fill='black' stroke='black'></MenuIcon></ButtonBase> */}
                </FlexBox>
                <FlexBox column justify='center' gap="xs">
                    <NavLink to="./Dashboard">{({ isActive }) => (<Button Icon={DashboardIcon} selected={isActive} style={{ padding: "8px" }} />)}</NavLink>
                    <NavLink to="./Diary">{({ isActive }) => (<Button Icon={DiaryIcon} selected={isActive} style={{ padding: "8px" }} />)}</NavLink>
                    <NavLink to="./Foods">{({ isActive }) => (<Button Icon={FoodsIcon} selected={isActive} style={{ padding: "8px" }} />)}</NavLink>
                    <NavLink to="./Trends">{({ isActive }) => (<Button Icon={ChartIcon} selected={isActive} style={{ padding: "8px" }} />)}</NavLink>
                </FlexBox>

            </FlexBox>
            <FlexBox column align='center' style={{ marginBottom: "20px" }}>
                <NavLink to="Profile">{({ isActive }) => (<Button Icon={ProfileIcon} selected={isActive} style={{ padding: "8px" }} />)}</NavLink>
            </FlexBox>
        </FlexBox>
    )
}

export default LeftMenu;