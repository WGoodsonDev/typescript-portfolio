import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} to={'/'} header>
                    <img src="/assets/logo.png" alt="logo" />
                    Portfolio
                </Menu.Item>
                <Menu.Item as={NavLink} to={'/other'} name="Another Page"/>
                <Menu.Item as={NavLink} to={'/another'} name="Another One"/>
            </Container>

        </Menu>
    );
}