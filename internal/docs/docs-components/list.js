import styled from 'styled-components'
import { fonts } from '@auth0/cosmos-tokens'

const ListItem = styled.li`
  color: #414141;
  font-size: 15px;
  line-height: 26px;
  font-weight: ${fonts.weight.normal};
`

const List = styled.ul`
  list-style: ${props => (props.nested ? 'circle' : 'disc')};
  margin: 1em 0;
  margin-left: 1.5em;
`

List.Item = ListItem

export default List
