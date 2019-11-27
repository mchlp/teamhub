import React from "react";
import styled from "styled-components";
import { SystemComponent } from '../atoms/SystemComponents';

import Button from "../atoms/Button";
import Title from "../atoms/Title";
import Subtitle from "../atoms/Subtitle";
import Header2 from "../atoms/Header2";
import Header3 from "../atoms/Header3";
import Header4 from "../atoms/Header4";
import Header5 from "../atoms/Header4";
import Select from '../atoms/Select';
import Body from "../atoms/Body";
import Image from "../atoms/Image";
import Card from "../atoms/Card";
import Input from "../atoms/Input";
import theme from "../theme";

const months = [
    { value: 'January', label: 'January'}
]

const LoginStep3 = () => (
  <div>
    <Card
      style={{
        width: "80%",
        height: "90%",
      }}
    >
        <Subtitle>Tell us more about yourself</Subtitle>
        <Header5>Upload a profile picture</Header5>

        <Header5>Birthday</Header5>
        <div style={{ 
            flexDirection: "column" 
        }}>
            <Select options={months} width="10%" />
            <Input variant="variant" placeholder="Day" />
            <Input variant="variant" placeholder="Year" />
        </div>

        <div style={{
            flexDirection: "row"
        }}>
            <Header5>What program are you in?</Header5>
            <Header5>Select your Co-op Sequence</Header5>
        </div>
        <div style={styles.inline}>
            <Select options={months} width="20%" />
            <Select options={months} width="10%" />
        </div>

        <Header5>What term are you currently in?</Header5>
        <Select options={months} width="100%" />

        <Header5>What are some of your interests?</Header5>
        <Select options={months} width="100%" />

        <Header5>What are some of your skills?</Header5>
        <Select options={months} width="100%" />
        
      
    </Card>
  </div>
);

const styles = {
    inline: {
        flexDirection: "row"
    }
};

export default LoginStep3;
