import { useRouter } from "next/router";
import { useContext } from "react";
import PokemonContext from "../../src/PokemonContext";
import styled from "@emotion/styled";

import {
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;

const TypeHeader = styled.span`
  font-weight: bold;
`;

export default function SinglePokemon({}) {
  const { pokemon } = useContext(PokemonContext);
  const router = useRouter();

  const currpokemon = pokemon?.find((p) => p.id === parseInt(router.query.id));

  return (
    <PageContainer>
      <CssBaseline />
      <div>
        {currpokemon && (
          <>
            <h1>{currpokemon.name.english}</h1>
            <p>
              <TypeHeader>Type:</TypeHeader> {" " + currpokemon.type.join(", ")}
            </p>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Attribute</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(currpokemon.base).map((key) => (
                  <TableRow key={key}>
                    <TableCell>{key}</TableCell>
                    <TableCell>{currpokemon.base[key]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {/* <pre>
              <code>{JSON.stringify(currpokemon, null, 2)}</code>
            </pre> */}
          </>
        )}
      </div>
    </PageContainer>
  );
}

// //   return (
// //     <PageContainer>
// //       <pre>{JSON.stringify(pokemon[router.query.id], null, 2)}</pre>
// //     </PageContainer>
// //   );
// }
