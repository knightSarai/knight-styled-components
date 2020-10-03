import styled from 'styled-components';

export default styled.div`
    width: 100%;
    background: url(${({content}) => content}) no-repeat center center/cover;
`;
