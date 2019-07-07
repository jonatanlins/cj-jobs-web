import styled from 'styled-components';

const Atom = styled.div`
  flex: 1 0 auto;
  width: ${props => props.width || 0};
  height: ${props => props.height || 0};
  display: inline-block;
`;

export default Atom;
