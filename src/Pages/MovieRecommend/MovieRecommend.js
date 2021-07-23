import axios from "axios";
import { useEffect, useState } from "react";
//import Genres from "../../Components/Genres/Genres";
import SingleContent from "../../Components/SingleContent/SingleContent";
//import useGenre from "../../hooks/useGenre";
//import CustomPagination from "../../Components/Pagination/CustomPagination";
import SearchIcon from "@material-ui/icons/Search";
import {
    Button,
    createMuiTheme,
    TextField,
    ThemeProvider,
  } from "@material-ui/core";
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
const MovieRecommend = () => {
    const [searchText, setSearchText] = useState("");
    // const [display, setDisplay] = useState([]);
    // const [display1, setDisplay1] = useState();
    // const [display2, setDisplay2] = useState();
    // const [display3, setDisplay3] = useState();
    // const [display4, setDisplay4] = useState();
    const [errordisplay, setErrorDisplay] = useState();
    const [imagedisplay, setImageDisplay] = useState([]);
    const [imagedisplay1, setImageDisplay1] = useState([]);
    const [imagedisplay2, setImageDisplay2] = useState([]);
    const [imagedisplay3, setImageDisplay3] = useState([]);
    const [imagedisplay4, setImageDisplay4] = useState([]);
    const [imagedisplay5, setImageDisplay5] = useState([]);
    const [imagedisplay6, setImageDisplay6] = useState([]);
    const [imagedisplay7, setImageDisplay7] = useState([]);
    const [imagedisplay8, setImageDisplay8] = useState([]);
    const [imagedisplay9, setImageDisplay9] = useState([]);
  


    
function makerequest() {
 console.log("Button Clicked")
 let movie_name=document.getElementById("searchID").value
 console.log("movie_name")
 console.log(movie_name)
 console.log("searchText")
 console.log(searchText)
 const config = {
  method: 'POST',
  //url: ' http://127.0.0.1:8000/',
  url:'https://movierecommendationreact.herokuapp.com/',
  headers: {
   'Content-Type': 'application/json',
  },
  data: JSON.stringify({ "id":movie_name})
 }
 axios(config).then((res) => {
  //console.log(res.data)
  //console.log(res.data.r1)
//  setDisplay(res.data.r1)
//  setDisplay1(res.data.r2)
//  setDisplay2(res.data.r3)
//  setDisplay3(res.data.r4)
//  setDisplay4(res.data.r5)

  setErrorDisplay(res.data.msg)

 //setErrorDisplay(res.data.msg)


 const campString = 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=388333f25baa328112f64bd71bb40e95&language=en-US';
const fCCString1 = campString.replace('{movie_id}', String(res.data.r1));
const fCCString2 = campString.replace('{movie_id}', String(res.data.r2));
const fCCString3 = campString.replace('{movie_id}', String(res.data.r3));
const fCCString4 = campString.replace('{movie_id}', String(res.data.r4));
const fCCString5 = campString.replace('{movie_id}', String(res.data.r5));
const fCCString6 = campString.replace('{movie_id}', String(res.data.r6));
const fCCString7 = campString.replace('{movie_id}', String(res.data.r7));
const fCCString8 = campString.replace('{movie_id}', String(res.data.r8));
const fCCString9 = campString.replace('{movie_id}', String(res.data.r9));
const fCCString10 = campString.replace('{movie_id}', String(res.data.r10));
// console.log("fCCString1")
// console.log(fCCString1)


 axios.get(fCCString1)
 .then(res1 => {
     console.log("res1.data")
     console.log(res1.data)
     console.log("imagedisplay")
     setImageDisplay(res1.data)
     //console.log(imagedisplay)
})
 .catch(err => console.log(err))
 axios.get(fCCString2)
 .then(res2 => {
    
     setImageDisplay1(res2.data)
})
 .catch(err => console.log(err))
 axios.get(fCCString3)
 .then(res3 => {
    
     setImageDisplay2(res3.data)
})
 .catch(err => console.log(err))
 axios.get(fCCString4)
 .then(res4 => {
   
     setImageDisplay3(res4.data)
})
 .catch(err => console.log(err))
 axios.get(fCCString5)
 .then(res5 => {
     
     setImageDisplay4(res5.data)
})
 .catch(err => console.log(err))
 axios.get(fCCString6)
 .then(res6 => {
     setImageDisplay5(res6.data)
})
 .catch(err => console.log(err))
 axios.get(fCCString7)
 .then(res7 => {
    
     setImageDisplay6(res7.data)
})
 .catch(err => console.log(err))
 axios.get(fCCString8)
 .then(res8 => {
      setImageDisplay7(res8.data)
})
 .catch(err => console.log(err))
 axios.get(fCCString9)
 .then(res9 => {
     
     setImageDisplay8(res9.data)
})
 .catch(err => console.log(err))
 axios.get(fCCString10)
 .then(res10 => {
     setImageDisplay9(res10.data)
})
 .catch(err => console.log(err))

    }).catch((error) => { console.log(error) })
   
  }
  useEffect(() => {
    //window.scroll(0, 0);
    makerequest();
    // eslint-disable-next-line
  }, [errordisplay,imagedisplay,searchText]);

  // const makerequestt = async () => {
  //   try {
  //       console.log("button clicked")
  //       let movie_name=document.getElementById("searchID").value
  //       const config = {
  //           method:'POST',
  //           url: ' http://127.0.0.1:8000/',
  //           headers: {
  //            'Content-Type': 'application/json',
  //           },
  //           data: JSON.stringify({ "id":movie_name})
  //          }
  //     const { data } = await axios(config)
  //     //setContent(data.results);
  //     //setNumOfPages(data.total_pages);
  //   //   setDisplay(data.r1)
  //   //   setDisplay1(data.r2)
  //   //   setDisplay2(data.r3)
  //   //   setDisplay3(data.r4)
  //   //   setDisplay4(data.r5)
  //     setErrorDisplay(data.msg)
  //     console.log("data")
  //      console.log(data)
  //      console.log("data.r1")
  //      console.log(data.r1)
      
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };
      return (

        <div>
          <span className="pageTitle">Movie Recommendation</span>
          <ThemeProvider theme={darkTheme}>
          <div className="search">
            <TextField
              style={{ flex: 1 }}
              className="searchBox"
              label="Recommend"
              id="searchID"
              variant="filled"
            //   defaultValue="Avatar"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
              onClick={makerequest}
              variant="contained"
              style={{ marginLeft: 10 }}
            >
              <SearchIcon fontSize="large" />
            </Button>
          </div>
          { searchText && 
                       <div id="showdiv"> 
                                {errordisplay}
                       </div>
}
                       {/* <Tabs
            value={type}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, newValue) => {
              setType(newValue);
              
            }}
            style={{ paddingBottom: 5 }}
            aria-label="disabled tabs example"
          >
            <Tab style={{ width: "50%" }} label=" Recommended Movies " />
          
          </Tabs> */}
               </ThemeProvider>
       
            <div className="trending">
            {searchText &&
            imagedisplay &&  !errordisplay &&
            <SingleContent 
              key={imagedisplay.id}
              id={imagedisplay.id}
              poster={imagedisplay.poster_path}
              title={imagedisplay.title || imagedisplay.name}
              date={imagedisplay.first_air_date || imagedisplay.release_date}
              media_type="movie"
              vote_average={imagedisplay.vote_average}
            />
            } 
            {searchText &&
            imagedisplay1 && !errordisplay &&
            <SingleContent
              key={imagedisplay1.id}
              id={imagedisplay1.id}
              poster={imagedisplay1.poster_path}
              title={imagedisplay1.title || imagedisplay1.name}
              date={imagedisplay1.first_air_date || imagedisplay1.release_date}
              media_type="movie"
              vote_average={imagedisplay1.vote_average}
            />
        }
        {searchText &&
            imagedisplay2 && !errordisplay &&
            <SingleContent
              key={imagedisplay2.id}
              id={imagedisplay2.id}
              poster={imagedisplay2.poster_path}
              title={imagedisplay2.title || imagedisplay.name}
              date={imagedisplay2.first_air_date || imagedisplay.release_date}
              media_type="movie"
              vote_average={imagedisplay2.vote_average}
            />
        }
        {searchText &&
            imagedisplay3 && !errordisplay &&
            <SingleContent
              key={imagedisplay3.id}
              id={imagedisplay3.id}
              poster={imagedisplay3.poster_path}
              title={imagedisplay3.title || imagedisplay3.name}
              date={imagedisplay3.first_air_date || imagedisplay3.release_date}
              media_type="movie"
              vote_average={imagedisplay3.vote_average}
            />
        }
        {searchText &&
            imagedisplay4 && !errordisplay &&
            <SingleContent
              key={imagedisplay4.id}
              id={imagedisplay4.id}
              poster={imagedisplay4.poster_path}
              title={imagedisplay4.title || imagedisplay4.name}
              date={imagedisplay4.first_air_date || imagedisplay4.release_date}
              media_type="movie"
              vote_average={imagedisplay4.vote_average}
            />
        }
        {searchText &&
            imagedisplay5 && !errordisplay &&
             <SingleContent
              key={imagedisplay5.id}
              id={imagedisplay5.id}
              poster={imagedisplay5.poster_path}
              title={imagedisplay5.title || imagedisplay5.name}
              date={imagedisplay5.first_air_date || imagedisplay5.release_date}
              media_type="movie"
              vote_average={imagedisplay5.vote_average}
            />
        }
        {searchText &&
            imagedisplay6 && !errordisplay &&
            <SingleContent
              key={imagedisplay6.id}
              id={imagedisplay6.id}
              poster={imagedisplay6.poster_path}
              title={imagedisplay6.title || imagedisplay6.name}
              date={imagedisplay6.first_air_date || imagedisplay6.release_date}
              media_type="movie"
              vote_average={imagedisplay6.vote_average}
            />
        }
        {searchText &&
            imagedisplay7 && !errordisplay &&
            <SingleContent
              key={imagedisplay7.id}
              id={imagedisplay7.id}
              poster={imagedisplay7.poster_path}
              title={imagedisplay7.title || imagedisplay7.name}
              date={imagedisplay7.first_air_date || imagedisplay7.release_date}
              media_type="movie"
              vote_average={imagedisplay7.vote_average}
            />
        }
        {searchText &&
            imagedisplay8 && !errordisplay &&

            <SingleContent
              key={imagedisplay8.id}
              id={imagedisplay8.id}
              poster={imagedisplay8.poster_path}
              title={imagedisplay8.title || imagedisplay8.name}
              date={imagedisplay8.first_air_date || imagedisplay8.release_date}
              media_type="movie"
              vote_average={imagedisplay8.vote_average}
            />
        }
        {searchText &&
            imagedisplay9 && !errordisplay &&

            <SingleContent
              key={imagedisplay9.id}
              id={imagedisplay9.id}
              poster={imagedisplay9.poster_path}
              title={imagedisplay9.title || imagedisplay9.name}
              date={imagedisplay9.first_air_date || imagedisplay9.release_date}
              media_type="movie"
              vote_average={imagedisplay9.vote_average}
            />
        }


                       </div>

          </div>
  );
      
};

export default MovieRecommend;
