import styled from 'styled-components';

const Atom = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent || 'space-between'};
  align-items: ${props => props.alignItems || 'center'};
  flex-direction: ${props => props.flexDirection || 'row'};
`;

export default Atom;
