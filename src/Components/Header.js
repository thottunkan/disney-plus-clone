import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { useDispatch,useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom';
import {selectUserName,selectUserPhoto,setSignOutState,setUserLoginDetails} from "../features/users/userSlice";
import { useEffect } from 'react';
function Header(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if (user) {
                setUser(user);
                history.push("/home");
            }
        })
    },[username]);

    const handleAuth = ()=>{
        if (!username) {
            auth.signInWithPopup(provider).then((result)=>{
                console.log(result.user);
                setUser(result.user);
      
              }).catch((err)=>{
                  alert(err.message);
              });
        }else if(username){
            auth.signOut().then(()=>{
                dispatch(setSignOutState());
                history.push("/");
            }).catch((err)=>{
                alert(err.message);
            })
        }
        
    }

    const setUser = (user) => {
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      };

 

    return (
        <NavigationBar>
            <Logo>
                <img src="images/logo.svg"  alt = "Disney+" />
            </Logo>
            {
                !username ? (<Login onClick={handleAuth}>Login</Login>):(
            <>
            <NavMenu>
               <a href="">
                   <img src="images/home-icon.svg"  alt="home" />
                   <span>HOME</span>
               </a>
               <a href="">
                   <img src="images/search-icon.svg"  alt="home" />
                   <span>SEARCH</span>
               </a>
               <a href="">
                   <img src="images/watchlist-icon.svg"  alt="home" />
                   <span>WATCHLIST</span>
               </a>
               <a href="">
                   <img src="images/original-icon.svg"  alt="home" />
                   <span>ORIGINALS</span>
               </a>
               <a href="">
                   <img src="images/movie-icon.svg"  alt="home" />
                   <span>MOVIES</span>
               </a>
               <a href="">
                   <img src="images/series-icon.svg"  alt="home" />
                   <span>SERIES</span>
               </a>

                
            </NavMenu>
            <SignOut>
                <UserImg src={userPhoto} alt={username}/>
                <DropDown>
                    <span onClick={handleAuth}>Sign Out</span>
                </DropDown>
            </SignOut>
            </>
                )}
        </NavigationBar>
    );
}

const DropDown = styled.div`
    position: absolute;
    top:55px;
    right: 0px;
    background: rgb(19,19,19);
    border: 1px solid rgba(151,151,151,0.34);
    border: 4px;
   
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    opacity: 0;
`;
const SignOut = styled.div`
    cursor: pointer;
    height: 40px;
    width: 40px;
    &:hover{
        ${DropDown}{
            opacity: 1;
            transition-duration: 1s;
        }
    }
`;

const UserImg = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    margin-top: -20px;
   
`;

const NavigationBar = styled.nav`
    top:0;
    left: 0;
    height: 60px;
    right: 0;
    position: fixed;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    padding: 30px 30px;
    letter-spacing: 12px;
    z-index: 3;
    
`;

const Logo = styled.a`
    margin-top :-20px ;
    width: 80px;;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
   
    margin-top: 12px;
    @media (max-width : 768px){
        display: none;
    }

    a {
        display: flex;
        align-items: center;
        
       img{
           margin-left: 12px;
           min-width: 23px;

       }
       span {
           color:rgb(249,249,249);
           font-size: 13px;
           letter-spacing: 1.42px;
           white-space: nowrap;
           padding:2px 0px;
           position: relative;

           &:before {
           
                background-color: rgb(249,249,249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform:scale(0);
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94);
                visibility: hidden;
                width: auto;
            }
            
       
       
       }
       &:hover{
                span:before{
                    transform: scaleX(1);
                    visibility: visible;
                    opacity: 1 !important;
                }
             }
       
    }
    
`;

const Login = styled.a`
    background-color: rgb(0,0,0,0.5);
    margin-top: -10px;
    text-align: center;
    padding-top: 10px;
    width: 90px;
    height: 40px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    &:hover{
        margin-top: -10px;
        padding: 10px 10px;
        background-color: #f9f9f9;
        color: black;
        cursor: pointer;
    }
`;

export default Header;