import styled from 'styled-components';
import { composition } from './SystemComponents';

const CustomLogo = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="259" height="37.829" viewBox="0 0 259 37.829" className={className}>
        <path id="Waterloop" d="M193.435,558.1a17.3,17.3,0,0,0-5.125.788,5.383,5.383,0,0,0-2.07,1.872,6.518,6.518,0,0,0-.788,4.041,5.519,5.519,0,0,0,8.771,3.252c1.183-.986,2.858-4.238,4.336-8.279.394-1.084.394-1.478.2-1.577A44.631,44.631,0,0,0,193.435,558.1Zm24.54,0a9.147,9.147,0,0,0-6.209,3.844l-20.006,32.72c-.1.3-.1.3.1.493s.3.2,3.055.2a17.787,17.787,0,0,0,3.646-.3,8.942,8.942,0,0,0,5.322-3.942c1.478-2.168,19.908-32.424,20.006-32.621l-.2-.3c-.1-.2-.394-.2-2.562-.2Zm23.949,0a9.375,9.375,0,0,0-5.618,2.858l-10.644,17.148-10.151,16.656c-.1.591.1.591,2.464.591l3.154-.1a8.941,8.941,0,0,0,6.6-4.041c1.873-2.957,19.908-32.424,19.908-32.621.1-.591-.1-.591-2.76-.591l-3.055.1Zm136,8.87c-7.392.887-12.911,6.7-13.9,14.29a16.978,16.978,0,0,0,.394,5.913,14.8,14.8,0,0,0,1.873,3.745,12.758,12.758,0,0,0,7.49,4.533,15.834,15.834,0,0,0,17.74-8.476c.493-.986.591-1.084.69-.788a11.311,11.311,0,0,1-.2,2.365l-.69,1.577c-.493,1.183-.493,1.281.394,2.07a12.629,12.629,0,0,0,7,3.351,17.929,17.929,0,0,0,4.041.2,15.515,15.515,0,0,0,5.913-1.577,16.377,16.377,0,0,0,8.87-14.882c0-6.307-3.745-10.841-10.25-12.221a27.864,27.864,0,0,0-6.406.1,15.473,15.473,0,0,0-10.939,8.377l-.591,1.183a6.655,6.655,0,0,1,.2-2.661,3.92,3.92,0,0,1,.591-1.577l.394-1.183a9.726,9.726,0,0,0-2.267-2.07,13.7,13.7,0,0,0-7.983-2.267Zm4.238,4.632a7.786,7.786,0,0,1,5.913,8.081c0,6.9-5.223,12.221-11.432,11.629a7.884,7.884,0,0,1-7.49-8.279c0-5.716,3.548-10.447,8.574-11.531A11.207,11.207,0,0,1,382.165,571.6Zm24.146,0a7.82,7.82,0,0,1,5.716,5.322,10.118,10.118,0,0,1,.2,2.858,8.241,8.241,0,0,1-.3,2.957,11.106,11.106,0,0,1-8.574,8.476,12.849,12.849,0,0,1-4.336-.2,8.093,8.093,0,0,1-4.829-3.942,9.732,9.732,0,0,1-.788-5.125c.493-5.421,3.844-9.461,8.673-10.447A10.243,10.243,0,0,1,406.311,571.6Zm-54.5-4.238a5.474,5.474,0,0,0-4.041,2.957q-2.983,12.377-5.618,24.835c0,.2.3.2,6.9.2l7-.1.69-.2,1.183-.591a5.989,5.989,0,0,0,2.365-3.154v-.394H348.066l.1-.3,2.562-11.629,2.464-11.531c0-.2-.1-.2-.394-.2Zm76.478.1a6.083,6.083,0,0,0-3.942,3.154q-2.738,12.127-5.518,24.244l-.1.394h.394a6.2,6.2,0,0,0,5.42-3.942,55.789,55.789,0,0,0,1.38-6.012l.1-.394h4.534l5.322-.2c4.336-.887,7.194-3.351,8.279-7.392a14,14,0,0,0,.1-4.533,6.451,6.451,0,0,0-1.873-3.154,6.8,6.8,0,0,0-3.055-1.873c-1.281-.394-2.07-.493-6.307-.493C429.471,567.264,428.978,567.264,428.289,567.461Zm8.771,4.632a3.518,3.518,0,0,1,1.774,1.577,3.208,3.208,0,0,1,.394,1.38,5.158,5.158,0,0,1-3.844,5.223l-4.534.2-3.844-.1,1.675-7.786.2-.887h3.745l3.844.1ZM257.4,567.56a4.576,4.576,0,0,0-1.971,1.281l-16.261,26.412,1.971.1c2.267,0,2.858-.1,3.844-.788.591-.493.887-.887,2.168-3.055l.887-1.478H261.24l.394,2.661.493,2.661h.493a4.469,4.469,0,0,0,3.548-2.76c.493-1.183.493-.986-1.675-13.6l-2.07-11.531-2.168-.1C258.185,567.363,257.889,567.363,257.4,567.56Zm2.267,11.235,1.084,6.8H250.5l4.041-6.8,4.041-6.8Zm15.276-11.334A5.716,5.716,0,0,0,271,571.5l-.1.3h4.139l4.238.1-5.125,23.259c0,.2,0,.2.591.2a5.5,5.5,0,0,0,5.223-3.942c.2-.394,4.041-17.838,4.336-19.317v-.3h2.464a12.221,12.221,0,0,0,3.252-.3,5.823,5.823,0,0,0,3.252-2.858l.493-.986v-.3H284.6Zm25.821.1a4.856,4.856,0,0,0-2.365,1.38c-1.281,1.281-1.084.493-4.041,14.093l-2.661,12.221,7.983.1,7.983-.1.591-.2a5.815,5.815,0,0,0,3.449-3.844l.1-.3h-7.1c-6.7,0-7.1,0-7.1-.2l.887-3.548.788-3.646c0-.2.394-.2,5.223-.2,5.815-.1,5.618,0,7-.69a6.6,6.6,0,0,0,2.661-3.449v-.3h-6.9c-6.6,0-7,0-7-.2q.823-3.133,1.478-6.307l.1-.69h5.322c5.913,0,5.913,0,7.1-.591a5.489,5.489,0,0,0,2.661-3.449l.1-.3h-7.884C302.632,567.363,301.253,567.363,300.76,567.56Zm22.963-.1a3.688,3.688,0,0,0-2.07,1.971c-.2.394-1.183,4.829-3.055,13.108l-2.76,12.713,1.478.1a4.11,4.11,0,0,0,2.07-.394,4.291,4.291,0,0,0,1.873-1.872l.986-4.336.788-3.844h5.125l1.873,5.223L332,595.352l.493-.1a3.638,3.638,0,0,0,3.252-3.646c0-.69-.2-1.281-1.478-4.435l-1.084-2.562.887-.2a9.461,9.461,0,0,0,7.49-8.968,6.741,6.741,0,0,0-.788-3.844,4.291,4.291,0,0,0-1.281-1.774,6.657,6.657,0,0,0-2.661-1.774c-1.478-.69-1.281-.591-7.194-.69Zm9.363,4.336a3.764,3.764,0,0,1,3.154,4.632,4.833,4.833,0,0,1-3.844,3.844c-.69.2-1.084.2-4.533.2l-3.745-.1,1.873-8.476v-.2h3.252Z" transform="translate(-185.392 -558)" fill="#fed138"/>
    </svg>
);


const Logo = styled(CustomLogo)(composition);


export default Logo;