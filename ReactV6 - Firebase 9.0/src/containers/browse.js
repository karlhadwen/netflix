import { getAuth, signOut } from "firebase/auth";
import Fuse from 'fuse.js';
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from './footer';
import { useState, useEffect } from "react";
import { Loading, Header, Card, Player } from '../components'
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';


export function BrowserContainer({slides}){

    const [category, setCategory] = useState('series');
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [slideRows, setSlideRows] = useState([]);

    /// Changes based on Firebase V9.0
    const auth=getAuth();
    const user = auth.currentUser || {};
    ///////////////////////////////////////
    useEffect(() => {
        
        setTimeout(() =>{
            setLoading(false);
        }, 3000)
    },[profile.displayName])


    useEffect(() =>{
        setSlideRows(slides[category]);
    },[slides, category])

//// Search
    useEffect(() => {
        const fuse = new Fuse(slideRows, {keys: ['data.description', 'data.title', 'data.genre'],
    })
        const results = fuse.search(searchTerm).map(({item}) => item);

        if(slideRows.length > 0 && searchTerm.length > 3 && results.length > 0){
            setSlideRows(results);
        }else{
            setSlideRows(slides[category]);
        }
    }, [searchTerm]);
////////

    return profile.displayName ? (
        <>
            {loading ? ( <Loading src={user.photoURL} />
            ) : (
                <Loading.ReleaseBody />
            )}

            <Header src="joker1">
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                        <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>Series</Header.TextLink>
                        <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>Films</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search 
                            searchTerm={searchTerm} 
                            setSearchTerm={setSearchTerm}
                        />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL}/>
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL}/>
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                            <Header.Group>
                                <Header.TextLink onClick={() => signOut(auth)}>Sign Out</Header.TextLink>
                            </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>

                <Header.Feature>
                        <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                        <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                        City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                        futile attempt to feel like he's part of the world around him.
                        </Header.Text>
                        <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
            <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
       <Card.Feature category={category}>
                 <Player>
                    <Player.Button />
                    <Player.Video src="/videos/bunny.mp4" />
                </Player> 
                <p>Hello</p>
            </Card.Feature> 
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
        </>
    ):(
    
    <SelectProfileContainer user={user} setProfile={setProfile}/>

    )
}
