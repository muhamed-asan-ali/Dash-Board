import React from 'react';
import WindowSharpIcon from '@mui/icons-material/WindowSharp';
import BorderAllOutlinedIcon from "@mui/icons-material/BorderAllOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const SideBarData = [
    {
    title: 'Dashboard',
    icon: <WindowSharpIcon />,
    link: '/home',
    },
    {
    title: 'Lab Test',
    icon: <AssignmentTurnedInOutlinedIcon />,
    link: '/labtest',
    },
    {
    title: 'Appointment',
    icon: <CalendarMonthIcon />,
    link: '/appointment',
    },
    {
    title: 'Medicine Order',
    icon: <LocalMallOutlinedIcon />,
    link: '/medicineorder',
    },
    {
    title: 'Message',
    icon: <MailOutlineOutlinedIcon />,
    link: '/message',
    },
    {
    title: 'Payment',
    icon: <WalletOutlinedIcon />,
    link: '/payment',
    },
    {
    title: 'Settings',
    icon: <SettingsOutlinedIcon />,
    link: '/settings',
    }
];