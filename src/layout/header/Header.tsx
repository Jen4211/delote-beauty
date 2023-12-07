import React from 'react';
import styled from "styled-components";
import {MyContainer} from "../../components/MyContainer";
import {FlexContainer} from "../../components/FlexContainer";
import {Menu} from "./menu/Menu";
import {Icon} from "../../components/Icon";
import {PATH} from "../../pages/Pages"


export type ItemType = {
    title?: string
    id?: string
    path: string
}

const firstNavList: Array<ItemType> = [
    {title: "Главная", id: "main",path: PATH.MAIN},
    {title: "Мастера", id: "staff",path: PATH.OUR_TEAM},
    {title: "Косметика", id: "cosmetic",path: PATH.MAIN},
];


const secondNavList: Array<ItemType> = [
    {title: "Акции", id: "sale",path: PATH.PRICE},
    {title: "Отзывы", id: "comment",path: PATH.MAIN},
    {title: "Контакты", id: "contact",path: PATH.CONTACTS},
];
export const Header: React.FC = () => {
    return (
        <StyledHeader>
            <MyContainer>
                <FlexContainer justify={"space-between"}>
                    <Icon iconId={"instagram"}
                    width={"26px"}
                    height={"26px"}
                    viewBox={"0 0 26 26"}
                    />
                    <Menu menuItems={firstNavList}/>
                    <Icon iconId={"omega"}
                    width={"40px"}
                    height={"40px"}
                    viewBox={"0 0 40 40"}/>
                    <Menu menuItems={secondNavList}/>
                    <Icon iconId={"btn"}
                    width={"50px"}
                    height={"21px"}
                    viewBox={"0 0 50 21"}/>
                </FlexContainer>
            </MyContainer>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 30px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  
`