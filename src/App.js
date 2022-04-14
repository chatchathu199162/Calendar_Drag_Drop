import React, {useState} from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext , Draggable } from 'react-beautiful-dnd';
import './App.css';


const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
    thumb: '/images/gary.png'
  },
  {
    id: 'cato',
    name: 'Little Cato',
    thumb: '/images/cato.png'
  },
  {
    id: 'kvn',
    name: 'KVN',
    thumb: '/images/kvn.png'
  },
  {
    id: 'mooncake',
    name: 'Mooncake',
    thumb: '/images/mooncake.png'
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
    thumb: '/images/quinn.png'
  }
]

function App() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters)

  function handleOnDragEnd(result){
    console.log("result");
    console.log(result);
    if(!result.destination){
      return;
    }
    const items = Array.from(characters);
    //remove item from the given index.
    const [recoredItem] = items.splice(result.source.index,1);
    console.log("recoredItem");
    console.log(recoredItem);
    console.log("items after reorded");
    console.log(items);
    items.splice(result.destination.index,0,recoredItem);
    console.log("final items");
    console.log(items);
    updateCharacters(items);

  }
  return (
    
    <Container>
    
    <LeftMainSection>
      <section>SEction4</section>
    </LeftMainSection>
    <LeftMainSection>
      <section>SEction4</section>
    </LeftMainSection>
    <LeftMainSection>
      <section>SEction4</section>
    </LeftMainSection>
  </Container>
  );
}

export default App;
const LeftMainSection = styled.div<LeftMainSectionProps>`
  width: 65vw;
  padding-right: 1pc;

  > div {
    :first-child {
      display: flex;
      justify-content: space-between;
      flex-direction: ${({ isEveryone }) => (isEveryone ? "column" : "row")};
      align-items: ${({ isEveryone }) => !isEveryone && "flex-start"};
      @media (max-width: 1000px) {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;

const ContainerMain = styled.div`
  > main {
    > section {
      :first-child {
        width: 25%;
        > :last-child {
          background-color: white;
        }
      }
      :last-child {
        height: 100% !important;
        display: flex;
        justify-content: space-between;
        margin: 1pc 0;
      }
    }
  }
`;

const Container = styled.div`
padding: 24px;
padding-top: 66px;
  background-color: #F6F6F6;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .select__plumber {
    text-align: center;
    width: 100%;
    font-size: 1.3rem;
    height: 50vh;
  }
  .header {
    text-transform: uppercase;
    margin: 0px;
    font-size: 24px;
    font-weight: 500;
    margin-top: 16px;
  }
  @media (max-width: ${SCREEN_MAX_WIDTH}) {
    padding: 5pc auto;
    section {
      :first-child {
        width: 100%;
      }
      :last-child {
        flex-direction: column;
        justify-content: center;
      }
    }
    p,
    h2 {
      text-align: center;
    }
  }
  @media (min-width: 1500px) {
    padding: 6pc 5pc;
  }
`;

