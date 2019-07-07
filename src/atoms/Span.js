import styled from 'styled-components';

const Atom = styled.span`
  color: ${props => props.lighter && '#555'};
`;

export default Atom;
