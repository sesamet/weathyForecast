import styled from 'styled-components';

/* Default Styles*/
export const Header = styled.div`
    height: 96px;
    background-color: #ffffff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1.25px solid rgb(226,225,228);
    /* box-shadow:
        0 -0.7px 0.5px -20px rgba(0, 0, 0, 0.013),
        0 -0.4px 1.2px -20px rgba(0, 0, 0, 0.019),
        0 1px 2.2px -20px rgba(0, 0, 0, 0.023),
        0 3.9px 3.7px -20px rgba(0, 0, 0, 0.027),
        0 8.6px 6.1px -20px rgba(0, 0, 0, 0.031),
        0 16.4px 10.6px -20px rgba(0, 0, 0, 0.037),
        0 33px 23px -20px rgba(0, 0, 0, 0.05); */

    @media (max-width: 768px) {
        height: 72px;
        justify-content: space-between;
    }
    .nav-card {
        display: none;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 100%;
        @media (max-width: 768px) {
            display: flex;
        }
    }
    .nav-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 24px;
        @media (max-width: 768px) {
            margin-left: 0;
        }
        img {
            width: 100%;
            height: auto;
        }
        &-pic {
            width: 150px;
            height: 50px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: left center;
        }
        &-name {
            font-size: 36px;
            line-height: 44px;
            font-weight: bold;
            margin: 0;
            color: rgb(15,20,35);
            @media (max-width: 768px) {
                width: calc(100vw - 180px);
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
    .nav-menu {
        display: none;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 100%;
        @media (max-width: 768px) {
            display: flex;
        }
    }
`
export const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
export const Content = styled.div`
    background-color: #ffffff;
    border-right: 1.25px solid rgb(226,225,228);
`
export const Footer = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 24px;
    padding-bottom: 16px;
    border-top: 1.25px solid rgb(226,225,228);
    background-color: #ffffff;
    a {
        font-size: 14px;
        color: rgb(15,20,35);
        font-weight: 400;
        transition: color .3s ease;
        &:hover {
            color: rgb(251,182,18);
        }
    }
