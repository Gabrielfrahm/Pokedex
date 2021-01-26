import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import PokemonLoading from '../../assets/pokebola.svg';

import { Container, Card, Pagination, Wrapper, Page, Loading } from './styles';

interface IData {
  name: string;
  type: string;
  picture: string;
}

const Feed: React.FC = () => {
  const [data, setData] = React.useState<IData[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const { slug }: { slug: string } = useParams();

  const next = React.useMemo(() => {
    return slug === undefined ? 2 : Number(slug) + 1;
  }, [slug]);

  const previous = React.useMemo(() => {
    return slug === undefined || slug === '1' ? undefined : Number(slug) - 1;
  }, [slug]);

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchPoke = async () => {
      setLoading(true);

      const finalData: IData[] = [];
      let i = slug === undefined || slug === '1' ? 1 : Number(slug) * 10;
      const numberOfPokemons = i + 9;

      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(i) && i < 898) {
        // eslint-disable-next-line no-plusplus
        for (i; i <= numberOfPokemons; i++) {
          // eslint-disable-next-line no-await-in-loop
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${i}`,
          );
          // eslint-disable-next-line no-await-in-loop
          const json = await response.json();
          finalData.push({
            name: json.name,
            type: json.types[0].type.name,
            picture:
              json.sprites.versions['generation-v']['black-white'].animated
                .front_default,
          });
        }

        setData(finalData);
        setLoading(false);
      }
    };

    fetchPoke();
  }, [slug]);

  if (loading)
    return (
      <Loading>
        <img src={PokemonLoading} alt="Loading" />
      </Loading>
    );
  if (data !== null) {
    return (
      <Container>
        <Wrapper>
          {data.map(pokemon => (
            <Card key={pokemon.name} className={pokemon.type}>
              <img src={pokemon.picture} alt={pokemon.name} />
              <div>
                <strong>{pokemon.name}</strong>
                <span>Type: {pokemon.type}</span>
              </div>
            </Card>
          ))}
        </Wrapper>

        <Pagination>
          {previous !== undefined && (
            <Link to={`/page/${previous}`} className="pagination_link prev">
              <ArrowLeft />
              Prev
            </Link>
          )}

          <Page>
            {/\d+/g.test(slug) && Number(slug) < 10 && '0'}
            {/\d+/g.test(slug) && Number(slug) < 100 && '0'}
            {slug === undefined && '001'}
            {/\d+/g.test(slug) && slug}
          </Page>

          {Number(slug) < 88 && (
            <Link to={`/page/${next}`} className="pagination_link next">
              Next
              <ArrowRight />
            </Link>
          )}

          {slug === undefined && (
            <Link to={`/page/${next}`} className="pagination_link next">
              Next
              <ArrowRight />
            </Link>
          )}
        </Pagination>
      </Container>
    );
  }
  return (
    <Container>
      <Page>
        There is no more pokemon here ):
        <Pagination>
          <Link to="/" className="pagination_link">
            <ArrowLeft />
          </Link>
        </Pagination>
      </Page>
    </Container>
  );
};

export default Feed;
