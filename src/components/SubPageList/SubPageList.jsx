import { ContainerSub, ListSubInfo } from './DetailsMovie.styled';
import StyledLink from '../Layout/Layout.styled';
export const SubPageList = () => {
  return (
    <ContainerSub>
      <h2>Additional information</h2>
      <ListSubInfo>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </ListSubInfo>
    </ContainerSub>
  );
};