`
export const Wrapper = styled.div`
    width: 100vw;
    /* height: 100vh; */
    background-color: #f8f9fa;
    position: relative;
    /* overflow: hidden; */

    a {
        width: 100%;
        height: auto;
        text-decoration: none;
        outline: none; /* for Firefox Google Chrome  */
    }

    button:focus,
    button:hover {
        outline: none; /* for Firefox Google Chrome  */
    }

    .text-hidden {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .sm-block {
        display: none;
        @media screen and (max-width: 769px){
            display: block;
        }
    }
    .sm-flex {
        display: none;
        @media screen and (max-width: 769px){
            display: flex;
        }
    }
    .sm-none {
        display: block;
        @media screen and (max-width: 769px){
            display: none;
        }
    }
    .md-flex {
        display: none;
        @media screen and (min-width: 769px){
            display: flex;
        }
    }
    .md-inline {
        display: none;
        @media screen and (min-width: 769px){
            display: inline;
        }
    }
    .sm-flex.md-inline {
        display: flex;
        @media screen and (min-width: 769px){
            display: inline;
        }
    }
    .sm-block.md-flex{
        display: block;
        @media screen and (min-width: 769px){
            display: flex;
        }
    }

    .coupon-more {
        flex: 0 0 calc( (100% - 20px) / 2 );
        max-width: 220px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        padding: 10px;
        border: 1px solid #f9ac39;
        /* background-color: rgba(255,222,85,.415); */
        /* -webkit-box-shadow: 0 0 16px rgba(255,222,85,1);
        -moz-box-shadow: 0 0 16px rgba(255,222,85,1);
        box-shadow: 0 0 16px rgba(255,222,85,1); */
        margin-left: 40px;
        color: #f9ac39;
        font-weight: bold;
        font-size: 18px;
        transition: all .3s;
        position: relative;
        @media screen and (max-width: 640px) {
            font-size: 16px;
        }
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0px;
            height: 0px;
            background-color: #f9ac39;
            transition: all .3s;
        }
        &::before {
            content: '＋ 領取更多優惠券';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 100%;
            height: 100%;
            z-index: 2;
        }
        &:hover,
        &:focus {
            /* border: 1px solid rgb(242,70,49); */
            /* background-color: rgba(249,170,55,.415); */
            /* -webkit-box-shadow: 0 0 16px rgba(249,170,55,1);
            -moz-box-shadow: 0 0 16px rgba(249,170,55,1);
            box-shadow: 0 0 16px rgba(249,170,55,1); */
            color: rgb(242,70,49);
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #f9ac39d1;
            }
        }
    }

    .googleMap {
        margin-top: 40px;
        margin-bottom: 60px;
        height: 200px;
        @media screen and (min-width: 769px){
            height: 400px;
        }
    }

    .expiringCoupons,
    .ownCoupons {
        width: 100%;
        height: auto;
        padding-right: 10px;
        padding-left: 10px;
        &-title {
            font-size: .8rem;
            font-weight: 700;
            color: #202121;
            line-height: 1.6rem;
        }
        &-list {
            width: 100%;
            padding: 10px 5px;
            height: auto;
            /* margin-right: -20px; */
            overflow-x: auto;
            overflow-y: hidden;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            &-childen {
                flex: 0 0 calc( (100% - 20px) / 2 );
                max-width: 220px;
                margin: 0 8px;
            }
        }
    }
    .ownDashboards {
        padding: 0 10px;
        &-child {
            padding: 0;
            &-title {
                border-radius: 5px;
                border-bottom-left-radius: 0px;
                border-bottom-right-radius: 0px;
                background-color: rgba(0,0,0,.02);
                font-size: .8rem;
                font-weight: 500;
                padding: .5rem 1rem;
            }
            &-dashboard {
                border-radius: 5px;
                border-top-left-radius: 0px;
                border-top-right-radius: 0px;
                background-color: rgba(0,0,0,.02);
            }
        }
        &-child.members {
            padding-right: 10px;
            @media screen and (max-width: 768px){
                padding: 0;
            }
        }
        &-child.impression {
            padding: 0 5px;
            @media screen and (max-width: 768px){
                padding: 0;
            }
        }
        &-child.engagement {
            padding-left: 10px;
            @media screen and (max-width: 768px){
                padding: 0;
            }
        }
    }
    .pr-20px {
        padding-right: 20px;
    }

    .arrow-down {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 5px 0 5px;
        border-color: #202121 transparent transparent transparent;
        line-height: 0px;
        _border-color: #202121 #000000 #000000 #000000;
        _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
    }

    .textArea-styles {
        background-color: #f8f9fa;
        width: 100%;
        max-width: 640px;
        height: 250px;
        overflow-y: auto;
        border-radius: 5px;
        font-size: .8rem;
        color: #202121;
        padding: 20px 30px 20px 20px;

        @media screen and (max-width: 480px) {
            height: 150px;
        }
    }

    .textArea-hsm {
        height: 150px;
        padding: 10px 15px 10px 10px;

        @media screen and (max-width: 480px) {
            height: 100px;
        }
    }

    .btn-lg,
    .btn-md {
        width: 100%;
        max-width: 640px;
        height: 80px;
        border-radius: 5px;
        position: relative;
        outline: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;

        &:hover::after,
        &:focus::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity .3s;
            border-radius: 5px;
            background-color: #000;
        }
        &:hover::after,
        &:focus::after {
            opacity: .05;
        }
    }

    .btn-md {
        height: 50px;
    }

    .btn-blue {
        background-color: #E6EDF0;
        color: #202121;
    }

    .btn-yellow {
        background-color: #FFDE55;
        color: #202121;
    }

    .btn-outBorder {
        border: 1px solid #B2B2B2;
        color: #202121;
    }

    .border-red {
        border-color: #DE2A18;
    }

    /* font-color */
    .color-gray {
        color: #B2B2B2;
    }
    .color-black {
        color: #202121;
    }
    .color-red {
        color: #DE2A18;
    }

    /* rwd style */
    .display-sm {
        display: block !important;
    }
    .display-md {
        display: none !important;
    }
    .display-sm-flex {
        display: flex !important;
    }
    .display-md-flex {
        display: none !important;
    }
    .display-sm-inline {
        display: inline-block !important;
    }
    .display-md-inline {
        display: none !important;
    }


    @media screen and (min-width: 768px) {
        .display-sm {
            display: none !important;
        }
        .display-md {
            display: block !important;
        }
        .display-sm-flex {
            display: none !important;
        }
        .display-md-flex {
            display: flex !important;
        }
        .display-sm-inline {
            display: none !important;
        }
        .display-md-inline {
            display: inline-block !important;
        }
    }
`